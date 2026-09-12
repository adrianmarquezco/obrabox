"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Plus, Wallet, Search, X } from "lucide-react";

type Gasto = {
  id: string;
  concepto: string;
  categoria: string | null;
  importe: number;
  fecha: string;
  foto_ticket_url: string | null;
  notas: string | null;
  obra_id: string | null;
  proveedor_id: string | null;
  obras?: { nombre: string } | null;
  proveedores?: { nombre: string } | null;
};

const categoriaLabels: Record<string, string> = {
  material: "Material", mano_de_obra: "Mano de obra", subcontrata: "Subcontrata",
  transporte: "Transporte", herramientas: "Herramientas", alquiler: "Alquiler",
  combustible: "Combustible", otro: "Otro",
};

const PAGE_SIZE = 25;

export default function GastosPage() {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroObra, setFiltroObra] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [totalMes, setTotalMes] = useState(0);
  const [showNew, setShowNew] = useState(false);
  const [obras, setObras] = useState<{ id: string; nombre: string }[]>([]);
  const [proveedores, setProveedores] = useState<{ id: string; nombre: string }[]>([]);
  const [form, setForm] = useState({
    concepto: "", categoria: "material", importe: "", obra_id: "", proveedor_id: "",
    fecha: new Date().toISOString().split("T")[0], notas: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    Promise.all([
      supabase.from("obras").select("id, nombre").is("deleted_at", null).order("nombre"),
      supabase.from("proveedores").select("id, nombre").is("deleted_at", null).order("nombre"),
    ]).then(([obrasRes, provRes]) => {
      setObras(obrasRes.data || []);
      setProveedores(provRes.data || []);
    });
    // Resumen mes actual
    const now = new Date();
    const inicio = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
    supabase.from("gastos").select("importe").gte("fecha", inicio)
      .then(({ data }) => {
        setTotalMes((data || []).reduce((s, g) => s + Number(g.importe), 0));
      });
  }, []);

  const load = useCallback(async (p: number, q: string, obraId: string, cat: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("gastos")
      .select("*, obras(nombre), proveedores(nombre)")
      .order("fecha", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);

    if (q) query = query.ilike("concepto", `%${q}%`);
    if (obraId) query = query.eq("obra_id", obraId);
    if (cat) query = query.eq("categoria", cat);

    const { data } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setGastos((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    load(0, search, filtroObra, filtroCategoria, true);
  }, [search, filtroObra, filtroCategoria]);

  function loadMore() {
    const next = page + 1;
    setPage(next);
    load(next, search, filtroObra, filtroCategoria);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;

    const { data } = await supabase.from("gastos").insert({
      empresa_id: usr.empresa_id,
      concepto: form.concepto, categoria: form.categoria || null,
      importe: parseFloat(form.importe),
      obra_id: form.obra_id || null, proveedor_id: form.proveedor_id || null,
      fecha: form.fecha, notas: form.notas || null,
    }).select("*, obras(nombre), proveedores(nombre)").single();

    if (data) {
      setGastos((prev) => [data, ...prev]);
      const now = new Date();
      const d = new Date(form.fecha);
      if (d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()) {
        setTotalMes((t) => t + parseFloat(form.importe));
      }
    }
    setForm({ concepto: "", categoria: "material", importe: "", obra_id: "", proveedor_id: "", fecha: new Date().toISOString().split("T")[0], notas: "" });
    setShowNew(false);
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Gastos</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo gasto
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/gastos" className="badge-info">Gastos</Link>
        <Link href="/dashboard/gastos/proveedores" className="badge-neutral">Proveedores</Link>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Gastos este mes</p>
          <p className="text-xl font-bold text-red-500">{totalMes.toLocaleString("es-ES")}€</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Registros cargados</p>
          <p className="text-xl font-bold text-secondary">{gastos.length}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-36">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar gasto..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="input !pl-10 !py-2.5 !text-sm w-full" />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <select value={filtroObra} onChange={(e) => setFiltroObra(e.target.value)}
          className="input !py-2.5 !text-sm w-44">
          <option value="">Todas las obras</option>
          {obras.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
        </select>
        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}
          className="input !py-2.5 !text-sm w-40">
          <option value="">Todas las categorías</option>
          {Object.entries(categoriaLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-secondary">Nuevo gasto</h2>
            <div>
              <label className="label">Concepto *</label>
              <input type="text" value={form.concepto} onChange={(e) => setForm({ ...form, concepto: e.target.value })} className="input" placeholder="Azulejos baño" required autoFocus />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Importe (€) *</label>
                <input type="number" step="0.01" value={form.importe} onChange={(e) => setForm({ ...form, importe: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="label">Fecha</label>
                <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} className="input" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Categoría</label>
                <select value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} className="input">
                  {Object.entries(categoriaLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Obra</label>
                <select value={form.obra_id} onChange={(e) => setForm({ ...form, obra_id: e.target.value })} className="input">
                  <option value="">General empresa</option>
                  {obras.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="label">Proveedor</label>
              <select value={form.proveedor_id} onChange={(e) => setForm({ ...form, proveedor_id: e.target.value })} className="input">
                <option value="">Sin proveedor</option>
                {proveedores.map((p) => <option key={p.id} value={p.id}>{p.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Notas</label>
              <textarea value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} className="input min-h-[60px] resize-y" />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Guardando..." : "Registrar gasto"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando gastos...</p></div>
      ) : gastos.length === 0 ? (
        <div className="card p-8 text-center">
          <Wallet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin gastos registrados</h2>
          <p className="text-sm text-gray-500">Registra tu primer gasto con foto del ticket</p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {gastos.map((g) => (
              <div key={g.id} className="card p-4 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-medium text-secondary text-sm truncate">{g.concepto}</p>
                    {g.categoria && <span className="badge-neutral text-xs">{categoriaLabels[g.categoria] || g.categoria}</span>}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{new Date(g.fecha).toLocaleDateString("es-ES")}</span>
                    {g.obras && <span>{(g.obras as any).nombre}</span>}
                    {g.proveedores && <span>{(g.proveedores as any).nombre}</span>}
                  </div>
                </div>
                <p className="font-semibold text-red-500 ml-4">-{Number(g.importe).toLocaleString("es-ES")}€</p>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="text-center mt-6">
              <button onClick={loadMore} className="btn-secondary !text-sm">Cargar más gastos</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
