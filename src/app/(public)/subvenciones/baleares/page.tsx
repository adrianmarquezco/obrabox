import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Subvenciones para Reformas en Islas Baleares — Ayudas Disponibles 2026",
  description:
    "Descubre las subvenciones y ayudas disponibles para reformas en Islas Baleares. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/baleares" },
};

export default function Page() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-500">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/subvenciones" className="hover:text-primary-500">
            Subvenciones
          </Link>
          <span>/</span>
          <span className="text-gray-400">Islas Baleares</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Islas Baleares
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Las Islas Baleares presentan un contexto particular para la
            rehabilitación de viviendas: un mercado inmobiliario tensionado por
            la presión turística, costes de construcción superiores a la media
            peninsular por la insularidad y un parque edificatorio que necesita
            actualizarse para cumplir con los estándares de eficiencia
            energética. El Govern Balear canaliza las ayudas a través de la
            Conselleria de Mobilitat i Habitatge, con convocatorias que tienen
            en cuenta las particularidades insulares.
          </p>

          <h2>Fondos Next Generation EU en Baleares</h2>
          <p>
            El archipiélago balear recibe una dotación de fondos europeos
            ajustada a su población y necesidades de rehabilitación. Las ayudas
            alcanzan hasta el 80 % del coste en actuaciones sobre edificios
            completos y hasta el 40 % en viviendas unifamiliares, con importes
            máximos de entre 6.300 € y 18.800 € por vivienda. Un aspecto
            relevante es que algunos programas contemplan un incremento en los
            baremos para territorios insulares, reconociendo los sobrecostes
            logísticos de materiales y mano de obra.
          </p>

          <h2>Rehabilitación vinculada al turismo sostenible</h2>
          <p>
            Baleares ha desarrollado líneas específicas que vinculan la
            rehabilitación residencial con la sostenibilidad turística. Los
            edificios plurifamiliares en zonas turísticas maduras de Mallorca,
            Menorca, Ibiza y Formentera pueden acceder a convocatorias que
            priorizan la mejora energética como parte de la reconversión de
            destinos. Estas líneas buscan reducir el consumo energético en
            zonas con alta demanda estacional de climatización.
          </p>

          <h2>Convocatorias del CAIB</h2>
          <p>
            La Comunitat Autònoma de les Illes Balears (CAIB) publica sus
            propias convocatorias de ayudas a la rehabilitación que complementan
            los fondos europeos. Estas incluyen programas de accesibilidad para
            personas con movilidad reducida, mejora de instalaciones comunes en
            edificios plurifamiliares y sustitución de sistemas de
            climatización obsoletos. Los costes adicionales derivados de la
            insularidad (transporte de materiales, menor competencia entre
            proveedores) se reconocen en algunas convocatorias con baremos
            ajustados.
          </p>

          <h2>Cómo solicitar las ayudas</h2>
          <ul>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Consulta las convocatorias vigentes en la web del{" "}
              <strong>Govern Balear</strong> (caib.es).
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Comprueba si tu edificio está en una zona turística con
              convocatorias específicas de reconversión.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Obtén un certificado de eficiencia energética antes y después de la
              reforma.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Presenta la solicitud telemáticamente a través del portal del CAIB
              con certificado digital o Cl@ve.
            </li>
          </ul>
        </div>

        <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
          <h2 className="text-xl font-bold text-secondary mb-2">
            Organiza la documentación de tus obras subvencionadas
          </h2>
          <p className="text-gray-600 mb-4">
            Presupuestos, facturas, fotos y certificados centralizados en cada
            obra. Justifica las subvenciones sin perder ni un documento.
          </p>
          <Link href="/registro" className="btn-primary px-6 py-3">
            Prueba gratis 14 días
          </Link>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-secondary mb-3">
            Artículos relacionados
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/subvenciones"
                className="text-primary-500 hover:underline"
              >
                Todas las subvenciones y ayudas para reformas
              </Link>
            </li>
            <li>
              <Link
                href="/subvenciones/next-generation"
                className="text-primary-500 hover:underline"
              >
                Fondos Next Generation para rehabilitación de edificios
              </Link>
            </li>
            <li>
              <Link
                href="/subvenciones/rehabilitacion-energetica"
                className="text-primary-500 hover:underline"
              >
                Ayudas para rehabilitación energética de viviendas (PREE)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
