"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Search, X, AlertTriangle, Building2, Plus } from "lucide-react";

type Empresa = {
  id: string;
  nombre: string;
  email: string | null;
  telefono: string | null;
  plan: string;
  trial_hasta: string | null;
  created_at: string;
  onboarding_completado: boolean;
  _usuarios?: number;
};

const PLANES = ["free", "trial", "pro", "business"];
const PAGE_SIZE = 25;

export default function AdminEmpresasPage() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroPlan, setFiltroPlan] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const [showNew, setShowNew] = useState(false);
  const [newForm, setNewForm] = useState({ nombre: "", email: "", plan: "trial" });
  const [creating, setCreating] = useState(false);

  const load = useCallback(async (p: number, q: string, plan: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("empresas")
      .select("id, nombre, email, telefono, plan, trial_hasta, created_at, onboarding_completado", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);
    if (q) query = query.ilike("nombre", `%${q}%`);
    if (plan) query = query.eq("plan", plan);
    const { data, count } = await query;
    const rows = data || [];
    setHasMore(rows.length === PAGE_SIZE);
    setTotal(count || 0);
    setEmpresas((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => load(0, search, filtroPlan, true), 300);
  }, [search, filtroPlan, load]);

  async function changePlan(id: string, plan: string) {
    const supabase = createClient();
    const trialHasta = plan === "trial"
      ? new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
      : null;
    await supabase.from("empresas").update({ plan, trial_hasta: trialHasta }).eq("id", id);
    setEmpresas((prev) => prev.map((e) => e.id === id ? { ...e, plan, trial_hasta: trialHasta } : e));
  }

  async function handleCreate(ev: React.FormEvent) {
    ev.preventDefault();
    setCreating(true);
    const supabase = createClient();
    const trialHasta = newForm.plan === "trial"
      ? new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
      : null;
    const { data } = await supabase.from("empresas").insert({
      nombre: newForm.nombre,
      email: newForm.email || null,
      plan: newForm.plan,
      trial_hasta: trialHasta,
    }).select("id, nombre, email, telefono, plan, trial_hasta, created_at, onboarding_completado").single();
    if (data) setEmpresas((prev) => [data, ...prev]);
    setNewForm({ nombre: "", email: "", plan: "trial" });
    setShowNew(false);
    setCreating(false);
  }

  const planBadge = (plan: string) => {
    const styles: Record<string, string> = {
      trial: "bg-yellow-500/20 text-yellow-400",
      free: "bg-gray-600/30 text-gray-400",
      pro: "bg-blue-500/20 text-blue-400",
      business: "bg-purple-500/20 text-purple-400",
    };
    return <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[plan] || styles.free}`}>{plan}</span>;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Empresas</h1>
          <p className="text-sm text-gray-500 mt-0.5">{total} empresa{total !== 1 ? "s" : ""} registradas</p>
        </div>
        <button onClick={() => setShowNew(true)}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" /> Nueva empresa
        </button>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="text" placeholder="Buscar empresa..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500" />
          {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2"><X className="w-3.5 h-3.5 text-gray-500" /></button>}
        </div>
        <select value={filtroPlan} onChange={(e) => setFiltroPlan(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500 w-36">
          <option value="">Todos los planes</option>
          {PLANES.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-gray-100">Nueva empresa</h2>
            <div><label className="text-xs text-gray-400 mb-1 block">Nombre *</label>
              <input type="text" value={newForm.nombre} onChange={(e) => setNewForm({ ...newForm, nombre: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500" required autoFocus /></div>
            <div><label className="text-xs text-gray-400 mb-1 block">Email</label>
              <input type="email" value={newForm.email} onChange={(e) => setNewForm({ ...newForm, email: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500" /></div>
            <div><label className="text-xs text-gray-400 mb-1 block">Plan inicial</label>
              <select value={newForm.plan} onChange={(e) => setNewForm({ ...newForm, plan: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500">
                {PLANES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select></div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium py-2 rounded-lg transition-colors">Cancelar</button>
              <button type="submit" disabled={creating}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                {creating ? "Creando..." : "Crear empresa"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Empresa</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Trial hasta</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Alta</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Cambiar plan</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} className="p-8 text-center text-gray-600">Cargando...</td></tr>
            ) : empresas.length === 0 ? (
              <tr><td colSpan={7} className="p-8 text-center text-gray-600">Sin resultados</td></tr>
            ) : empresas.map((e) => {
              const trialExpired = e.trial_hasta && new Date(e.trial_hasta) <= new Date();
              return (
                <tr key={e.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {trialExpired && <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />}
                      <div>
                        <p className="font-medium text-gray-200">{e.nombre}</p>
                        {!e.onboarding_completado && <span className="text-xs text-gray-600">Sin onboarding</span>}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-gray-500 text-xs">{e.email || "—"}</td>
                  <td className="p-3">{planBadge(e.plan)}</td>
                  <td className="p-3 text-xs text-gray-500">
                    {e.trial_hasta
                      ? <span className={trialExpired ? "text-red-400" : "text-yellow-400"}>
                          {new Date(e.trial_hasta).toLocaleDateString("es-ES")}
                        </span>
                      : "—"}
                  </td>
                  <td className="p-3 text-xs text-gray-500">{new Date(e.created_at).toLocaleDateString("es-ES")}</td>
                  <td className="p-3">
                    <select value={e.plan} onChange={(ev) => changePlan(e.id, ev.target.value)}
                      className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-orange-500">
                      {PLANES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </td>
                  <td className="p-3">
                    <Link href={`/admin/empresas/${e.id}`}
                      className="text-xs text-orange-400 hover:text-orange-300 font-medium">Gestionar</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="text-center mt-4">
          <button onClick={() => { const next = page + 1; setPage(next); load(next, search, filtroPlan); }}
            className="text-sm text-orange-400 hover:text-orange-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
}
