"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save, Settings } from "lucide-react";

type ConfigEntry = {
  clave: string;
  valor: any;
  descripcion: string | null;
};

const DEFAULT_CONFIG = [
  { clave: "precios", descripcion: "Precios de los planes (JSON)", defaultValor: { free: 0, trial: 0, pro: 49, business: 99 } },
  { clave: "trial_dias", descripcion: "Días de prueba gratis para nuevas empresas", defaultValor: 14 },
  { clave: "modulos_default", descripcion: "Módulos activados por defecto para nuevas empresas", defaultValor: ["dashboard", "obras", "presupuestos", "clientes"] },
  { clave: "mensaje_bienvenida", descripcion: "Mensaje de bienvenida en el onboarding", defaultValor: "Bienvenido a ObraBox" },
];

export default function AdminConfigPage() {
  const [config, setConfig] = useState<Record<string, ConfigEntry>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  const [editValues, setEditValues] = useState<Record<string, string>>({});

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase.from("admin_config").select("*");
      const map: Record<string, ConfigEntry> = {};
      (data || []).forEach((e: ConfigEntry) => { map[e.clave] = e; });
      setConfig(map);

      const edits: Record<string, string> = {};
      DEFAULT_CONFIG.forEach((dc) => {
        const existing = map[dc.clave];
        edits[dc.clave] = JSON.stringify(existing ? existing.valor : dc.defaultValor, null, 2);
      });
      setEditValues(edits);
      setLoading(false);
    }
    load();
  }, []);

  async function saveConfig(clave: string) {
    setSaving(clave);
    let parsedValor;
    try {
      parsedValor = JSON.parse(editValues[clave]);
    } catch {
      setMsg(`Error: JSON inválido en ${clave}`);
      setSaving(null);
      setTimeout(() => setMsg(""), 4000);
      return;
    }
    const supabase = createClient();
    const desc = DEFAULT_CONFIG.find((d) => d.clave === clave)?.descripcion || null;
    if (config[clave]) {
      await supabase.from("admin_config").update({ valor: parsedValor }).eq("clave", clave);
    } else {
      await supabase.from("admin_config").insert({ clave, valor: parsedValor, descripcion: desc });
    }
    setConfig((prev) => ({ ...prev, [clave]: { clave, valor: parsedValor, descripcion: desc } }));
    setMsg(`${clave} guardado`);
    setSaving(null);
    setTimeout(() => setMsg(""), 3000);
  }

  if (loading) return <div className="text-gray-500 text-sm">Cargando...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Settings className="w-6 h-6 text-orange-400" />
          <h1 className="text-2xl font-bold text-gray-100">Config global</h1>
        </div>
        {msg && <span className={`text-sm font-medium ${msg.startsWith("Error") ? "text-red-400" : "text-green-400"}`}>{msg}</span>}
      </div>

      <div className="space-y-4">
        {DEFAULT_CONFIG.map((dc) => (
          <div key={dc.clave} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-mono font-medium text-orange-400">{dc.clave}</p>
                {dc.descripcion && <p className="text-xs text-gray-500 mt-0.5">{dc.descripcion}</p>}
              </div>
              <button onClick={() => saveConfig(dc.clave)} disabled={saving === dc.clave}
                className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors flex-shrink-0 ml-4">
                <Save className="w-3 h-3" /> {saving === dc.clave ? "Guardando..." : "Guardar"}
              </button>
            </div>
            <textarea
              value={editValues[dc.clave] || ""}
              onChange={(e) => setEditValues((prev) => ({ ...prev, [dc.clave]: e.target.value }))}
              rows={typeof (config[dc.clave]?.valor ?? dc.defaultValor) === "object" ? 5 : 2}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 font-mono focus:outline-none focus:border-orange-500 resize-y"
            />
          </div>
        ))}

        {/* Entradas extra en la DB que no están en DEFAULT_CONFIG */}
        {Object.values(config)
          .filter((e) => !DEFAULT_CONFIG.find((d) => d.clave === e.clave))
          .map((e) => (
            <div key={e.clave} className="bg-gray-900 border border-gray-700/50 rounded-xl p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-mono font-medium text-gray-400">{e.clave}</p>
                  {e.descripcion && <p className="text-xs text-gray-600 mt-0.5">{e.descripcion}</p>}
                </div>
                <button onClick={() => saveConfig(e.clave)} disabled={saving === e.clave}
                  className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors flex-shrink-0 ml-4">
                  <Save className="w-3 h-3" /> {saving === e.clave ? "Guardando..." : "Guardar"}
                </button>
              </div>
              <textarea
                value={editValues[e.clave] ?? JSON.stringify(e.valor, null, 2)}
                onChange={(ev) => setEditValues((prev) => ({ ...prev, [e.clave]: ev.target.value }))}
                rows={3}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 font-mono focus:outline-none focus:border-orange-500 resize-y"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
