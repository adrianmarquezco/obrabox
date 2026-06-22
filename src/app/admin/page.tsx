"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Building2, Users, FileText, Receipt, TrendingUp, Activity } from "lucide-react";
import Link from "next/link";

type Stats = {
  empresas: number;
  usuarios: number;
  obras: number;
  presupuestos: number;
  facturas: number;
  empresas_pro: number;
  empresas_business: number;
  empresas_gratis: number;
  empresas_hoy: number;
  usuarios_hoy: number;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentEmpresas, setRecentEmpresas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadStats(); }, []);

  async function loadStats() {
    const supabase = createClient();
    const today = new Date().toISOString().split("T")[0];

    const [emp, usr, obras, pres, fact, empPro, empBiz, empFree, empHoy, usrHoy, recent] = await Promise.all([
      supabase.from("empresas").select("id", { count: "exact", head: true }),
      supabase.from("usuarios").select("id", { count: "exact", head: true }),
      supabase.from("obras").select("id", { count: "exact", head: true }).is("deleted_at", null),
      supabase.from("presupuestos").select("id", { count: "exact", head: true }).is("deleted_at", null),
      supabase.from("facturas_emitidas").select("id", { count: "exact", head: true }).is("deleted_at", null),
      supabase.from("empresas").select("id", { count: "exact", head: true }).eq("plan", "pro"),
      supabase.from("empresas").select("id", { count: "exact", head: true }).eq("plan", "business"),
      supabase.from("empresas").select("id", { count: "exact", head: true }).eq("plan", "gratis"),
      supabase.from("empresas").select("id", { count: "exact", head: true }).gte("created_at", today),
      supabase.from("usuarios").select("id", { count: "exact", head: true }).gte("created_at", today),
      supabase.from("empresas").select("id, nombre, plan, created_at").order("created_at", { ascending: false }).limit(10),
    ]);

    setStats({
      empresas: emp.count || 0,
      usuarios: usr.count || 0,
      obras: obras.count || 0,
      presupuestos: pres.count || 0,
      facturas: fact.count || 0,
      empresas_pro: empPro.count || 0,
      empresas_business: empBiz.count || 0,
      empresas_gratis: empFree.count || 0,
      empresas_hoy: empHoy.count || 0,
      usuarios_hoy: usrHoy.count || 0,
    });
    setRecentEmpresas(recent.data || []);
    setLoading(false);
  }

  if (loading) return <div className="card p-8 text-center"><p className="text-gray-400">Cargando estadísticas...</p></div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Admin</h1>

      {/* Stats principales */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <Link href="/admin/empresas" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <Building2 className="w-8 h-8 text-blue-500 mb-2" />
          <p className="text-2xl font-bold text-gray-900">{stats?.empresas}</p>
          <p className="text-sm text-gray-500">Empresas</p>
          {(stats?.empresas_hoy || 0) > 0 && <p className="text-xs text-green-500 mt-1">+{stats?.empresas_hoy} hoy</p>}
        </Link>
        <Link href="/admin/usuarios" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <Users className="w-8 h-8 text-purple-500 mb-2" />
          <p className="text-2xl font-bold text-gray-900">{stats?.usuarios}</p>
          <p className="text-sm text-gray-500">Usuarios</p>
          {(stats?.usuarios_hoy || 0) > 0 && <p className="text-xs text-green-500 mt-1">+{stats?.usuarios_hoy} hoy</p>}
        </Link>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <FileText className="w-8 h-8 text-orange-500 mb-2" />
          <p className="text-2xl font-bold text-gray-900">{stats?.obras}</p>
          <p className="text-sm text-gray-500">Obras</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <FileText className="w-8 h-8 text-cyan-500 mb-2" />
          <p className="text-2xl font-bold text-gray-900">{stats?.presupuestos}</p>
          <p className="text-sm text-gray-500">Presupuestos</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <Receipt className="w-8 h-8 text-green-500 mb-2" />
          <p className="text-2xl font-bold text-gray-900">{stats?.facturas}</p>
          <p className="text-sm text-gray-500">Facturas</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Distribución de planes */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" /> Distribución de planes
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Gratis</span>
                <span className="text-sm font-semibold text-gray-900">{stats?.empresas_gratis}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: `${stats?.empresas ? ((stats.empresas_gratis / stats.empresas) * 100) : 0}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Pro (29€/mes)</span>
                <span className="text-sm font-semibold text-orange-500">{stats?.empresas_pro}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${stats?.empresas ? ((stats.empresas_pro / stats.empresas) * 100) : 0}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Business (59€/mes)</span>
                <span className="text-sm font-semibold text-blue-500">{stats?.empresas_business}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${stats?.empresas ? ((stats.empresas_business / stats.empresas) * 100) : 0}%` }} />
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">MRR estimado: <span className="font-bold text-gray-900">{((stats?.empresas_pro || 0) * 29 + (stats?.empresas_business || 0) * 59).toLocaleString("es-ES")}€/mes</span></p>
          </div>
        </div>

        {/* Últimas empresas registradas */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" /> Últimas empresas registradas
          </h2>
          {recentEmpresas.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">No hay empresas registradas</p>
          ) : (
            <div className="space-y-2">
              {recentEmpresas.map((e: any) => (
                <Link key={e.id} href={`/admin/empresas/${e.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{e.nombre}</p>
                    <p className="text-xs text-gray-400">{new Date(e.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    e.plan === "pro" ? "bg-orange-100 text-orange-600" :
                    e.plan === "business" ? "bg-blue-100 text-blue-600" :
                    "bg-gray-100 text-gray-600"
                  }`}>{e.plan}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
