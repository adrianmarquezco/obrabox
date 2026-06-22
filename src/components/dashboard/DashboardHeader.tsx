"use client";

import Link from "next/link";
import { Bell, Search, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

type SearchResult = { id: string; tipo: string; nombre: string; extra?: string };

export default function DashboardHeader() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (query.length < 2) { setResults([]); return; }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(query), 300);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query]);

  async function search(q: string) {
    const supabase = createClient();
    const term = `%${q}%`;
    const [obras, clientes, presupuestos] = await Promise.all([
      supabase.from("obras").select("id, nombre").ilike("nombre", term).is("deleted_at", null).limit(5),
      supabase.from("clientes").select("id, nombre, telefono").ilike("nombre", term).is("deleted_at", null).limit(5),
      supabase.from("presupuestos").select("id, numero, tipo_reforma").ilike("numero", term).is("deleted_at", null).limit(5),
    ]);
    const r: SearchResult[] = [];
    (obras.data || []).forEach((o: { id: string; nombre: string }) => r.push({ id: o.id, tipo: "obra", nombre: o.nombre }));
    (clientes.data || []).forEach((c: { id: string; nombre: string; telefono: string | null }) => r.push({ id: c.id, tipo: "cliente", nombre: c.nombre, extra: c.telefono || undefined }));
    (presupuestos.data || []).forEach((p: { id: string; numero: string | null; tipo_reforma: string | null }) => r.push({ id: p.id, tipo: "presupuesto", nombre: p.numero || "Sin número", extra: p.tipo_reforma || undefined }));
    setResults(r);
    setShowResults(true);
  }

  const tipoLinks: Record<string, string> = {
    obra: "/dashboard/obras/",
    cliente: "/dashboard/clientes/",
    presupuesto: "/dashboard/presupuestos/",
  };

  const tipoLabels: Record<string, string> = {
    obra: "Obra",
    cliente: "Cliente",
    presupuesto: "Presupuesto",
  };

  function handleSelect() {
    setQuery("");
    setShowResults(false);
    setMobileSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 lg:px-6">
        <div className="lg:hidden flex items-center gap-2">
          <div className="w-7 h-7 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">OB</span>
          </div>
          <span className="text-lg font-bold text-secondary">
            Obra<span className="text-primary-500">Box</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md relative">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar obras, clientes, presupuestos..."
              className="input !py-2 !pl-10 !text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => results.length > 0 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
          </div>
          {showResults && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-border shadow-lg py-2 z-50 max-h-80 overflow-y-auto">
              {results.map((r) => (
                <Link
                  key={`${r.tipo}-${r.id}`}
                  href={`${tipoLinks[r.tipo]}${r.id}`}
                  className="block px-4 py-2.5 hover:bg-surface transition-colors"
                  onClick={handleSelect}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary">{r.nombre}</span>
                    <span className="text-xs text-gray-400 bg-surface px-2 py-0.5 rounded">{tipoLabels[r.tipo]}</span>
                  </div>
                  {r.extra && <p className="text-xs text-gray-400">{r.extra}</p>}
                </Link>
              ))}
            </div>
          )}
          {showResults && query.length >= 2 && results.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-border shadow-lg py-4 z-50 text-center">
              <p className="text-sm text-gray-400">Sin resultados para &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface text-gray-500"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>
          <Link href="/dashboard/notificaciones" className="relative p-2 rounded-lg hover:bg-surface text-gray-500">
            <Bell className="w-5 h-5" />
          </Link>
          <Link href="/dashboard/configuracion" className="p-2 rounded-lg hover:bg-surface text-gray-500">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="lg:hidden px-4 pb-3 relative">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="input !py-2 !pl-10 !text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          {results.length > 0 && (
            <div className="mt-1 bg-white rounded-xl border border-border shadow-lg py-2 max-h-60 overflow-y-auto">
              {results.map((r) => (
                <Link
                  key={`${r.tipo}-${r.id}`}
                  href={`${tipoLinks[r.tipo]}${r.id}`}
                  className="block px-4 py-2.5 hover:bg-surface"
                  onClick={handleSelect}
                >
                  <span className="text-sm font-medium text-secondary">{r.nombre}</span>
                  <span className="text-xs text-gray-400 ml-2">{tipoLabels[r.tipo]}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
