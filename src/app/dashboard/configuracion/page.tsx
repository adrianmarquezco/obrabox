"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save, Building2, Receipt, Puzzle, Bell, CreditCard, Users, Plus, Shield, Lock } from "lucide-react";

type Tab = "empresa" | "facturacion" | "modulos" | "notificaciones" | "cuenta" | "usuarios";

type UsuarioEmpresa = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
};

export default function ConfiguracionPage() {
  const [tab, setTab] = useState<Tab>("empresa");
  const [empresa, setEmpresa] = useState<any>(null);
  const [modulos, setModulos] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [rol, setRol] = useState<string | null>(null);

  // Usuarios tab state
  const [usuarios, setUsuarios] = useState<UsuarioEmpresa[]>([]);
  const [showInvite, setShowInvite] = useState(false);
  const [inviteForm, setInviteForm] = useState({ nombre: "", email: "", password: "", rol: "empleado" });
  const [inviting, setInviting] = useState(false);
  const [inviteError, setInviteError] = useState("");

  const TODOS_MODULOS = [
    { id: "dashboard", label: "Dashboard" }, { id: "obras", label: "Obras" },
    { id: "presupuestos", label: "Presupuestos" }, { id: "clientes", label: "Clientes" },
    { id: "facturas", label: "Facturación" }, { id: "agenda", label: "Agenda" },
    { id: "equipo", label: "Equipo" }, { id: "gastos", label: "Gastos" },
    { id: "pipeline", label: "Pipeline / CRM" }, { id: "informes", label: "Informes" },
    { id: "plantillas", label: "Plantillas" }, { id: "comunicaciones", label: "Comunicaciones" },
    { id: "subvenciones", label: "Subvenciones" },
  ];

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id, rol").eq("id", user.id).single();
    if (!usr) return;
    setRol(usr.rol);
    if (usr.rol !== "admin") { setLoading(false); return; }

    const [empRes, modsRes] = await Promise.all([
      supabase.from("empresas").select("*").eq("id", usr.empresa_id).single(),
      supabase.from("modulos_activos").select("modulo, activo").eq("empresa_id", usr.empresa_id),
    ]);
    if (empRes.data) setEmpresa(empRes.data);
    const modMap: Record<string, boolean> = {};
    TODOS_MODULOS.forEach((m) => { modMap[m.id] = false; });
    (modsRes.data || []).forEach((m: any) => { modMap[m.modulo] = m.activo; });
    setModulos(modMap);
    setLoading(false);
  }

  async function loadUsuarios() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;
    const { data } = await supabase.from("usuarios").select("id, nombre, email, rol, activo")
      .eq("empresa_id", usr.empresa_id).order("nombre");
    setUsuarios(data || []);
  }

  function changeTab(t: Tab) {
    setTab(t);
    if (t === "usuarios") loadUsuarios();
  }

  async function saveEmpresa() {
    setSaving(true);
    const supabase = createClient();
    await supabase.from("empresas").update({
      nombre: empresa.nombre, cif: empresa.cif || null, direccion: empresa.direccion || null,
      telefono: empresa.telefono || null, email: empresa.email || null, web: empresa.web || null,
      iban: empresa.iban || null,
      numeracion_factura_prefijo: empresa.numeracion_factura_prefijo || "F",
      iva_defecto: empresa.iva_defecto,
      texto_legal_facturas: empresa.texto_legal_facturas || null,
      recordatorio_impago_activo: empresa.recordatorio_impago_activo,
      resumen_semanal_activo: empresa.resumen_semanal_activo,
      horario_inicio: empresa.horario_inicio,
      horario_fin: empresa.horario_fin,
    }).eq("id", empresa.id);
    setMsg("Guardado");
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  }

  async function toggleModulo(modulo: string) {
    const supabase = createClient();
    const newValue = !modulos[modulo];
    setModulos({ ...modulos, [modulo]: newValue });
    const { data: existing } = await supabase.from("modulos_activos").select("id").eq("empresa_id", empresa.id).eq("modulo", modulo).single();
    if (existing) {
      await supabase.from("modulos_activos").update({ activo: newValue }).eq("id", existing.id);
    } else {
      await supabase.from("modulos_activos").insert({ empresa_id: empresa.id, modulo, activo: newValue });
    }
  }

  async function changeRol(userId: string, newRol: string) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ rol: newRol }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, rol: newRol } : u));
  }

  async function toggleActivo(userId: string, activo: boolean) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ activo: !activo }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, activo: !activo } : u));
  }

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    setInviteError("");
    setInviting(true);
    const res = await fetch("/api/company/invite-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inviteForm),
    });
    const data = await res.json();
    if (!res.ok) {
      setInviteError(data.error || "Error al crear usuario");
      setInviting(false);
      return;
    }
    setInviteForm({ nombre: "", email: "", password: "", rol: "empleado" });
    setShowInvite(false);
    setInviting(false);
    setMsg("Usuario creado correctamente");
    setTimeout(() => setMsg(""), 4000);
    loadUsuarios();
  }

  if (loading) return <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;

  if (rol !== "admin") {
    return (
      <div className="card p-10 text-center max-w-md mx-auto mt-8">
        <Lock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">Acceso restringido</h2>
        <p className="text-sm text-gray-500">La configuración solo puede ser modificada por administradores de la empresa. Contacta con tu administrador si necesitas hacer cambios.</p>
      </div>
    );
  }

  if (!empresa) return <div className="card p-8 text-center"><p className="text-gray-500">Error cargando configuración</p></div>;

  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: "empresa", label: "Empresa", icon: Building2 },
    { id: "facturacion", label: "Facturación", icon: Receipt },
    { id: "modulos", label: "Módulos", icon: Puzzle },
    { id: "notificaciones", label: "Notificaciones", icon: Bell },
    { id: "usuarios", label: "Usuarios", icon: Users },
    { id: "cuenta", label: "Cuenta", icon: CreditCard },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Configuración</h1>
        {msg && <span className="text-sm text-green-500 font-medium">{msg}</span>}
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => changeTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              tab === t.id ? "bg-primary-500 text-white" : "bg-white border border-border text-gray-600 hover:bg-surface"
            }`}>
            <t.icon className="w-4 h-4" /> {t.label}
          </button>
        ))}
      </div>

      {/* EMPRESA */}
      {tab === "empresa" && (
        <div className="card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Nombre de empresa</label>
              <input type="text" value={empresa.nombre || ""} onChange={(e) => setEmpresa({ ...empresa, nombre: e.target.value })} className="input" /></div>
            <div><label className="label">CIF</label>
              <input type="text" value={empresa.cif || ""} onChange={(e) => setEmpresa({ ...empresa, cif: e.target.value })} className="input" /></div>
          </div>
          <div><label className="label">Dirección</label>
            <input type="text" value={empresa.direccion || ""} onChange={(e) => setEmpresa({ ...empresa, direccion: e.target.value })} className="input" /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Teléfono</label>
              <input type="tel" value={empresa.telefono || ""} onChange={(e) => setEmpresa({ ...empresa, telefono: e.target.value })} className="input" /></div>
            <div><label className="label">Email</label>
              <input type="email" value={empresa.email || ""} onChange={(e) => setEmpresa({ ...empresa, email: e.target.value })} className="input" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Web</label>
              <input type="text" value={empresa.web || ""} onChange={(e) => setEmpresa({ ...empresa, web: e.target.value })} className="input" placeholder="www.tuempresa.es" /></div>
            <div><label className="label">IBAN (datos bancarios)</label>
              <input type="text" value={empresa.iban || ""} onChange={(e) => setEmpresa({ ...empresa, iban: e.target.value })} className="input" placeholder="ES00 0000 0000 0000 0000 0000" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Horario inicio</label>
              <input type="time" value={empresa.horario_inicio || "08:00"} onChange={(e) => setEmpresa({ ...empresa, horario_inicio: e.target.value })} className="input" /></div>
            <div><label className="label">Horario fin</label>
              <input type="time" value={empresa.horario_fin || "18:00"} onChange={(e) => setEmpresa({ ...empresa, horario_fin: e.target.value })} className="input" /></div>
          </div>
          <button onClick={saveEmpresa} disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
            <Save className="w-4 h-4" /> {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      )}

      {/* FACTURACIÓN */}
      {tab === "facturacion" && (
        <div className="card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Prefijo numeración facturas</label>
              <input type="text" value={empresa.numeracion_factura_prefijo || "F"} onChange={(e) => setEmpresa({ ...empresa, numeracion_factura_prefijo: e.target.value })} className="input" placeholder="F" />
              <p className="text-xs text-gray-400 mt-1">Ejemplo: F-2026-001</p></div>
            <div><label className="label">IVA por defecto</label>
              <select value={empresa.iva_defecto || 21} onChange={(e) => setEmpresa({ ...empresa, iva_defecto: parseFloat(e.target.value) })} className="input">
                <option value="21">21%</option>
                <option value="10">10%</option>
                <option value="0">Exento</option>
              </select></div>
          </div>
          <div><label className="label">Texto legal en facturas</label>
            <textarea value={empresa.texto_legal_facturas || ""} onChange={(e) => setEmpresa({ ...empresa, texto_legal_facturas: e.target.value })} className="input min-h-[80px] resize-y" placeholder="Condiciones de pago, forma de pago, etc." /></div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={empresa.recordatorio_impago_activo ?? true} onChange={(e) => setEmpresa({ ...empresa, recordatorio_impago_activo: e.target.checked })} className="rounded border-border text-primary-500 focus:ring-primary-500 w-5 h-5" />
            <div>
              <span className="font-medium text-secondary">Recordatorios de impago automáticos</span>
              <p className="text-xs text-gray-500">Envía emails automáticos a los 7, 15 y 30 días de impago</p>
            </div>
          </label>
          <button onClick={saveEmpresa} disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
            <Save className="w-4 h-4" /> {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      )}

      {/* MÓDULOS */}
      {tab === "modulos" && (
        <div className="card p-6">
          <p className="text-sm text-gray-500 mb-4">Activa o desactiva los módulos que quieres ver en el menú lateral.</p>
          <div className="space-y-2">
            {TODOS_MODULOS.map((m) => (
              <label key={m.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface cursor-pointer">
                <span className="text-sm text-secondary font-medium">{m.label}</span>
                <button onClick={() => toggleModulo(m.id)} className={`w-10 h-6 rounded-full transition-colors relative ${modulos[m.id] ? "bg-green-500" : "bg-gray-200"}`}>
                  <span className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${modulos[m.id] ? "left-5" : "left-1"}`} />
                </button>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* NOTIFICACIONES */}
      {tab === "notificaciones" && (
        <div className="card p-6 space-y-4">
          <label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface cursor-pointer">
            <div>
              <span className="font-medium text-secondary text-sm">Resumen semanal por email</span>
              <p className="text-xs text-gray-500">Recibe un resumen cada lunes con la actividad de la semana</p>
            </div>
            <button onClick={() => { const v = !(empresa.resumen_semanal_activo ?? true); setEmpresa({ ...empresa, resumen_semanal_activo: v }); }} className={`w-10 h-6 rounded-full transition-colors relative ${empresa.resumen_semanal_activo ?? true ? "bg-green-500" : "bg-gray-200"}`}>
              <span className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${empresa.resumen_semanal_activo ?? true ? "left-5" : "left-1"}`} />
            </button>
          </label>
          <label className="flex items-center justify-between p-3 rounded-lg hover:bg-surface cursor-pointer">
            <div>
              <span className="font-medium text-secondary text-sm">Recordatorios de impago</span>
              <p className="text-xs text-gray-500">Emails automáticos al cliente cuando una factura vence</p>
            </div>
            <button onClick={() => { const v = !(empresa.recordatorio_impago_activo ?? true); setEmpresa({ ...empresa, recordatorio_impago_activo: v }); }} className={`w-10 h-6 rounded-full transition-colors relative ${empresa.recordatorio_impago_activo ?? true ? "bg-green-500" : "bg-gray-200"}`}>
              <span className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${empresa.recordatorio_impago_activo ?? true ? "left-5" : "left-1"}`} />
            </button>
          </label>
          <button onClick={saveEmpresa} disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
            <Save className="w-4 h-4" /> {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      )}

      {/* USUARIOS */}
      {tab === "usuarios" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">{usuarios.length} usuario{usuarios.length !== 1 ? "s" : ""} en tu empresa</p>
            <button onClick={() => setShowInvite(true)} className="btn-primary flex items-center gap-2 !text-sm">
              <Plus className="w-4 h-4" /> Invitar usuario
            </button>
          </div>

          {showInvite && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <form onSubmit={handleInvite} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
                <h2 className="text-lg font-bold text-secondary">Invitar usuario</h2>
                {inviteError && <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">{inviteError}</div>}
                <div><label className="label">Nombre *</label>
                  <input type="text" value={inviteForm.nombre} onChange={(e) => setInviteForm({ ...inviteForm, nombre: e.target.value })} className="input" required autoFocus /></div>
                <div><label className="label">Email *</label>
                  <input type="email" value={inviteForm.email} onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })} className="input" required /></div>
                <div><label className="label">Contraseña inicial *</label>
                  <input type="text" value={inviteForm.password} onChange={(e) => setInviteForm({ ...inviteForm, password: e.target.value })} className="input font-mono" placeholder="Mínimo 6 caracteres" required minLength={6} /></div>
                <div><label className="label">Rol</label>
                  <select value={inviteForm.rol} onChange={(e) => setInviteForm({ ...inviteForm, rol: e.target.value })} className="input">
                    <option value="empleado">Empleado (acceso limitado)</option>
                    <option value="admin">Administrador (acceso total)</option>
                  </select></div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => { setShowInvite(false); setInviteError(""); }} className="btn-secondary flex-1">Cancelar</button>
                  <button type="submit" disabled={inviting} className="btn-primary flex-1 disabled:opacity-50">
                    {inviting ? "Creando..." : "Crear usuario"}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="p-3 text-left font-medium text-gray-500">Nombre</th>
                  <th className="p-3 text-left font-medium text-gray-500">Email</th>
                  <th className="p-3 text-left font-medium text-gray-500">Rol</th>
                  <th className="p-3 text-left font-medium text-gray-500">Estado</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="border-b border-border/50">
                    <td className="p-3 font-medium text-secondary">{u.nombre}</td>
                    <td className="p-3 text-gray-500 text-xs">{u.email}</td>
                    <td className="p-3">
                      <select value={u.rol} onChange={(e) => changeRol(u.id, e.target.value)}
                        className={`text-xs font-medium px-2 py-1 rounded-lg border-0 cursor-pointer ${
                          u.rol === "admin" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"
                        }`}>
                        <option value="admin">Admin</option>
                        <option value="empleado">Empleado</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        u.activo ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                      }`}>{u.activo ? "Activo" : "Inactivo"}</span>
                    </td>
                    <td className="p-3">
                      <button onClick={() => toggleActivo(u.id, u.activo)}
                        className={`text-xs font-medium ${u.activo ? "text-red-400 hover:text-red-500" : "text-green-500 hover:text-green-600"}`}>
                        {u.activo ? "Desactivar" : "Activar"}
                      </button>
                    </td>
                  </tr>
                ))}
                {usuarios.length === 0 && (
                  <tr><td colSpan={5} className="p-8 text-center text-gray-400 text-sm">Cargando usuarios...</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 card p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-secondary">Roles y permisos</p>
              <p className="text-xs text-gray-500 mt-1"><strong>Administrador</strong>: acceso total, incluido configuración, gestión de usuarios y módulos.</p>
              <p className="text-xs text-gray-500"><strong>Empleado</strong>: acceso operativo (obras, clientes, presupuestos). Sin acceso a configuración.</p>
            </div>
          </div>
        </div>
      )}

      {/* CUENTA */}
      {tab === "cuenta" && (
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="font-semibold text-secondary mb-2">Plan actual</h3>
            <div className="flex items-center gap-3">
              <span className={`text-lg font-bold capitalize ${empresa.plan === "pro" ? "text-primary-500" : empresa.plan === "business" ? "text-blue-500" : "text-gray-500"}`}>{empresa.plan}</span>
              {empresa.plan !== "business" && (
                <a href="/precios" className="text-sm text-primary-500 font-medium">Mejorar plan</a>
              )}
            </div>
          </div>
          <div className="card p-6 border-red-200">
            <h3 className="font-semibold text-red-500 mb-2">Zona peligrosa</h3>
            <p className="text-sm text-gray-500 mb-4">Eliminar tu cuenta borrará todos los datos permanentemente.</p>
            <button className="text-sm text-red-500 font-medium border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
              Eliminar cuenta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
