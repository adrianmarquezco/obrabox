"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Search, Building2, ChevronRight } from "lucide-react";

type Empresa = {
  id: string;
  nombre: string;
  cif: string | null;
  plan: string;
  tamano_empresa: string | null;
  onboarding_completado: boolean;
  created_at: string;
};

export default function AdminEmpresasPage() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroPlan, setFiltroPlan] = useState("");

  useEffect(() => { loadEmpresas(); }, []);

  async function loadEmpresas() {
    const supabase = createClient();
    const { data } = await supabase
      .from("empresas")
      .select("id, nombre, cif, plan, tamano_empresa, onboarding_completado, created_at")
      .order("created_at", { ascending: false });
    setEmpresas(data || []);
    setLoading(false);
  }

  const filtered = empresas.filter((e) => {
    const matchSearch = !search || e.nombre.toLowerCase().includes(search.toLowerCase()) || (e.cif && e.cif.toLowerCase().includes(search.toLowerCase()));
    const matchPlan = !filtroPlan || e.plan === filtroPlan;
    return matchSearch && matchPlan;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Empresas ({empresas.length})</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar por nombre o CIF..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500" />
        </div>
        <select value={filtroPlan} onChange={(e) => setFiltroPlan(e.target.value)} className="text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/20 sm:w-40">
          <option value="">Todos los planes</option>
          <option value="gratis">Gratis</option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-3 font-medium text-gray-500">Empresa</th>
                <th className="text-left p-3 font-medium text-gray-500">CIF</th>
                <th className="text-left p-3 font-medium text-gray-500">Plan</th>
                <th className="text-left p-3 font-medium text-gray-500">Tamaño</th>
                <th className="text-left p-3 font-medium text-gray-500">Onboarding</th>
                <th className="text-left p-3 font-medium text-gray-500">Registro</th>
                <th className="p-3 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">{e.nombre}</td>
                  <td className="p-3 text-gray-500">{e.cif || "—"}</td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      e.plan === "pro" ? "bg-orange-100 text-orange-600" :
                      e.plan === "business" ? "bg-blue-100 text-blue-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>{e.plan}</span>
                  </td>
                  <td className="p-3 text-gray-500">{e.tamano_empresa || "—"}</td>
                  <td className="p-3">
                    <span className={`w-2 h-2 rounded-full inline-block ${e.onboarding_completado ? "bg-green-500" : "bg-yellow-500"}`} />
                  </td>
                  <td className="p-3 text-gray-400 text-xs">{new Date(e.created_at).toLocaleDateString("es-ES")}</td>
                  <td className="p-3">
                    <Link href={`/admin/empresas/${e.id}`} className="text-gray-400 hover:text-red-500">
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="p-8 text-center text-gray-400">No se encontraron empresas</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
