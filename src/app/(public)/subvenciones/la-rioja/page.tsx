import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en La Rioja — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en La Rioja. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/la-rioja" },
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
          <span className="text-gray-400">La Rioja</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en La Rioja
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            La Rioja, pese a ser una de las comunidades autónomas más pequeñas de España, ofrece un conjunto de ayudas proporcionalmente competitivo para la rehabilitación y reforma de viviendas. El Gobierno de La Rioja gestiona tanto los fondos estatales y europeos como programas propios, con especial atención a la rehabilitación urbana en Logroño y a la lucha contra la despoblación en zonas rurales.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en La Rioja</h2>
          <p>
            La Rioja ha recibido fondos europeos Next Generation destinados a la rehabilitación energética de edificios residenciales. Aunque la dotación total es menor que la de comunidades más pobladas, la ratio por habitante es favorable, lo que puede traducirse en menos competencia y mayor probabilidad de obtener la ayuda. Las actuaciones subvencionables incluyen el aislamiento térmico de fachadas y cubiertas, la sustitución de ventanas, la mejora de sistemas de calefacción y la instalación de energías renovables.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Rehabilitación urbana en Logroño</h2>
          <p>
            Logroño concentra la mayor parte de la población riojana y cuenta con áreas de rehabilitación integral declaradas en el casco antiguo y barrios históricos. En estas zonas, las ayudas pueden ser especialmente cuantiosas, cubriendo un porcentaje elevado del coste de las obras. El Ayuntamiento de Logroño complementa las ayudas autonómicas con programas municipales propios para la mejora de fachadas, accesibilidad y eficiencia energética en edificios del centro urbano.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Ayudas en zonas rurales y contra la despoblación</h2>
          <p>
            Uno de los aspectos diferenciadores de La Rioja es la existencia de ayudas específicas para la rehabilitación de viviendas en zonas rurales afectadas por la despoblación. Municipios de la sierra riojana y las zonas de montaña cuentan con programas que incentivan la rehabilitación de viviendas para fomentar la fijación de población. Estas ayudas suelen ser compatibles con las subvenciones de eficiencia energética, permitiendo acumular varios tipos de ayuda en una misma actuación.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Agencia Riojana de la Energía</h2>
          <p>
            La Agencia Riojana de la Energía gestiona programas específicos de eficiencia energética que complementan las ayudas estatales del PREE. Estas líneas cubren la instalación de calderas de biomasa, sistemas de aerotermia, paneles solares y mejoras en el aislamiento térmico. En las zonas de La Rioja con inviernos más fríos, como la sierra y el alto Najerilla, las mejoras en aislamiento y calefacción resultan especialmente beneficiosas tanto en ahorro económico como en confort.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las solicitudes se tramitan a través de la sede electrónica del Gobierno de La Rioja.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>La Agencia Riojana de la Energía ofrece asesoramiento sobre programas de eficiencia energética y ayuda con la tramitación.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>En zonas rurales, conviene consultar también las ayudas municipales y comarcales que pueden acumularse con las autonómicas.</span>
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
