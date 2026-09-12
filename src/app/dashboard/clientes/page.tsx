"use client";

import Link from "next/link";
import { Plus, Users, Search, Phone, Mail, Star, X } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Cliente } from "@/lib/supabase/types";

const tipoLabels: Record<string, string> = {
  particular: "Particular", empresa: "Empresa",
  comunidad: "Comunidad", aseguradora: "Aseguradora",
};

const PAGE_SIZE = 25;

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = useCallback(async (p: number, q: string, tipo: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("clientes").select("*", { count: "exact" })
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);

    if (q) query = query.or(`nombre.ilike.%${q}%,email.ilike.%${q}%,telefono.ilike.%${q}%`);
    if (tipo) query = query.eq("tipo", tipo);

    const { data, count } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setTotal(count || 0);
    setClientes((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => load(0, search, filtroTipo, true), 300);
  }, [search, filtroTipo]);

  function loadMore() {
    const next = page + 1;
    setPage(next);
    load(next, search, filtroTipo);
  }

  const hasFilters = search || filtroTipo;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Clientes</h1>
          {!loading && <p className="text-xs text-gray-400 mt-0.5">{total} cliente{total !== 1 ? "s" : ""}</p>}
        </div>
        <Link href="/dashboard/clientes/nuevo" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo cliente
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar por nombre, email o teléfono..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="input !pl-10 !py-2.5 !text-sm" />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}
          className="input !py-2.5 !text-sm sm:w-48">
          <option value="">Todos los tipos</option>
          <option value="particular">Particular</option>
          <option value="empresa">Empresa</option>
          <option value="comunidad">Comunidad</option>
          <option value="aseguradora">Aseguradora</option>
        </select>
      </div>

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando clientes...</p></div>
      ) : clientes.length === 0 ? (
        <div className="card p-8 text-center">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">
            {hasFilters ? "No se encontraron resultados" : "Sin clientes registrados"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {hasFilters ? "Prueba con otros términos de búsqueda" : "Añade tu primer cliente para empezar"}
          </p>
          {!hasFilters && (
            <Link href="/dashboard/clientes/nuevo" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-4 h-4" /> Añadir cliente
            </Link>
          )}
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientes.map((c) => (
              <Link key={c.id} href={`/dashboard/clientes/${c.id}`} className="card p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-secondary">{c.nombre}</h3>
                    <span className="badge-neutral text-xs mt-1">{tipoLabels[c.tipo] || c.tipo}</span>
                  </div>
                  {c.valoracion && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-primary-400 text-primary-400" />
                      <span className="text-xs text-gray-500">{c.valoracion}</span>
                    </div>
                  )}
                </div>
                {c.telefono && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Phone className="w-3.5 h-3.5" /> {c.telefono}
                  </div>
                )}
                {c.email && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Mail className="w-3.5 h-3.5" /> {c.email}
                  </div>
                )}
              </Link>
            ))}
          </div>
          {hasMore && (
            <div className="text-center mt-6">
              <button onClick={loadMore} className="btn-secondary !text-sm">
                Cargar más clientes
              </button>
            </div>
          )}
          {!hasMore && clientes.length > 0 && (
            <p className="text-xs text-gray-400 text-center mt-4">{clientes.length} de {total} clientes</p>
          )}
        </>
      )}
    </div>
  );
}
