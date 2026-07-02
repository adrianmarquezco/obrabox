import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios de ObraBox — Planes para Autónomos y Empresas de Reformas",
  description:
    "Compara los planes de ObraBox: Básico (29€/mes), Pro (89€/mes) y Business (189€/mes). Prueba gratis 14 días sin tarjeta.",
  alternates: { canonical: "/precios" },
};

type Feature = { name: string; basico: boolean | string; pro: boolean | string; business: boolean | string };

const features: Feature[] = [
  { name: "Usuarios", basico: "1", pro: "Ilimitados", business: "Ilimitados" },
  { name: "Obras activas", basico: "3", pro: "Ilimitadas", business: "Ilimitadas" },
  { name: "Presupuestos con plantillas", basico: true, pro: true, business: true },
  { name: "Opciones básico/medio/premium", basico: false, pro: true, business: true },
  { name: "Firma digital", basico: false, pro: true, business: true },
  { name: "Galería de fotos de obra", basico: true, pro: true, business: true },
  { name: "Agenda y citas", basico: true, pro: true, business: true },
  { name: "Control de gastos", basico: false, pro: true, business: true },
  { name: "Facturación", basico: false, pro: true, business: true },
  { name: "Portal del cliente", basico: false, pro: true, business: true },
  { name: "CRM / Pipeline", basico: false, pro: true, business: true },
  { name: "Gestión de equipo", basico: false, pro: true, business: true },
  { name: "Fichaje con GPS", basico: false, pro: true, business: true },
  { name: "Informes de rentabilidad", basico: false, pro: true, business: true },
  { name: "Envío por WhatsApp/email", basico: true, pro: true, business: true },
  { name: "Plantillas de presupuesto", basico: "3", pro: "Ilimitadas", business: "Ilimitadas" },
  { name: "Recordatorios de impago", basico: false, pro: true, business: true },
  { name: "Exportar para gestoría", basico: false, pro: true, business: true },
  { name: "Portfolio público", basico: false, pro: false, business: true },
  { name: "Directorio destacado", basico: false, pro: false, business: true },
  { name: "API", basico: false, pro: false, business: true },
  { name: "Multi-empresa", basico: false, pro: false, business: true },
  { name: "Personalización portal cliente", basico: false, pro: false, business: true },
  { name: "Soporte", basico: "Comunidad", pro: "Email", business: "Prioritario" },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-secondary">{value}</span>;
  }
  return value ? (
    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
  ) : (
    <X className="w-5 h-5 text-gray-300 mx-auto" />
  );
}

const faqs = [
  { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí, puedes subir o bajar de plan cuando quieras. Si subes, se te cobra la diferencia prorrateada. Si bajas, el cambio se aplica en el siguiente periodo de facturación." },
  { q: "¿Qué pasa con mis datos si bajo de plan?", a: "Tus datos nunca se borran. Si bajas al plan Básico, puedes seguir consultando todo pero no podrás crear nuevas obras más allá del límite de 3 activas." },
  { q: "¿Hay descuento por pago anual?", a: "Sí. El plan Básico anual son 290€/año (ahorro de 58€), el Pro anual son 890€/año (ahorro de 178€) y el Business anual son 1.890€/año (ahorro de 378€)." },
  { q: "¿Ofrecéis periodo de prueba?", a: "Sí. Al registrarte tienes 14 días de prueba gratuita del plan Pro sin necesidad de tarjeta de crédito." },
  { q: "¿Puedo pagar con tarjeta?", a: "Sí, aceptamos todas las tarjetas de crédito y débito principales. También transferencia bancaria para el plan anual." },
];

export default function PreciosPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Planes simples y transparentes
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Empieza gratis. Crece cuando lo necesites. Sin sorpresas.
            </p>
          </div>

          {/* Cards de precios */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="card p-8 flex flex-col">
              <h2 className="text-xl font-bold text-secondary">Básico</h2>
              <p className="text-4xl font-bold text-secondary mt-4">29€</p>
              <p className="text-sm text-gray-500 mb-1">/mes</p>
              <p className="text-xs text-gray-500 font-medium mb-6">
                o 290€/año (ahorro de 2 meses)
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Para autónomos y pequeñas empresas que quieren empezar a gestionar sus obras con orden.
              </p>
              <Link href="/registro" className="btn-secondary text-center mt-auto">
                Prueba gratis 14 días
              </Link>
            </div>

            <div className="card p-8 flex flex-col border-2 border-primary-500 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                Más popular
              </span>
              <h2 className="text-xl font-bold text-secondary">Pro</h2>
              <p className="text-4xl font-bold text-primary-500 mt-4">89€</p>
              <p className="text-sm text-gray-500 mb-1">/mes</p>
              <p className="text-xs text-primary-600 font-medium mb-6">
                o 890€/año (ahorro de 2 meses)
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Para empresas de reformas que quieren profesionalizarse y crecer con todas las herramientas.
              </p>
              <Link href="/registro" className="btn-primary text-center mt-auto">
                Prueba gratis 14 días
              </Link>
            </div>

            <div className="card p-8 flex flex-col">
              <h2 className="text-xl font-bold text-secondary">Business</h2>
              <p className="text-4xl font-bold text-secondary mt-4">189€</p>
              <p className="text-sm text-gray-500 mb-1">/mes</p>
              <p className="text-xs text-gray-500 font-medium mb-6">
                o 1.890€/año (ahorro de 2 meses)
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Para empresas con equipo grande, múltiples marcas o que quieren visibilidad pública.
              </p>
              <Link href="/contacto" className="btn-secondary text-center mt-auto">
                Contactar ventas
              </Link>
            </div>
          </div>

          {/* Tabla comparativa */}
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
              Comparativa detallada
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Funcionalidad</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-500 w-28">Básico</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-primary-500 w-28">Pro</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-500 w-28">Business</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-border">
                    <td className="py-3 px-4 text-sm text-secondary">{f.name}</td>
                    <td className="py-3 px-4 text-center"><Cell value={f.basico} /></td>
                    <td className="py-3 px-4 text-center bg-primary-50/50"><Cell value={f.pro} /></td>
                    <td className="py-3 px-4 text-center"><Cell value={f.business} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ precios */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            Preguntas sobre precios
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-secondary text-sm">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prueba Pro gratis durante 14 días
          </h2>
          <p className="text-primary-100 mb-8">Sin tarjeta de crédito. Sin compromisos.</p>
          <Link href="/registro" className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
            Empezar prueba gratis
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ObraBox",
            description: "Software de gestión para empresas de reformas y construcción",
            offers: [
              { "@type": "Offer", name: "Básico", price: "29", priceCurrency: "EUR", billingIncrement: "P1M" },
              { "@type": "Offer", name: "Pro", price: "89", priceCurrency: "EUR", billingIncrement: "P1M" },
              { "@type": "Offer", name: "Business", price: "189", priceCurrency: "EUR", billingIncrement: "P1M" },
            ],
          }),
        }}
      />
    </>
  );
}
