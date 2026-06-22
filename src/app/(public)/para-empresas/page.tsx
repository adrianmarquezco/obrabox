import type { Metadata } from "next";
import Link from "next/link";
import { Users, TrendingUp, BarChart3, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Software de Gestión para Empresas de Reformas",
  description:
    "ObraBox ayuda a empresas de reformas a gestionar equipos, controlar costes y aumentar la rentabilidad de cada obra. Prueba gratis 14 días.",
  alternates: { canonical: "/para-empresas" },
};

const benefits = [
  {
    icon: Users,
    title: "Planning de equipo y fichaje por obra",
    text: "Asigna a tu equipo a las obras de la semana con el planning visual. Cada trabajador ficha desde el móvil con geolocalización, y tú ves las horas reales dedicadas a cada proyecto sin preguntar a nadie.",
  },
  {
    icon: TrendingUp,
    title: "Control de gastos y margen en tiempo real",
    text: "Registra cada gasto de material, subcontratista y mano de obra contra el presupuesto. Sabes si una obra va bien o se está desviando antes de que sea tarde para corregir.",
  },
  {
    icon: BarChart3,
    title: "CRM y pipeline comercial",
    text: "Gestiona tus oportunidades desde el primer contacto hasta la firma. Ve en qué fase está cada presupuesto pendiente, programa seguimientos y no dejes que se escape ningún cliente.",
  },
  {
    icon: Globe,
    title: "Portal del cliente con acceso 24/7",
    text: "Tus clientes ven el avance de su obra, las fotos, los documentos y el estado de los pagos sin tener que llamarte. Profesionaliza tu empresa y reduce las interrupciones.",
  },
];

const faqs = [
  {
    q: "¿Cuántos usuarios pueden usar ObraBox en mi empresa?",
    a: "Depende del plan. El plan Business incluye usuarios ilimitados para que todo tu equipo esté conectado: comerciales, jefes de obra, administrativos y trabajadores de campo.",
  },
  {
    q: "¿Puedo controlar las horas de mi equipo por obra?",
    a: "Sí. Cada trabajador ficha entrada y salida desde su móvil con geolocalización. Tú ves un resumen de horas por persona y por obra, lo que te permite calcular el coste real de mano de obra de cada proyecto.",
  },
  {
    q: "¿Sirve para gestionar subcontratas?",
    a: "Sí. Puedes añadir subcontratistas como proveedores, asignarlos a obras específicas y registrar sus facturas contra el presupuesto para controlar el coste real.",
  },
  {
    q: "¿Se integra con mi programa de contabilidad?",
    a: "ObraBox te permite exportar facturas y datos de gastos en formato compatible con los principales programas de contabilidad. También estamos desarrollando integraciones directas.",
  },
  {
    q: "¿Puedo ver la rentabilidad de cada obra terminada?",
    a: "Sí. El informe de rentabilidad te muestra ingresos vs gastos por obra, desglosado por categorías. Sabes exactamente cuánto has ganado en cada proyecto y dónde se ha ido el margen.",
  },
];

export default function ParaEmpresasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Controla tu empresa de reformas sin perder el margen
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Equipos, obras, presupuestos, gastos y clientes en una sola
            plataforma. ObraBox te da la visibilidad que necesitas para que cada
            obra sea rentable.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/registro"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center"
            >
              Prueba gratis 14 días
            </Link>
            <Link
              href="/demo"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center"
            >
              Ver demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-10">
            Hecho para empresas que gestionan varias obras a la vez
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <b.icon className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-lg italic text-gray-700">
            &ldquo;Con 8 obras abiertas a la vez, antes era imposible saber si
            ganábamos o perdíamos dinero en cada una. Ahora lo veo en tiempo
            real y puedo actuar antes de que el margen desaparezca.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-secondary">
            — Miguel A., gerente de empresa de reformas en Barcelona
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-secondary text-sm">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Haz crecer tu empresa sin perder el control
          </h2>
          <p className="text-primary-100 mb-8">
            14 días gratis. Sin tarjeta. Sin compromiso.
          </p>
          <Link
            href="/registro"
            className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
