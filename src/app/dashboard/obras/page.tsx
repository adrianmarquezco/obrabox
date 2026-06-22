"use client";

import Link from "next/link";
import { Plus, Building2, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Obra } from "@/lib/supabase/types";

const estadoLabels: Record<string, { label: string; class: string }> = {
  pendiente: { label: "Pendiente", class: "badge-warning" },
  en_curso: { label: "En curso", class: "badge-info" },
  pausada: { label: "Pausada", class: "badge-neutral" },
  finalizada: { label: "Finalizada", class: "badge-success" },
  cancelada: { label: "Cancelada", class: "badge-danger" },
};

export default function ObrasPage() {
  const [obras, setObras] = useState<Obra[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  useEffect(() => {
    loadObras();
  }, []);

  async function loadObras() {
    const supabase = createClient();
    const { data } = await supabase
      .from("obras")
      .select("*, clientes(nombre)")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });
    setObras(data || []);
    setLoading(false);
  }

  const filtered = obras.filter((o) => {
    const matchSearch =
      !search ||
      o.nombre.toLowerCase().includes(search.toLowerCase()) ||
      (o.direccion && o.direccion.toLowerCase().includes(search.toLowerCase()));
    const matchEstado = !filtroEstado || o.estado === filtroEstado;
    return matchSearch && matchEstado;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Obras</h1>
        <Link href="/dashboard/obras/nueva" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva obra
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar por nombre o dirección..." value={search} onChange={(e) => setSearch(e.target.value)} className="input !pl-10 !py-2.5 !text-sm" />
        </div>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className="input !py-2.5 !text-sm sm:w-48">
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="en_curso">En curso</option>
          <option value="pausada">Pausada</option>
          <option value="finalizada">Finalizada</option>
          <option value="cancelada">Cancelada</option>
        </select>
      </div>

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando obras...</p></div>
      ) : filtered.length === 0 ? (
        <div className="card p-8 text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">
            {obras.length === 0 ? "Aún no tienes obras" : "No se encontraron resultados"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {obras.length === 0 ? "Crea tu primera obra para empezar a gestionar" : "Prueba con otros filtros"}
          </p>
          {obras.length === 0 && (
            <Link href="/dashboard/obras/nueva" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-4 h-4" /> Crear primera obra
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((o) => {
            const est = estadoLabels[o.estado] || { label: o.estado, class: "badge-neutral" };
            return (
              <Link key={o.id} href={`/dashboard/obras/${o.id}`} className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-secondary truncate">{o.nombre}</h3>
                    <span className={est.class}>{est.label}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {o.clientes && <span>{(o.clientes as any).nombre}</span>}
                    {o.direccion && <span className="truncate">{o.direccion}</span>}
                  </div>
                </div>
                {o.presupuesto_aprobado && (
                  <div className="text-right ml-4">
                    <p className="font-semibold text-secondary">
                      {Number(o.presupuesto_aprobado).toLocaleString("es-ES")}€
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
