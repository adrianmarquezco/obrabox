"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Plus, ShoppingCart, Phone, Mail } from "lucide-react";

type Proveedor = {
  id: string;
  nombre: string;
  telefono: string | null;
  email: string | null;
  categoria: string | null;
  notas: string | null;
};

export default function ProveedoresPage() {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", categoria: "", notas: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadProveedores();
  }, []);

  async function loadProveedores() {
    const supabase = createClient();
    const { data } = await supabase.from("proveedores").select("*").is("deleted_at", null).order("nombre");
    setProveedores(data || []);
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

    const { data } = await supabase.from("proveedores").insert({
      empresa_id: usr.empresa_id,
      nombre: form.nombre,
      telefono: form.telefono || null,
      email: form.email || null,
      categoria: form.categoria || null,
      notas: form.notas || null,
    }).select("*").single();

    if (data) setProveedores((prev) => [...prev, data].sort((a, b) => a.nombre.localeCompare(b.nombre)));
    setForm({ nombre: "", telefono: "", email: "", categoria: "", notas: "" });
    setShowNew(false);
    setSaving(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-secondary">Proveedores</h1>
        <button onClick={() => setShowNew(true)} className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo proveedor
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/gastos" className="badge-neutral">Gastos</Link>
        <Link href="/dashboard/gastos/proveedores" className="badge-info">Proveedores</Link>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-secondary">Nuevo proveedor</h2>
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
              <label className="label">Categoría</label>
              <select value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} className="input">
                <option value="">Sin categoría</option>
                <option value="material">Material</option>
                <option value="subcontrata">Subcontrata</option>
                <option value="alquiler">Alquiler</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="label">Notas</label>
              <textarea value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} className="input min-h-[60px] resize-y" />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="btn-secondary flex-1">Cancelar</button>
              <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                {saving ? "Guardando..." : "Crear proveedor"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : proveedores.length === 0 ? (
        <div className="card p-8 text-center">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">Sin proveedores</h2>
          <p className="text-sm text-gray-500">Añade tus proveedores habituales</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proveedores.map((p) => (
            <div key={p.id} className="card p-5">
              <h3 className="font-semibold text-secondary mb-1">{p.nombre}</h3>
              {p.categoria && <span className="badge-neutral text-xs">{p.categoria}</span>}
              <div className="mt-3 space-y-1">
                {p.telefono && (
                  <a href={`tel:${p.telefono}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-500">
                    <Phone className="w-3.5 h-3.5" /> {p.telefono}
                  </a>
                )}
                {p.email && (
                  <a href={`mailto:${p.email}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-500">
                    <Mail className="w-3.5 h-3.5" /> {p.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
