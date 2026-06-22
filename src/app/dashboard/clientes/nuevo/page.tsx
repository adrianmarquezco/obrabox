"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NuevoClientePage() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    nif_cif: "",
    tipo: "particular",
    origen: "",
    notas: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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

    const { error: err } = await supabase.from("clientes").insert({
      empresa_id: usr.empresa_id,
      nombre: form.nombre,
      telefono: form.telefono || null,
      email: form.email || null,
      direccion: form.direccion || null,
      nif_cif: form.nif_cif || null,
      tipo: form.tipo,
      origen: form.origen || null,
      notas: form.notas || null,
    });

    if (err) {
      setError("Error al crear el cliente");
      setLoading(false);
      return;
    }

    router.push("/dashboard/clientes");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/dashboard/clientes"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Volver a clientes
      </Link>

      <h1 className="text-2xl font-bold text-secondary mb-6">Nuevo cliente</h1>

      <form onSubmit={handleSubmit} className="card p-6 space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="nombre" className="label">Nombre *</label>
          <input id="nombre" type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className="input" placeholder="Juan García" required />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefono" className="label">Teléfono</label>
            <input id="telefono" type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className="input" placeholder="612 345 678" />
          </div>
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="cliente@email.com" />
          </div>
        </div>

        <div>
          <label htmlFor="direccion" className="label">Dirección</label>
          <input id="direccion" type="text" value={form.direccion} onChange={(e) => update("direccion", e.target.value)} className="input" placeholder="Calle Mayor 15, 2ºA, Madrid" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nif_cif" className="label">NIF / CIF</label>
            <input id="nif_cif" type="text" value={form.nif_cif} onChange={(e) => update("nif_cif", e.target.value)} className="input" placeholder="12345678A" />
          </div>
          <div>
            <label htmlFor="tipo" className="label">Tipo de cliente</label>
            <select id="tipo" value={form.tipo} onChange={(e) => update("tipo", e.target.value)} className="input">
              <option value="particular">Particular</option>
              <option value="empresa">Empresa</option>
              <option value="comunidad">Comunidad de vecinos</option>
              <option value="aseguradora">Aseguradora</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="origen" className="label">¿Cómo te encontró?</label>
          <select id="origen" value={form.origen} onChange={(e) => update("origen", e.target.value)} className="input">
            <option value="">Sin especificar</option>
            <option value="recomendacion">Recomendación</option>
            <option value="web">Web</option>
            <option value="publicidad">Publicidad</option>
            <option value="portal">Portal ObraBox</option>
            <option value="redes">Redes sociales</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="notas" className="label">Notas internas</label>
          <textarea id="notas" value={form.notas} onChange={(e) => update("notas", e.target.value)} className="input min-h-[80px] resize-y" placeholder="Notas sobre este cliente..." />
        </div>

        <div className="flex gap-3 pt-2">
          <Link href="/dashboard/clientes" className="btn-secondary flex-1 text-center">
            Cancelar
          </Link>
          <button type="submit" disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
            {loading ? "Guardando..." : "Crear cliente"}
          </button>
        </div>
      </form>
    </div>
  );
}
