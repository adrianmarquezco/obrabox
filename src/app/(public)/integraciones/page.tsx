import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MessageCircle, FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Integraciones — ObraBox con Google Calendar, WhatsApp y Gestoría",
  description: "ObraBox se integra con Google Calendar, WhatsApp Business y exportación para gestoría. Conecta tu flujo de trabajo.",
  alternates: { canonical: "/integraciones" },
};

const integraciones = [
  {
    icon: Calendar,
    nombre: "Google Calendar",
    estado: "Próximamente",
    desc: "Sincroniza tu agenda de ObraBox con Google Calendar. Las citas aparecerán en ambas plataformas automáticamente.",
  },
  {
    icon: MessageCircle,
    nombre: "WhatsApp Business",
    estado: "Disponible",
    desc: "Envía presupuestos, facturas y enlaces del portal del cliente directamente por WhatsApp con un clic. Usa los links wa.me con texto predefinido.",
  },
  {
    icon: FileDown,
    nombre: "Exportación para gestoría",
    estado: "Disponible",
    desc: "Exporta todas tus facturas emitidas y recibidas en CSV o Excel para que tu gestor tenga todo listo para las declaraciones trimestrales.",
  },
];

export default function IntegracionesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary">Integraciones</h1>
          <p className="mt-4 text-lg text-gray-600">
            ObraBox se conecta con las herramientas que ya usas
          </p>
        </div>

        <div className="space-y-6">
          {integraciones.map((i) => (
            <div key={i.nombre} className="card p-6 flex items-start gap-6">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <i.icon className="w-7 h-7 text-primary-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-lg font-semibold text-secondary">{i.nombre}</h2>
                  <span className={`badge ${i.estado === "Disponible" ? "badge-success" : "badge-warning"}`}>
                    {i.estado}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center card p-8 bg-surface">
          <h2 className="text-xl font-bold text-secondary mb-2">¿Echas en falta alguna integración?</h2>
          <p className="text-gray-600 mb-4">Cuéntanos qué herramientas usas y la estudiaremos.</p>
          <Link href="/contacto" className="btn-primary">Sugerir integración</Link>
        </div>
      </div>
    </section>
  );
}
