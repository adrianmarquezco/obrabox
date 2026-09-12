"use client";

import Link from "next/link";
import { Plus, Building2, Search, X } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Obra } from "@/lib/supabase/types";

const estadoLabels: Record<string, { label: string; class: string }> = {
  pendiente: { label: "Pendiente", class: "badge-warning" },
  en_curso: { label: "En curso", class: "badge-info" },
  pausada: { label: "Pausada", class: "badge-neutral" },
  finalizada: { label: "Finalizada", class: "badge-success" },
  cancelada: { label: "Cancelada", class: "badge-danger" },
};

const PAGE_SIZE = 25;

export default function ObrasPage() {
  const [obras, setObras] = useState<Obra[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = useCallback(async (p: number, q: string, estado: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("obras").select("*, clientes(nombre)", { count: "exact" })
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);

    if (q) query = query.or(`nombre.ilike.%${q}%,direccion.ilike.%${q}%`);
    if (estado) query = query.eq("estado", estado);

    const { data, count } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setTotal(count || 0);
    setObras((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => load(0, search, filtroEstado, true), 300);
  }, [search, filtroEstado]);

  function loadMore() {
    const next = page + 1;
    setPage(next);
    load(next, search, filtroEstado);
  }

  const hasFilters = search || filtroEstado;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Obras</h1>
          {!loading && <p className="text-xs text-gray-400 mt-0.5">{total} obra{total !== 1 ? "s" : ""}</p>}
        </div>
        <Link href="/dashboard/obras/nueva" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva obra
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar por nombre o dirección..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="input !pl-10 !py-2.5 !text-sm" />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}
          className="input !py-2.5 !text-sm sm:w-48">
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
      ) : obras.length === 0 ? (
        <div className="card p-8 text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">
            {hasFilters ? "No se encontraron resultados" : "Aún no tienes obras"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {hasFilters ? "Prueba con otros filtros" : "Crea tu primera obra para empezar a gestionar"}
          </p>
          {!hasFilters && (
            <Link href="/dashboard/obras/nueva" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-4 h-4" /> Crear primera obra
            </Link>
          )}
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {obras.map((o) => {
              const est = estadoLabels[o.estado] || { label: o.estado, class: "badge-neutral" };
              return (
                <Link key={o.id} href={`/dashboard/obras/${o.id}`}
                  className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow">
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
          {hasMore && (
            <div className="text-center mt-6">
              <button onClick={loadMore} className="btn-secondary !text-sm">Cargar más obras</button>
            </div>
          )}
          {!hasMore && obras.length > 0 && (
            <p className="text-xs text-gray-400 text-center mt-4">{obras.length} de {total} obras</p>
          )}
        </>
      )}
    </div>
  );
}
