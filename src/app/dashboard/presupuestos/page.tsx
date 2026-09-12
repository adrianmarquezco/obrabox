"use client";

import Link from "next/link";
import { Plus, FileText, Search, X } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Presupuesto } from "@/lib/supabase/types";

const estadoLabels: Record<string, { label: string; class: string }> = {
  borrador: { label: "Borrador", class: "badge-neutral" },
  enviado: { label: "Enviado", class: "badge-info" },
  aceptado: { label: "Aceptado", class: "badge-success" },
  rechazado: { label: "Rechazado", class: "badge-danger" },
  expirado: { label: "Expirado", class: "badge-warning" },
};

const PAGE_SIZE = 25;

export default function PresupuestosPage() {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [clientes, setClientes] = useState<{ id: string; nombre: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroCliente, setFiltroCliente] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.from("clientes").select("id, nombre").is("deleted_at", null).order("nombre")
      .then(({ data }) => setClientes(data || []));
  }, []);

  const load = useCallback(async (p: number, q: string, estado: string, clienteId: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("presupuestos").select("*, clientes(nombre)", { count: "exact" })
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);

    if (q) query = query.ilike("numero", `%${q}%`);
    if (estado) query = query.eq("estado", estado);
    if (clienteId) query = query.eq("cliente_id", clienteId);

    const { data, count } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setTotal(count || 0);
    setPresupuestos((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => load(0, search, filtroEstado, filtroCliente, true), 300);
  }, [search, filtroEstado, filtroCliente]);

  function loadMore() {
    const next = page + 1;
    setPage(next);
    load(next, search, filtroEstado, filtroCliente);
  }

  const hasFilters = search || filtroEstado || filtroCliente;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Presupuestos</h1>
          {!loading && <p className="text-xs text-gray-400 mt-0.5">{total} presupuesto{total !== 1 ? "s" : ""}</p>}
        </div>
        <Link href="/dashboard/presupuestos/nuevo" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo presupuesto
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-48">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar por número..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="input !pl-10 !py-2.5 !text-sm w-full" />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <select value={filtroCliente} onChange={(e) => setFiltroCliente(e.target.value)}
          className="input !py-2.5 !text-sm w-48">
          <option value="">Todos los clientes</option>
          {clientes.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
        </select>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}
          className="input !py-2.5 !text-sm w-48">
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
      ) : presupuestos.length === 0 ? (
        <div className="card p-8 text-center">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">
            {hasFilters ? "No se encontraron resultados" : "Sin presupuestos todavía"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {hasFilters ? "Prueba con otros filtros" : "Crea tu primer presupuesto profesional"}
          </p>
          {!hasFilters && (
            <Link href="/dashboard/presupuestos/nuevo" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-4 h-4" /> Crear presupuesto
            </Link>
          )}
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {presupuestos.map((p) => {
              const est = estadoLabels[p.estado] || { label: p.estado, class: "badge-neutral" };
              const diasDesdeEnvio = p.fecha_envio
                ? Math.floor((Date.now() - new Date(p.fecha_envio).getTime()) / (1000 * 60 * 60 * 24))
                : null;
              return (
                <Link key={p.id} href={`/dashboard/presupuestos/${p.id}`}
                  className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-secondary">{p.numero || "Sin número"}</h3>
                      <span className={est.class}>{est.label}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {p.clientes && <span>{(p.clientes as { nombre: string }).nombre}</span>}
                      {p.tipo_reforma && <span>{p.tipo_reforma}</span>}
                      {diasDesdeEnvio !== null && <span>Enviado hace {diasDesdeEnvio} días</span>}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-secondary">{Number(p.total).toLocaleString("es-ES")}€</p>
                  </div>
                </Link>
              );
            })}
          </div>
          {hasMore && (
            <div className="text-center mt-6">
              <button onClick={loadMore} className="btn-secondary !text-sm">Cargar más presupuestos</button>
            </div>
          )}
          {!hasMore && presupuestos.length > 0 && (
            <p className="text-xs text-gray-400 text-center mt-4">{presupuestos.length} de {total} presupuestos</p>
          )}
        </>
      )}
    </div>
  );
}
