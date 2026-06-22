"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Plus, Wallet, Search, Camera, Receipt } from "lucide-react";

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
  material: "Material",
  mano_de_obra: "Mano de obra",
  subcontrata: "Subcontrata",
  transporte: "Transporte",
  herramientas: "Herramientas",
  alquiler: "Alquiler",
  combustible: "Combustible",
  otro: "Otro",
};

export default function GastosPage() {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [obras, setObras] = useState<{ id: string; nombre: string }[]>([]);
  const [proveedores, setProveedores] = useState<{ id: string; nombre: string }[]>([]);
  const [form, setForm] = useState({ concepto: "", categoria: "material", importe: "", obra_id: "", proveedor_id: "", fecha: new Date().toISOString().split("T")[0], notas: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [gastosRes, obrasRes, provRes] = await Promise.all([
      supabase.from("gastos").select("*, obras(nombre), proveedores(nombre)").order("fecha", { ascending: false }),
      supabase.from("obras").select("id, nombre").is("deleted_at", null).order("nombre"),
      supabase.from("proveedores").select("id, nombre").is("deleted_at", null).order("nombre"),
    ]);
    setGastos(gastosRes.data || []);
    setObras(obrasRes.data || []);
    setProveedores(provRes.data || []);
    setLoading(false);
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
      concepto: form.concepto,
      categoria: form.categoria || null,
      importe: parseFloat(form.importe),
      obra_id: form.obra_id || null,
      proveedor_id: form.proveedor_id || null,
      fecha: form.fecha,
      notas: form.notas || null,
    }).select("*, obras(nombre), proveedores(nombre)").single();

    if (data) setGastos((prev) => [data, ...prev]);
    setForm({ concepto: "", categoria: "material", importe: "", obra_id: "", proveedor_id: "", fecha: new Date().toISOString().split("T")[0], notas: "" });
    setShowNew(false);
    setSaving(false);
  }

  const totalMes = gastos
    .filter((g) => {
      const d = new Date(g.fecha);
      const now = new Date();
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    })
    .reduce((sum, g) => sum + Number(g.importe), 0);

  const filtered = gastos.filter((g) =>
    !search || g.concepto.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* Resumen */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Gastos este mes</p>
          <p className="text-xl font-bold text-red-500">{totalMes.toLocaleString("es-ES")}€</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Total registros</p>
          <p className="text-xl font-bold text-secondary">{gastos.length}</p>
        </div>
      </div>

      <div className="relative mb-4">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Buscar gasto..." value={search} onChange={(e) => setSearch(e.target.value)} className="input !pl-10 !py-2.5 !text-sm" />
      </div>

      {/* Modal nuevo gasto */}
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
                  {Object.entries(categoriaLabels).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
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

      {/* Lista */}
      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando gastos...</p></div>
      ) : filtered.length === 0 ? (
        <div className="card p-8 text-center">
          <Wallet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin gastos registrados</h2>
          <p className="text-sm text-gray-500">Registra tu primer gasto con foto del ticket</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((g) => (
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
      )}
    </div>
  );
}
