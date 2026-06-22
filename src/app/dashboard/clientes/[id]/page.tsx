"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Cliente } from "@/lib/supabase/types";
import { ArrowLeft, Phone, Mail, MapPin, Pencil, Trash2, Star, MessageCircle } from "lucide-react";

export default function ClienteDetallePage() {
  const { id } = useParams();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<Partial<Cliente>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadCliente();
  }, [id]);

  async function loadCliente() {
    const supabase = createClient();
    const { data } = await supabase
      .from("clientes")
      .select("*")
      .eq("id", id)
      .single();
    if (data) {
      setCliente(data);
      setForm(data);
    }
    setLoading(false);
  }

  function update(field: string, value: string | number | null) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    await supabase
      .from("clientes")
      .update({
        nombre: form.nombre,
        telefono: form.telefono || null,
        email: form.email || null,
        direccion: form.direccion || null,
        nif_cif: form.nif_cif || null,
        tipo: form.tipo,
        origen: form.origen || null,
        valoracion: form.valoracion || null,
        valoracion_nota: form.valoracion_nota || null,
        notas: form.notas || null,
      })
      .eq("id", id);
    setCliente({ ...cliente!, ...form } as Cliente);
    setEditing(false);
    setSaving(false);
  }

  async function handleDelete() {
    if (!confirm("¿Eliminar este cliente? Esta acción no se puede deshacer.")) return;
    const supabase = createClient();
    await supabase
      .from("clientes")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", id);
    router.push("/dashboard/clientes");
  }

  if (loading) {
    return <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;
  }

  if (!cliente) {
    return <div className="card p-8 text-center"><p className="text-gray-500">Cliente no encontrado</p></div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/dashboard/clientes" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a clientes
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">{cliente.nombre}</h1>
          <span className="badge-neutral text-xs mt-1">
            {cliente.tipo === "particular" ? "Particular" : cliente.tipo === "empresa" ? "Empresa" : cliente.tipo === "comunidad" ? "Comunidad" : "Aseguradora"}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setEditing(!editing)} className="btn-secondary !px-3 !py-2 !text-sm">
            <Pencil className="w-4 h-4" />
          </button>
          <button onClick={handleDelete} className="btn-secondary !px-3 !py-2 !text-sm text-red-500 hover:text-red-600">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!editing ? (
        <div className="space-y-4">
          {/* Datos de contacto */}
          <div className="card p-5 space-y-3">
            <h2 className="font-semibold text-secondary text-sm uppercase tracking-wider">Contacto</h2>
            {cliente.telefono && (
              <a href={`tel:${cliente.telefono}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-500">
                <Phone className="w-4 h-4 text-gray-400" /> {cliente.telefono}
              </a>
            )}
            {cliente.email && (
              <a href={`mailto:${cliente.email}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-500">
                <Mail className="w-4 h-4 text-gray-400" /> {cliente.email}
              </a>
            )}
            {cliente.direccion && (
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-gray-400" /> {cliente.direccion}
              </div>
            )}
            {cliente.nif_cif && (
              <div className="text-sm text-gray-500">NIF/CIF: {cliente.nif_cif}</div>
            )}
          </div>

          {/* Acciones rápidas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cliente.telefono && (
              <a href={`tel:${cliente.telefono}`} className="card p-3 text-center hover:shadow-md transition-shadow">
                <Phone className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-secondary">Llamar</span>
              </a>
            )}
            {cliente.telefono && (
              <a href={`https://wa.me/34${cliente.telefono.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="card p-3 text-center hover:shadow-md transition-shadow">
                <MessageCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-secondary">WhatsApp</span>
              </a>
            )}
            {cliente.email && (
              <a href={`mailto:${cliente.email}`} className="card p-3 text-center hover:shadow-md transition-shadow">
                <Mail className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-secondary">Email</span>
              </a>
            )}
            <Link href={`/dashboard/presupuestos/nuevo?cliente=${cliente.id}`} className="card p-3 text-center hover:shadow-md transition-shadow">
              <span className="text-xl mb-1 block">📄</span>
              <span className="text-xs font-medium text-secondary">Presupuesto</span>
            </Link>
          </div>

          {/* Valoración */}
          {cliente.valoracion && (
            <div className="card p-5">
              <h2 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Valoración interna</h2>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < (cliente.valoracion || 0) ? "fill-primary-400 text-primary-400" : "text-gray-200"}`} />
                ))}
              </div>
              {cliente.valoracion_nota && <p className="text-sm text-gray-500">{cliente.valoracion_nota}</p>}
            </div>
          )}

          {/* Notas */}
          {cliente.notas && (
            <div className="card p-5">
              <h2 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Notas internas</h2>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{cliente.notas}</p>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="card p-6 space-y-4">
          <div>
            <label className="label">Nombre *</label>
            <input type="text" value={form.nombre || ""} onChange={(e) => update("nombre", e.target.value)} className="input" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Teléfono</label>
              <input type="tel" value={form.telefono || ""} onChange={(e) => update("telefono", e.target.value)} className="input" />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" value={form.email || ""} onChange={(e) => update("email", e.target.value)} className="input" />
            </div>
          </div>
          <div>
            <label className="label">Dirección</label>
            <input type="text" value={form.direccion || ""} onChange={(e) => update("direccion", e.target.value)} className="input" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label">NIF / CIF</label>
              <input type="text" value={form.nif_cif || ""} onChange={(e) => update("nif_cif", e.target.value)} className="input" />
            </div>
            <div>
              <label className="label">Tipo</label>
              <select value={form.tipo || "particular"} onChange={(e) => update("tipo", e.target.value)} className="input">
                <option value="particular">Particular</option>
                <option value="empresa">Empresa</option>
                <option value="comunidad">Comunidad</option>
                <option value="aseguradora">Aseguradora</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">Valoración (1-5)</label>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} type="button" onClick={() => update("valoracion", i + 1)}>
                  <Star className={`w-6 h-6 cursor-pointer ${i < (form.valoracion || 0) ? "fill-primary-400 text-primary-400" : "text-gray-200 hover:text-primary-300"}`} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Nota de valoración</label>
            <input type="text" value={form.valoracion_nota || ""} onChange={(e) => update("valoracion_nota", e.target.value)} className="input" placeholder="Buen pagador, puntual..." />
          </div>
          <div>
            <label className="label">Notas internas</label>
            <textarea value={form.notas || ""} onChange={(e) => update("notas", e.target.value)} className="input min-h-[80px] resize-y" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setEditing(false)} className="btn-secondary flex-1">Cancelar</button>
            <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
              {saving ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
