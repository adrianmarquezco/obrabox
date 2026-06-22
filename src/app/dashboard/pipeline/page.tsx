"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Phone, Mail } from "lucide-react";

type Lead = {
  id: string;
  nombre: string;
  telefono: string | null;
  email: string | null;
  tipo_reforma: string | null;
  importe_estimado: number | null;
  etapa: string;
  origen: string | null;
  notas: string | null;
  created_at: string;
};

const ETAPAS = [
  { id: "lead_nuevo", label: "Lead nuevo", color: "bg-gray-100" },
  { id: "visita_programada", label: "Visita programada", color: "bg-blue-50" },
  { id: "visita_realizada", label: "Visita realizada", color: "bg-indigo-50" },
  { id: "presupuesto_enviado", label: "Presupuesto enviado", color: "bg-yellow-50" },
  { id: "negociando", label: "Negociando", color: "bg-orange-50" },
  { id: "aceptado", label: "Aceptado", color: "bg-green-50" },
  { id: "descartado", label: "Descartado", color: "bg-red-50" },
];

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [newLead, setNewLead] = useState({ nombre: "", telefono: "", email: "", tipo_reforma: "", importe_estimado: "", origen: "", notas: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadLeads(); }, []);

  async function loadLeads() {
    const supabase = createClient();
    const { data } = await supabase.from("pipeline_leads").select("*").order("created_at", { ascending: false });
    setLeads(data || []);
    setLoading(false);
  }

  async function moveLeadTo(leadId: string, etapa: string) {
    const supabase = createClient();
    await supabase.from("pipeline_leads").update({ etapa }).eq("id", leadId);
    setLeads((prev) => prev.map((l) => l.id === leadId ? { ...l, etapa } : l));
  }

  async function createLead(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;

    const { data } = await supabase.from("pipeline_leads").insert({
      empresa_id: usr.empresa_id,
      nombre: newLead.nombre,
      telefono: newLead.telefono || null,
      email: newLead.email || null,
      tipo_reforma: newLead.tipo_reforma || null,
      importe_estimado: newLead.importe_estimado ? parseFloat(newLead.importe_estimado) : null,
      origen: newLead.origen || null,
      notas: newLead.notas || null,
      etapa: "lead_nuevo",
    }).select("*").single();

    if (data) setLeads((prev) => [data, ...prev]);
    setNewLead({ nombre: "", telefono: "", email: "", tipo_reforma: "", importe_estimado: "", origen: "", notas: "" });
    setShowNew(false);
    setSaving(false);
  }

  const totalPipeline = leads
    .filter((l) => l.etapa !== "descartado" && l.etapa !== "aceptado")
    .reduce((sum, l) => sum + (l.importe_estimado || 0), 0);

  const leadsEsteMes = leads.filter((l) => {
    const d = new Date(l.created_at);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Pipeline / CRM</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo lead
        </button>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Leads este mes</p>
          <p className="text-xl font-bold text-secondary">{leadsEsteMes}</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Valor pipeline</p>
          <p className="text-xl font-bold text-primary-500">{totalPipeline.toLocaleString("es-ES")}€</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-gray-500 uppercase">Total leads</p>
          <p className="text-xl font-bold text-secondary">{leads.length}</p>
        </div>
      </div>

      {/* Modal nuevo lead */}
      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={createLead} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-secondary">Nuevo lead</h2>
            <div>
              <label className="label">Nombre *</label>
              <input type="text" value={newLead.nombre} onChange={(e) => setNewLead({ ...newLead, nombre: e.target.value })} className="input" required autoFocus />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Teléfono</label>
                <input type="tel" value={newLead.telefono} onChange={(e) => setNewLead({ ...newLead, telefono: e.target.value })} className="input" />
              </div>
              <div>
                <label className="label">Email</label>
                <input type="email" value={newLead.email} onChange={(e) => setNewLead({ ...newLead, email: e.target.value })} className="input" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Tipo reforma</label>
                <input type="text" value={newLead.tipo_reforma} onChange={(e) => setNewLead({ ...newLead, tipo_reforma: e.target.value })} className="input" placeholder="Baño, cocina..." />
              </div>
              <div>
                <label className="label">Importe estimado</label>
                <input type="number" value={newLead.importe_estimado} onChange={(e) => setNewLead({ ...newLead, importe_estimado: e.target.value })} className="input" placeholder="€" />
              </div>
            </div>
            <div>
              <label className="label">Origen</label>
              <select value={newLead.origen} onChange={(e) => setNewLead({ ...newLead, origen: e.target.value })} className="input">
                <option value="">Sin especificar</option>
                <option value="recomendacion">Recomendación</option>
                <option value="web">Web</option>
                <option value="publicidad">Publicidad</option>
                <option value="redes">Redes sociales</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="label">Notas</label>
              <textarea value={newLead.notas} onChange={(e) => setNewLead({ ...newLead, notas: e.target.value })} className="input min-h-[60px] resize-y" />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Creando..." : "Crear lead"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Kanban */}
      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando pipeline...</p></div>
      ) : (
        <div className="flex gap-3 overflow-x-auto pb-4">
          {ETAPAS.map((etapa) => {
            const etapaLeads = leads.filter((l) => l.etapa === etapa.id);
            return (
              <div key={etapa.id} className={`flex-shrink-0 w-64 ${etapa.color} rounded-xl p-3`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-secondary">{etapa.label}</h3>
                  <span className="badge-neutral text-xs">{etapaLeads.length}</span>
                </div>
                <div className="space-y-2 min-h-[100px]">
                  {etapaLeads.map((lead) => (
                    <div key={lead.id} className="bg-white rounded-lg p-3 shadow-sm border border-border/50">
                      <p className="font-medium text-secondary text-sm mb-1">{lead.nombre}</p>
                      {lead.tipo_reforma && <p className="text-xs text-gray-500">{lead.tipo_reforma}</p>}
                      {lead.importe_estimado && (
                        <p className="text-xs font-semibold text-primary-500 mt-1">
                          {Number(lead.importe_estimado).toLocaleString("es-ES")}€
                        </p>
                      )}
                      <div className="flex items-center gap-1 mt-2">
                        {lead.telefono && (
                          <a href={`tel:${lead.telefono}`} className="p-1 rounded hover:bg-surface">
                            <Phone className="w-3 h-3 text-gray-400" />
                          </a>
                        )}
                        {lead.email && (
                          <a href={`mailto:${lead.email}`} className="p-1 rounded hover:bg-surface">
                            <Mail className="w-3 h-3 text-gray-400" />
                          </a>
                        )}
                      </div>
                      {/* Move buttons */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {ETAPAS.filter((e) => e.id !== lead.etapa).slice(0, 3).map((e) => (
                          <button
                            key={e.id}
                            onClick={() => moveLeadTo(lead.id, e.id)}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-surface text-gray-500 hover:bg-gray-200 truncate max-w-[80px]"
                          >
                            → {e.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
