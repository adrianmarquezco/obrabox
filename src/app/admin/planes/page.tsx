"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { CreditCard, TrendingUp } from "lucide-react";

type EmpresaPlan = {
  id: string;
  nombre: string;
  plan: string;
  plan_periodo: string | null;
  trial_hasta: string | null;
  created_at: string;
};

export default function AdminPlanesPage() {
  const [empresas, setEmpresas] = useState<EmpresaPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const { data } = await supabase
      .from("empresas")
      .select("id, nombre, plan, plan_periodo, trial_hasta, created_at")
      .order("plan", { ascending: false });
    setEmpresas(data || []);
    setLoading(false);
  }

  async function cambiarPlan(empresaId: string, plan: string) {
    const supabase = createClient();
    await supabase.from("empresas").update({ plan }).eq("id", empresaId);
    const { data: { user } } = await supabase.auth.getUser();
    if (user) await supabase.from("admin_logs").insert({ admin_id: user.id, accion: "plan_change", entidad: "empresas", entidad_id: empresaId, detalles: { plan } });
    setEmpresas((prev) => prev.map((e) => e.id === empresaId ? { ...e, plan } : e));
  }

  const pro = empresas.filter((e) => e.plan === "pro");
  const business = empresas.filter((e) => e.plan === "business");
  const mrr = pro.length * 29 + business.length * 59;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Planes y suscripciones</h1>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border p-5">
          <p className="text-xs text-gray-500 uppercase">MRR</p>
          <p className="text-2xl font-bold text-green-500">{mrr}€/mes</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-xs text-gray-500 uppercase">Pro</p>
          <p className="text-2xl font-bold text-orange-500">{pro.length}</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-xs text-gray-500 uppercase">Business</p>
          <p className="text-2xl font-bold text-blue-500">{business.length}</p>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <p className="text-xs text-gray-500 uppercase">Gratis</p>
          <p className="text-2xl font-bold text-gray-500">{empresas.length - pro.length - business.length}</p>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-3 font-medium text-gray-500">Empresa</th>
                <th className="text-left p-3 font-medium text-gray-500">Plan actual</th>
                <th className="text-left p-3 font-medium text-gray-500">Periodo</th>
                <th className="text-left p-3 font-medium text-gray-500">Trial hasta</th>
                <th className="p-3 font-medium text-gray-500">Cambiar plan</th>
              </tr>
            </thead>
            <tbody>
              {empresas.map((e) => (
                <tr key={e.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">{e.nombre}</td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      e.plan === "pro" ? "bg-orange-100 text-orange-600" :
                      e.plan === "business" ? "bg-blue-100 text-blue-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>{e.plan}</span>
                  </td>
                  <td className="p-3 text-gray-500">{e.plan_periodo || "—"}</td>
                  <td className="p-3 text-gray-500 text-xs">{e.trial_hasta ? new Date(e.trial_hasta).toLocaleDateString("es-ES") : "—"}</td>
                  <td className="p-3 text-center">
                    <select
                      value={e.plan}
                      onChange={(ev) => cambiarPlan(e.id, ev.target.value)}
                      className="text-xs border border-gray-200 rounded px-2 py-1"
                    >
                      <option value="gratis">Gratis</option>
                      <option value="pro">Pro</option>
                      <option value="business">Business</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
