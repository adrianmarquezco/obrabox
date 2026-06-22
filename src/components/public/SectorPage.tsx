import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SectorPageProps {
  titulo: string;
  subtitulo: string;
  descripcion: string[];
  problemas: string[];
  beneficios: string[];
  faqs: { q: string; a: string }[];
}

export default function SectorPage({
  titulo, subtitulo, descripcion, problemas, beneficios, faqs,
}: SectorPageProps) {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">{titulo}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitulo}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/registro" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center">Prueba gratis 14 días</Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center">Ver demo</Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {descripcion.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-secondary mb-4">Problemas habituales</h2>
              <ul className="space-y-3">
                {problemas.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-red-400 mt-0.5">✕</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary mb-4">Cómo te ayuda ObraBox</h2>
              <ul className="space-y-3">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-secondary text-sm">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-secondary mb-4">Funcionalidades relevantes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
              { href: "/gestion-obra-completa", label: "Gestión de obras" },
              { href: "/facturacion-reformas", label: "Facturación" },
              { href: "/crm-reformas", label: "CRM / Pipeline" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="card p-4 flex items-center justify-between hover:shadow-md transition-shadow group">
                <span className="font-medium text-secondary group-hover:text-primary-500 text-sm">{l.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Empieza a usar ObraBox hoy</h2>
          <p className="text-primary-100 mb-8">14 días gratis. Sin tarjeta.</p>
          <Link href="/registro" className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">Crear cuenta gratis</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}} />
    </>
  );
}
