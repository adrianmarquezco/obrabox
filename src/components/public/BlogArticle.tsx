import Link from "next/link";

interface BlogArticleProps {
  title: string;
  fecha: string;
  categoria: string;
  children: React.ReactNode;
  relatedLinks?: { href: string; label: string }[];
}

export default function BlogArticle({
  title,
  fecha,
  categoria,
  children,
  relatedLinks,
}: BlogArticleProps) {
  return (
    <>
      <article className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary-500">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary-500">Blog</Link>
            <span>/</span>
            <span className="text-gray-400 truncate">{title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge-neutral text-xs">{categoria}</span>
            <time className="text-sm text-gray-400">{new Date(fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-8">
            {title}
          </h1>

          <div className="prose prose-gray max-w-none prose-headings:text-secondary prose-a:text-primary-500 prose-strong:text-secondary">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-12 card p-6 sm:p-8 bg-primary-50 border-primary-200 text-center">
            <h3 className="text-xl font-bold text-secondary mb-2">
              Gestiona tu empresa de reformas con ObraBox
            </h3>
            <p className="text-gray-600 mb-4">
              Presupuestos, obras, clientes, facturación y equipo en una sola app.
            </p>
            <Link href="/registro" className="btn-primary">
              Prueba gratis 14 días
            </Link>
          </div>

          {/* Artículos relacionados */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-secondary mb-4">Artículos relacionados</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="card p-4 hover:shadow-md transition-shadow text-sm font-medium text-secondary hover:text-primary-500">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            datePublished: fecha,
            author: { "@type": "Organization", name: "ObraBox" },
            publisher: { "@type": "Organization", name: "ObraBox", logo: { "@type": "ImageObject", url: "https://obrabox.es/icons/icon-512x512.png" } },
          }),
        }}
      />
    </>
  );
}
