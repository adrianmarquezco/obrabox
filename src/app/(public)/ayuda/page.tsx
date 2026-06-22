import type { Metadata } from "next";
import Link from "next/link";
import { Search, BookOpen, FileText, Users, Settings, CreditCard, Building2, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Centro de Ayuda — ObraBox",
  description: "Encuentra respuestas a tus dudas sobre ObraBox. Guías, FAQ y soporte para gestionar tu empresa de reformas.",
  alternates: { canonical: "/ayuda" },
};

const secciones = [
  { icon: BookOpen, title: "Primeros pasos", desc: "Cómo crear tu cuenta, configurar tu empresa y empezar a usar ObraBox.", links: ["Crear cuenta", "Configurar empresa", "Primer presupuesto", "Primera obra"] },
  { icon: FileText, title: "Presupuestos", desc: "Todo sobre crear, enviar y gestionar presupuestos.", links: ["Crear presupuesto", "Plantillas", "Opciones básico/medio/premium", "Firma digital", "Enviar por WhatsApp"] },
  { icon: Building2, title: "Obras", desc: "Gestión de obras, fases, extras e incidencias.", links: ["Crear obra", "Checklist de fases", "Extras y modificaciones", "Control de calidad", "Fotos de obra"] },
  { icon: CreditCard, title: "Facturación", desc: "Facturas, pagos, impagos y exportación.", links: ["Crear factura", "Pagos fraccionados", "Recordatorios de impago", "Exportar para gestoría"] },
  { icon: Users, title: "Equipo", desc: "Gestionar trabajadores, planning y fichaje.", links: ["Añadir trabajador", "Planning semanal", "Fichaje", "Documentación"] },
  { icon: Settings, title: "Configuración", desc: "Personalizar tu empresa, módulos y cuenta.", links: ["Datos de empresa", "Logo y marca", "Módulos", "Plan y facturación"] },
];

export default function AyudaPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary">Centro de ayuda</h1>
          <p className="mt-4 text-lg text-gray-600">¿En qué podemos ayudarte?</p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Buscar en el centro de ayuda..." className="input !pl-12 !py-4 text-lg" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secciones.map((s) => (
            <div key={s.title} className="card p-6">
              <s.icon className="w-8 h-8 text-primary-500 mb-3" />
              <h2 className="text-lg font-semibold text-secondary mb-1">{s.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-primary-500 hover:text-primary-600 cursor-pointer">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center card p-8 max-w-2xl mx-auto bg-primary-50 border-primary-200">
          <h2 className="text-xl font-bold text-secondary mb-2">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-600 mb-4">Nuestro equipo de soporte está aquí para ayudarte.</p>
          <Link href="/contacto" className="btn-primary">Contactar soporte</Link>
        </div>
      </div>
    </section>
  );
}
