import Link from "next/link";

interface InfoPageProps {
  titulo: string;
  breadcrumb: { href: string; label: string }[];
  children: React.ReactNode;
  relatedLinks?: { href: string; label: string }[];
}

export default function InfoPage({ titulo, breadcrumb, children, relatedLinks }: InfoPageProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Inicio</Link>
          {breadcrumb.map((b) => (
            <span key={b.href} className="flex items-center gap-2">
              <span>/</span>
              <Link href={b.href} className="hover:text-primary-500">{b.label}</Link>
            </span>
          ))}
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">{titulo}</h1>
        <div className="prose prose-gray max-w-none prose-headings:text-secondary prose-a:text-primary-500 prose-strong:text-secondary">{children}</div>
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-secondary mb-4">Contenido relacionado</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedLinks.map((l) => (
                <Link key={l.href} href={l.href} className="card p-4 hover:shadow-md transition-shadow text-sm font-medium text-secondary hover:text-primary-500">{l.label}</Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-12 card p-6 bg-primary-50 border-primary-200 text-center">
          <h3 className="text-lg font-bold text-secondary mb-2">Gestiona tu empresa de reformas con ObraBox</h3>
          <p className="text-sm text-gray-600 mb-4">Presupuestos, obras, clientes y facturación en una sola app.</p>
          <Link href="/registro" className="btn-primary">Prueba gratis 14 días</Link>
        </div>
      </div>
    </section>
  );
}
