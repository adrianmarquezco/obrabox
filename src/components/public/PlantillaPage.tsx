import Link from "next/link";
import { FileDown, CheckCircle2 } from "lucide-react";

interface PlantillaPageProps {
  titulo: string;
  descripcion: string;
  contenido: string[];
  funcionalidadLink: { href: string; label: string };
  relatedPlantillas: { href: string; label: string }[];
}

export default function PlantillaPage({
  titulo, descripcion, contenido, funcionalidadLink, relatedPlantillas,
}: PlantillaPageProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Inicio</Link>
          <span>/</span>
          <span className="text-gray-400">Plantillas</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl font-bold text-secondary mb-4">{titulo}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{descripcion}</p>

            <h2 className="text-lg font-semibold text-secondary mb-3">¿Qué incluye esta plantilla?</h2>
            <ul className="space-y-2 mb-6">
              {contenido.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="card p-5 bg-primary-50 border-primary-200 mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <strong>¿Quieres automatizar esto?</strong> Con ObraBox generas {funcionalidadLink.label.toLowerCase()} automáticamente con tus datos de empresa.
              </p>
              <Link href={funcionalidadLink.href} className="text-primary-500 text-sm font-medium">
                Ver funcionalidad →
              </Link>
            </div>
          </div>

          <div>
            {/* Preview */}
            <div className="card p-4 mb-4">
              <div className="bg-surface rounded-lg aspect-[3/4] flex items-center justify-center">
                <div className="text-center">
                  <FileDown className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">Vista previa del documento</p>
                </div>
              </div>
            </div>

            <div className="card p-6 text-center">
              <h3 className="font-semibold text-secondary mb-2">Descarga gratis</h3>
              <p className="text-sm text-gray-500 mb-4">Introduce tu email para descargar la plantilla</p>
              <div className="flex gap-2">
                <input type="email" placeholder="tu@email.com" className="input flex-1" />
                <button className="btn-primary whitespace-nowrap">Descargar</button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Te enviaremos la plantilla por email. Sin spam.</p>
            </div>
          </div>
        </div>

        {/* Plantillas relacionadas */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-secondary mb-4">Más plantillas gratis</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedPlantillas.map((p) => (
              <Link key={p.href} href={p.href} className="card p-4 hover:shadow-md transition-shadow text-sm font-medium text-secondary hover:text-primary-500">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
