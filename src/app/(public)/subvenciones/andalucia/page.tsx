import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Andalucía — Ayudas Disponibles 2026",
  description:
    "Descubre las subvenciones y ayudas disponibles para reformas en Andalucía. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/andalucia" },
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
          <span className="text-gray-400">Andalucía</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Andalucía
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Andalucía es la comunidad autónoma con mayor población de España y,
            en consecuencia, una de las que recibe mayor dotación de los Fondos
            Next Generation EU destinados a rehabilitación de edificios y
            viviendas. La Junta de Andalucía canaliza estas ayudas a través de
            la Consejería de Fomento, Articulación del Territorio y Vivienda,
            con convocatorias periódicas que cubren desde la mejora de la
            envolvente térmica hasta la instalación de sistemas de energía
            renovable.
          </p>

          <h2>Fondos Next Generation EU en Andalucía</h2>
          <p>
            El reparto de los fondos europeos asigna a Andalucía una de las
            partidas más elevadas del país, superando los 500 millones de euros
            en el conjunto de programas de rehabilitación residencial. Estas
            ayudas pueden cubrir hasta el 80 % del coste de la actuación en
            edificios completos y hasta el 40 % en viviendas unifamiliares,
            con importes máximos que oscilan entre 6.300 € y 18.800 € por
            vivienda dependiendo del ahorro energético alcanzado.
          </p>

          <h2>Programa PREE y rehabilitación energética</h2>
          <p>
            El Programa de Rehabilitación Energética de Edificios Existentes
            (PREE) cuenta con líneas específicas para Andalucía gestionadas por
            la Agencia Andaluza de la Energía. Estas ayudas subvencionan
            actuaciones como el aislamiento de fachadas y cubiertas, la
            sustitución de ventanas por otras de alta eficiencia, y la
            instalación de sistemas de climatización eficientes o basados en
            energías renovables. Los porcentajes de ayuda aumentan cuando el
            edificio se encuentra en una zona climática más exigente o cuando
            los beneficiarios son colectivos vulnerables.
          </p>

          <h2>Plan Vive en Andalucía</h2>
          <p>
            Además de los fondos europeos, la Junta de Andalucía mantiene su
            propio Plan Vive en Andalucía, que incluye líneas de ayuda para la
            rehabilitación de viviendas en el ámbito rural y en barrios
            desfavorecidos. Este plan complementa las ayudas estatales y
            europeas, permitiendo en algunos casos acumular subvenciones de
            diferentes fuentes para una misma actuación, siempre que el
            total no supere el coste de la obra.
          </p>

          <h2>Cómo solicitar las ayudas</h2>
          <ul>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Consulta las convocatorias vigentes en la web de la{" "}
              <strong>Junta de Andalucía</strong> (juntadeandalucia.es).
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Obtén un certificado de eficiencia energética previo y posterior a
              la reforma.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Presenta la solicitud de forma telemática con certificado digital o
              Cl@ve.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Guarda todos los presupuestos, facturas y certificados para la
              justificación posterior.
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
