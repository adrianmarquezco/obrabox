"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Cliente } from "@/lib/supabase/types";
import { ArrowLeft, Phone, Mail, MapPin, Pencil, Trash2, Star, MessageCircle, Building, FileText, Receipt, MessageSquare, Plus, ExternalLink } from "lucide-react";

type Tab = "info" | "obras" | "presupuestos" | "facturas" | "comunicaciones";

type Obra = { id: string; nombre: string; estado: string; fecha_inicio: string | null; presupuesto_aprobado: number | null };
type Presupuesto = { id: string; numero: string | null; estado: string; total: number | null; created_at: string };
type Factura = { id: string; numero: string | null; estado: string; total: number | null; fecha_emision: string | null };
type Comunicacion = { id: string; tipo: string; nota: string | null; fecha: string; obras?: { nombre: string } | null };

const estadoObraColors: Record<string, string> = {
  pendiente: "badge-neutral", en_curso: "badge-info", pausada: "badge-warning",
  finalizada: "badge-success", cancelada: "badge-danger",
};
const estadoPresColors: Record<string, string> = {
  borrador: "badge-neutral", enviado: "badge-info", aceptado: "badge-success",
  rechazado: "badge-danger", expirado: "badge-warning",
};
const estadoFactColors: Record<string, string> = {
  borrador: "badge-neutral", emitida: "badge-info", pagada: "badge-success",
  vencida: "badge-danger", anulada: "badge-warning",
};

export default function ClienteDetallePage() {
  const { id } = useParams();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [tab, setTab] = useState<Tab>("info");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<Partial<Cliente>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [obras, setObras] = useState<Obra[]>([]);
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [comunicaciones, setComunicaciones] = useState<Comunicacion[]>([]);
  const [loadingTab, setLoadingTab] = useState(false);
  const router = useRouter();

  useEffect(() => { loadCliente(); }, [id]);

  async function loadCliente() {
    const supabase = createClient();
    const { data } = await supabase.from("clientes").select("*").eq("id", id).single();
    if (data) { setCliente(data); setForm(data); }
    setLoading(false);
  }

  async function loadTab(t: Tab) {
    if (t === "info") return;
    setLoadingTab(true);
    const supabase = createClient();
    if (t === "obras") {
      const { data } = await supabase.from("obras").select("id, nombre, estado, fecha_inicio, presupuesto_aprobado")
        .eq("cliente_id", id).is("deleted_at", null).order("created_at", { ascending: false });
      setObras(data || []);
    } else if (t === "presupuestos") {
      const { data } = await supabase.from("presupuestos").select("id, numero, estado, total, created_at")
        .eq("cliente_id", id).order("created_at", { ascending: false });
      setPresupuestos(data || []);
    } else if (t === "facturas") {
      const { data } = await supabase.from("facturas").select("id, numero, estado, total, fecha_emision")
        .eq("cliente_id", id).order("created_at", { ascending: false });
      setFacturas(data || []);
    } else if (t === "comunicaciones") {
      const { data } = await supabase.from("comunicaciones").select("id, tipo, nota, fecha, obras(nombre)")
        .eq("cliente_id", id).order("fecha", { ascending: false });
      setComunicaciones(data || []);
    }
    setLoadingTab(false);
  }

  function changeTab(t: Tab) {
    setTab(t);
    loadTab(t);
  }

  function update(field: string, value: string | number | null) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    await supabase.from("clientes").update({
      nombre: form.nombre, telefono: form.telefono || null, email: form.email || null,
      direccion: form.direccion || null, nif_cif: form.nif_cif || null, tipo: form.tipo,
      origen: form.origen || null, valoracion: form.valoracion || null,
      valoracion_nota: form.valoracion_nota || null, notas: form.notas || null,
    }).eq("id", id);
    setCliente({ ...cliente!, ...form } as Cliente);
    setEditing(false);
    setSaving(false);
  }

  async function handleDelete() {
    if (!confirm("¿Eliminar este cliente? Esta acción no se puede deshacer.")) return;
    const supabase = createClient();
    await supabase.from("clientes").update({ deleted_at: new Date().toISOString() }).eq("id", id);
    router.push("/dashboard/clientes");
  }

  if (loading) return <div className="card p-8 text-center"><p className="text-gray-400">Cargando...</p></div>;
  if (!cliente) return <div className="card p-8 text-center"><p className="text-gray-500">Cliente no encontrado</p></div>;

  const tabs: { id: Tab; label: string; icon: typeof Building }[] = [
    { id: "info", label: "Info", icon: Phone },
    { id: "obras", label: "Obras", icon: Building },
    { id: "presupuestos", label: "Presupuestos", icon: FileText },
    { id: "facturas", label: "Facturas", icon: Receipt },
    { id: "comunicaciones", label: "Comunicaciones", icon: MessageSquare },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/dashboard/clientes" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-secondary mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a clientes
      </Link>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-secondary">{cliente.nombre}</h1>
          <span className="badge-neutral text-xs mt-1">
            {cliente.tipo === "particular" ? "Particular" : cliente.tipo === "empresa" ? "Empresa" : cliente.tipo === "comunidad" ? "Comunidad" : "Aseguradora"}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { setEditing(!editing); setTab("info"); }} className="btn-secondary !px-3 !py-2 !text-sm">
            <Pencil className="w-4 h-4" />
          </button>
          <button onClick={handleDelete} className="btn-secondary !px-3 !py-2 !text-sm text-red-500 hover:text-red-600">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {cliente.telefono && (
          <a href={`tel:${cliente.telefono}`} className="btn-secondary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> Llamar
          </a>
        )}
        {cliente.telefono && (
          <a href={`https://wa.me/34${cliente.telefono.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer"
            className="btn-secondary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-green-500" /> WhatsApp
          </a>
        )}
        {cliente.email && (
          <a href={`mailto:${cliente.email}`} className="btn-secondary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-500" /> Email
          </a>
        )}
        <Link href={`/dashboard/presupuestos/nuevo?cliente=${cliente.id}`}
          className="btn-primary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5" /> Nuevo presupuesto
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => changeTab(t.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors -mb-px ${
              tab === t.id ? "border-primary-500 text-primary-500" : "border-transparent text-gray-500 hover:text-secondary"
            }`}>
            <t.icon className="w-3.5 h-3.5" /> {t.label}
          </button>
        ))}
      </div>

      {/* TAB: INFO */}
      {tab === "info" && !editing && (
        <div className="space-y-4">
          <div className="card p-5 space-y-3">
            <h2 className="font-semibold text-secondary text-sm uppercase tracking-wider">Contacto</h2>
            {cliente.telefono && (
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-gray-400" /> {cliente.telefono}
              </div>
            )}
            {cliente.email && (
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-gray-400" /> {cliente.email}
              </div>
            )}
            {cliente.direccion && (
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-gray-400" /> {cliente.direccion}
              </div>
            )}
            {cliente.nif_cif && <div className="text-sm text-gray-500">NIF/CIF: {cliente.nif_cif}</div>}
          </div>
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
          {cliente.notas && (
            <div className="card p-5">
              <h2 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Notas internas</h2>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{cliente.notas}</p>
            </div>
          )}
        </div>
      )}

      {/* TAB: INFO (editing) */}
      {tab === "info" && editing && (
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="card p-6 space-y-4">
          <div><label className="label">Nombre *</label>
            <input type="text" value={form.nombre || ""} onChange={(e) => update("nombre", e.target.value)} className="input" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Teléfono</label>
              <input type="tel" value={form.telefono || ""} onChange={(e) => update("telefono", e.target.value)} className="input" />
            </div>
            <div><label className="label">Email</label>
              <input type="email" value={form.email || ""} onChange={(e) => update("email", e.target.value)} className="input" />
            </div>
          </div>
          <div><label className="label">Dirección</label>
            <input type="text" value={form.direccion || ""} onChange={(e) => update("direccion", e.target.value)} className="input" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">NIF / CIF</label>
              <input type="text" value={form.nif_cif || ""} onChange={(e) => update("nif_cif", e.target.value)} className="input" />
            </div>
            <div><label className="label">Tipo</label>
              <select value={form.tipo || "particular"} onChange={(e) => update("tipo", e.target.value)} className="input">
                <option value="particular">Particular</option>
                <option value="empresa">Empresa</option>
                <option value="comunidad">Comunidad</option>
                <option value="aseguradora">Aseguradora</option>
              </select>
            </div>
          </div>
          <div><label className="label">Valoración (1-5)</label>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} type="button" onClick={() => update("valoracion", i + 1)}>
                  <Star className={`w-6 h-6 cursor-pointer ${i < (form.valoracion || 0) ? "fill-primary-400 text-primary-400" : "text-gray-200 hover:text-primary-300"}`} />
                </button>
              ))}
            </div>
          </div>
          <div><label className="label">Nota de valoración</label>
            <input type="text" value={form.valoracion_nota || ""} onChange={(e) => update("valoracion_nota", e.target.value)} className="input" placeholder="Buen pagador, puntual..." />
          </div>
          <div><label className="label">Notas internas</label>
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

      {/* TAB: OBRAS */}
      {tab === "obras" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">{obras.length} obra{obras.length !== 1 ? "s" : ""}</p>
            <Link href={`/dashboard/obras/nueva?cliente=${cliente.id}`} className="btn-primary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Nueva obra
            </Link>
          </div>
          {loadingTab ? (
            <div className="card p-6 text-center"><p className="text-gray-400 text-sm">Cargando...</p></div>
          ) : obras.length === 0 ? (
            <div className="card p-8 text-center">
              <Building className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Este cliente no tiene obras registradas</p>
            </div>
          ) : (
            <div className="space-y-2">
              {obras.map((o) => (
                <Link key={o.id} href={`/dashboard/obras/${o.id}`}
                  className="card p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div>
                    <p className="font-medium text-secondary text-sm">{o.nombre}</p>
                    {o.fecha_inicio && <p className="text-xs text-gray-400 mt-0.5">Inicio: {new Date(o.fecha_inicio).toLocaleDateString("es-ES")}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    {o.presupuesto_aprobado && (
                      <span className="text-sm font-semibold text-primary-500">{Number(o.presupuesto_aprobado).toLocaleString("es-ES")}€</span>
                    )}
                    <span className={estadoObraColors[o.estado] || "badge-neutral"}>{o.estado.replace("_", " ")}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB: PRESUPUESTOS */}
      {tab === "presupuestos" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">{presupuestos.length} presupuesto{presupuestos.length !== 1 ? "s" : ""}</p>
            <Link href={`/dashboard/presupuestos/nuevo?cliente=${cliente.id}`} className="btn-primary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Nuevo presupuesto
            </Link>
          </div>
          {loadingTab ? (
            <div className="card p-6 text-center"><p className="text-gray-400 text-sm">Cargando...</p></div>
          ) : presupuestos.length === 0 ? (
            <div className="card p-8 text-center">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Este cliente no tiene presupuestos</p>
            </div>
          ) : (
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="p-3 text-left font-medium text-gray-500">Número</th>
                    <th className="p-3 text-left font-medium text-gray-500">Fecha</th>
                    <th className="p-3 text-left font-medium text-gray-500">Estado</th>
                    <th className="p-3 text-right font-medium text-gray-500">Total</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {presupuestos.map((p) => (
                    <tr key={p.id} className="border-b border-border/50 hover:bg-surface/50">
                      <td className="p-3 font-medium text-secondary">{p.numero || "Sin número"}</td>
                      <td className="p-3 text-gray-500">{new Date(p.created_at).toLocaleDateString("es-ES")}</td>
                      <td className="p-3"><span className={estadoPresColors[p.estado] || "badge-neutral"}>{p.estado}</span></td>
                      <td className="p-3 text-right font-semibold text-secondary">{p.total ? `${Number(p.total).toLocaleString("es-ES")}€` : "—"}</td>
                      <td className="p-3">
                        <Link href={`/dashboard/presupuestos/${p.id}`}><ExternalLink className="w-3.5 h-3.5 text-gray-400 hover:text-primary-500" /></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB: FACTURAS */}
      {tab === "facturas" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">{facturas.length} factura{facturas.length !== 1 ? "s" : ""}</p>
          </div>
          {loadingTab ? (
            <div className="card p-6 text-center"><p className="text-gray-400 text-sm">Cargando...</p></div>
          ) : facturas.length === 0 ? (
            <div className="card p-8 text-center">
              <Receipt className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Este cliente no tiene facturas</p>
            </div>
          ) : (
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="p-3 text-left font-medium text-gray-500">Número</th>
                    <th className="p-3 text-left font-medium text-gray-500">Fecha</th>
                    <th className="p-3 text-left font-medium text-gray-500">Estado</th>
                    <th className="p-3 text-right font-medium text-gray-500">Total</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {facturas.map((f) => (
                    <tr key={f.id} className="border-b border-border/50 hover:bg-surface/50">
                      <td className="p-3 font-medium text-secondary">{f.numero || "Sin número"}</td>
                      <td className="p-3 text-gray-500">{f.fecha_emision ? new Date(f.fecha_emision).toLocaleDateString("es-ES") : "—"}</td>
                      <td className="p-3"><span className={estadoFactColors[f.estado] || "badge-neutral"}>{f.estado}</span></td>
                      <td className="p-3 text-right font-semibold text-secondary">{f.total ? `${Number(f.total).toLocaleString("es-ES")}€` : "—"}</td>
                      <td className="p-3">
                        <Link href={`/dashboard/facturacion`}><ExternalLink className="w-3.5 h-3.5 text-gray-400 hover:text-primary-500" /></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB: COMUNICACIONES */}
      {tab === "comunicaciones" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">{comunicaciones.length} comunicación{comunicaciones.length !== 1 ? "es" : ""}</p>
            <Link href={`/dashboard/comunicaciones?cliente=${cliente.id}`} className="btn-secondary !text-xs !px-3 !py-1.5 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" /> Ver todas
            </Link>
          </div>
          {loadingTab ? (
            <div className="card p-6 text-center"><p className="text-gray-400 text-sm">Cargando...</p></div>
          ) : comunicaciones.length === 0 ? (
            <div className="card p-8 text-center">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Sin comunicaciones registradas con este cliente</p>
            </div>
          ) : (
            <div className="space-y-2">
              {comunicaciones.map((c) => (
                <div key={c.id} className="card p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-secondary capitalize">{c.tipo}</span>
                      {c.obras && <span className="text-xs text-gray-400">· {(c.obras as any).nombre}</span>}
                    </div>
                    {c.nota && <p className="text-sm text-gray-600 mt-0.5">{c.nota}</p>}
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(c.fecha).toLocaleDateString("es-ES")} {new Date(c.fecha).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
