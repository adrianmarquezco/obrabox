"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Search, Users, Plus, Shield, UserX } from "lucide-react";

type Usuario = {
  id: string;
  nombre: string;
  email: string;
  telefono: string | null;
  rol: string;
  activo: boolean;
  empresa_id: string;
  created_at: string;
  empresas?: { nombre: string };
};

export default function AdminUsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [empresas, setEmpresas] = useState<{ id: string; nombre: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", password: "", empresa_id: "", rol: "admin", telefono: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [usrRes, empRes] = await Promise.all([
      supabase.from("usuarios").select("*, empresas(nombre)").order("created_at", { ascending: false }),
      supabase.from("empresas").select("id, nombre").order("nombre"),
    ]);
    setUsuarios(usrRes.data || []);
    setEmpresas(empRes.data || []);
    setLoading(false);
  }

  async function createUser(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const res = await fetch("/api/admin/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Error al crear usuario");
      setSaving(false);
      return;
    }

    setSuccess(`Usuario ${form.email} creado correctamente`);
    setForm({ nombre: "", email: "", password: "", empresa_id: "", rol: "admin", telefono: "" });
    setShowNew(false);
    setSaving(false);
    loadData();
    setTimeout(() => setSuccess(""), 5000);
  }

  async function toggleActivo(userId: string, activo: boolean) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ activo: !activo }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, activo: !activo } : u));
  }

  async function resetPassword(email: string) {
    const supabase = createClient();
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setSuccess(`Email de reseteo enviado a ${email}`);
    setTimeout(() => setSuccess(""), 5000);
  }

  const filtered = usuarios.filter((u) =>
    !search ||
    u.nombre.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    (u.empresas as any)?.nombre?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Usuarios ({usuarios.length})</h1>
        <button onClick={() => setShowNew(true)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Crear usuario
        </button>
      </div>

      {success && <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-3 rounded-lg mb-4">{success}</div>}

      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Buscar por nombre, email o empresa..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500" />
      </div>

      {/* Modal crear usuario */}
      {showNew && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={createUser} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Crear nuevo usuario</h2>
            {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">{error}</div>}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nombre *</label>
              <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/20" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Email *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/20" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Contraseña *</label>
              <input type="text" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/20 font-mono" placeholder="Mínimo 6 caracteres" required minLength={6} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Empresa *</label>
              <select value={form.empresa_id} onChange={(e) => setForm({ ...form, empresa_id: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" required>
                <option value="">Seleccionar empresa</option>
                {empresas.map((emp) => <option key={emp.id} value={emp.id}>{emp.nombre}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Rol</label>
                <select value={form.rol} onChange={(e) => setForm({ ...form, rol: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5">
                  <option value="admin">Admin</option>
                  <option value="empleado">Empleado</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Teléfono</label>
                <input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5" />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setShowNew(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors">Cancelar</button>
              <button type="submit" disabled={saving} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm disabled:opacity-50 transition-colors">
                {saving ? "Creando..." : "Crear usuario"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-3 font-medium text-gray-500">Nombre</th>
                <th className="text-left p-3 font-medium text-gray-500">Email</th>
                <th className="text-left p-3 font-medium text-gray-500">Empresa</th>
                <th className="text-left p-3 font-medium text-gray-500">Rol</th>
                <th className="text-left p-3 font-medium text-gray-500">Estado</th>
                <th className="p-3 font-medium text-gray-500">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">{u.nombre}</td>
                  <td className="p-3 text-gray-500">{u.email}</td>
                  <td className="p-3">
                    <Link href={`/admin/empresas/${u.empresa_id}`} className="text-blue-500 hover:text-blue-600 text-xs">
                      {(u.empresas as any)?.nombre || "—"}
                    </Link>
                  </td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${u.rol === "admin" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"}`}>{u.rol}</span>
                  </td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${u.activo ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                      {u.activo ? "Activo" : "Desactivado"}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => resetPassword(u.email)} className="text-xs text-blue-500 hover:text-blue-600 font-medium">Reset pass</button>
                      <button onClick={() => toggleActivo(u.id, u.activo)} className={`text-xs font-medium ${u.activo ? "text-red-500" : "text-green-500"}`}>
                        {u.activo ? "Desactivar" : "Activar"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-gray-400">No se encontraron usuarios</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
