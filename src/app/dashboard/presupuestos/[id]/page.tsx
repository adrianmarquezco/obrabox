"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Presupuesto, PresupuestoCapitulo, PresupuestoPartida } from "@/lib/supabase/types";
import { ArrowLeft, Send, Download, Copy, Building2, MessageCircle } from "lucide-react";
import { generatePresupuestoPDF } from "@/lib/pdf/generatePresupuestoPDF";

const estadoLabels: Record<string, { label: string; class: string }> = {
  borrador: { label: "Borrador", class: "badge-neutral" },
  enviado: { label: "Enviado", class: "badge-info" },
  aceptado: { label: "Aceptado", class: "badge-success" },
  rechazado: { label: "Rechazado", class: "badge-danger" },
  expirado: { label: "Expirado", class: "badge-warning" },
};

export default function PresupuestoDetallePage() {
  const { id } = useParams();
  const [presupuesto, setPresupuesto] = useState<Presupuesto | null>(null);
  const [capitulos, setCapitulos] = useState<PresupuestoCapitulo[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEstado, setEditingEstado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadPresupuesto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function loadPresupuesto() {
    const supabase = createClient();
    const [presRes, capsRes] = await Promise.all([
      supabase.from("presupuestos").select("*, clientes(nombre, telefono, email)").eq("id", id).single(),
      supabase.from("presupuesto_capitulos").select("*, partidas:presupuesto_partidas(*)").eq("presupuesto_id", id).order("orden"),
    ]);
    if (presRes.data) setPresupuesto(presRes.data);
    if (capsRes.data) {
      setCapitulos(
        capsRes.data.map((c: { partidas?: { orden: number }[] }) => ({
          ...c,
          partidas: (c.partidas || []).sort((a: { orden: number }, b: { orden: number }) => a.orden - b.orden),
        }))
      );
    }
    setLoading(false);
  }

  async function updateEstado(estado: string) {
    const supabase = createClient();
    const updates: Record<string, string> = { estado };
    if (estado === "enviado" && !presupuesto?.fecha_envio) {
      updates.fecha_envio = new Date().toISOString().split("T")[0];
    }
    await supabase.from("presupuestos").update(updates).eq("id", id);
    setPresupuesto((prev) => prev ? { ...prev, ...updates } : null);
    setEditingEstado(false);
  }

  async function duplicar() {
    if (!presupuesto) return;
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;

    const { data: emp } = await supabase.from("empresas").select("numeracion_presupuesto_contador").eq("id", usr.empresa_id).single();
    const contador = (emp?.numeracion_presupuesto_contador || 0) + 1;
    const numero = `P-${new Date().getFullYear()}-${String(contador).padStart(3, "0")}`;

    const { data: newPres } = await supabase.from("presupuestos").insert({
      empresa_id: usr.empresa_id,
      cliente_id: presupuesto.cliente_id,
      numero,
      tipo_reforma: presupuesto.tipo_reforma,
      estado: "borrador",
      subtotal: presupuesto.subtotal,
      iva_porcentaje: presupuesto.iva_porcentaje,
      iva_importe: presupuesto.iva_importe,
      total: presupuesto.total,
      notas_cliente: presupuesto.notas_cliente,
      notas_internas: presupuesto.notas_internas,
    }).select("id").single();

    if (newPres) {
      for (const cap of capitulos) {
        const { data: newCap } = await supabase.from("presupuesto_capitulos").insert({
          presupuesto_id: newPres.id, nombre: cap.nombre, orden: cap.orden,
        }).select("id").single();
        if (newCap && cap.partidas) {
          const partidas = cap.partidas.map((p: PresupuestoPartida, i: number) => ({
            capitulo_id: newCap.id, concepto: p.concepto, descripcion: p.descripcion,
            unidad: p.unidad, cantidad: p.cantidad, precio_unitario: p.precio_unitario,
            margen_porcentaje: p.margen_porcentaje, total: p.total, orden: i,
          }));
          await supabase.from("presupuesto_partidas").insert(partidas);
        }
      }
      await supabase.from("empresas").update({ numeracion_presupuesto_contador: contador }).eq("id", usr.empresa_id);
      router.push(`/dashboard/presupuestos/${newPres.id}`);
    }
  }

  async function descargarPDF() {
    if (!presupuesto) return;
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;
    const { data: emp } = await supabase.from("empresas").select("nombre, cif, direccion, telefono, email, iban").eq("id", usr.empresa_id).single();

    const doc = generatePresupuestoPDF({
      numero: presupuesto.numero || "SN",
      fecha: presupuesto.created_at,
      empresa: emp || { nombre: "Mi Empresa" },
      cliente: {
        nombre: (presupuesto.clientes as { nombre: string })?.nombre || "Sin cliente",
        direccion: undefined,
        nif_cif: undefined,
      },
      capitulos: capitulos.map((c) => ({
        nombre: c.nombre,
        partidas: (c.partidas || []).map((p: PresupuestoPartida) => ({
          concepto: p.concepto, unidad: p.unidad, cantidad: Number(p.cantidad),
          precio_unitario: Number(p.precio_unitario), total: Number(p.total),
        })),
      })),
      subtotal: Number(presupuesto.subtotal),
      iva_porcentaje: Number(presupuesto.iva_porcentaje),
      iva_importe: Number(presupuesto.iva_importe),
      total: Number(presupuesto.total),
      notas_cliente: presupuesto.notas_cliente || undefined,
    });
    doc.save(`${presupuesto.numero || "presupuesto"}.pdf`);
  }

  async function convertirEnObra() {
    if (!presupuesto) return;
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
    if (!usr) return;

    const { data: obra } = await supabase
      .from("obras")
      .insert({
        empresa_id: usr.empresa_id,
        cliente_id: presupuesto.cliente_id,
        presupuesto_id: presupuesto.id,
        nombre: `Obra - ${presupuesto.numero || "Presupuesto"}`,
        tipo_reforma: presupuesto.tipo_reforma,
        presupuesto_aprobado: presupuesto.total,
        estado: "pendiente",
      })
      .select("id")
      .single();

    if (obra) {
      await updateEstado("aceptado");
      router.push(`/dashboard/obras/${obra.id}`);
    }
  }

  if (loading) return <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;
  if (!presupuesto) return <div className="card p-8 text-center"><p className="text-gray-500">Presupuesto no encontrado</p></div>;

  const est = estadoLabels[presupuesto.estado] || { label: presupuesto.estado, class: "badge-neutral" };
  const cliente = presupuesto.clientes as { nombre: string; telefono?: string; email?: string } | undefined;

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/dashboard/presupuestos" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a presupuestos
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-secondary">{presupuesto.numero || "Sin número"}</h1>
            <div className="relative">
              <button onClick={() => setEditingEstado(!editingEstado)} className={est.class + " cursor-pointer"}>
                {est.label}
              </button>
              {editingEstado && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg border border-border shadow-lg py-1 z-10 w-40">
                  {Object.entries(estadoLabels).map(([key, val]) => (
                    <button key={key} onClick={() => updateEstado(key)} className="block w-full text-left px-3 py-2 text-sm hover:bg-surface">
                      <span className={val.class}>{val.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {cliente && <p className="text-sm text-gray-500">Cliente: {cliente.nombre}</p>}
          {presupuesto.tipo_reforma && <p className="text-sm text-gray-500">Tipo: {presupuesto.tipo_reforma}</p>}
        </div>
      </div>

      {/* Acciones */}
      <div className="flex flex-wrap gap-2 mb-6">
        {presupuesto.estado === "borrador" && (
          <button onClick={() => updateEstado("enviado")} className="btn-primary !text-sm flex items-center gap-2">
            <Send className="w-4 h-4" /> Marcar como enviado
          </button>
        )}
        {presupuesto.estado === "enviado" && (
          <button onClick={convertirEnObra} className="btn-primary !text-sm flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Convertir en obra
          </button>
        )}
        <button onClick={descargarPDF} className="btn-secondary !text-sm flex items-center gap-2">
          <Download className="w-4 h-4" /> Descargar PDF
        </button>
        {cliente?.telefono && (
          <a
            href={`https://wa.me/34${cliente.telefono.replace(/\s/g, "")}?text=${encodeURIComponent(`Hola ${cliente.nombre}, te envío el presupuesto ${presupuesto.numero} por un total de ${Number(presupuesto.total).toLocaleString("es-ES")}€.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        )}
        <button onClick={duplicar} className="btn-secondary !text-sm flex items-center gap-2">
          <Copy className="w-4 h-4" /> Duplicar
        </button>
      </div>

      {/* Partidas */}
      {capitulos.map((cap) => (
        <div key={cap.id} className="card mb-4 overflow-hidden">
          <div className="bg-surface px-5 py-3 border-b border-border">
            <h3 className="font-semibold text-secondary">{cap.nombre}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left bg-surface/50">
                  <th className="px-5 py-2.5 font-medium text-gray-500">Concepto</th>
                  <th className="px-3 py-2.5 font-medium text-gray-500 w-16">Ud.</th>
                  <th className="px-3 py-2.5 font-medium text-gray-500 text-right w-20">Cant.</th>
                  <th className="px-3 py-2.5 font-medium text-gray-500 text-right w-24">Precio</th>
                  <th className="px-5 py-2.5 font-medium text-gray-500 text-right w-28">Total</th>
                </tr>
              </thead>
              <tbody>
                {(cap.partidas || []).map((p: PresupuestoPartida) => (
                  <tr key={p.id} className="border-b border-border/50">
                    <td className="px-5 py-3">
                      <p className="text-secondary">{p.concepto}</p>
                      {p.descripcion && <p className="text-xs text-gray-400 mt-0.5">{p.descripcion}</p>}
                    </td>
                    <td className="px-3 py-3 text-gray-500">{p.unidad}</td>
                    <td className="px-3 py-3 text-right text-gray-500">{Number(p.cantidad).toLocaleString("es-ES")}</td>
                    <td className="px-3 py-3 text-right text-gray-500">{Number(p.precio_unitario).toLocaleString("es-ES", { minimumFractionDigits: 2 })}€</td>
                    <td className="px-5 py-3 text-right font-medium text-secondary">{Number(p.total).toLocaleString("es-ES", { minimumFractionDigits: 2 })}€</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Totales */}
      <div className="card p-6 mb-6">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-8">
            <span className="text-sm text-gray-500">Subtotal:</span>
            <span className="font-medium text-secondary w-28 text-right">
              {Number(presupuesto.subtotal).toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-sm text-gray-500">IVA ({presupuesto.iva_porcentaje}%):</span>
            <span className="font-medium text-secondary w-28 text-right">
              {Number(presupuesto.iva_importe).toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
            </span>
          </div>
          <div className="border-t border-border pt-2 mt-1 flex items-center gap-8">
            <span className="font-semibold text-secondary">TOTAL:</span>
            <span className="text-2xl font-bold text-primary-500 w-28 text-right">
              {Number(presupuesto.total).toLocaleString("es-ES", { minimumFractionDigits: 2 })}€
            </span>
          </div>
        </div>
      </div>

      {/* Notas */}
      {presupuesto.notas_cliente && (
        <div className="card p-5 mb-4">
          <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Notas para el cliente</h3>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{presupuesto.notas_cliente}</p>
        </div>
      )}
      {presupuesto.notas_internas && (
        <div className="card p-5 mb-4 bg-yellow-50 border-yellow-200">
          <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Notas internas</h3>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{presupuesto.notas_internas}</p>
        </div>
      )}
    </div>
  );
}
