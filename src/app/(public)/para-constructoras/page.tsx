import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ClipboardCheck, PieChart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Software para Constructoras Pequeñas y Medianas",
  description:
    "ObraBox ayuda a constructoras a gestionar múltiples obras, coordinar subcontratas y cumplir con la documentación obligatoria. Prueba gratis 14 días.",
  alternates: { canonical: "/para-constructoras" },
};

const benefits = [
  {
    icon: Building2,
    title: "Dashboard multi-obra en tiempo real",
    text: "Ve el estado de todas tus obras activas en un solo panel. Progreso, presupuesto consumido, próximos hitos y alertas. Sin tener que llamar a cada jefe de obra para saber cómo van las cosas.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentación de subcontratas centralizada",
    text: "Contratos, seguros de responsabilidad civil, certificados de estar al corriente con Hacienda y Seguridad Social. Todo en un sitio, con alertas cuando un documento va a caducar.",
  },
  {
    icon: PieChart,
    title: "Informes de rentabilidad por obra y global",
    text: "Sabe exactamente cuánto ganas en cada obra con el desglose de ingresos vs gastos por categoría. Compara obras similares para detectar dónde se pierde margen y dónde se optimiza.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento normativo y trazabilidad",
    text: "Registra actas de obra, partes de trabajo, incidencias y certificaciones. Si necesitas demostrar ante la propiedad o la administración qué se hizo y cuándo, lo tienes todo documentado.",
  },
];

const faqs = [
  {
    q: "¿ObraBox sirve para obras de construcción o solo reformas?",
    a: "ObraBox sirve para ambos. Aunque muchos de nuestros usuarios son empresas de reformas, las funcionalidades de gestión de obras, subcontratas, documentación y control de costes aplican igualmente a obras de construcción residencial y pequeñas promociones.",
  },
  {
    q: "¿Puedo gestionar subcontratistas y sus documentos?",
    a: "Sí. Puedes registrar cada subcontratista, asignarlo a obras específicas, almacenar sus documentos (seguro RC, certificados, contratos) y recibir alertas cuando alguno está a punto de caducar.",
  },
  {
    q: "¿Cuántas obras puedo gestionar simultáneamente?",
    a: "En los planes Pro y Business, obras ilimitadas. No hay tope de proyectos activos. El dashboard te muestra el estado de todas a la vez para que tengas control total.",
  },
  {
    q: "¿Se pueden generar informes para la propiedad o promotor?",
    a: "Sí. Puedes exportar informes de avance de obra con fotos, gastos y certificaciones. También puedes dar acceso al portal del cliente para que la propiedad vea el progreso en tiempo real.",
  },
  {
    q: "¿Es seguro almacenar documentación sensible?",
    a: "Sí. Los datos se almacenan con cifrado y en servidores europeos que cumplen con el RGPD. Cada usuario solo ve la información de las obras a las que tiene acceso.",
  },
];

export default function ParaConstructorasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Gestiona tu constructora sin que se te escape ningún detalle
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Múltiples obras, subcontratas, documentación obligatoria y márgenes
            ajustados. ObraBox te da el control que necesitas para que todo
            funcione sin sobresaltos.
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
            Control total sobre tus obras y subcontratas
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
            &ldquo;Tenemos 12 obras abiertas y 30 subcontratas. Antes era un
            caos de WhatsApps y hojas de Excel. Con ObraBox sé en qué punto
            está cada obra y qué documentos faltan sin preguntar a
            nadie.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-secondary">
            — Javier L., director de constructora en Valencia
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
            Digitaliza tu constructora y gana control
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
