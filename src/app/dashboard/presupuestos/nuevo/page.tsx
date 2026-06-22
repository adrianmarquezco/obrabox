"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import type { Cliente } from "@/lib/supabase/types";
import { Suspense } from "react";

type Partida = {
  concepto: string;
  descripcion: string;
  unidad: string;
  cantidad: number;
  precio_unitario: number;
  margen_porcentaje: number;
};

type Capitulo = {
  nombre: string;
  partidas: Partida[];
};

function NuevoPresupuestoForm() {
  const searchParams = useSearchParams();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [form, setForm] = useState({
    cliente_id: searchParams.get("cliente") || "",
    tipo_reforma: "",
    iva_porcentaje: "21",
    notas_cliente: "",
    notas_internas: "",
  });
  const [capitulos, setCapitulos] = useState<Capitulo[]>([
    {
      nombre: "Capítulo 1",
      partidas: [{ concepto: "", descripcion: "", unidad: "ud", cantidad: 1, precio_unitario: 0, margen_porcentaje: 0 }],
    },
  ]);
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

  function updateForm(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function addCapitulo() {
    setCapitulos((prev) => [
      ...prev,
      {
        nombre: `Capítulo ${prev.length + 1}`,
        partidas: [{ concepto: "", descripcion: "", unidad: "ud", cantidad: 1, precio_unitario: 0, margen_porcentaje: 0 }],
      },
    ]);
  }

  function removeCapitulo(ci: number) {
    setCapitulos((prev) => prev.filter((_, i) => i !== ci));
  }

  function updateCapituloNombre(ci: number, nombre: string) {
    setCapitulos((prev) =>
      prev.map((c, i) => (i === ci ? { ...c, nombre } : c))
    );
  }

  function addPartida(ci: number) {
    setCapitulos((prev) =>
      prev.map((c, i) =>
        i === ci
          ? { ...c, partidas: [...c.partidas, { concepto: "", descripcion: "", unidad: "ud", cantidad: 1, precio_unitario: 0, margen_porcentaje: 0 }] }
          : c
      )
    );
  }

  function removePartida(ci: number, pi: number) {
    setCapitulos((prev) =>
      prev.map((c, i) =>
        i === ci ? { ...c, partidas: c.partidas.filter((_, j) => j !== pi) } : c
      )
    );
  }

  function updatePartida(ci: number, pi: number, field: string, value: string | number) {
    setCapitulos((prev) =>
      prev.map((c, i) =>
        i === ci
          ? {
              ...c,
              partidas: c.partidas.map((p, j) =>
                j === pi ? { ...p, [field]: value } : p
              ),
            }
          : c
      )
    );
  }

  function calcTotal(p: Partida) {
    const base = p.cantidad * p.precio_unitario;
    return base + base * (p.margen_porcentaje / 100);
  }

  const subtotal = capitulos.reduce(
    (sum, c) => sum + c.partidas.reduce((s, p) => s + calcTotal(p), 0),
    0
  );
  const iva = subtotal * (parseFloat(form.iva_porcentaje) / 100);
  const total = subtotal + iva;

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

    const { data: emp } = await supabase
      .from("empresas")
      .select("numeracion_factura_prefijo, numeracion_factura_contador")
      .eq("id", usr.empresa_id)
      .single();

    const contador = (emp?.numeracion_factura_contador || 0) + 1;
    const numero = `P-${new Date().getFullYear()}-${String(contador).padStart(3, "0")}`;

    const { data: pres, error: presErr } = await supabase
      .from("presupuestos")
      .insert({
        empresa_id: usr.empresa_id,
        cliente_id: form.cliente_id || null,
        numero,
        tipo_reforma: form.tipo_reforma || null,
        estado: "borrador",
        subtotal,
        iva_porcentaje: parseFloat(form.iva_porcentaje),
        iva_importe: iva,
        total,
        notas_cliente: form.notas_cliente || null,
        notas_internas: form.notas_internas || null,
      })
      .select("id")
      .single();

    if (presErr || !pres) {
      setError("Error al crear el presupuesto");
      setLoading(false);
      return;
    }

    for (let ci = 0; ci < capitulos.length; ci++) {
      const cap = capitulos[ci];
      const { data: capData } = await supabase
        .from("presupuesto_capitulos")
        .insert({ presupuesto_id: pres.id, nombre: cap.nombre, orden: ci })
        .select("id")
        .single();

      if (capData) {
        const partidas = cap.partidas
          .filter((p) => p.concepto.trim())
          .map((p, pi) => ({
            capitulo_id: capData.id,
            concepto: p.concepto,
            descripcion: p.descripcion || null,
            unidad: p.unidad,
            cantidad: p.cantidad,
            precio_unitario: p.precio_unitario,
            margen_porcentaje: p.margen_porcentaje,
            total: calcTotal(p),
            orden: pi,
          }));
        if (partidas.length > 0) {
          await supabase.from("presupuesto_partidas").insert(partidas);
        }
      }
    }

    router.push(`/dashboard/presupuestos/${pres.id}`);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/dashboard/presupuestos" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a presupuestos
      </Link>

      <h1 className="text-2xl font-bold text-secondary mb-6">Nuevo presupuesto</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Datos básicos */}
        <div className="card p-6 mb-6 space-y-4">
          <h2 className="font-semibold text-secondary">Datos del presupuesto</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Cliente</label>
              <select value={form.cliente_id} onChange={(e) => updateForm("cliente_id", e.target.value)} className="input">
                <option value="">Sin cliente</option>
                {clientes.map((c) => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Tipo de reforma</label>
              <select value={form.tipo_reforma} onChange={(e) => updateForm("tipo_reforma", e.target.value)} className="input">
                <option value="">Seleccionar</option>
                <option value="Baño">Baño</option>
                <option value="Cocina">Cocina</option>
                <option value="Integral">Reforma integral</option>
                <option value="Pintura">Pintura</option>
                <option value="Local">Local comercial</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Capítulos y partidas */}
        {capitulos.map((cap, ci) => (
          <div key={ci} className="card p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                value={cap.nombre}
                onChange={(e) => updateCapituloNombre(ci, e.target.value)}
                className="text-lg font-semibold text-secondary bg-transparent border-none outline-none focus:ring-0 p-0"
                placeholder="Nombre del capítulo"
              />
              {capitulos.length > 1 && (
                <button type="button" onClick={() => removeCapitulo(ci)} className="text-red-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 font-medium text-gray-500 w-[35%]">Concepto</th>
                    <th className="pb-2 font-medium text-gray-500 w-16">Ud.</th>
                    <th className="pb-2 font-medium text-gray-500 w-20 text-right">Cant.</th>
                    <th className="pb-2 font-medium text-gray-500 w-24 text-right">Precio</th>
                    <th className="pb-2 font-medium text-gray-500 w-20 text-right">Margen</th>
                    <th className="pb-2 font-medium text-gray-500 w-24 text-right">Total</th>
                    <th className="pb-2 w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {cap.partidas.map((p, pi) => (
                    <tr key={pi} className="border-b border-border/50">
                      <td className="py-2 pr-2">
                        <input type="text" value={p.concepto} onChange={(e) => updatePartida(ci, pi, "concepto", e.target.value)} className="input !py-1.5 !text-sm" placeholder="Concepto" />
                      </td>
                      <td className="py-2 pr-2">
                        <select value={p.unidad} onChange={(e) => updatePartida(ci, pi, "unidad", e.target.value)} className="input !py-1.5 !text-sm !px-1">
                          <option value="ud">ud</option>
                          <option value="m²">m²</option>
                          <option value="ml">ml</option>
                          <option value="h">h</option>
                          <option value="pa">pa</option>
                        </select>
                      </td>
                      <td className="py-2 pr-2">
                        <input type="number" step="0.01" min="0" value={p.cantidad} onChange={(e) => updatePartida(ci, pi, "cantidad", parseFloat(e.target.value) || 0)} className="input !py-1.5 !text-sm text-right" />
                      </td>
                      <td className="py-2 pr-2">
                        <input type="number" step="0.01" min="0" value={p.precio_unitario} onChange={(e) => updatePartida(ci, pi, "precio_unitario", parseFloat(e.target.value) || 0)} className="input !py-1.5 !text-sm text-right" />
                      </td>
                      <td className="py-2 pr-2">
                        <div className="relative">
                          <input type="number" step="0.1" min="0" value={p.margen_porcentaje} onChange={(e) => updatePartida(ci, pi, "margen_porcentaje", parseFloat(e.target.value) || 0)} className="input !py-1.5 !text-sm text-right !pr-6" />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">%</span>
                        </div>
                      </td>
                      <td className="py-2 pr-2 text-right font-medium text-secondary">
                        {calcTotal(p).toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
                      </td>
                      <td className="py-2">
                        {cap.partidas.length > 1 && (
                          <button type="button" onClick={() => removePartida(ci, pi)} className="text-red-300 hover:text-red-500">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button type="button" onClick={() => addPartida(ci)} className="text-sm text-primary-500 font-medium mt-3 flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" /> Añadir partida
            </button>
          </div>
        ))}

        <button type="button" onClick={addCapitulo} className="btn-secondary w-full mb-6 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Añadir capítulo
        </button>

        {/* Totales */}
        <div className="card p-6 mb-6">
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Subtotal:</span>
              <span className="text-lg font-medium text-secondary w-32 text-right">
                {subtotal.toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">IVA</span>
                <select value={form.iva_porcentaje} onChange={(e) => updateForm("iva_porcentaje", e.target.value)} className="input !py-1 !px-2 !text-sm w-20">
                  <option value="10">10%</option>
                  <option value="21">21%</option>
                  <option value="0">Exento</option>
                </select>
              </div>
              <span className="text-lg font-medium text-secondary w-32 text-right">
                {iva.toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
              </span>
            </div>
            <div className="border-t border-border pt-2 flex items-center gap-4">
              <span className="text-base font-semibold text-secondary">TOTAL:</span>
              <span className="text-2xl font-bold text-primary-500 w-32 text-right">
                {total.toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
              </span>
            </div>
          </div>
        </div>

        {/* Notas */}
        <div className="card p-6 mb-6 space-y-4">
          <div>
            <label className="label">Notas para el cliente</label>
            <textarea value={form.notas_cliente} onChange={(e) => updateForm("notas_cliente", e.target.value)} className="input min-h-[60px] resize-y" placeholder="Condiciones, plazos, garantías..." />
          </div>
          <div>
            <label className="label">Notas internas (no se ven en el PDF)</label>
            <textarea value={form.notas_internas} onChange={(e) => updateForm("notas_internas", e.target.value)} className="input min-h-[60px] resize-y" placeholder="Notas para ti..." />
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/dashboard/presupuestos" className="btn-secondary flex-1 text-center">Cancelar</Link>
          <button type="submit" disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
            {loading ? "Creando..." : "Crear presupuesto"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function NuevoPresupuestoPage() {
  return (
    <Suspense>
      <NuevoPresupuestoForm />
    </Suspense>
  );
}
