"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Building2, Users, MessageSquare, TrendingUp, AlertTriangle, Clock } from "lucide-react";

type Stats = {
  total_empresas: number;
  empresas_trial: number;
  empresas_pro: number;
  empresas_business: number;
  total_usuarios: number;
  total_leads: number;
  leads_nuevos: number;
};

type EmpresaReciente = {
  id: string;
  nombre: string;
  plan: string;
  trial_hasta: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recientes, setRecientes] = useState<EmpresaReciente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const [empRes, usrRes, leadsRes, leadsNuevosRes] = await Promise.all([
        supabase.from("empresas").select("plan, trial_hasta"),
        supabase.from("usuarios").select("id", { count: "exact", head: true }),
        supabase.from("contacto_leads").select("id", { count: "exact", head: true }),
        supabase.from("contacto_leads").select("id", { count: "exact", head: true })
          .gte("created_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
      ]);

      const empresas = empRes.data || [];
      setStats({
        total_empresas: empresas.length,
        empresas_trial: empresas.filter((e) => e.plan === "trial" || e.plan === "free").length,
        empresas_pro: empresas.filter((e) => e.plan === "pro").length,
        empresas_business: empresas.filter((e) => e.plan === "business").length,
        total_usuarios: usrRes.count || 0,
        total_leads: leadsRes.count || 0,
        leads_nuevos: leadsNuevosRes.count || 0,
      });

      const { data: rec } = await supabase.from("empresas")
        .select("id, nombre, plan, trial_hasta, created_at")
        .order("created_at", { ascending: false })
        .limit(5);
      setRecientes(rec || []);
      setLoading(false);
    }
    load();
  }, []);

  const planBadge = (plan: string) => {
    const styles: Record<string, string> = {
      trial: "bg-yellow-500/20 text-yellow-400",
      free: "bg-gray-500/20 text-gray-400",
      pro: "bg-blue-500/20 text-blue-400",
      business: "bg-purple-500/20 text-purple-400",
    };
    return (
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[plan] || styles.free}`}>
        {plan}
      </span>
    );
  };

  if (loading) return <div className="text-gray-500 text-sm">Cargando...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Overview</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Empresas totales", value: stats?.total_empresas, icon: Building2, color: "text-orange-400" },
          { label: "Usuarios totales", value: stats?.total_usuarios, icon: Users, color: "text-blue-400" },
          { label: "Leads totales", value: stats?.total_leads, icon: MessageSquare, color: "text-green-400" },
          { label: "Leads esta semana", value: stats?.leads_nuevos, icon: TrendingUp, color: "text-purple-400" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <s.icon className={`w-4 h-4 ${s.color}`} />
              <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
            </div>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value ?? "-"}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Distribución de planes */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-400" /> Distribución de planes
          </h2>
          <div className="space-y-3">
            {[
              { label: "Trial / Free", value: stats?.empresas_trial, color: "bg-yellow-500" },
              { label: "Pro", value: stats?.empresas_pro, color: "bg-blue-500" },
              { label: "Business", value: stats?.empresas_business, color: "bg-purple-500" },
            ].map((p) => {
              const pct = stats?.total_empresas ? Math.round(((p.value || 0) / stats.total_empresas) * 100) : 0;
              return (
                <div key={p.label}>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>{p.label}</span>
                    <span>{p.value} ({pct}%)</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div className={`h-2 ${p.color} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empresas recientes */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" /> Empresas recientes
            </h2>
            <Link href="/admin/empresas" className="text-xs text-orange-400 hover:text-orange-300">Ver todas</Link>
          </div>
          <div className="space-y-2">
            {recientes.map((e) => {
              const trialing = e.trial_hasta && new Date(e.trial_hasta) > new Date();
              const trialExpired = e.trial_hasta && new Date(e.trial_hasta) <= new Date();
              return (
                <Link key={e.id} href={`/admin/empresas/${e.id}`}
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2">
                    {trialExpired && <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />}
                    <span className="text-sm text-gray-200">{e.nombre}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {planBadge(e.plan)}
                    {trialing && (
                      <span className="text-xs text-yellow-500">
                        trial hasta {new Date(e.trial_hasta!).toLocaleDateString("es-ES")}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
