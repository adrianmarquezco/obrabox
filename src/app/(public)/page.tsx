import Link from "next/link";
import type { Metadata } from "next";
import {
  FileText,
  Building2,
  Receipt,
  Users,
  Camera,
  BarChart3,
  CalendarDays,
  UserCircle,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ObraBox — Software de Gestión para Empresas de Reformas y Construcción",
  description:
    "Gestiona tus obras, presupuestos, equipos y clientes desde una sola app. Prueba gratis ObraBox, el software para reformistas en España.",
  alternates: { canonical: "/" },
};

const funcionalidades = [
  {
    icon: FileText,
    title: "Presupuestos profesionales",
    desc: "Crea presupuestos con plantillas, opciones básico/medio/premium, firma digital y envío por WhatsApp.",
    href: "/presupuestos-reforma",
  },
  {
    icon: Building2,
    title: "Gestión de obras",
    desc: "Controla cada fase de la obra: checklist, fotos, extras, incidencias, documentos y pagos fraccionados.",
    href: "/gestion-obra-completa",
  },
  {
    icon: Receipt,
    title: "Facturación y cobros",
    desc: "Factura desde la obra, controla impagos, recordatorios automáticos y exporta para tu gestoría.",
    href: "/facturacion-reformas",
  },
  {
    icon: Users,
    title: "Gestión de equipo",
    desc: "Planning semanal, fichaje con GPS, partes de trabajo, disponibilidad y documentación de tu equipo.",
    href: "/gestion-equipo-obra",
  },
  {
    icon: Camera,
    title: "Galería de fotos",
    desc: "Documenta tus obras con fotos antes/durante/después. Crea comparativas para redes sociales.",
    href: "/galeria-fotos-obra",
  },
  {
    icon: BarChart3,
    title: "Informes de rentabilidad",
    desc: "Sabe cuánto ganas en cada obra. Facturación, márgenes, conversión de presupuestos y más.",
    href: "/informes-rentabilidad",
  },
];

const pasos = [
  {
    num: "1",
    title: "Regístrate gratis",
    desc: "Crea tu cuenta en 30 segundos. Sin tarjeta, sin compromisos.",
  },
  {
    num: "2",
    title: "Configura tu empresa",
    desc: "Sube tu logo, añade tus datos y personaliza tus plantillas.",
  },
  {
    num: "3",
    title: "Empieza a gestionar",
    desc: "Crea tu primera obra o presupuesto y lleva el control desde el móvil.",
  },
];

const comparativa = [
  { concepto: "Presupuestos", antes: "Excel o papel", despues: "Plantillas profesionales con firma digital" },
  { concepto: "Fotos de obra", antes: "WhatsApp desordenado", despues: "Galería organizada por fecha y fase" },
  { concepto: "Gastos", antes: "Tickets en la guantera", despues: "Foto del ticket + asignado a obra" },
  { concepto: "Cobros", antes: "Llamar para recordar", despues: "Recordatorios automáticos" },
  { concepto: "Planning equipo", antes: "Grupo de WhatsApp", despues: "Planning visual semanal" },
  { concepto: "Info al cliente", antes: "Llamadas constantes", despues: "Portal del cliente en tiempo real" },
];

const faqs = [
  {
    q: "¿ObraBox es gratis?",
    a: "Todos los planes incluyen 14 días de prueba gratuita sin tarjeta. El plan Básico (29€/mes) incluye 1 usuario, 3 obras activas, presupuestos básicos, fotos y agenda. Para funcionalidades avanzadas como portal del cliente, CRM o informes, necesitas el plan Pro (89€/mes).",
  },
  {
    q: "¿Necesito instalar algo en el ordenador?",
    a: "No. ObraBox funciona desde el navegador y se puede instalar como app en el móvil. No necesitas descargar ni instalar nada.",
  },
  {
    q: "¿Puedo usarlo desde el móvil en la obra?",
    a: "Sí, ObraBox está diseñado mobile-first. Puedes hacer fotos, registrar gastos, fichar y gestionar todo desde el teléfono.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Tus datos se almacenan de forma segura en servidores europeos con cifrado. Solo tú y tu equipo tenéis acceso a la información de tu empresa.",
  },
  {
    q: "¿Puedo exportar mis facturas para la gestoría?",
    a: "Sí, puedes exportar todas las facturas emitidas y recibidas en formato CSV o Excel, listas para enviar a tu gestor.",
  },
  {
    q: "¿Funciona para autónomos o solo para empresas?",
    a: "ObraBox funciona tanto para autónomos como para empresas. El plan Básico (29€/mes) es perfecto para empezar si trabajas solo o con poco equipo.",
  },
  {
    q: "¿Puedo migrar mis datos desde Excel?",
    a: "Sí, puedes importar clientes y proveedores desde archivos CSV o Excel directamente desde la configuración.",
  },
  {
    q: "¿Cuánto tardo en empezar a usarlo?",
    a: "En menos de 5 minutos. Te registras, configuras tu empresa y ya puedes crear tu primer presupuesto o dar de alta tu primera obra.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Gestiona tus obras y reformas{" "}
              <span className="text-primary-500">desde el móvil</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Presupuestos, obras, equipo, clientes y facturación en una sola
              app. Diseñada por y para reformistas en España.
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
                Solicitar demo
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Sin tarjeta de crédito. Configuración en 5 minutos.
            </p>
          </div>
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="card p-2 sm:p-4">
              <div className="bg-surface rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-primary-300 mx-auto mb-4" />
                  <p className="text-gray-400 text-sm">
                    Mockup de la aplicación ObraBox
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra logos */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Más de 500 reformistas ya gestionan sus obras con ObraBox
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 opacity-40">
            {["Reformas López", "Construye Madrid", "Baños Pro", "PintaTop", "ElectroFix"].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm sm:text-base font-semibold text-gray-600 whitespace-nowrap"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Todo lo que necesitas para gestionar tu empresa de reformas
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Deja de usar Excel, WhatsApp y papel. ObraBox centraliza toda la
              gestión de tu negocio en un solo sitio.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {funcionalidades.map((f) => (
              <Link key={f.href} href={f.href} className="card p-6 hover:shadow-md transition-shadow group">
                <f.icon className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary-500 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-sm text-primary-500 font-medium group-hover:gap-2 transition-all">
                  Saber más <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              ¿Cómo funciona?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Empieza a gestionar tus obras en 3 simples pasos
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {pasos.map((p) => (
              <div key={p.num} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {p.num}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa antes/después */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Antes vs Después de ObraBox
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Deja de perder tiempo y dinero con métodos desorganizados
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-4 px-4 text-sm font-semibold text-gray-500 uppercase">
                    Concepto
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-red-500 uppercase">
                    Sin ObraBox
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-green-600 uppercase">
                    Con ObraBox
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((c) => (
                  <tr key={c.concepto} className="border-b border-border">
                    <td className="py-4 px-4 font-medium text-secondary">
                      {c.concepto}
                    </td>
                    <td className="py-4 px-4 text-gray-500">{c.antes}</td>
                    <td className="py-4 px-4 text-gray-700 font-medium">
                      {c.despues}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Lo que dicen nuestros usuarios
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                name: "Juan Martínez",
                empresa: "Reformas Martínez, Valencia",
                texto:
                  "Antes llevaba los presupuestos en Excel y perdía horas. Con ObraBox los hago en 10 minutos y los envío desde el móvil.",
              },
              {
                name: "María López",
                empresa: "Baños Pro, Madrid",
                texto:
                  "El portal del cliente ha sido un antes y un después. Mis clientes ven las fotos de avance sin llamarme cada día.",
              },
              {
                name: "Pedro García",
                empresa: "Construye BCN, Barcelona",
                texto:
                  "El control de gastos me ha abierto los ojos. Ahora sé exactamente cuánto gano en cada obra.",
              },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary-400 text-primary-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{t.texto}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-secondary text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.empresa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios resumen */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Planes para cada necesidad
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            14 días de prueba gratis. Sin tarjeta. Sin compromisos.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <h3 className="font-semibold text-secondary text-lg">Básico</h3>
              <p className="text-3xl font-bold text-secondary mt-2">29€</p>
              <p className="text-sm text-gray-500 mb-4">/mes</p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  1 usuario, 3 obras
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Presupuestos básicos
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Fotos y agenda
                </li>
              </ul>
            </div>
            <div className="card p-6 text-center border-primary-500 border-2 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
              <h3 className="font-semibold text-secondary text-lg">Pro</h3>
              <p className="text-3xl font-bold text-primary-500 mt-2">89€</p>
              <p className="text-sm text-gray-500 mb-4">/mes</p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Usuarios y obras ilimitados
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Portal del cliente + CRM
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Facturación + Informes
                </li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-semibold text-secondary text-lg">Business</h3>
              <p className="text-3xl font-bold text-secondary mt-2">189€</p>
              <p className="text-sm text-gray-500 mb-4">/mes</p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Todo de Pro
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Portfolio público + API
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Multi-empresa + Soporte VIP
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/precios"
            className="mt-8 inline-flex items-center gap-1 text-primary-500 font-medium hover:gap-2 transition-all"
          >
            Ver comparativa completa <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-secondary">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-24 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Empieza a gestionar tus obras hoy
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Únete a los reformistas que ya trabajan de forma organizada
          </p>
          <Link
            href="/registro"
            className="mt-8 inline-block bg-white text-primary-500 font-bold text-lg px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Prueba gratis 14 días
          </Link>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "ObraBox",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "0",
                  highPrice: "59",
                  priceCurrency: "EUR",
                },
                description:
                  "Software de gestión para empresas de reformas y construcción en España",
              },
              {
                "@type": "Organization",
                name: "ObraBox",
                url: "https://obrabox.es",
                logo: "https://obrabox.es/icons/icon-512x512.png",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
