import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Clock, Camera, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Software de Reformas para Autónomos — Simple y Sin Complicaciones",
  description:
    "ObraBox es el software de gestión de reformas pensado para autónomos. Crea presupuestos desde el móvil, organiza tus obras y cobra más rápido. 14 días gratis.",
  alternates: { canonical: "/para-autonomos" },
};

const benefits = [
  {
    icon: Smartphone,
    title: "Presupuestos en 5 minutos desde el móvil",
    text: "Crea presupuestos profesionales con tu marca directamente desde la obra. Sin volver a la oficina, sin Excel. El cliente lo recibe al instante y puede aceptarlo con un clic.",
  },
  {
    icon: Camera,
    title: "Galería de fotos para tus clientes",
    text: "Sube fotos del avance de la obra y compártelas con el cliente desde su portal. Menos llamadas, más confianza. Y de paso te sirve de portfolio para captar nuevos trabajos.",
  },
  {
    icon: FileText,
    title: "Facturación simple y rápida",
    text: "Convierte un presupuesto aceptado en factura con un toque. IVA calculado automáticamente, numeración correlativa y envío directo al cliente por email.",
  },
  {
    icon: Clock,
    title: "Agenda y planning de obras",
    text: "Organiza tus obras de la semana en un planning visual. Sabes qué toca cada día sin depender de la memoria. Si un cliente pregunta cuándo puedes empezar, lo miras en dos segundos.",
  },
];

const faqs = [
  {
    q: "¿Necesito un ordenador para usar ObraBox?",
    a: "No. ObraBox funciona al 100% desde el móvil. Puedes crear presupuestos, subir fotos, registrar gastos y gestionar tu agenda desde cualquier smartphone. Si prefieres usar el ordenador para tareas más complejas, también puedes.",
  },
  {
    q: "¿Cuánto cuesta para un autónomo que trabaja solo?",
    a: "ObraBox tiene un plan gratuito con hasta 3 obras activas que es perfecto para empezar. Si necesitas obras ilimitadas y funcionalidades avanzadas, el plan Pro está diseñado para autónomos a un precio asequible.",
  },
  {
    q: "¿Sirve si trabajo solo o con un ayudante puntual?",
    a: "Sí, de hecho está pensado para eso. No necesitas configurar equipos ni permisos complicados. Y si en alguna obra trabajas con alguien más, puedes añadirlo sin problema.",
  },
  {
    q: "¿Puedo hacer presupuestos con mi logo y datos?",
    a: "Sí. Personalizas tu perfil con tu logo, datos fiscales y colores, y todos los presupuestos y facturas salen con tu imagen profesional.",
  },
  {
    q: "¿Es complicado de configurar?",
    a: "No. Te registras, rellenas tus datos y en 5 minutos ya puedes crear tu primer presupuesto. Sin formación, sin manuales. Si algo no te queda claro, el soporte responde en el día.",
  },
];

export default function ParaAutonomosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Gestiona tus reformas desde el móvil, sin complicaciones
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Eres autónomo y tu oficina es la furgoneta. ObraBox te da
            presupuestos, facturas, fotos y agenda en una app pensada para ti.
            Sin curva de aprendizaje.
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
            Todo lo que necesitas, nada que te sobre
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
            &ldquo;Antes tardaba media hora en hacer un presupuesto en el
            ordenador de casa. Ahora lo hago en la misma obra con el móvil y el
            cliente lo tiene al momento. Me ha cambiado la forma de
            trabajar.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-secondary">
            — Carlos R., reformista autónomo en Madrid
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
            Empieza a gestionar tus obras como un profesional
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
