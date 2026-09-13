"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Search, X, MessageSquare } from "lucide-react";

type Lead = {
  id: string;
  tipo: string | null;
  nombre: string;
  email: string;
  telefono: string | null;
  empresa: string | null;
  empleados: string | null;
  mensaje: string | null;
  created_at: string;
};

const PAGE_SIZE = 25;

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [expanded, setExpanded] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const load = useCallback(async (p: number, q: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("contacto_leads")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);
    if (q) query = query.or(`nombre.ilike.%${q}%,email.ilike.%${q}%,empresa.ilike.%${q}%`);
    const { data, count } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setTotal(count || 0);
    setLeads((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => load(0, search, true), 300);
  }, [search, load]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Leads</h1>
          <p className="text-sm text-gray-500 mt-0.5">{total} lead{total !== 1 ? "s" : ""} registrados</p>
        </div>
      </div>

      <div className="relative mb-4">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input type="text" placeholder="Buscar por nombre, email o empresa..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500" />
        {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2"><X className="w-3.5 h-3.5 text-gray-500" /></button>}
      </div>

      {loading ? (
        <div className="text-center text-gray-600 py-8">Cargando...</div>
      ) : leads.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="w-12 h-12 text-gray-700 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Sin leads todavía</p>
        </div>
      ) : (
        <div className="space-y-2">
          {leads.map((l) => (
            <div key={l.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === l.id ? null : l.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium text-gray-200 text-sm">{l.nombre}</p>
                    <p className="text-xs text-gray-500">{l.email}{l.empresa ? ` · ${l.empresa}` : ""}</p>
                  </div>
                  {l.empleados && (
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">{l.empleados} empleados</span>
                  )}
                  {l.tipo && (
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">{l.tipo}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-gray-500">{new Date(l.created_at).toLocaleDateString("es-ES")}</span>
                  <div className="flex gap-2">
                    {l.telefono && (
                      <a href={`tel:${l.telefono}`} onClick={(e) => e.stopPropagation()}
                        className="text-xs text-green-400 hover:text-green-300 border border-gray-700 px-2 py-1 rounded transition-colors">
                        Llamar
                      </a>
                    )}
                    <a href={`mailto:${l.email}`} onClick={(e) => e.stopPropagation()}
                      className="text-xs text-orange-400 hover:text-orange-300 border border-gray-700 px-2 py-1 rounded transition-colors">
                      Email
                    </a>
                  </div>
                </div>
              </button>
              {expanded === l.id && l.mensaje && (
                <div className="px-4 pb-4 border-t border-gray-800 pt-3">
                  <p className="text-xs text-gray-500 mb-1">Mensaje</p>
                  <p className="text-sm text-gray-300 whitespace-pre-wrap">{l.mensaje}</p>
                  {l.telefono && (
                    <p className="text-xs text-gray-500 mt-2">Tel: {l.telefono}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="text-center mt-4">
          <button onClick={() => { const next = page + 1; setPage(next); load(next, search); }}
            className="text-sm text-orange-400 hover:text-orange-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
}
