"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Settings, Save } from "lucide-react";

type Config = { clave: string; valor: any; descripcion: string | null };

export default function AdminConfigPage() {
  const [configs, setConfigs] = useState<Config[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { loadConfig(); }, []);

  async function loadConfig() {
    const supabase = createClient();
    const { data } = await supabase.from("admin_config").select("*").order("clave");
    setConfigs((data || []).map((c: any) => ({ ...c, valor: typeof c.valor === "string" ? c.valor : JSON.stringify(c.valor) })));
    setLoading(false);
  }

  function updateValue(clave: string, valor: string) {
    setConfigs((prev) => prev.map((c) => c.clave === clave ? { ...c, valor } : c));
  }

  async function saveAll() {
    setSaving(true);
    const supabase = createClient();

    for (const config of configs) {
      let parsedValue: any;
      try {
        parsedValue = JSON.parse(config.valor);
      } catch {
        parsedValue = config.valor;
      }
      await supabase.from("admin_config").update({ valor: parsedValue, updated_at: new Date().toISOString() }).eq("clave", config.clave);
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("admin_logs").insert({
        admin_id: user.id,
        accion: "config_update",
        entidad: "admin_config",
        detalles: { claves: configs.map((c) => c.clave) },
      });
    }

    setMsg("Configuración guardada");
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Configuración global</h1>
        {msg && <span className="text-sm text-green-500 font-medium">{msg}</span>}
      </div>

      <div className="bg-amber-50 border border-amber-200 text-amber-700 text-sm p-4 rounded-lg mb-6">
        <strong>Cuidado:</strong> estos valores afectan a toda la plataforma. Cambia con precaución.
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="space-y-4">
          {configs.map((c) => {
            const isBoolean = c.valor === "true" || c.valor === "false" || c.valor === true || c.valor === false;
            return (
              <div key={c.clave} className="bg-white rounded-xl border p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 font-mono text-sm">{c.clave}</p>
                    {c.descripcion && <p className="text-xs text-gray-500 mt-0.5">{c.descripcion}</p>}
                  </div>
                  {isBoolean ? (
                    <button
                      onClick={() => updateValue(c.clave, String(c.valor) === "true" ? "false" : "true")}
                      className={`w-12 h-7 rounded-full transition-colors relative ${String(c.valor) === "true" ? "bg-green-500" : "bg-gray-200"}`}
                    >
                      <span className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform ${String(c.valor) === "true" ? "left-6" : "left-1"}`} />
                    </button>
                  ) : (
                    <input
                      type="text"
                      value={String(c.valor).replace(/^"|"$/g, "")}
                      onChange={(e) => updateValue(c.clave, `"${e.target.value}"`)}
                      className="w-48 text-sm border border-gray-200 rounded-lg px-3 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  )}
                </div>
              </div>
            );
          })}

          <button onClick={saveAll} disabled={saving} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors">
            <Save className="w-4 h-4" /> {saving ? "Guardando..." : "Guardar toda la configuración"}
          </button>
        </div>
      )}
    </div>
  );
}
