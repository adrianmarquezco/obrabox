"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Plus, UserCog, Phone, Star } from "lucide-react";

type Trabajador = {
  id: string;
  nombre: string;
  telefono: string | null;
  email: string | null;
  especialidades: string[] | null;
  tipo: string;
  coste_hora: number | null;
  coste_dia: number | null;
  valoracion_calidad: number | null;
  activo: boolean;
};

const tipoLabels: Record<string, string> = {
  empleado: "Empleado",
  subcontrata: "Subcontrata",
  autonomo: "Autónomo",
};

export default function EquipoPage() {
  const [equipo, setEquipo] = useState<Trabajador[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({
    nombre: "", telefono: "", email: "", tipo: "empleado",
    especialidades: "", coste_hora: "", coste_dia: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadEquipo(); }, []);

  async function loadEquipo() {
    const supabase = createClient();
    const { data } = await supabase.from("equipo").select("*").eq("activo", true).order("nombre");
    setEquipo(data || []);
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

    const especialidades = form.especialidades
      ? form.especialidades.split(",").map((s) => s.trim()).filter(Boolean)
      : null;

    const { data } = await supabase.from("equipo").insert({
      empresa_id: usr.empresa_id,
      nombre: form.nombre,
      telefono: form.telefono || null,
      email: form.email || null,
      tipo: form.tipo,
      especialidades,
      coste_hora: form.coste_hora ? parseFloat(form.coste_hora) : null,
      coste_dia: form.coste_dia ? parseFloat(form.coste_dia) : null,
    }).select("*").single();

    if (data) setEquipo((prev) => [...prev, data].sort((a, b) => a.nombre.localeCompare(b.nombre)));
    setForm({ nombre: "", telefono: "", email: "", tipo: "empleado", especialidades: "", coste_hora: "", coste_dia: "" });
    setShowNew(false);
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Equipo</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Añadir trabajador
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/equipo" className="badge-info">Equipo</Link>
        <Link href="/dashboard/equipo/planning" className="badge-neutral">Planning semanal</Link>
        <Link href="/dashboard/equipo/fichaje" className="badge-neutral">Fichaje</Link>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-secondary">Nuevo trabajador</h2>
            <div>
              <label className="label">Nombre *</label>
              <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="input" required autoFocus />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Teléfono</label>
                <input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="input" />
              </div>
              <div>
                <label className="label">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
              </div>
            </div>
            <div>
              <label className="label">Tipo</label>
              <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="input">
                <option value="empleado">Empleado</option>
                <option value="subcontrata">Subcontrata</option>
                <option value="autonomo">Autónomo colaborador</option>
              </select>
            </div>
            <div>
              <label className="label">Especialidades (separadas por comas)</label>
              <input type="text" value={form.especialidades} onChange={(e) => setForm({ ...form, especialidades: e.target.value })} className="input" placeholder="Fontanería, Electricidad" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">€/hora</label>
                <input type="number" step="0.01" value={form.coste_hora} onChange={(e) => setForm({ ...form, coste_hora: e.target.value })} className="input" />
              </div>
              <div>
                <label className="label">€/día</label>
                <input type="number" step="0.01" value={form.coste_dia} onChange={(e) => setForm({ ...form, coste_dia: e.target.value })} className="input" />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Guardando..." : "Añadir"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : equipo.length === 0 ? (
        <div className="card p-8 text-center">
          <UserCog className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin equipo registrado</h2>
          <p className="text-sm text-gray-500">Añade trabajadores y subcontratas</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipo.map((t) => (
            <div key={t.id} className="card p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-secondary">{t.nombre}</h3>
                  <span className="badge-neutral text-xs">{tipoLabels[t.tipo] || t.tipo}</span>
                </div>
                {t.valoracion_calidad && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary-400 text-primary-400" />
                    <span className="text-xs text-gray-500">{t.valoracion_calidad}</span>
                  </div>
                )}
              </div>
              {t.especialidades && t.especialidades.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {t.especialidades.map((e) => (
                    <span key={e} className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">{e}</span>
                  ))}
                </div>
              )}
              {t.telefono && (
                <a href={`tel:${t.telefono}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-500">
                  <Phone className="w-3.5 h-3.5" /> {t.telefono}
                </a>
              )}
              {(t.coste_hora || t.coste_dia) && (
                <p className="text-xs text-gray-400 mt-2">
                  {t.coste_hora && `${t.coste_hora}€/h`}
                  {t.coste_hora && t.coste_dia && " · "}
                  {t.coste_dia && `${t.coste_dia}€/día`}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
