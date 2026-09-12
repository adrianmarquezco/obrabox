"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Receipt, Search, X } from "lucide-react";

type Factura = {
  id: string;
  numero: string;
  fecha: string;
  concepto: string | null;
  base_imponible: number;
  iva_porcentaje: number;
  total: number;
  estado: string;
  metodo_pago: string | null;
  fecha_pago: string | null;
  clientes?: { nombre: string } | null;
  obras?: { nombre: string } | null;
};

type Resumen = { total_facturado: number; total_cobrado: number; total_pendiente: number };

const estadoLabels: Record<string, { label: string; class: string }> = {
  pendiente: { label: "Pendiente", class: "badge-warning" },
  pagada: { label: "Pagada", class: "badge-success" },
  vencida: { label: "Vencida", class: "badge-danger" },
  parcial: { label: "Parcial", class: "badge-info" },
};

const PAGE_SIZE = 25;

export default function FacturacionPage() {
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [resumen, setResumen] = useState<Resumen>({ total_facturado: 0, total_cobrado: 0, total_pendiente: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroCliente, setFiltroCliente] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [clientes, setClientes] = useState<{ id: string; nombre: string }[]>([]);
  const [obras, setObras] = useState<{ id: string; nombre: string }[]>([]);
  const [form, setForm] = useState({
    cliente_id: "", obra_id: "", concepto: "", base_imponible: "", iva_porcentaje: "21", tipo: "normal",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    Promise.all([
      supabase.from("clientes").select("id, nombre").is("deleted_at", null).order("nombre"),
      supabase.from("obras").select("id, nombre").is("deleted_at", null).order("nombre"),
    ]).then(([cliRes, obraRes]) => {
      setClientes(cliRes.data || []);
      setObras(obraRes.data || []);
    });
    loadResumen();
  }, []);

  async function loadResumen() {
    const supabase = createClient();
    const { data } = await supabase.from("facturas_emitidas")
      .select("total, estado").is("deleted_at", null);
    const rows = data || [];
    const cobrado = rows.filter((f) => f.estado === "pagada").reduce((s, f) => s + Number(f.total), 0);
    const pendiente = rows.filter((f) => f.estado === "pendiente" || f.estado === "vencida").reduce((s, f) => s + Number(f.total), 0);
    setResumen({ total_facturado: cobrado + pendiente, total_cobrado: cobrado, total_pendiente: pendiente });
  }

  const load = useCallback(async (p: number, q: string, estado: string, clienteId: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("facturas_emitidas")
      .select("*, clientes(nombre), obras(nombre)")
      .is("deleted_at", null)
      .order("fecha", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);

    if (q) query = query.ilike("numero", `%${q}%`);
    if (estado) query = query.eq("estado", estado);
    if (clienteId) query = query.eq("cliente_id", clienteId);

    const { data } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setFacturas((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    load(0, search, filtroEstado, filtroCliente, true);
  }, [search, filtroEstado, filtroCliente]);

  function loadMore() {
    const next = page + 1;
    setPage(next);
    load(next, search, filtroEstado, filtroCliente);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;
    const { data: emp } = await supabase.from("empresas")
      .select("numeracion_factura_prefijo, numeracion_factura_contador").eq("id", usr.empresa_id).single();
    const contador = (emp?.numeracion_factura_contador || 0) + 1;
    const numero = `${emp?.numeracion_factura_prefijo || "F"}-${new Date().getFullYear()}-${String(contador).padStart(3, "0")}`;
    const base = parseFloat(form.base_imponible) || 0;
    const ivaPct = parseFloat(form.iva_porcentaje);
    const ivaImporte = base * (ivaPct / 100);
    const total = base + ivaImporte;

    const { data } = await supabase.from("facturas_emitidas").insert({
      empresa_id: usr.empresa_id,
      cliente_id: form.cliente_id || null,
      obra_id: form.obra_id || null,
      numero, fecha: new Date().toISOString().split("T")[0],
      tipo: form.tipo, concepto: form.concepto || null,
      base_imponible: base, iva_porcentaje: ivaPct, iva_importe: ivaImporte, total, estado: "pendiente",
    }).select("*, clientes(nombre), obras(nombre)").single();

    await supabase.from("empresas").update({ numeracion_factura_contador: contador }).eq("id", usr.empresa_id);
    if (data) {
      setFacturas((prev) => [data, ...prev]);
      setResumen((r) => ({ ...r, total_facturado: r.total_facturado + total, total_pendiente: r.total_pendiente + total }));
    }
    setForm({ cliente_id: "", obra_id: "", concepto: "", base_imponible: "", iva_porcentaje: "21", tipo: "normal" });
    setShowNew(false);
    setSaving(false);
  }

  async function marcarPagada(id: string, total: number) {
    const supabase = createClient();
    await supabase.from("facturas_emitidas").update({
      estado: "pagada", fecha_pago: new Date().toISOString().split("T")[0],
    }).eq("id", id);
    setFacturas((prev) => prev.map((f) => f.id === id ? { ...f, estado: "pagada" } : f));
    setResumen((r) => ({ ...r, total_cobrado: r.total_cobrado + total, total_pendiente: r.total_pendiente - total }));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Facturación</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva factura
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Total facturado</p>
          <p className="text-xl font-bold text-secondary">{resumen.total_facturado.toLocaleString("es-ES")}€</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Cobrado</p>
          <p className="text-xl font-bold text-green-500">{resumen.total_cobrado.toLocaleString("es-ES")}€</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Pendiente</p>
          <p className="text-xl font-bold text-red-500">{resumen.total_pendiente.toLocaleString("es-ES")}€</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-36">
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
          className="input !py-2.5 !text-sm w-44">
          <option value="">Todos los clientes</option>
          {clientes.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
        </select>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}
          className="input !py-2.5 !text-sm w-40">
          <option value="">Todos</option>
          <option value="pendiente">Pendiente</option>
          <option value="pagada">Pagada</option>
          <option value="vencida">Vencida</option>
          <option value="parcial">Parcial</option>
        </select>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-secondary">Nueva factura</h2>
            <div>
              <label className="label">Cliente</label>
              <select value={form.cliente_id} onChange={(e) => setForm({ ...form, cliente_id: e.target.value })} className="input">
                <option value="">Seleccionar</option>
                {clientes.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Obra</label>
              <select value={form.obra_id} onChange={(e) => setForm({ ...form, obra_id: e.target.value })} className="input">
                <option value="">Sin obra</option>
                {obras.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Concepto</label>
              <input type="text" value={form.concepto} onChange={(e) => setForm({ ...form, concepto: e.target.value })} className="input" placeholder="Reforma baño completa" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Base imponible (€) *</label>
                <input type="number" step="0.01" value={form.base_imponible} onChange={(e) => setForm({ ...form, base_imponible: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="label">IVA</label>
                <select value={form.iva_porcentaje} onChange={(e) => setForm({ ...form, iva_porcentaje: e.target.value })} className="input">
                  <option value="21">21%</option>
                  <option value="10">10%</option>
                  <option value="0">Exento</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label">Tipo</label>
              <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="input">
                <option value="normal">Normal</option>
                <option value="anticipo">Anticipo</option>
                <option value="certificacion">Certificación</option>
              </select>
            </div>
            {form.base_imponible && (
              <div className="bg-surface rounded-lg p-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Base:</span><span>{parseFloat(form.base_imponible).toLocaleString("es-ES")}€</span></div>
                <div className="flex justify-between"><span className="text-gray-500">IVA ({form.iva_porcentaje}%):</span><span>{(parseFloat(form.base_imponible) * parseFloat(form.iva_porcentaje) / 100).toLocaleString("es-ES")}€</span></div>
                <div className="flex justify-between font-bold border-t border-border pt-1 mt-1"><span>Total:</span><span>{(parseFloat(form.base_imponible) * (1 + parseFloat(form.iva_porcentaje) / 100)).toLocaleString("es-ES")}€</span></div>
              </div>
            )}
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Creando..." : "Crear factura"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : facturas.length === 0 ? (
        <div className="card p-8 text-center">
          <Receipt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin facturas</h2>
          <p className="text-sm text-gray-500">Crea tu primera factura</p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {facturas.map((f) => {
              const est = estadoLabels[f.estado] || { label: f.estado, class: "badge-neutral" };
              return (
                <div key={f.id} className="card p-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-secondary text-sm">{f.numero}</p>
                      <span className={est.class}>{est.label}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{new Date(f.fecha).toLocaleDateString("es-ES")}</span>
                      {f.clientes && <span>{(f.clientes as any).nombre}</span>}
                      {f.concepto && <span className="truncate">{f.concepto}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <p className="font-semibold text-secondary">{Number(f.total).toLocaleString("es-ES")}€</p>
                    {f.estado === "pendiente" && (
                      <button onClick={() => marcarPagada(f.id, Number(f.total))}
                        className="text-xs text-green-500 font-medium hover:text-green-600 whitespace-nowrap">
                        Marcar pagada
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {hasMore && (
            <div className="text-center mt-6">
              <button onClick={loadMore} className="btn-secondary !text-sm">Cargar más facturas</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
