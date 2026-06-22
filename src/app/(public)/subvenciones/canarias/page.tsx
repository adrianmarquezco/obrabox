import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Canarias — Ayudas Disponibles 2026",
  description:
    "Descubre las subvenciones y ayudas disponibles para reformas en Canarias. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/canarias" },
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
          <span className="text-gray-400">Canarias</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Canarias
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Canarias presenta un escenario singular en el panorama de las
            subvenciones para rehabilitación de viviendas. Su condición de
            región ultraperiférica de la Unión Europea, su clima subtropical
            diferenciado del resto de España y los sobrecostes derivados de la
            insularidad configuran un marco de ayudas con particularidades
            propias. El Gobierno de Canarias gestiona estas subvenciones a
            través de la Consejería de Obras Públicas, Transportes y Vivienda.
          </p>

          <h2>Fondos Next Generation EU en Canarias</h2>
          <p>
            Las islas reciben una dotación de fondos europeos que tiene en
            cuenta tanto su población como su condición de región
            ultraperiférica. Las ayudas cubren hasta el 80 % del coste en
            actuaciones sobre edificios completos y hasta el 40 % en viviendas
            unifamiliares, con importes máximos de entre 6.300 € y 18.800 €
            por vivienda. Al igual que en Baleares, algunos programas reconocen
            los sobrecostes insulares con baremos específicos para el
            transporte de materiales y la disponibilidad de mano de obra
            cualificada.
          </p>

          <h2>Adaptación climática diferenciada</h2>
          <p>
            A diferencia de la península, las necesidades energéticas en
            Canarias se centran más en la refrigeración que en la calefacción.
            Los programas PREE se adaptan a esta realidad, priorizando
            actuaciones como la mejora del aislamiento de cubiertas frente a
            la radiación solar, la instalación de protecciones solares, la
            ventilación cruzada natural y los sistemas de climatización
            eficientes. Las zonas climáticas canarias (alfa y A) tienen
            criterios de evaluación adaptados que reflejan estas necesidades
            específicas.
          </p>

          <h2>Parque edificatorio y zonas prioritarias</h2>
          <p>
            Canarias cuenta con zonas donde el parque edificatorio tiene una
            antigüedad considerable, especialmente en los cascos urbanos de Las
            Palmas de Gran Canaria y Santa Cruz de Tenerife, así como en
            núcleos turísticos maduros del sur de Gran Canaria y Tenerife. El
            Gobierno de Canarias ha identificado áreas de rehabilitación
            prioritaria donde las ayudas se tramitan con condiciones
            preferentes. Además, las viviendas en municipios con problemas de
            despoblación en las islas menores (El Hierro, La Gomera, La Palma)
            pueden acceder a líneas complementarias.
          </p>

          <h2>Cómo solicitar las ayudas</h2>
          <ul>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Consulta las convocatorias vigentes en la web del{" "}
              <strong>Gobierno de Canarias</strong> (gobiernodecanarias.org).
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Ten en cuenta que los criterios de eficiencia energética se
              adaptan al clima subtropical canario.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Obtén un certificado de eficiencia energética antes y después de la
              reforma.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Presenta la solicitud telemáticamente a través de la sede
              electrónica del Gobierno de Canarias con certificado digital o
              Cl@ve.
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
