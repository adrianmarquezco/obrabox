"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import {
  Building2,
  FileText,
  Receipt,
  TrendingUp,
  CalendarDays,
  AlertTriangle,
  Activity,
} from "lucide-react";

type Stats = {
  obrasActivas: number;
  presupuestosPendientes: number;
  facturasImpagadas: number;
  importeImpagado: number;
  ingresosMes: number;
};

type Cita = { id: string; titulo: string; tipo: string; fecha_hora: string };
type Obra = { id: string; nombre: string; estado: string };

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ obrasActivas: 0, presupuestosPendientes: 0, facturasImpagadas: 0, importeImpagado: 0, ingresosMes: 0 });
  const [citas, setCitas] = useState<Cita[]>([]);
  const [obrasRecientes, setObrasRecientes] = useState<Obra[]>([]);
  const [empresaNombre, setEmpresaNombre] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
      if (!usr) return;
      const { data: emp } = await supabase.from("empresas").select("nombre").eq("id", usr.empresa_id).single();
      if (emp) setEmpresaNombre(emp.nombre);

      const now = new Date();
      const mesInicio = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

      const [obrasRes, presRes, factPendRes, factMesRes, citasRes, obrasListRes] = await Promise.all([
        supabase.from("obras").select("id", { count: "exact", head: true }).eq("estado", "en_curso").is("deleted_at", null),
        supabase.from("presupuestos").select("id", { count: "exact", head: true }).in("estado", ["borrador", "enviado"]).is("deleted_at", null),
        supabase.from("facturas_emitidas").select("total").in("estado", ["pendiente", "vencida"]).is("deleted_at", null),
        supabase.from("facturas_emitidas").select("total").eq("estado", "pagada").gte("fecha_pago", mesInicio.split("T")[0]).is("deleted_at", null),
        supabase.from("agenda_citas").select("id, titulo, tipo, fecha_hora").gte("fecha_hora", now.toISOString()).order("fecha_hora").limit(5),
        supabase.from("obras").select("id, nombre, estado").is("deleted_at", null).order("updated_at", { ascending: false }).limit(5),
      ]);

      const importeImpagado = (factPendRes.data || []).reduce((s: number, f: { total: number }) => s + Number(f.total), 0);
      const ingresosMes = (factMesRes.data || []).reduce((s: number, f: { total: number }) => s + Number(f.total), 0);

      setStats({
        obrasActivas: obrasRes.count || 0,
        presupuestosPendientes: presRes.count || 0,
        facturasImpagadas: (factPendRes.data || []).length,
        importeImpagado,
        ingresosMes,
      });
      setCitas(citasRes.data || []);
      setObrasRecientes(obrasListRes.data || []);
      setLoading(false);
    }
    load();
  }, []);

  const estadoColors: Record<string, string> = {
    pendiente: "badge-warning", en_curso: "badge-info", pausada: "badge-neutral",
    finalizada: "badge-success", cancelada: "badge-danger",
  };

  if (loading) {
    return <div className="text-center py-12"><p className="text-gray-400">Cargando dashboard...</p></div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary">
          {empresaNombre ? `Bienvenido, ${empresaNombre}` : "Bienvenido a tu panel"}
        </h1>
        <p className="text-gray-500 text-sm mt-1">Resumen de tu actividad</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link href="/dashboard/obras" className="card p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <Building2 className="w-8 h-8 text-primary-500" />
            <span className="badge-info">Activas</span>
          </div>
          <p className="text-2xl font-bold text-secondary">{stats.obrasActivas}</p>
          <p className="text-sm text-gray-500">Obras en curso</p>
        </Link>

        <Link href="/dashboard/presupuestos" className="card p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <FileText className="w-8 h-8 text-blue-500" />
            <span className="badge-warning">Pendientes</span>
          </div>
          <p className="text-2xl font-bold text-secondary">{stats.presupuestosPendientes}</p>
          <p className="text-sm text-gray-500">Presupuestos pendientes</p>
        </Link>

        <Link href="/dashboard/facturacion" className="card p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <Receipt className="w-8 h-8 text-red-500" />
            <span className="badge-danger">{stats.facturasImpagadas}</span>
          </div>
          <p className="text-2xl font-bold text-secondary">{stats.importeImpagado.toLocaleString("es-ES")}€</p>
          <p className="text-sm text-gray-500">Facturas impagadas</p>
        </Link>

        <div className="card p-5">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <span className="badge-success">Este mes</span>
          </div>
          <p className="text-2xl font-bold text-secondary">{stats.ingresosMes.toLocaleString("es-ES")}€</p>
          <p className="text-sm text-gray-500">Cobrado este mes</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-primary-500" />
            <h2 className="font-semibold text-secondary">Obras recientes</h2>
          </div>
          {obrasRecientes.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-sm text-gray-400">No tienes obras</p>
              <Link href="/dashboard/obras/nueva" className="text-sm text-primary-500 font-medium mt-2 inline-block">Crear primera obra</Link>
            </div>
          ) : (
            <div className="space-y-2">
              {obrasRecientes.map((o) => (
                <Link key={o.id} href={`/dashboard/obras/${o.id}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-surface">
                  <span className="text-sm text-secondary font-medium truncate">{o.nombre}</span>
                  <span className={`text-xs ${estadoColors[o.estado] || "badge-neutral"}`}>{o.estado.replace("_", " ")}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5 text-blue-500" />
            <h2 className="font-semibold text-secondary">Próximas citas</h2>
          </div>
          {citas.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-sm text-gray-400">No tienes citas próximas</p>
              <Link href="/dashboard/agenda" className="text-sm text-primary-500 font-medium mt-2 inline-block">Crear cita</Link>
            </div>
          ) : (
            <div className="space-y-2">
              {citas.map((c) => (
                <div key={c.id} className="p-2 rounded-lg hover:bg-surface">
                  <p className="text-sm font-medium text-secondary">{c.titulo}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(c.fecha_hora).toLocaleDateString("es-ES", { day: "numeric", month: "short" })} {new Date(c.fecha_hora).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-purple-500" />
            <h2 className="font-semibold text-secondary">Acciones rápidas</h2>
          </div>
          <div className="space-y-2">
            <Link href="/dashboard/obras/nueva" className="block p-3 rounded-lg bg-surface hover:bg-primary-50 text-sm font-medium text-secondary hover:text-primary-500 transition-colors">
              + Nueva obra
            </Link>
            <Link href="/dashboard/presupuestos/nuevo" className="block p-3 rounded-lg bg-surface hover:bg-primary-50 text-sm font-medium text-secondary hover:text-primary-500 transition-colors">
              + Nuevo presupuesto
            </Link>
            <Link href="/dashboard/clientes/nuevo" className="block p-3 rounded-lg bg-surface hover:bg-primary-50 text-sm font-medium text-secondary hover:text-primary-500 transition-colors">
              + Nuevo cliente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
