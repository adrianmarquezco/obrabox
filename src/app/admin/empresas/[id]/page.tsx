"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { ArrowLeft, Save, Users, Building2, FileText, Receipt, Puzzle } from "lucide-react";

const TODOS_MODULOS = [
  "dashboard", "obras", "presupuestos", "clientes", "facturas", "agenda",
  "equipo", "gastos", "pipeline", "informes", "plantillas", "comunicaciones", "subvenciones",
];

export default function AdminEmpresaDetallePage() {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState<any>(null);
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [modulos, setModulos] = useState<Record<string, boolean>>({});
  const [stats, setStats] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { loadData(); }, [id]);

  async function loadData() {
    const supabase = createClient();
    const [empRes, usrRes, modRes, obrasRes, presRes, factRes] = await Promise.all([
      supabase.from("empresas").select("*").eq("id", id).single(),
      supabase.from("usuarios").select("*").eq("empresa_id", id).order("created_at"),
      supabase.from("modulos_activos").select("modulo, activo").eq("empresa_id", id),
      supabase.from("obras").select("id", { count: "exact", head: true }).eq("empresa_id", id).is("deleted_at", null),
      supabase.from("presupuestos").select("id", { count: "exact", head: true }).eq("empresa_id", id).is("deleted_at", null),
      supabase.from("facturas_emitidas").select("id", { count: "exact", head: true }).eq("empresa_id", id).is("deleted_at", null),
    ]);

    setEmpresa(empRes.data);
    setUsuarios(usrRes.data || []);

    const modMap: Record<string, boolean> = {};
    TODOS_MODULOS.forEach((m) => { modMap[m] = false; });
    (modRes.data || []).forEach((m: any) => { modMap[m.modulo] = m.activo; });
    setModulos(modMap);

    setStats({ obras: obrasRes.count || 0, presupuestos: presRes.count || 0, facturas: factRes.count || 0 });
    setLoading(false);
  }

  async function saveEmpresa() {
    setSaving(true);
    const supabase = createClient();
    await supabase.from("empresas").update({
      nombre: empresa.nombre,
      cif: empresa.cif,
      plan: empresa.plan,
      plan_periodo: empresa.plan_periodo,
      tamano_empresa: empresa.tamano_empresa,
      onboarding_completado: empresa.onboarding_completado,
    }).eq("id", id);

    await supabase.from("admin_logs").insert({
      admin_id: (await supabase.auth.getUser()).data.user?.id,
      accion: "empresa_update",
      entidad: "empresas",
      entidad_id: id as string,
      detalles: { plan: empresa.plan },
    });

    setMsg("Cambios guardados");
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  }

  async function toggleModulo(modulo: string) {
    const supabase = createClient();
    const newValue = !modulos[modulo];
    setModulos({ ...modulos, [modulo]: newValue });

    const { data: existing } = await supabase
      .from("modulos_activos")
      .select("id")
      .eq("empresa_id", id)
      .eq("modulo", modulo)
      .single();

    if (existing) {
      await supabase.from("modulos_activos").update({ activo: newValue }).eq("id", existing.id);
    } else {
      await supabase.from("modulos_activos").insert({ empresa_id: id as string, modulo, activo: newValue });
    }
  }

  async function toggleUsuarioActivo(userId: string, activo: boolean) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ activo: !activo }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, activo: !activo } : u));
  }

  async function cambiarRolUsuario(userId: string, rol: string) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ rol }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, rol } : u));
  }

  if (loading) return <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;
  if (!empresa) return <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-500">Empresa no encontrada</p></div>;

  return (
    <div>
      <Link href="/admin/empresas" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a empresas
      </Link>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{empresa.nombre}</h1>
        {msg && <span className="text-sm text-green-500 font-medium">{msg}</span>}
      </div>

      {/* Stats rápidas */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border p-4">
          <p className="text-xs text-gray-500">Obras</p>
          <p className="text-xl font-bold text-gray-900">{stats.obras}</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-xs text-gray-500">Presupuestos</p>
          <p className="text-xl font-bold text-gray-900">{stats.presupuestos}</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-xs text-gray-500">Facturas</p>
          <p className="text-xl font-bold text-gray-900">{stats.facturas}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Datos de empresa */}
        <div className="bg-white rounded-xl border p-6 space-y-4">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-500" /> Datos de empresa
          </h2>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Nombre</label>
            <input type="text" value={empresa.nombre} onChange={(e) => setEmpresa({ ...empresa, nombre: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">CIF</label>
              <input type="text" value={empresa.cif || ""} onChange={(e) => setEmpresa({ ...empresa, cif: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Tamaño</label>
              <select value={empresa.tamano_empresa || ""} onChange={(e) => setEmpresa({ ...empresa, tamano_empresa: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2">
                <option value="">Sin definir</option>
                <option value="solo">Solo yo</option>
                <option value="2-5">2-5 personas</option>
                <option value="6-15">6-15 personas</option>
                <option value="mas-de-15">Más de 15</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Plan</label>
              <select value={empresa.plan} onChange={(e) => setEmpresa({ ...empresa, plan: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 font-semibold">
                <option value="gratis">Gratis</option>
                <option value="pro">Pro (29€/mes)</option>
                <option value="business">Business (59€/mes)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Periodo</label>
              <select value={empresa.plan_periodo || "mensual"} onChange={(e) => setEmpresa({ ...empresa, plan_periodo: e.target.value })} className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2">
                <option value="mensual">Mensual</option>
                <option value="anual">Anual</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={empresa.onboarding_completado} onChange={(e) => setEmpresa({ ...empresa, onboarding_completado: e.target.checked })} className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="text-sm text-gray-700">Onboarding completado</span>
            </label>
          </div>
          <div className="text-xs text-gray-400">
            Registrada: {new Date(empresa.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
          </div>
          <button onClick={saveEmpresa} disabled={saving} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors">
            <Save className="w-4 h-4" /> {saving ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>

        {/* Módulos activos */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <Puzzle className="w-5 h-5 text-purple-500" /> Módulos activos
          </h2>
          <p className="text-xs text-gray-500 mb-4">Activa o desactiva módulos para esta empresa</p>
          <div className="space-y-2">
            {TODOS_MODULOS.map((modulo) => (
              <label key={modulo} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                <span className="text-sm text-gray-700 capitalize">{modulo.replace(/_/g, " ")}</span>
                <button
                  onClick={() => toggleModulo(modulo)}
                  className={`w-10 h-6 rounded-full transition-colors relative ${modulos[modulo] ? "bg-green-500" : "bg-gray-200"}`}
                >
                  <span className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${modulos[modulo] ? "left-5" : "left-1"}`} />
                </button>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Usuarios de esta empresa */}
      <div className="bg-white rounded-xl border p-6 mt-6">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-green-500" /> Usuarios ({usuarios.length})
        </h2>
        {usuarios.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">No hay usuarios en esta empresa</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-2 font-medium text-gray-500">Nombre</th>
                <th className="text-left p-2 font-medium text-gray-500">Email</th>
                <th className="text-left p-2 font-medium text-gray-500">Rol</th>
                <th className="text-left p-2 font-medium text-gray-500">Estado</th>
                <th className="text-left p-2 font-medium text-gray-500">Registro</th>
                <th className="p-2 font-medium text-gray-500">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id} className="border-b border-gray-100">
                  <td className="p-2 font-medium text-gray-900">{u.nombre}</td>
                  <td className="p-2 text-gray-500">{u.email}</td>
                  <td className="p-2">
                    <select value={u.rol} onChange={(e) => cambiarRolUsuario(u.id, e.target.value)} className="text-xs border border-gray-200 rounded px-2 py-1">
                      <option value="admin">Admin</option>
                      <option value="empleado">Empleado</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${u.activo ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                      {u.activo ? "Activo" : "Desactivado"}
                    </span>
                  </td>
                  <td className="p-2 text-gray-400 text-xs">{new Date(u.created_at).toLocaleDateString("es-ES")}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => toggleUsuarioActivo(u.id, u.activo)}
                      className={`text-xs font-medium ${u.activo ? "text-red-500 hover:text-red-600" : "text-green-500 hover:text-green-600"}`}
                    >
                      {u.activo ? "Desactivar" : "Activar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
