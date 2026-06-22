import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Asturias — Ayudas Disponibles 2026",
  description:
    "Descubre las subvenciones y ayudas disponibles para reformas en Asturias. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/asturias" },
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
          <span className="text-gray-400">Asturias</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Asturias
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            El Principado de Asturias cuenta con uno de los parques
            inmobiliarios más envejecidos de España, con un alto porcentaje de
            viviendas construidas antes de la primera normativa de aislamiento
            térmico. Esta circunstancia, combinada con un clima frío y húmedo,
            hace que las ayudas para rehabilitación energética resulten
            especialmente relevantes para los propietarios asturianos. Las
            subvenciones se canalizan a través de la Consejería de Ordenación
            del Territorio, Urbanismo, Vivienda y Derechos Ciudadanos.
          </p>

          <h2>Fondos Next Generation EU en Asturias</h2>
          <p>
            Asturias recibe una dotación de los fondos europeos proporcionada a
            su población y al estado de su parque edificatorio. Las ayudas
            cubren hasta el 80 % del coste en actuaciones sobre edificios
            completos y hasta el 40 % en viviendas unifamiliares, con importes
            máximos de entre 6.300 € y 18.800 € por vivienda. La antigüedad
            media del parque residencial asturiano favorece que muchas
            actuaciones alcancen saltos energéticos significativos, lo que se
            traduce en tramos de ayuda más elevados.
          </p>

          <h2>Ventaja de la zona climática E</h2>
          <p>
            Gran parte del territorio asturiano está clasificado dentro de la
            zona climática E, la más exigente de la península. Esto supone una
            ventaja directa a la hora de solicitar subvenciones, ya que muchos
            programas aplican un incremento del 15 % en el porcentaje de ayuda
            para viviendas situadas en zonas climáticas más frías. Las reformas
            de aislamiento térmico, sustitución de ventanas y mejora de
            sistemas de calefacción obtienen así condiciones más favorables
            que en regiones de clima templado.
          </p>

          <h2>Agencia Asturiana de la Energía</h2>
          <p>
            La Agencia Asturiana de la Energía (FAEN) gestiona las líneas del
            programa PREE en la comunidad. Además de las ayudas estatales y
            europeas, la agencia ofrece asesoramiento técnico gratuito para
            orientar a los propietarios sobre qué actuaciones son más
            rentables según las características de cada edificio. Las
            actuaciones más demandadas incluyen el aislamiento de fachadas por
            el exterior (SATE), la sustitución de calderas de gasóleo por
            bombas de calor y la instalación de ventanas de doble o triple
            acristalamiento.
          </p>

          <h2>Cómo solicitar las ayudas</h2>
          <ul>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Consulta las convocatorias vigentes en la web del{" "}
              <strong>Principado de Asturias</strong> (asturias.es).
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Verifica tu zona climática para aprovechar los incrementos de ayuda
              disponibles en zona E.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Obtén un certificado de eficiencia energética antes y después de la
              reforma.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Presenta la solicitud telemáticamente a través del portal del
              Principado con certificado digital o Cl@ve.
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
