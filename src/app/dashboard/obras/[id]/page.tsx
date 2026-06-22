"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Obra, ObraFase } from "@/lib/supabase/types";
import {
  ArrowLeft, Trash2, CheckCircle2, Circle, PlayCircle,
  Camera, Plus, MapPin, Calendar, User,
} from "lucide-react";

const estadoLabels: Record<string, { label: string; class: string }> = {
  pendiente: { label: "Pendiente", class: "badge-warning" },
  en_curso: { label: "En curso", class: "badge-info" },
  pausada: { label: "Pausada", class: "badge-neutral" },
  finalizada: { label: "Finalizada", class: "badge-success" },
  cancelada: { label: "Cancelada", class: "badge-danger" },
};

const faseIconMap: Record<string, React.ReactNode> = {
  pendiente: <Circle className="w-5 h-5 text-gray-300" />,
  en_curso: <PlayCircle className="w-5 h-5 text-blue-500" />,
  completada: <CheckCircle2 className="w-5 h-5 text-green-500" />,
};

export default function ObraDetallePage() {
  const { id } = useParams();
  const [obra, setObra] = useState<Obra | null>(null);
  const [fases, setFases] = useState<ObraFase[]>([]);
  const [tab, setTab] = useState("general");
  const [loading, setLoading] = useState(true);
  const [editingEstado, setEditingEstado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadObra();
  }, [id]);

  async function loadObra() {
    const supabase = createClient();
    const [obraRes, fasesRes] = await Promise.all([
      supabase.from("obras").select("*, clientes(nombre, telefono, email)").eq("id", id).single(),
      supabase.from("obra_fases").select("*").eq("obra_id", id).order("orden"),
    ]);
    if (obraRes.data) setObra(obraRes.data);
    setFases(fasesRes.data || []);
    setLoading(false);
  }

  async function updateEstado(estado: string) {
    const supabase = createClient();
    await supabase.from("obras").update({ estado }).eq("id", id);
    setObra((prev) => prev ? { ...prev, estado: estado as any } : null);
    setEditingEstado(false);
  }

  async function toggleFase(faseId: string, currentEstado: string) {
    const nextEstado = currentEstado === "pendiente" ? "en_curso" : currentEstado === "en_curso" ? "completada" : "pendiente";
    const supabase = createClient();
    await supabase
      .from("obra_fases")
      .update({
        estado: nextEstado,
        fecha_completado: nextEstado === "completada" ? new Date().toISOString().split("T")[0] : null,
      })
      .eq("id", faseId);
    setFases((prev) =>
      prev.map((f) =>
        f.id === faseId ? { ...f, estado: nextEstado as any, fecha_completado: nextEstado === "completada" ? new Date().toISOString().split("T")[0] : null } : f
      )
    );
  }

  async function handleDelete() {
    if (!confirm("¿Eliminar esta obra?")) return;
    const supabase = createClient();
    await supabase.from("obras").update({ deleted_at: new Date().toISOString() }).eq("id", id);
    router.push("/dashboard/obras");
  }

  if (loading) return <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;
  if (!obra) return <div className="card p-8 text-center"><p className="text-gray-500">Obra no encontrada</p></div>;

  const est = estadoLabels[obra.estado] || { label: obra.estado, class: "badge-neutral" };
  const fasesCompletadas = fases.filter((f) => f.estado === "completada").length;
  const progreso = fases.length > 0 ? Math.round((fasesCompletadas / fases.length) * 100) : 0;
  const cliente = obra.clientes as any;

  const tabs = [
    { id: "general", label: "General" },
    { id: "fases", label: "Fases" },
    { id: "fotos", label: "Fotos" },
    { id: "gastos", label: "Gastos" },
    { id: "documentos", label: "Documentos" },
  ];

  return (
    <div>
      <Link href="/dashboard/obras" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a obras
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-secondary">{obra.nombre}</h1>
            <div className="relative">
              <button onClick={() => setEditingEstado(!editingEstado)} className={est.class + " cursor-pointer"}>
                {est.label}
              </button>
              {editingEstado && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg border border-border shadow-lg py-1 z-10 w-40">
                  {Object.entries(estadoLabels).map(([key, val]) => (
                    <button key={key} onClick={() => updateEstado(key)} className="block w-full text-left px-3 py-2 text-sm hover:bg-surface">
                      <span className={val.class}>{val.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {cliente && (
              <Link href={`/dashboard/clientes/${obra.cliente_id}`} className="flex items-center gap-1 hover:text-primary-500">
                <User className="w-3.5 h-3.5" /> {cliente.nombre}
              </Link>
            )}
            {obra.direccion && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {obra.direccion}
              </span>
            )}
            {obra.fecha_inicio && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {new Date(obra.fecha_inicio).toLocaleDateString("es-ES")}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={handleDelete} className="btn-secondary !px-3 !py-2 !text-sm text-red-500">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="card p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-secondary">Progreso de obra</span>
          <span className="text-sm font-semibold text-primary-500">{progreso}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div className="bg-primary-500 h-3 rounded-full transition-all" style={{ width: `${progreso}%` }} />
        </div>
        <p className="text-xs text-gray-500 mt-1">{fasesCompletadas} de {fases.length} fases completadas</p>
      </div>

      {/* Stats */}
      {obra.presupuesto_aprobado && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          <div className="card p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Presupuesto</p>
            <p className="text-xl font-bold text-secondary">{Number(obra.presupuesto_aprobado).toLocaleString("es-ES")}€</p>
          </div>
          <div className="card p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Tipo</p>
            <p className="text-lg font-semibold text-secondary">{obra.tipo_reforma || "—"}</p>
          </div>
          <div className="card p-4 col-span-2 sm:col-span-1">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Fecha fin estimada</p>
            <p className="text-lg font-semibold text-secondary">
              {obra.fecha_fin_estimada ? new Date(obra.fecha_fin_estimada).toLocaleDateString("es-ES") : "—"}
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              tab === t.id ? "border-primary-500 text-primary-500" : "border-transparent text-gray-500 hover:text-secondary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "general" && (
        <div className="space-y-4">
          {obra.descripcion && (
            <div className="card p-5">
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Descripción</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{obra.descripcion}</p>
            </div>
          )}
          {obra.notas_internas && (
            <div className="card p-5">
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Notas internas</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{obra.notas_internas}</p>
            </div>
          )}
          {cliente && (
            <div className="card p-5">
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Cliente</h3>
              <Link href={`/dashboard/clientes/${obra.cliente_id}`} className="text-primary-500 font-medium hover:text-primary-600">
                {cliente.nombre}
              </Link>
              {cliente.telefono && <p className="text-sm text-gray-500 mt-1">{cliente.telefono}</p>}
              {cliente.email && <p className="text-sm text-gray-500">{cliente.email}</p>}
            </div>
          )}
        </div>
      )}

      {tab === "fases" && (
        <div className="space-y-2">
          {fases.map((fase) => (
            <div key={fase.id} className="card p-4 flex items-center gap-4">
              <button onClick={() => toggleFase(fase.id, fase.estado)} className="flex-shrink-0">
                {faseIconMap[fase.estado]}
              </button>
              <div className="flex-1">
                <p className={`font-medium ${fase.estado === "completada" ? "text-gray-400 line-through" : "text-secondary"}`}>
                  {fase.nombre}
                </p>
                {fase.fecha_completado && (
                  <p className="text-xs text-gray-400">
                    Completada el {new Date(fase.fecha_completado).toLocaleDateString("es-ES")}
                  </p>
                )}
              </div>
              <span className={`text-xs font-medium ${
                fase.estado === "completada" ? "text-green-500" : fase.estado === "en_curso" ? "text-blue-500" : "text-gray-400"
              }`}>
                {fase.estado === "completada" ? "Completada" : fase.estado === "en_curso" ? "En curso" : "Pendiente"}
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === "fotos" && (
        <div className="card p-8 text-center">
          <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-secondary mb-2">Sin fotos todavía</h3>
          <p className="text-sm text-gray-500 mb-4">Sube fotos del antes, durante y después de la obra</p>
          <button className="btn-primary inline-flex items-center gap-2">
            <Plus className="w-4 h-4" /> Subir fotos
          </button>
        </div>
      )}

      {tab === "gastos" && (
        <div className="card p-8 text-center">
          <p className="text-gray-400 text-sm">Los gastos de esta obra aparecerán aquí</p>
          <Link href="/dashboard/gastos" className="text-primary-500 text-sm font-medium mt-2 inline-block">
            Ir a gastos
          </Link>
        </div>
      )}

      {tab === "documentos" && (
        <div className="card p-8 text-center">
          <p className="text-gray-400 text-sm">Los documentos de esta obra aparecerán aquí</p>
          <button className="btn-primary inline-flex items-center gap-2 mt-4">
            <Plus className="w-4 h-4" /> Subir documento
          </button>
        </div>
      )}
    </div>
  );
}
