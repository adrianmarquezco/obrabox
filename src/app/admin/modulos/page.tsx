"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Puzzle } from "lucide-react";

const TODOS_MODULOS = [
  { id: "dashboard", label: "Dashboard", desc: "Pantalla principal con widgets" },
  { id: "obras", label: "Obras", desc: "Gestión de obras con fases y fotos" },
  { id: "presupuestos", label: "Presupuestos", desc: "Crear y enviar presupuestos" },
  { id: "clientes", label: "Clientes", desc: "Base de datos de clientes" },
  { id: "facturas", label: "Facturación", desc: "Facturas emitidas y recibidas" },
  { id: "agenda", label: "Agenda", desc: "Citas y calendario" },
  { id: "equipo", label: "Equipo", desc: "Gestión de trabajadores y fichaje" },
  { id: "gastos", label: "Gastos", desc: "Control de gastos por obra" },
  { id: "pipeline", label: "Pipeline / CRM", desc: "Embudo de ventas y leads" },
  { id: "informes", label: "Informes", desc: "Informes de rentabilidad" },
  { id: "plantillas", label: "Plantillas", desc: "Plantillas de presupuesto y mensajes" },
  { id: "comunicaciones", label: "Comunicaciones", desc: "Registro de contactos" },
  { id: "subvenciones", label: "Subvenciones", desc: "Comprobador de ayudas" },
];

type EmpresaModulos = {
  empresa_id: string;
  empresa_nombre: string;
  modulos: Record<string, boolean>;
};

export default function AdminModulosPage() {
  const [empresas, setEmpresas] = useState<EmpresaModulos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    const supabase = createClient();
    const [empRes, modRes] = await Promise.all([
      supabase.from("empresas").select("id, nombre").order("nombre"),
      supabase.from("modulos_activos").select("empresa_id, modulo, activo"),
    ]);

    const modByEmpresa: Record<string, Record<string, boolean>> = {};
    (modRes.data || []).forEach((m: any) => {
      if (!modByEmpresa[m.empresa_id]) modByEmpresa[m.empresa_id] = {};
      modByEmpresa[m.empresa_id][m.modulo] = m.activo;
    });

    setEmpresas((empRes.data || []).map((e: any) => ({
      empresa_id: e.id,
      empresa_nombre: e.nombre,
      modulos: modByEmpresa[e.id] || {},
    })));
    setLoading(false);
  }

  async function toggleModulo(empresaId: string, modulo: string, current: boolean) {
    const supabase = createClient();
    const newValue = !current;

    const { data: existing } = await supabase
      .from("modulos_activos")
      .select("id")
      .eq("empresa_id", empresaId)
      .eq("modulo", modulo)
      .single();

    if (existing) {
      await supabase.from("modulos_activos").update({ activo: newValue }).eq("id", existing.id);
    } else {
      await supabase.from("modulos_activos").insert({ empresa_id: empresaId, modulo, activo: newValue });
    }

    setEmpresas((prev) => prev.map((e) =>
      e.empresa_id === empresaId ? { ...e, modulos: { ...e.modulos, [modulo]: newValue } } : e
    ));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulos por empresa</h1>
      <p className="text-sm text-gray-500 mb-6">Controla qué módulos tiene cada empresa activados</p>

      {loading ? (
        <div className="bg-white rounded-xl border p-8 text-center"><p className="text-gray-400">Cargando...</p></div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-2.5 font-medium text-gray-500 sticky left-0 bg-gray-50 min-w-[150px]">Empresa</th>
                {TODOS_MODULOS.map((m) => (
                  <th key={m.id} className="p-2.5 font-medium text-gray-500 text-center min-w-[70px]" title={m.desc}>{m.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {empresas.map((e) => (
                <tr key={e.empresa_id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-2.5 font-medium text-gray-900 sticky left-0 bg-white">{e.empresa_nombre}</td>
                  {TODOS_MODULOS.map((m) => (
                    <td key={m.id} className="p-2.5 text-center">
                      <button
                        onClick={() => toggleModulo(e.empresa_id, m.id, !!e.modulos[m.id])}
                        className={`w-6 h-6 rounded-md border-2 transition-colors ${
                          e.modulos[m.id] ? "bg-green-500 border-green-500 text-white" : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {e.modulos[m.id] && <span className="text-xs">✓</span>}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
