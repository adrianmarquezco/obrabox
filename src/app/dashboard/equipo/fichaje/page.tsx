"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Clock, AlertTriangle, LogIn, LogOut } from "lucide-react";

type Fichaje = {
  id: string;
  equipo_id: string;
  obra_id: string | null;
  fecha: string;
  hora_entrada: string | null;
  hora_salida: string | null;
  horas_totales: number | null;
  equipo?: { nombre: string };
  obras?: { nombre: string } | null;
};

type Trabajador = { id: string; nombre: string };
type Obra = { id: string; nombre: string };

export default function FichajePage() {
  const [fichajes, setFichajes] = useState<Fichaje[]>([]);
  const [equipo, setEquipo] = useState<Trabajador[]>([]);
  const [obras, setObras] = useState<Obra[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFichar, setShowFichar] = useState(false);
  const [fichaForm, setFichaForm] = useState({ equipo_id: "", obra_id: "", tipo: "entrada" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [fichRes, eqRes, obRes] = await Promise.all([
      supabase.from("fichajes").select("*, equipo(nombre), obras(nombre)").order("fecha", { ascending: false }).order("hora_entrada", { ascending: false }).limit(50),
      supabase.from("equipo").select("id, nombre").eq("activo", true).order("nombre"),
      supabase.from("obras").select("id, nombre").is("deleted_at", null).in("estado", ["pendiente", "en_curso"]).order("nombre"),
    ]);
    setFichajes(fichRes.data || []);
    setEquipo(eqRes.data || []);
    setObras(obRes.data || []);
    setLoading(false);
  }

  async function fichar(e: React.FormEvent) {
    e.preventDefault();
    if (!fichaForm.equipo_id) return;
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;

    const now = new Date();
    const hoy = now.toISOString().split("T")[0];

    if (fichaForm.tipo === "entrada") {
      const { data } = await supabase.from("fichajes").insert({
        empresa_id: usr.empresa_id,
        equipo_id: fichaForm.equipo_id,
        obra_id: fichaForm.obra_id || null,
        fecha: hoy,
        hora_entrada: now.toISOString(),
      }).select("*, equipo(nombre), obras(nombre)").single();
      if (data) setFichajes((prev) => [data, ...prev]);
    } else {
      const { data: openFichaje } = await supabase
        .from("fichajes")
        .select("id, hora_entrada")
        .eq("equipo_id", fichaForm.equipo_id)
        .eq("fecha", hoy)
        .is("hora_salida", null)
        .order("hora_entrada", { ascending: false })
        .limit(1)
        .single();

      if (openFichaje) {
        const entrada = new Date(openFichaje.hora_entrada!);
        const horas = Math.round(((now.getTime() - entrada.getTime()) / (1000 * 60 * 60)) * 100) / 100;
        await supabase.from("fichajes").update({
          hora_salida: now.toISOString(),
          horas_totales: horas,
        }).eq("id", openFichaje.id);
        setFichajes((prev) => prev.map((f) => f.id === openFichaje.id ? { ...f, hora_salida: now.toISOString(), horas_totales: horas } : f));
      }
    }

    setShowFichar(false);
    setFichaForm({ equipo_id: "", obra_id: "", tipo: "entrada" });
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Fichaje / Registro de jornada</h1>
        <button onClick={() => setShowFichar(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Clock className="w-4 h-4" /> Fichar
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/equipo" className="badge-neutral">Equipo</Link>
        <Link href="/dashboard/equipo/planning" className="badge-neutral">Planning semanal</Link>
        <Link href="/dashboard/equipo/fichaje" className="badge-info">Fichaje</Link>
      </div>

      <div className="card p-4 mb-6 bg-blue-50 border-blue-200 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-700">
          <p className="font-medium">Registro de jornada obligatorio</p>
          <p className="text-blue-600 mt-1">
            Según el RD-ley 8/2019, todas las empresas deben registrar la jornada laboral. Los registros se conservan 4 años.
          </p>
        </div>
      </div>

      {showFichar && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={fichar} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-secondary">Registrar fichaje</h2>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setFichaForm({ ...fichaForm, tipo: "entrada" })}
                className={`p-4 rounded-xl border-2 text-center transition-colors ${fichaForm.tipo === "entrada" ? "border-green-500 bg-green-50" : "border-border"}`}>
                <LogIn className="w-6 h-6 text-green-500 mx-auto mb-1" />
                <span className="text-sm font-semibold text-secondary">ENTRADA</span>
              </button>
              <button type="button" onClick={() => setFichaForm({ ...fichaForm, tipo: "salida" })}
                className={`p-4 rounded-xl border-2 text-center transition-colors ${fichaForm.tipo === "salida" ? "border-red-500 bg-red-50" : "border-border"}`}>
                <LogOut className="w-6 h-6 text-red-500 mx-auto mb-1" />
                <span className="text-sm font-semibold text-secondary">SALIDA</span>
              </button>
            </div>
            <div>
              <label className="label">Trabajador *</label>
              <select value={fichaForm.equipo_id} onChange={(e) => setFichaForm({ ...fichaForm, equipo_id: e.target.value })} className="input" required>
                <option value="">Seleccionar</option>
                {equipo.map((t) => <option key={t.id} value={t.id}>{t.nombre}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Obra</label>
              <select value={fichaForm.obra_id} onChange={(e) => setFichaForm({ ...fichaForm, obra_id: e.target.value })} className="input">
                <option value="">Sin obra</option>
                {obras.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
              </select>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowFichar(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className={`flex-1 font-semibold px-4 py-3 rounded-lg text-white disabled:opacity-50 ${fichaForm.tipo === "entrada" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}>
                {saving ? "Registrando..." : fichaForm.tipo === "entrada" ? "Fichar ENTRADA" : "Fichar SALIDA"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : fichajes.length === 0 ? (
        <div className="card p-8 text-center">
          <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin fichajes registrados</h2>
          <p className="text-sm text-gray-500">Usa el botón &ldquo;Fichar&rdquo; para registrar entrada y salida</p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="p-3 text-left font-medium text-gray-500">Trabajador</th>
                <th className="p-3 text-left font-medium text-gray-500">Fecha</th>
                <th className="p-3 text-left font-medium text-gray-500">Entrada</th>
                <th className="p-3 text-left font-medium text-gray-500">Salida</th>
                <th className="p-3 text-right font-medium text-gray-500">Horas</th>
                <th className="p-3 text-left font-medium text-gray-500">Obra</th>
              </tr>
            </thead>
            <tbody>
              {fichajes.map((f) => (
                <tr key={f.id} className="border-b border-border/50">
                  <td className="p-3 font-medium text-secondary">{(f.equipo as any)?.nombre}</td>
                  <td className="p-3 text-gray-500">{new Date(f.fecha).toLocaleDateString("es-ES")}</td>
                  <td className="p-3 text-green-600 font-medium">{f.hora_entrada ? new Date(f.hora_entrada).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) : "—"}</td>
                  <td className="p-3 text-red-500 font-medium">{f.hora_salida ? new Date(f.hora_salida).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) : <span className="text-yellow-500">En curso</span>}</td>
                  <td className="p-3 text-right font-semibold text-secondary">{f.horas_totales ? `${f.horas_totales}h` : "—"}</td>
                  <td className="p-3 text-gray-500">{(f.obras as any)?.nombre || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
