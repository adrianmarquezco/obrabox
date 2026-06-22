import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FAQ = { q: string; a: string };
type Benefit = { icon: LucideIcon; title: string; desc: string };
type RelatedLink = { href: string; label: string };

interface FeaturePageProps {
  title: string;
  subtitle: string;
  description: string[];
  benefits: Benefit[];
  casoDeUso: { titulo: string; texto: string };
  faqs: FAQ[];
  relatedLinks: RelatedLink[];
  children?: React.ReactNode;
}

export default function FeaturePage({
  title,
  subtitle,
  description,
  benefits,
  casoDeUso,
  faqs,
  relatedLinks,
  children,
}: FeaturePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/registro" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center">
              Prueba gratis 14 días
            </Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center">
              Ver demo
            </Link>
          </div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-2 sm:p-4">
            <div className="bg-surface rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-400 text-sm">Captura de la funcionalidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {description.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-12">
            Beneficios clave
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <b.icon className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-secondary mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido extra (children) */}
      {children}

      {/* Caso de uso */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
            {casoDeUso.titulo}
          </h2>
          <div className="card p-6 sm:p-8 bg-primary-50 border-primary-200">
            <p className="text-gray-700 leading-relaxed">{casoDeUso.texto}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-8">
            Preguntas frecuentes
          </h2>
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

      {/* Funcionalidades relacionadas */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">
            Funcionalidades relacionadas
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow group">
                <span className="font-medium text-secondary group-hover:text-primary-500 transition-colors">{link.label}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empieza a usar ObraBox hoy
          </h2>
          <p className="text-primary-100 mb-8">14 días gratis. Sin tarjeta. Sin compromisos.</p>
          <Link href="/registro" className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
            Crear cuenta gratis
          </Link>
        </div>
      </section>

      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
