"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Trabajador = { id: string; nombre: string };
type Obra = { id: string; nombre: string };
type Asignacion = { id: string; obra_id: string; equipo_id: string; fecha_inicio: string | null; fecha_fin: string | null; obras?: { nombre: string } };

const COLORES_OBRA = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
  "bg-cyan-100 text-cyan-700",
  "bg-amber-100 text-amber-700",
];

function getWeekDays(offset: number) {
  const now = new Date();
  const monday = new Date(now);
  monday.setDate(now.getDate() - now.getDay() + 1 + offset * 7);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export default function PlanningPage() {
  const [equipo, setEquipo] = useState<Trabajador[]>([]);
  const [obras, setObras] = useState<Obra[]>([]);
  const [asignaciones, setAsignaciones] = useState<Asignacion[]>([]);
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const days = getWeekDays(weekOffset);
  const obraColorMap = new Map<string, string>();

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [eqRes, obRes, asRes] = await Promise.all([
      supabase.from("equipo").select("id, nombre").eq("activo", true).order("nombre"),
      supabase.from("obras").select("id, nombre").is("deleted_at", null).in("estado", ["pendiente", "en_curso"]).order("nombre"),
      supabase.from("asignaciones_obra").select("*, obras(nombre)"),
    ]);
    setEquipo(eqRes.data || []);
    setObras(obRes.data || []);
    setAsignaciones(asRes.data || []);
    setLoading(false);
  }

  function getObraColor(obraId: string) {
    if (!obraColorMap.has(obraId)) {
      obraColorMap.set(obraId, COLORES_OBRA[obraColorMap.size % COLORES_OBRA.length]);
    }
    return obraColorMap.get(obraId)!;
  }

  function getAsignacion(equipoId: string, day: Date) {
    const dayStr = day.toISOString().split("T")[0];
    return asignaciones.find((a) => {
      if (a.equipo_id !== equipoId) return false;
      const inicio = a.fecha_inicio || "1970-01-01";
      const fin = a.fecha_fin || "2099-12-31";
      return dayStr >= inicio && dayStr <= fin;
    });
  }

  async function asignar(equipoId: string, day: Date, obraId: string) {
    const supabase = createClient();
    const dayStr = day.toISOString().split("T")[0];
    const { data } = await supabase.from("asignaciones_obra").insert({
      obra_id: obraId,
      equipo_id: equipoId,
      fecha_inicio: dayStr,
      fecha_fin: dayStr,
    }).select("*, obras(nombre)").single();
    if (data) setAsignaciones((prev) => [...prev, data]);
  }

  if (loading) return <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;

  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Planning semanal</h1>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/equipo" className="badge-neutral">Equipo</Link>
        <Link href="/dashboard/equipo/planning" className="badge-info">Planning semanal</Link>
        <Link href="/dashboard/equipo/fichaje" className="badge-neutral">Fichaje</Link>
      </div>

      {/* Week navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setWeekOffset((w) => w - 1)} className="btn-secondary !px-3 !py-2">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-medium text-secondary">
          {days[0].toLocaleDateString("es-ES", { day: "numeric", month: "short" })} — {days[6].toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
        </span>
        <button onClick={() => setWeekOffset((w) => w + 1)} className="btn-secondary !px-3 !py-2">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {equipo.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-gray-400">Añade trabajadores para usar el planning</p>
          <Link href="/dashboard/equipo" className="text-primary-500 text-sm font-medium mt-2 inline-block">Ir a equipo</Link>
        </div>
      ) : (
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left font-medium text-gray-500 w-36 sticky left-0 bg-white">Trabajador</th>
                {days.map((d, i) => {
                  const isToday = d.toDateString() === new Date().toDateString();
                  return (
                    <th key={i} className={`p-3 text-center font-medium min-w-[100px] ${isToday ? "bg-primary-50 text-primary-600" : "text-gray-500"}`}>
                      <div>{dayNames[i]}</div>
                      <div className="text-xs">{d.getDate()}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {equipo.map((t) => (
                <tr key={t.id} className="border-b border-border/50">
                  <td className="p-3 font-medium text-secondary sticky left-0 bg-white">{t.nombre}</td>
                  {days.map((d, i) => {
                    const asig = getAsignacion(t.id, d);
                    const isToday = d.toDateString() === new Date().toDateString();
                    return (
                      <td key={i} className={`p-1.5 ${isToday ? "bg-primary-50/50" : ""}`}>
                        {asig ? (
                          <div className={`rounded-lg px-2 py-1.5 text-xs font-medium text-center ${getObraColor(asig.obra_id)}`}>
                            {(asig.obras as any)?.nombre || "Obra"}
                          </div>
                        ) : (
                          <select
                            className="w-full text-xs text-gray-300 bg-transparent border border-dashed border-gray-200 rounded-lg px-1 py-1.5 hover:border-primary-300 cursor-pointer"
                            value=""
                            onChange={(e) => { if (e.target.value) asignar(t.id, d, e.target.value); }}
                          >
                            <option value="">—</option>
                            {obras.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
                          </select>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
