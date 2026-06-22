import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Galicia — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en Galicia. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/galicia" },
};

export default function Page() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-500">Inicio</Link>
          <span>/</span>
          <Link href="/subvenciones" className="hover:text-primary-500">Subvenciones</Link>
          <span>/</span>
          <span className="text-gray-400">Galicia</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Galicia
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Galicia presenta unas condiciones climáticas y un parque residencial que hacen de la rehabilitación de viviendas una necesidad prioritaria. La humedad constante, las lluvias frecuentes y las temperaturas moderadas pero persistentemente frías en invierno deterioran las edificaciones con mayor rapidez que en otras regiones de España. La Xunta de Galicia, a través del Instituto Galego de Vivenda e Solo (IGVS), ha desplegado un conjunto amplio de ayudas para abordar esta situación.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Galicia</h2>
          <p>
            Galicia ha recibido una asignación relevante de los fondos Next Generation EU para la rehabilitación energética de edificios residenciales. Estas ayudas financian actuaciones de mejora de la envolvente térmica —aislamiento de fachadas, cubiertas y suelos—, la sustitución de carpinterías exteriores por otras de alta eficiencia, la instalación de sistemas de calefacción y agua caliente sanitaria basados en energías renovables, y la mejora de las instalaciones de ventilación. En Galicia, donde la humedad es un factor crítico, las actuaciones que combinan aislamiento térmico con sistemas de ventilación mecánica controlada reciben una valoración especialmente favorable en las convocatorias.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">IGVS y programas autonómicos</h2>
          <p>
            El Instituto Galego de Vivenda e Solo (IGVS) es el organismo encargado de gestionar las políticas de vivienda en Galicia y administra tanto los fondos estatales y europeos como los programas propios de la Xunta. Entre sus líneas de ayuda destacan las subvenciones para la rehabilitación de viviendas unifamiliares en el medio rural, la mejora de la accesibilidad en edificios plurifamiliares y la rehabilitación de edificios en cascos históricos. El IGVS también gestiona ayudas para la adquisición de viviendas rehabilitadas en municipios con riesgo de despoblación.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programa RehabilitaVerde</h2>
          <p>
            El programa RehabilitaVerde de la Xunta de Galicia está específicamente diseñado para fomentar la rehabilitación sostenible de viviendas, integrando criterios de eficiencia energética con el uso de materiales de bajo impacto ambiental. Este programa subvenciona actuaciones que utilicen aislantes naturales, pinturas ecológicas, sistemas de recogida de aguas pluviales y soluciones bioclimáticas adaptadas al clima gallego. Las ayudas de RehabilitaVerde son compatibles con los fondos Next Generation, permitiendo a los propietarios acumular financiación para proyectos de rehabilitación integral.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Galicia rural: programas específicos</h2>
          <p>
            La Galicia rural cuenta con un patrimonio edificatorio singular —pazos, casas de labranza, hórreos rehabilitados como vivienda— que requiere intervenciones especializadas. La Xunta ofrece líneas de ayuda específicas para la rehabilitación de viviendas en parroquias rurales, con importes máximos más elevados y criterios de puntuación que priorizan los municipios con menor densidad de población. Estas ayudas buscan mantener el tejido rural gallego facilitando que las viviendas existentes se adapten a las necesidades actuales sin perder su carácter arquitectónico tradicional.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Consulta las convocatorias vigentes en la web del IGVS y en el DOG (Diario Oficial de Galicia).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Obtén un certificado de eficiencia energética y un informe técnico sobre el estado de la vivienda.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Presenta la solicitud telemáticamente a través de la sede electrónica de la Xunta de Galicia.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Una vez aprobada la ayuda, ejecuta las obras y justifica los gastos con facturas, certificados energéticos finales y documentación fotográfica del antes y después.</span>
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
              <Link href="/subvenciones" className="text-primary-500 hover:underline">
                Todas las subvenciones y ayudas para reformas
              </Link>
            </li>
            <li>
              <Link href="/subvenciones/next-generation" className="text-primary-500 hover:underline">
                Fondos Next Generation para rehabilitación de edificios
              </Link>
            </li>
            <li>
              <Link href="/subvenciones/rehabilitacion-energetica" className="text-primary-500 hover:underline">
                Ayudas para rehabilitación energética de viviendas (PREE)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
