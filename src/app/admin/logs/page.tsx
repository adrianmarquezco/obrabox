"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Activity } from "lucide-react";

type Log = {
  id: string;
  accion: string;
  entidad: string | null;
  entidad_id: string | null;
  detalles: any;
  created_at: string;
  admin_users?: { nombre: string; email: string };
};

const accionLabels: Record<string, string> = {
  user_create: "Creó usuario",
  empresa_update: "Editó empresa",
  user_disable: "Desactivó usuario",
  user_enable: "Activó usuario",
  plan_change: "Cambió plan",
  config_update: "Actualizó configuración",
};

export default function AdminLogsPage() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLogs();
  }, []);

  async function loadLogs() {
    const supabase = createClient();
    const { data } = await supabase
      .from("admin_logs")
      .select("*, admin_users(nombre, email)")
      .order("created_at", { ascending: false })
      .limit(200);
    setLogs(data || []);
    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Logs de actividad</h1>

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : logs.length === 0 ? (
        <div className="bg-white rounded-xl border p-8 text-center">
          <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Sin actividad registrada</h2>
          <p className="text-sm text-gray-500">Las acciones de administración aparecerán aquí</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-3 font-medium text-gray-500">Fecha</th>
                <th className="text-left p-3 font-medium text-gray-500">Admin</th>
                <th className="text-left p-3 font-medium text-gray-500">Acción</th>
                <th className="text-left p-3 font-medium text-gray-500">Entidad</th>
                <th className="text-left p-3 font-medium text-gray-500">Detalles</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id} className="border-b border-gray-100">
                  <td className="p-3 text-gray-400 text-xs whitespace-nowrap">
                    {new Date(l.created_at).toLocaleDateString("es-ES")} {new Date(l.created_at).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                  </td>
                  <td className="p-3 text-gray-700">{(l.admin_users as any)?.nombre || "—"}</td>
                  <td className="p-3 font-medium text-gray-900">{accionLabels[l.accion] || l.accion}</td>
                  <td className="p-3 text-gray-500">{l.entidad || "—"}</td>
                  <td className="p-3 text-gray-400 text-xs font-mono max-w-[200px] truncate">
                    {l.detalles ? JSON.stringify(l.detalles) : "—"}
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
