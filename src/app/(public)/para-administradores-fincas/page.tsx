import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Camera, BarChart3, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguimiento de Obras para Administradores de Fincas",
  description:
    "ObraBox permite a administradores de fincas hacer seguimiento de obras en comunidades: fotos, gastos, avance y reportes para los vecinos. Prueba gratis.",
  alternates: { canonical: "/para-administradores-fincas" },
};

const benefits = [
  {
    icon: Eye,
    title: "Seguimiento del avance sin ser constructor",
    text: "No necesitas ser técnico para controlar una obra. Ve el porcentaje de avance, las fases completadas y lo que queda pendiente. Si la empresa de reformas usa ObraBox, lo ves todo en tiempo real sin pedir informes.",
  },
  {
    icon: Camera,
    title: "Galería de fotos como prueba documental",
    text: "Cada foto queda fechada y asociada a la obra. Perfecto para documentar el estado antes, durante y después de la reforma. Si surge una reclamación, tienes las pruebas organizadas.",
  },
  {
    icon: BarChart3,
    title: "Control de presupuesto vs gasto real",
    text: "Compara lo que se presupuestó con lo que se está gastando realmente. Detecta desviaciones a tiempo y ten argumentos objetivos si necesitas renegociar con el constructor.",
  },
  {
    icon: Share2,
    title: "Comparte el progreso con la comunidad",
    text: "Genera informes visuales con fotos y estado de avance para enviar a los vecinos o presentar en junta. Sin tener que redactar nada: ObraBox lo genera automáticamente.",
  },
];

const faqs = [
  {
    q: "No soy constructor, ¿puedo usar ObraBox?",
    a: "Sí. ObraBox tiene un modo de seguimiento pensado para quien supervisa obras sin ejecutarlas. Ves el avance, las fotos, los gastos y puedes generar informes, pero no necesitas gestionar equipos ni presupuestos detallados.",
  },
  {
    q: "¿Puedo usarlo para varias comunidades a la vez?",
    a: "Sí. Puedes crear un proyecto por cada obra en cada comunidad y ver el estado de todas desde tu panel. Cada obra tiene su propia documentación, fotos y presupuesto.",
  },
  {
    q: "¿Los vecinos o la junta pueden acceder a ver el progreso?",
    a: "Sí. Puedes compartir un enlace de acceso al portal del cliente donde los miembros de la comunidad ven las fotos del avance y el estado del presupuesto sin necesidad de registrarse.",
  },
  {
    q: "¿Puedo subir documentos como presupuestos o contratos?",
    a: "Sí. Puedes adjuntar cualquier documento a cada obra: presupuestos recibidos, contratos firmados, actas de junta, licencias. Todo queda centralizado y accesible.",
  },
  {
    q: "¿Qué pasa si la empresa de reformas no usa ObraBox?",
    a: "Puedes usar ObraBox igualmente por tu cuenta. Subes las fotos que tomes en las visitas, registras los gastos según las facturas y llevas el seguimiento manual. Si la empresa también lo usa, los datos se sincronizan automáticamente.",
  },
];

export default function ParaAdministradoresFincasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Controla las obras de tus comunidades sin depender del constructor
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fotos del avance, control de presupuesto e informes para la junta.
            ObraBox te da visibilidad sobre las reformas en tus fincas sin
            necesitar conocimientos técnicos.
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
            Supervisión de obras pensada para administradores
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
            &ldquo;Gestiono obras en 15 comunidades. Antes dependía de que el
            constructor me mandase fotos por WhatsApp cuando le daba la gana.
            Ahora tengo todo en un sitio y puedo enseñar a la junta cómo va
            cada obra con datos reales.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-secondary">
            — Laura G., administradora de fincas en Sevilla
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
            Profesionaliza el seguimiento de obras en tus fincas
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
