"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Clock, MapPin, AlertTriangle } from "lucide-react";

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

export default function FichajePage() {
  const [fichajes, setFichajes] = useState<Fichaje[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadFichajes(); }, []);

  async function loadFichajes() {
    const supabase = createClient();
    const { data } = await supabase
      .from("fichajes")
      .select("*, equipo(nombre), obras(nombre)")
      .order("fecha", { ascending: false })
      .limit(50);
    setFichajes(data || []);
    setLoading(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Fichaje / Registro de jornada</h1>
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
            Según el RD-ley 8/2019, todas las empresas deben registrar la jornada laboral de sus trabajadores.
            Los registros deben conservarse durante 4 años.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : fichajes.length === 0 ? (
        <div className="card p-8 text-center">
          <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin fichajes registrados</h2>
          <p className="text-sm text-gray-500">
            Los trabajadores pueden fichar desde su móvil accediendo a ObraBox
          </p>
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
                  <td className="p-3 text-gray-500">{f.hora_entrada ? new Date(f.hora_entrada).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) : "—"}</td>
                  <td className="p-3 text-gray-500">{f.hora_salida ? new Date(f.hora_salida).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) : "—"}</td>
                  <td className="p-3 text-right font-medium text-secondary">{f.horas_totales ? `${f.horas_totales}h` : "—"}</td>
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
