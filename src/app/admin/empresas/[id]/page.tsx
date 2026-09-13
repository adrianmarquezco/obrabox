"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus, Shield, Users, Puzzle, Building2 } from "lucide-react";

type Empresa = {
  id: string;
  nombre: string;
  cif: string | null;
  email: string | null;
  telefono: string | null;
  direccion: string | null;
  web: string | null;
  plan: string;
  trial_hasta: string | null;
  onboarding_completado: boolean;
  created_at: string;
};

type Usuario = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
  created_at: string;
};

const TODOS_MODULOS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "obras", label: "Obras" },
  { id: "presupuestos", label: "Presupuestos" },
  { id: "clientes", label: "Clientes" },
  { id: "facturas", label: "Facturación" },
  { id: "agenda", label: "Agenda" },
  { id: "equipo", label: "Equipo" },
  { id: "gastos", label: "Gastos" },
  { id: "pipeline", label: "Pipeline / CRM" },
  { id: "informes", label: "Informes" },
  { id: "plantillas", label: "Plantillas" },
  { id: "comunicaciones", label: "Comunicaciones" },
  { id: "subvenciones", label: "Subvenciones" },
];

const PLANES = ["free", "trial", "pro", "business"];

type Tab = "info" | "modulos" | "usuarios";

export default function AdminEmpresaDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("info");
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [modulos, setModulos] = useState<Record<string, boolean>>({});
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [showInvite, setShowInvite] = useState(false);
  const [inviteForm, setInviteForm] = useState({ nombre: "", email: "", password: "", rol: "admin" });
  const [inviting, setInviting] = useState(false);
  const [inviteError, setInviteError] = useState("");

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const [empRes, modsRes, usrRes] = await Promise.all([
        supabase.from("empresas").select("*").eq("id", id).single(),
        supabase.from("modulos_activos").select("modulo, activo").eq("empresa_id", id),
        supabase.from("usuarios").select("id, nombre, email, rol, activo, created_at").eq("empresa_id", id).order("nombre"),
      ]);
      if (empRes.data) setEmpresa(empRes.data);
      const modMap: Record<string, boolean> = {};
      TODOS_MODULOS.forEach((m) => { modMap[m.id] = false; });
      (modsRes.data || []).forEach((m: any) => { modMap[m.modulo] = m.activo; });
      setModulos(modMap);
      setUsuarios(usrRes.data || []);
      setLoading(false);
    }
    load();
  }, [id]);

  async function saveEmpresa() {
    if (!empresa) return;
    setSaving(true);
    const supabase = createClient();
    const trialHasta = empresa.plan === "trial" && !empresa.trial_hasta
      ? new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
      : empresa.trial_hasta;
    await supabase.from("empresas").update({
      nombre: empresa.nombre,
      cif: empresa.cif,
      email: empresa.email,
      telefono: empresa.telefono,
      direccion: empresa.direccion,
      web: empresa.web,
      plan: empresa.plan,
      trial_hasta: trialHasta,
    }).eq("id", id);
    setEmpresa({ ...empresa, trial_hasta: trialHasta });
    setMsg("Guardado");
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  }

  async function toggleModulo(modulo: string) {
    if (!empresa) return;
    const supabase = createClient();
    const newValue = !modulos[modulo];
    setModulos((prev) => ({ ...prev, [modulo]: newValue }));
    const { data: existing } = await supabase.from("modulos_activos")
      .select("id").eq("empresa_id", id).eq("modulo", modulo).single();
    if (existing) {
      await supabase.from("modulos_activos").update({ activo: newValue }).eq("id", existing.id);
    } else {
      await supabase.from("modulos_activos").insert({ empresa_id: id, modulo, activo: newValue });
    }
  }

  async function toggleActivoUsuario(userId: string, activo: boolean) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ activo: !activo }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, activo: !activo } : u));
  }

  async function changeRolUsuario(userId: string, rol: string) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ rol }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, rol } : u));
  }

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    setInviteError("");
    setInviting(true);
    const res = await fetch("/api/admin/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inviteForm, empresa_id: id }),
    });
    const data = await res.json();
    if (!res.ok) {
      setInviteError(data.error || "Error");
      setInviting(false);
      return;
    }
    const supabase = createClient();
    const { data: updated } = await supabase.from("usuarios")
      .select("id, nombre, email, rol, activo, created_at").eq("empresa_id", id).order("nombre");
    setUsuarios(updated || []);
    setInviteForm({ nombre: "", email: "", password: "", rol: "admin" });
    setShowInvite(false);
    setInviting(false);
    setMsg("Usuario creado");
    setTimeout(() => setMsg(""), 3000);
  }

  if (loading) return <div className="text-gray-500 text-sm">Cargando...</div>;
  if (!empresa) return <div className="text-red-400 text-sm">Empresa no encontrada</div>;

  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: "info", label: "Info & Plan", icon: Building2 },
    { id: "modulos", label: "Módulos", icon: Puzzle },
    { id: "usuarios", label: `Usuarios (${usuarios.length})`, icon: Users },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-300 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-100">{empresa.nombre}</h1>
          <p className="text-xs text-gray-500">Alta: {new Date(empresa.created_at).toLocaleDateString("es-ES")}</p>
        </div>
        {msg && <span className="text-sm text-green-400 font-medium">{msg}</span>}
      </div>

      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t.id
                ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                : "text-gray-400 border border-gray-700 hover:bg-gray-800"
            }`}>
            <t.icon className="w-4 h-4" /> {t.label}
          </button>
        ))}
      </div>

      {/* INFO & PLAN */}
      {tab === "info" && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Nombre", key: "nombre" },
              { label: "CIF", key: "cif" },
              { label: "Email", key: "email", type: "email" },
              { label: "Teléfono", key: "telefono" },
              { label: "Dirección", key: "direccion" },
              { label: "Web", key: "web" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs text-gray-500 mb-1 block">{f.label}</label>
                <input type={f.type || "text"}
                  value={(empresa as any)[f.key] || ""}
                  onChange={(e) => setEmpresa({ ...empresa, [f.key]: e.target.value || null } as Empresa)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500" />
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-4">
            <h3 className="text-sm font-medium text-gray-300 mb-3">Plan y suscripción</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Plan</label>
                <select value={empresa.plan}
                  onChange={(e) => setEmpresa({ ...empresa, plan: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500">
                  {PLANES.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Trial hasta</label>
                <input type="date"
                  value={empresa.trial_hasta ? empresa.trial_hasta.split("T")[0] : ""}
                  onChange={(e) => setEmpresa({ ...empresa, trial_hasta: e.target.value || null })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500" />
              </div>
            </div>
          </div>

          <button onClick={saveEmpresa} disabled={saving}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Save className="w-4 h-4" /> {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      )}

      {/* MÓDULOS */}
      {tab === "modulos" && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-xs text-gray-500 mb-4">Activa o desactiva módulos para esta empresa. Los cambios son inmediatos.</p>
          <div className="space-y-1">
            {TODOS_MODULOS.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-sm text-gray-300">{m.label}</span>
                <button onClick={() => toggleModulo(m.id)}
                  className={`w-10 h-6 rounded-full transition-colors relative flex-shrink-0 ${modulos[m.id] ? "bg-orange-500" : "bg-gray-700"}`}>
                  <span className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${modulos[m.id] ? "left-5" : "left-1"}`} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800">
            <button onClick={() => TODOS_MODULOS.forEach((m) => !modulos[m.id] && toggleModulo(m.id))}
              className="text-xs text-orange-400 hover:text-orange-300 border border-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
              Activar todos
            </button>
            <button onClick={() => TODOS_MODULOS.forEach((m) => modulos[m.id] && toggleModulo(m.id))}
              className="text-xs text-gray-500 hover:text-gray-300 border border-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
              Desactivar todos
            </button>
          </div>
        </div>
      )}

      {/* USUARIOS */}
      {tab === "usuarios" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-gray-500">{usuarios.length} usuario{usuarios.length !== 1 ? "s" : ""} en esta empresa</p>
            <button onClick={() => setShowInvite(true)}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
              <Plus className="w-3.5 h-3.5" /> Añadir usuario
            </button>
          </div>

          {showInvite && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
              <form onSubmit={handleInvite} className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md space-y-4">
                <h2 className="text-lg font-bold text-gray-100">Añadir usuario a {empresa.nombre}</h2>
                {inviteError && <div className="bg-red-900/30 border border-red-700 text-red-400 text-sm p-3 rounded-lg">{inviteError}</div>}
                {[
                  { label: "Nombre *", key: "nombre", type: "text" },
                  { label: "Email *", key: "email", type: "email" },
                  { label: "Contraseña *", key: "password", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs text-gray-400 mb-1 block">{f.label}</label>
                    <input type={f.type} value={(inviteForm as any)[f.key]}
                      onChange={(e) => setInviteForm({ ...inviteForm, [f.key]: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500 font-mono"
                      required={f.key !== "telefono"} minLength={f.key === "password" ? 6 : undefined} />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Rol</label>
                  <select value={inviteForm.rol} onChange={(e) => setInviteForm({ ...inviteForm, rol: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-orange-500">
                    <option value="admin">Admin (acceso total de empresa)</option>
                    <option value="empleado">Empleado</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => { setShowInvite(false); setInviteError(""); }}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium py-2 rounded-lg transition-colors">Cancelar</button>
                  <button type="submit" disabled={inviting}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                    {inviting ? "Creando..." : "Crear usuario"}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Rol</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="border-b border-gray-800/50">
                    <td className="p-3 text-gray-200 font-medium">{u.nombre}</td>
                    <td className="p-3 text-gray-500 text-xs">{u.email}</td>
                    <td className="p-3">
                      <select value={u.rol} onChange={(e) => changeRolUsuario(u.id, e.target.value)}
                        className={`text-xs font-medium px-2 py-1 rounded-lg border-0 cursor-pointer ${
                          u.rol === "admin" ? "bg-purple-900/40 text-purple-400" : "bg-gray-700 text-gray-400"
                        }`}>
                        <option value="admin">Admin</option>
                        <option value="empleado">Empleado</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        u.activo ? "bg-green-900/40 text-green-400" : "bg-red-900/40 text-red-400"
                      }`}>{u.activo ? "Activo" : "Inactivo"}</span>
                    </td>
                    <td className="p-3">
                      <button onClick={() => toggleActivoUsuario(u.id, u.activo)}
                        className={`text-xs font-medium ${u.activo ? "text-red-500 hover:text-red-400" : "text-green-500 hover:text-green-400"}`}>
                        {u.activo ? "Desactivar" : "Activar"}
                      </button>
                    </td>
                  </tr>
                ))}
                {usuarios.length === 0 && (
                  <tr><td colSpan={5} className="p-8 text-center text-gray-600 text-sm">Sin usuarios</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-start gap-3">
            <Shield className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500">
              <strong className="text-gray-300">Admin de empresa</strong>: acceso completo a todos los datos y configuración de su empresa.<br />
              <strong className="text-gray-300">Empleado</strong>: acceso operativo (obras, clientes, presupuestos). Sin configuración.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
