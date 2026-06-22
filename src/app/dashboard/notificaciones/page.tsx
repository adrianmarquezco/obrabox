"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Bell, Check } from "lucide-react";

type Notificacion = {
  id: string;
  tipo: string;
  titulo: string;
  mensaje: string | null;
  enlace: string | null;
  leida: boolean;
  created_at: string;
};

export default function NotificacionesPage() {
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase
      .from("notificaciones")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);
    setNotificaciones(data || []);
    setLoading(false);
  }

  async function marcarLeida(id: string) {
    const supabase = createClient();
    await supabase.from("notificaciones").update({ leida: true }).eq("id", id);
    setNotificaciones((prev) => prev.map((n) => n.id === id ? { ...n, leida: true } : n));
  }

  async function marcarTodasLeidas() {
    const supabase = createClient();
    const ids = notificaciones.filter((n) => !n.leida).map((n) => n.id);
    if (ids.length === 0) return;
    await supabase.from("notificaciones").update({ leida: true }).in("id", ids);
    setNotificaciones((prev) => prev.map((n) => ({ ...n, leida: true })));
  }

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Notificaciones</h1>
          {noLeidas > 0 && <p className="text-sm text-gray-500">{noLeidas} sin leer</p>}
        </div>
        {noLeidas > 0 && (
          <button onClick={marcarTodasLeidas} className="text-sm text-primary-500 font-medium flex items-center gap-1">
            <Check className="w-4 h-4" /> Marcar todas como leídas
          </button>
        )}
      </div>

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : notificaciones.length === 0 ? (
        <div className="card p-8 text-center">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">No tienes notificaciones</h2>
          <p className="text-sm text-gray-500">Las alertas de tus obras, facturas y presupuestos aparecerán aquí</p>
        </div>
      ) : (
        <div className="space-y-2">
          {notificaciones.map((n) => (
            <div
              key={n.id}
              className={`card p-4 flex items-start gap-4 ${!n.leida ? "bg-primary-50/50 border-primary-200" : ""}`}
            >
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${!n.leida ? "bg-primary-500" : "bg-transparent"}`} />
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${!n.leida ? "font-semibold text-secondary" : "text-gray-700"}`}>{n.titulo}</p>
                {n.mensaje && <p className="text-xs text-gray-500 mt-0.5">{n.mensaje}</p>}
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(n.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "short" })} {new Date(n.created_at).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              {!n.leida && (
                <button onClick={() => marcarLeida(n.id)} className="text-xs text-gray-400 hover:text-primary-500 whitespace-nowrap">
                  Marcar leída
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
