"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
type ClienteOption = { id: string; nombre: string };

const FASES_DEFECTO = [
  "Demolición",
  "Albañilería",
  "Fontanería",
  "Electricidad",
  "Carpintería",
  "Solados / Alicatados",
  "Pintura",
  "Limpieza",
  "Remates",
];

export default function NuevaObraPage() {
  const [step, setStep] = useState(0);
  const [clientes, setClientes] = useState<ClienteOption[]>([]);
  const [form, setForm] = useState({
    nombre: "",
    tipo_reforma: "",
    descripcion: "",
    cliente_id: "",
    direccion: "",
    presupuesto_aprobado: "",
    fecha_inicio: "",
    fecha_fin_estimada: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    loadClientes();
  }, []);

  async function loadClientes() {
    const supabase = createClient();
    const { data } = await supabase
      .from("clientes")
      .select("id, nombre")
      .is("deleted_at", null)
      .order("nombre");
    setClientes(data || []);
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: usr } = await supabase
      .from("usuarios")
      .select("empresa_id")
      .eq("id", user.id)
      .single();
    if (!usr) return;

    const { data: obra, error: err } = await supabase
      .from("obras")
      .insert({
        empresa_id: usr.empresa_id,
        nombre: form.nombre,
        tipo_reforma: form.tipo_reforma || null,
        descripcion: form.descripcion || null,
        cliente_id: form.cliente_id || null,
        direccion: form.direccion || null,
        presupuesto_aprobado: form.presupuesto_aprobado ? parseFloat(form.presupuesto_aprobado) : null,
        fecha_inicio: form.fecha_inicio || null,
        fecha_fin_estimada: form.fecha_fin_estimada || null,
        estado: "pendiente",
      })
      .select("id")
      .single();

    if (err || !obra) {
      setError("Error al crear la obra");
      setLoading(false);
      return;
    }

    const fases = FASES_DEFECTO.map((nombre, i) => ({
      obra_id: obra.id,
      nombre,
      orden: i,
      estado: "pendiente",
    }));
    await supabase.from("obra_fases").insert(fases);

    router.push(`/dashboard/obras/${obra.id}`);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/dashboard/obras" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a obras
      </Link>

      <h1 className="text-2xl font-bold text-secondary mb-6">Nueva obra</h1>

      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-6">
        {["Datos básicos", "Cliente", "Detalles"].map((label, i) => (
          <button
            key={i}
            onClick={() => i <= step && setStep(i)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
              i === step ? "bg-primary-500 text-white" : i < step ? "bg-primary-100 text-primary-600" : "bg-gray-100 text-gray-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <div className="card p-6">
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <label className="label">Nombre de la obra *</label>
              <input type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className="input" placeholder="Reforma baño Calle Mayor" autoFocus />
            </div>
            <div>
              <label className="label">Tipo de reforma</label>
              <select value={form.tipo_reforma} onChange={(e) => update("tipo_reforma", e.target.value)} className="input">
                <option value="">Seleccionar</option>
                <option value="bano">Baño</option>
                <option value="cocina">Cocina</option>
                <option value="integral">Reforma integral</option>
                <option value="pintura">Pintura</option>
                <option value="electricidad">Electricidad</option>
                <option value="fontaneria">Fontanería</option>
                <option value="local">Local comercial</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="label">Descripción</label>
              <textarea value={form.descripcion} onChange={(e) => update("descripcion", e.target.value)} className="input min-h-[80px] resize-y" placeholder="Descripción breve de la obra..." />
            </div>
            <button onClick={() => setStep(1)} disabled={!form.nombre.trim()} className="btn-primary w-full disabled:opacity-50">
              Siguiente
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="label">Cliente</label>
              <select value={form.cliente_id} onChange={(e) => update("cliente_id", e.target.value)} className="input">
                <option value="">Sin cliente asignado</option>
                {clientes.map((c) => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
              <Link href="/dashboard/clientes/nuevo" className="text-sm text-primary-500 mt-1 inline-block">
                + Crear nuevo cliente
              </Link>
            </div>
            <div>
              <label className="label">Dirección de la obra</label>
              <input type="text" value={form.direccion} onChange={(e) => update("direccion", e.target.value)} className="input" placeholder="Calle Mayor 15, 2ºA, Madrid" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(0)} className="btn-secondary flex-1">Atrás</button>
              <button onClick={() => setStep(2)} className="btn-primary flex-1">Siguiente</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="label">Presupuesto aprobado (€)</label>
              <input type="number" step="0.01" value={form.presupuesto_aprobado} onChange={(e) => update("presupuesto_aprobado", e.target.value)} className="input" placeholder="12000" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">Fecha inicio estimada</label>
                <input type="date" value={form.fecha_inicio} onChange={(e) => update("fecha_inicio", e.target.value)} className="input" />
              </div>
              <div>
                <label className="label">Fecha fin estimada</label>
                <input type="date" value={form.fecha_fin_estimada} onChange={(e) => update("fecha_fin_estimada", e.target.value)} className="input" />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Se crearán automáticamente las fases por defecto: Demolición, Albañilería, Fontanería, Electricidad, Carpintería, Solados, Pintura, Limpieza y Remates.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-secondary flex-1">Atrás</button>
              <button onClick={handleSubmit} disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
                {loading ? "Creando obra..." : "Crear obra"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
