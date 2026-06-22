"use client";

import Link from "next/link";
import { Plus, FileText, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Presupuesto } from "@/lib/supabase/types";

const estadoLabels: Record<string, { label: string; class: string }> = {
  borrador: { label: "Borrador", class: "badge-neutral" },
  enviado: { label: "Enviado", class: "badge-info" },
  aceptado: { label: "Aceptado", class: "badge-success" },
  rechazado: { label: "Rechazado", class: "badge-danger" },
  expirado: { label: "Expirado", class: "badge-warning" },
};

export default function PresupuestosPage() {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  useEffect(() => {
    loadPresupuestos();
  }, []);

  async function loadPresupuestos() {
    const supabase = createClient();
    const { data } = await supabase
      .from("presupuestos")
      .select("*, clientes(nombre)")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });
    setPresupuestos(data || []);
    setLoading(false);
  }

  const filtered = presupuestos.filter((p) => {
    const matchSearch =
      !search ||
      (p.numero && p.numero.toLowerCase().includes(search.toLowerCase())) ||
      (p.clientes && (p.clientes as { nombre: string }).nombre.toLowerCase().includes(search.toLowerCase()));
    const matchEstado = !filtroEstado || p.estado === filtroEstado;
    return matchSearch && matchEstado;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Presupuestos</h1>
        <Link href="/dashboard/presupuestos/nuevo" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo presupuesto
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar por número o cliente..." value={search} onChange={(e) => setSearch(e.target.value)} className="input !pl-10 !py-2.5 !text-sm" />
        </div>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className="input !py-2.5 !text-sm sm:w-48">
          <option value="">Todos los estados</option>
          <option value="borrador">Borrador</option>
          <option value="enviado">Enviado</option>
          <option value="aceptado">Aceptado</option>
          <option value="rechazado">Rechazado</option>
          <option value="expirado">Expirado</option>
        </select>
      </div>

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando presupuestos...</p></div>
      ) : filtered.length === 0 ? (
        <div className="card p-8 text-center">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">
            {presupuestos.length === 0 ? "Sin presupuestos todavía" : "No se encontraron resultados"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {presupuestos.length === 0 ? "Crea tu primer presupuesto profesional" : "Prueba con otros filtros"}
          </p>
          {presupuestos.length === 0 && (
            <Link href="/dashboard/presupuestos/nuevo" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-4 h-4" /> Crear presupuesto
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((p) => {
            const est = estadoLabels[p.estado] || { label: p.estado, class: "badge-neutral" };
            const diasDesdeEnvio = p.fecha_envio
              ? Math.floor((Date.now() - new Date(p.fecha_envio).getTime()) / (1000 * 60 * 60 * 24))
              : null;
            return (
              <Link key={p.id} href={`/dashboard/presupuestos/${p.id}`} className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-secondary">{p.numero || "Sin número"}</h3>
                    <span className={est.class}>{est.label}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {p.clientes && <span>{(p.clientes as { nombre: string }).nombre}</span>}
                    {p.tipo_reforma && <span>{p.tipo_reforma}</span>}
                    {diasDesdeEnvio !== null && (
                      <span>Enviado hace {diasDesdeEnvio} días</span>
                    )}
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-secondary">
                    {Number(p.total).toLocaleString("es-ES")}€
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
