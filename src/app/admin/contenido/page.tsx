"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { FileText, Plus, Pencil, Trash2, Globe } from "lucide-react";

type Subvencion = {
  id: string;
  nombre: string;
  organismo: string | null;
  comunidad_autonoma: string | null;
  importe_maximo: number | null;
  activa: boolean;
};

export default function AdminContenidoPage() {
  const [tab, setTab] = useState("subvenciones");
  const [subvenciones, setSubvenciones] = useState<Subvencion[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({
    nombre: "", organismo: "", comunidad_autonoma: "", tipo_reforma: "",
    requisitos: "", importe_maximo: "", plazo_solicitud: "", documentacion: "", enlace_oficial: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const { data } = await supabase.from("subvenciones").select("*").order("nombre");
    setSubvenciones(data || []);
    setLoading(false);
  }

  async function createSubvencion(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const { data } = await supabase.from("subvenciones").insert({
      nombre: form.nombre,
      organismo: form.organismo || null,
      comunidad_autonoma: form.comunidad_autonoma || null,
      tipo_reforma: form.tipo_reforma ? form.tipo_reforma.split(",").map((s) => s.trim()) : null,
      requisitos: form.requisitos || null,
      importe_maximo: form.importe_maximo ? parseFloat(form.importe_maximo) : null,
      plazo_solicitud: form.plazo_solicitud || null,
      documentacion: form.documentacion || null,
      enlace_oficial: form.enlace_oficial || null,
    }).select("*").single();
    if (data) setSubvenciones((prev) => [...prev, data]);
    setForm({ nombre: "", organismo: "", comunidad_autonoma: "", tipo_reforma: "", requisitos: "", importe_maximo: "", plazo_solicitud: "", documentacion: "", enlace_oficial: "" });
    setShowNew(false);
    setSaving(false);
  }

  async function toggleSubvencion(id: string, activa: boolean) {
    const supabase = createClient();
    await supabase.from("subvenciones").update({ activa: !activa }).eq("id", id);
    setSubvenciones((prev) => prev.map((s) => s.id === id ? { ...s, activa: !activa } : s));
  }

  async function deleteSubvencion(id: string) {
    if (!confirm("¿Eliminar esta subvención?")) return;
    const supabase = createClient();
    await supabase.from("subvenciones").delete().eq("id", id);
    setSubvenciones((prev) => prev.filter((s) => s.id !== id));
  }

  const tabs = [
    { id: "subvenciones", label: "Subvenciones" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestión de contenido</h1>

      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${tab === t.id ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{t.label}</button>
        ))}
      </div>

      {tab === "subvenciones" && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Subvenciones ({subvenciones.length})</h2>
            <button onClick={() => setShowNew(true)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Añadir subvención
            </button>
          </div>

          {showNew && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <form onSubmit={createSubvencion} className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-lg font-bold text-gray-900">Nueva subvención</h2>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Nombre *</label>
                  <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Organismo</label>
                    <input type="text" value={form.organismo} onChange={(e) => setForm({ ...form, organismo: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Comunidad autónoma</label>
                    <input type="text" value={form.comunidad_autonoma} onChange={(e) => setForm({ ...form, comunidad_autonoma: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Importe máximo (€)</label>
                    <input type="number" value={form.importe_maximo} onChange={(e) => setForm({ ...form, importe_maximo: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Plazo solicitud</label>
                    <input type="text" value={form.plazo_solicitud} onChange={(e) => setForm({ ...form, plazo_solicitud: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" placeholder="Hasta 31/12/2026" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Requisitos</label>
                  <textarea value={form.requisitos} onChange={(e) => setForm({ ...form, requisitos: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 min-h-[60px] resize-y" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Enlace oficial</label>
                  <input type="url" value={form.enlace_oficial} onChange={(e) => setForm({ ...form, enlace_oficial: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setShowNew(false)} className="flex-1 bg-gray-100 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-sm">Cancelar</button>
                  <button type="submit" disabled={saving} className="flex-1 bg-red-500 text-white font-semibold px-4 py-2.5 rounded-lg text-sm disabled:opacity-50">
                    {saving ? "Guardando..." : "Crear subvención"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {loading ? (
            <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
          ) : (
            <div className="space-y-2">
              {subvenciones.map((s) => (
                <div key={s.id} className="bg-white rounded-xl border p-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900 text-sm">{s.nombre}</p>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.activa ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}>
                        {s.activa ? "Activa" : "Inactiva"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                      {s.organismo && <span>{s.organismo}</span>}
                      {s.comunidad_autonoma && <span>{s.comunidad_autonoma}</span>}
                      {s.importe_maximo && <span>Hasta {Number(s.importe_maximo).toLocaleString("es-ES")}€</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button onClick={() => toggleSubvencion(s.id, s.activa)} className={`text-xs font-medium ${s.activa ? "text-amber-500" : "text-green-500"}`}>
                      {s.activa ? "Desactivar" : "Activar"}
                    </button>
                    <button onClick={() => deleteSubvencion(s.id)} className="text-xs text-red-400 hover:text-red-500">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
              {subvenciones.length === 0 && (
                <div className="bg-white rounded-xl border p-8 text-center">
                  <Globe className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">No hay subvenciones registradas</p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {tab === "blog" && (
        <div className="bg-white rounded-xl border p-8 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Los artículos del blog se gestionan directamente en el código. Próximamente: editor de blog desde el admin.</p>
        </div>
      )}
    </div>
  );
}
