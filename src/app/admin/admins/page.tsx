"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Shield, Plus } from "lucide-react";

type Admin = {
  id: string;
  email: string;
  nombre: string;
  rol: string;
  activo: boolean;
  created_at: string;
};

export default function AdminAdminsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ email: "", nombre: "", rol: "soporte" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { loadAdmins(); }, []);

  async function loadAdmins() {
    const supabase = createClient();
    const { data } = await supabase.from("admin_users").select("*").order("created_at");
    setAdmins(data || []);
    setLoading(false);
  }

  async function addAdmin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const supabase = createClient();
    const { data: authUsers } = await supabase
      .from("usuarios")
      .select("id, email")
      .eq("email", form.email)
      .single();

    if (!authUsers) {
      setError("No existe un usuario con ese email. Primero crea el usuario.");
      setSaving(false);
      return;
    }

    const { error: insertErr } = await supabase.from("admin_users").insert({
      id: authUsers.id,
      email: form.email,
      nombre: form.nombre,
      rol: form.rol,
    });

    if (insertErr) {
      setError(insertErr.message);
      setSaving(false);
      return;
    }

    setShowNew(false);
    setForm({ email: "", nombre: "", rol: "soporte" });
    setSaving(false);
    loadAdmins();
  }

  async function toggleActivo(adminId: string, activo: boolean) {
    const supabase = createClient();
    await supabase.from("admin_users").update({ activo: !activo }).eq("id", adminId);
    setAdmins((prev) => prev.map((a) => a.id === adminId ? { ...a, activo: !activo } : a));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Administradores</h1>
        <button onClick={() => setShowNew(true)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Añadir admin
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 text-amber-700 text-sm p-4 rounded-lg mb-6">
        <strong>Cuidado:</strong> los administradores tienen acceso total a todos los datos de todas las empresas. Solo añade personas de absoluta confianza.
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={addAdmin} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Añadir administrador</h2>
            {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">{error}</div>}
            <p className="text-sm text-gray-500">El usuario debe existir previamente en la plataforma.</p>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Email del usuario *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nombre *</label>
              <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Rol</label>
              <select value={form.rol} onChange={(e) => setForm({ ...form, rol: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5">
                <option value="superadmin">Superadmin (control total)</option>
                <option value="soporte">Soporte (ver datos, no editar planes)</option>
                <option value="editor">Editor (solo contenido)</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-sm">Cancelar</button>
              <button type="submit" disabled={saving} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm disabled:opacity-50">
                {saving ? "Añadiendo..." : "Añadir admin"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="space-y-3">
          {admins.map((a) => (
            <div key={a.id} className="bg-white rounded-xl border p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${a.activo ? "bg-red-100" : "bg-gray-100"}`}>
                  <Shield className={`w-5 h-5 ${a.activo ? "text-red-500" : "text-gray-400"}`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{a.nombre}</p>
                  <p className="text-sm text-gray-500">{a.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  a.rol === "superadmin" ? "bg-red-100 text-red-600" :
                  a.rol === "soporte" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>{a.rol}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.activo ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                  {a.activo ? "Activo" : "Desactivado"}
                </span>
                <button onClick={() => toggleActivo(a.id, a.activo)} className={`text-xs font-medium ${a.activo ? "text-red-500" : "text-green-500"}`}>
                  {a.activo ? "Desactivar" : "Activar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
