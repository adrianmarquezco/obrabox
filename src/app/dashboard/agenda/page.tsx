"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

type Cita = {
  id: string;
  tipo: string;
  titulo: string;
  fecha_hora: string;
  duracion_minutos: number;
  direccion: string | null;
  notas: string | null;
  cliente_id: string | null;
  obra_id: string | null;
  clientes?: { nombre: string } | null;
  obras?: { nombre: string } | null;
};

const tipoConfig: Record<string, { label: string; color: string }> = {
  visita_valoracion: { label: "Visita valoración", color: "bg-green-100 text-green-700 border-green-200" },
  inicio_obra: { label: "Inicio obra", color: "bg-blue-100 text-blue-700 border-blue-200" },
  entrega_material: { label: "Entrega material", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  reunion_cliente: { label: "Reunión cliente", color: "bg-purple-100 text-purple-700 border-purple-200" },
  revision: { label: "Revisión", color: "bg-orange-100 text-orange-700 border-orange-200" },
  fin_obra: { label: "Fin de obra", color: "bg-red-100 text-red-700 border-red-200" },
  otro: { label: "Otro", color: "bg-gray-100 text-gray-700 border-gray-200" },
};

export default function AgendaPage() {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showNew, setShowNew] = useState(false);
  const [clientes, setClientes] = useState<{ id: string; nombre: string }[]>([]);
  const [obras, setObras] = useState<{ id: string; nombre: string }[]>([]);
  const [form, setForm] = useState({
    tipo: "visita_valoracion", titulo: "", fecha: "", hora: "10:00",
    duracion: "60", cliente_id: "", obra_id: "", direccion: "", notas: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [citasRes, cliRes, obraRes] = await Promise.all([
      supabase.from("agenda_citas").select("*, clientes(nombre), obras(nombre)").order("fecha_hora"),
      supabase.from("clientes").select("id, nombre").is("deleted_at", null).order("nombre"),
      supabase.from("obras").select("id, nombre").is("deleted_at", null).order("nombre"),
    ]);
    setCitas(citasRes.data || []);
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

    const fechaHora = `${form.fecha}T${form.hora}:00`;

    const { data } = await supabase.from("agenda_citas").insert({
      empresa_id: usr.empresa_id,
      tipo: form.tipo,
      titulo: form.titulo,
      fecha_hora: fechaHora,
      duracion_minutos: parseInt(form.duracion),
      cliente_id: form.cliente_id || null,
      obra_id: form.obra_id || null,
      direccion: form.direccion || null,
      notas: form.notas || null,
    }).select("*, clientes(nombre), obras(nombre)").single();

    if (data) setCitas((prev) => [...prev, data].sort((a, b) => a.fecha_hora.localeCompare(b.fecha_hora)));
    setForm({ tipo: "visita_valoracion", titulo: "", fecha: "", hora: "10:00", duracion: "60", cliente_id: "", obra_id: "", direccion: "", notas: "" });
    setShowNew(false);
    setSaving(false);
  }

  function getDaysInMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPad = (firstDay.getDay() + 6) % 7;
    const days: (Date | null)[] = Array.from({ length: startPad }, () => null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  }

  function getCitasForDay(day: Date) {
    return citas.filter((c) => {
      const d = new Date(c.fecha_hora);
      return d.getDate() === day.getDate() && d.getMonth() === day.getMonth() && d.getFullYear() === day.getFullYear();
    });
  }

  const calDays = getDaysInMonth(currentMonth);
  const today = new Date();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Agenda</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva cita
        </button>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(tipoConfig).map(([key, val]) => (
          <span key={key} className={`text-xs px-2 py-1 rounded-full border ${val.color}`}>{val.label}</span>
        ))}
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-secondary">Nueva cita</h2>
            <div>
              <label className="label">Tipo</label>
              <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="input">
                {Object.entries(tipoConfig).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Título *</label>
              <input type="text" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} className="input" placeholder="Visita valoración baño" required />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="label">Fecha *</label>
                <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="label">Hora</label>
                <input type="time" value={form.hora} onChange={(e) => setForm({ ...form, hora: e.target.value })} className="input" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
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
            </div>
            <div>
              <label className="label">Dirección</label>
              <input type="text" value={form.direccion} onChange={(e) => setForm({ ...form, direccion: e.target.value })} className="input" placeholder="Calle..." />
            </div>
            <div>
              <label className="label">Notas</label>
              <textarea value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} className="input min-h-[60px] resize-y" />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Creando..." : "Crear cita"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Calendar navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="btn-secondary !px-3 !py-2">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-lg font-semibold text-secondary capitalize">
          {currentMonth.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
        </span>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="btn-secondary !px-3 !py-2">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="card overflow-hidden">
          <div className="grid grid-cols-7">
            {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d) => (
              <div key={d} className="p-2 text-center text-xs font-semibold text-gray-500 border-b border-border bg-surface">{d}</div>
            ))}
            {calDays.map((day, i) => {
              if (!day) return <div key={`empty-${i}`} className="p-2 border-b border-r border-border/50 bg-gray-50 min-h-[80px]" />;
              const isToday = day.toDateString() === today.toDateString();
              const dayCitas = getCitasForDay(day);
              return (
                <div key={i} className={`p-1.5 border-b border-r border-border/50 min-h-[80px] ${isToday ? "bg-primary-50/50" : ""}`}>
                  <span className={`text-xs font-medium ${isToday ? "bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center" : "text-gray-500"}`}>
                    {day.getDate()}
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {dayCitas.slice(0, 3).map((c) => {
                      const cfg = tipoConfig[c.tipo] || tipoConfig.otro;
                      return (
                        <div key={c.id} className={`text-[10px] px-1 py-0.5 rounded truncate ${cfg.color}`}>
                          {new Date(c.fecha_hora).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })} {c.titulo}
                        </div>
                      );
                    })}
                    {dayCitas.length > 3 && (
                      <span className="text-[10px] text-gray-400">+{dayCitas.length - 3} más</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Próximas citas */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-secondary mb-3">Próximas citas</h2>
        {citas.filter((c) => new Date(c.fecha_hora) >= today).length === 0 ? (
          <div className="card p-6 text-center">
            <CalendarDays className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No tienes citas próximas</p>
          </div>
        ) : (
          <div className="space-y-2">
            {citas
              .filter((c) => new Date(c.fecha_hora) >= today)
              .slice(0, 10)
              .map((c) => {
                const cfg = tipoConfig[c.tipo] || tipoConfig.otro;
                const fecha = new Date(c.fecha_hora);
                return (
                  <div key={c.id} className="card p-4 flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${cfg.color.split(" ")[0]}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-secondary text-sm">{c.titulo}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{fecha.toLocaleDateString("es-ES")} {fecha.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}</span>
                        {c.clientes && <span>{(c.clientes as any).nombre}</span>}
                        {c.direccion && <span className="truncate">{c.direccion}</span>}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${cfg.color}`}>{cfg.label}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
