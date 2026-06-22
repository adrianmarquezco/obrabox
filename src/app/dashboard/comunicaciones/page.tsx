"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, MessageSquare, Phone, Mail, MapPin, MessagesSquare } from "lucide-react";

type Comunicacion = {
  id: string;
  tipo: string;
  nota: string | null;
  fecha: string;
  clientes?: { nombre: string } | null;
  obras?: { nombre: string } | null;
};

const tipoIcons: Record<string, { icon: typeof Phone; label: string; color: string }> = {
  llamada: { icon: Phone, label: "Llamada", color: "text-blue-500 bg-blue-50" },
  whatsapp: { icon: MessagesSquare, label: "WhatsApp", color: "text-green-500 bg-green-50" },
  email: { icon: Mail, label: "Email", color: "text-purple-500 bg-purple-50" },
  visita: { icon: MapPin, label: "Visita", color: "text-orange-500 bg-orange-50" },
};

export default function ComunicacionesPage() {
  const [comunicaciones, setComunicaciones] = useState<Comunicacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [clientes, setClientes] = useState<{ id: string; nombre: string }[]>([]);
  const [obras, setObras] = useState<{ id: string; nombre: string }[]>([]);
  const [form, setForm] = useState({ tipo: "llamada", cliente_id: "", obra_id: "", nota: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [comRes, cliRes, obraRes] = await Promise.all([
      supabase.from("comunicaciones").select("*, clientes(nombre), obras(nombre)").order("fecha", { ascending: false }).limit(100),
      supabase.from("clientes").select("id, nombre").is("deleted_at", null).order("nombre"),
      supabase.from("obras").select("id, nombre").is("deleted_at", null).order("nombre"),
    ]);
    setComunicaciones(comRes.data || []);
    setClientes(cliRes.data || []);
    setObras(obraRes.data || []);
    setLoading(false);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;

    const { data } = await supabase.from("comunicaciones").insert({
      empresa_id: usr.empresa_id,
      tipo: form.tipo,
      cliente_id: form.cliente_id || null,
      obra_id: form.obra_id || null,
      nota: form.nota || null,
      fecha: new Date().toISOString(),
    }).select("*, clientes(nombre), obras(nombre)").single();

    if (data) setComunicaciones((prev) => [data, ...prev]);
    setForm({ tipo: "llamada", cliente_id: "", obra_id: "", nota: "" });
    setShowNew(false);
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Comunicaciones</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Registrar contacto
        </button>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-secondary">Registrar comunicación</h2>
            <div>
              <label className="label">Tipo</label>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(tipoIcons).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setForm({ ...form, tipo: key })}
                    className={`p-3 rounded-lg border-2 text-center text-xs font-medium transition-colors ${
                      form.tipo === key ? "border-primary-500 bg-primary-50" : "border-border"
                    }`}
                  >
                    <val.icon className={`w-5 h-5 mx-auto mb-1 ${val.color.split(" ")[0]}`} />
                    {val.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="label">Cliente</label>
              <select value={form.cliente_id} onChange={(e) => setForm({ ...form, cliente_id: e.target.value })} className="input">
                <option value="">Sin cliente</option>
                {clientes.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Obra</label>
              <select value={form.obra_id} onChange={(e) => setForm({ ...form, obra_id: e.target.value })} className="input">
                <option value="">Sin obra</option>
                {obras.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Nota</label>
              <textarea value={form.nota} onChange={(e) => setForm({ ...form, nota: e.target.value })} className="input min-h-[80px] resize-y" placeholder="¿De qué habéis hablado?" />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Guardando..." : "Registrar"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : comunicaciones.length === 0 ? (
        <div className="card p-8 text-center">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin comunicaciones</h2>
          <p className="text-sm text-gray-500">Registra llamadas, WhatsApps y emails con tus clientes</p>
        </div>
      ) : (
        <div className="space-y-2">
          {comunicaciones.map((c) => {
            const cfg = tipoIcons[c.tipo] || tipoIcons.llamada;
            return (
              <div key={c.id} className="card p-4 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${cfg.color}`}>
                  <cfg.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-medium text-secondary text-sm">{cfg.label}</span>
                    {c.clientes && <span className="text-xs text-gray-500">con {(c.clientes as any).nombre}</span>}
                  </div>
                  {c.nota && <p className="text-sm text-gray-600">{c.nota}</p>}
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                    <span>{new Date(c.fecha).toLocaleDateString("es-ES")} {new Date(c.fecha).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}</span>
                    {c.obras && <span>{(c.obras as any).nombre}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
