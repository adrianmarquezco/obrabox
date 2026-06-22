import type { Metadata } from "next";
import Link from "next/link";
import { Palette, ImageIcon, Globe, CalendarClock } from "lucide-react";

export const metadata: Metadata = {
  title: "Software para Interioristas y Estudios de Diseño",
  description:
    "ObraBox ayuda a interioristas a gestionar la ejecución de sus proyectos: presupuestos con opciones, galería antes/después, portal del cliente y coordinación con gremios.",
  alternates: { canonical: "/para-interioristas" },
};

const benefits = [
  {
    icon: Palette,
    title: "Presupuestos con opciones y acabados",
    text: "Presenta a tu cliente varias opciones de acabados con precios diferenciados. Opción básica, media y premium en un presupuesto limpio y profesional que refleja la calidad de tu trabajo.",
  },
  {
    icon: ImageIcon,
    title: "Galería antes y después por proyecto",
    text: "Documenta cada fase de la transformación con fotos organizadas por fecha y estancia. El resultado final se convierte en tu mejor argumento de venta para futuros clientes.",
  },
  {
    icon: Globe,
    title: "Portal del cliente elegante y profesional",
    text: "Tu cliente accede a un portal donde ve el avance de su proyecto, las fotos, los documentos y el estado de cada decisión pendiente. Sin WhatsApps desordenados, con la imagen premium que merece tu estudio.",
  },
  {
    icon: CalendarClock,
    title: "Timeline del proyecto y coordinación de gremios",
    text: "Planifica las fases del proyecto y coordina a los diferentes gremios y proveedores. Tu cliente ve el calendario de su reforma y sabe qué esperar cada semana.",
  },
];

const faqs = [
  {
    q: "¿ObraBox se adapta a la imagen de mi estudio?",
    a: "Sí. Puedes personalizar los presupuestos y el portal del cliente con tu logo, colores y datos. Todo lo que ve tu cliente lleva tu marca, no la de ObraBox.",
  },
  {
    q: "No ejecuto las obras directamente, ¿me sirve?",
    a: "Sí. Muchos interioristas usan ObraBox para coordinar la ejecución que realizan otros gremios. Tú gestionas el proyecto, asignas tareas a las empresas que ejecutan y supervisas el avance. No necesitas ser tú quien haga la obra.",
  },
  {
    q: "¿Puedo presentar presupuestos con varias opciones de acabados?",
    a: "Sí. Los presupuestos de ObraBox permiten crear variantes (básico, medio, premium) dentro del mismo documento. El cliente ve las opciones, elige y acepta digitalmente.",
  },
  {
    q: "¿Puedo usar las fotos del proyecto como portfolio?",
    a: "Sí. Todas las fotos quedan almacenadas en alta calidad y organizadas por proyecto. Puedes descargarlas para tu web o redes sociales, o compartir el enlace del proyecto directamente.",
  },
  {
    q: "¿Funciona para proyectos de interiorismo comercial?",
    a: "Sí. ObraBox gestiona proyectos de cualquier tipo: viviendas, locales comerciales, oficinas, restaurantes. Las funcionalidades de control de fases, documentación y coordinación aplican a todos.",
  },
];

export default function ParaInterioristasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Gestiona tus proyectos de interiorismo de principio a fin
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Presupuestos con opciones de acabados, galería visual del proyecto,
            portal del cliente y coordinación de gremios. Todo con la imagen
            profesional que tu estudio merece.
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
            Diseñado para estudios que cuidan cada detalle
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
            &ldquo;Mis clientes esperan un nivel de profesionalidad alto en
            cada punto de contacto. ObraBox me permite enviar presupuestos con
            opciones de acabados, compartir la evolución del proyecto con fotos
            y que el cliente no tenga que perseguirme para saber cómo va su
            casa.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-secondary">
            — Ana M., interiorista en Madrid
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
            Lleva tu estudio al siguiente nivel
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
