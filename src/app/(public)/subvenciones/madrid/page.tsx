import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en la Comunidad de Madrid — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en la Comunidad de Madrid. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/madrid" },
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
          <span className="text-gray-400">Comunidad de Madrid</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en la Comunidad de Madrid
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            La Comunidad de Madrid es una de las regiones con mayor volumen de ayudas públicas para reformas y rehabilitación de viviendas en España. Con más de 6,7 millones de habitantes y un parque inmobiliario envejecido, las dotaciones presupuestarias son proporcionalmente elevadas, aunque la competencia por acceder a estas ayudas también es alta.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Madrid</h2>
          <p>
            A través de los fondos europeos Next Generation, la Comunidad de Madrid ha canalizado cientos de millones de euros destinados a la rehabilitación energética de edificios residenciales. Estas ayudas cubren actuaciones como el aislamiento térmico de fachadas, la sustitución de ventanas, la instalación de sistemas de climatización eficientes y la incorporación de energías renovables en comunidades de propietarios.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Plan Rehabilita Madrid</h2>
          <p>
            El Plan Rehabilita es uno de los programas más generosos de España en materia de rehabilitación de viviendas. Gestionado por la Comunidad de Madrid, ofrece subvenciones que pueden cubrir hasta el 40-50% del coste de las obras de rehabilitación integral de edificios. Las actuaciones subvencionables incluyen mejoras estructurales, accesibilidad, eficiencia energética e instalaciones comunes. Este programa se complementa con las ayudas del Ayuntamiento de Madrid, que gestiona sus propios fondos para rehabilitación en el término municipal.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programas PREE y ayudas a la eficiencia energética</h2>
          <p>
            El Programa de Rehabilitación Energética de Edificios (PREE) del IDAE tiene una dotación específica para Madrid. Estas ayudas financian mejoras en la envolvente térmica del edificio, la sustitución de instalaciones térmicas y la incorporación de energía solar. Las cuantías varían según el tipo de actuación y pueden alcanzar hasta el 80% en casos de vulnerabilidad económica.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programas de la EMVS</h2>
          <p>
            La Empresa Municipal de la Vivienda y Suelo (EMVS) gestiona programas adicionales de rehabilitación para viviendas en el municipio de Madrid, con especial atención a barrios con mayor necesidad de renovación urbana. Estos programas suelen estar vinculados a áreas de rehabilitación integral (ARI) declaradas por el Ayuntamiento.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las solicitudes para programas autonómicos se tramitan a través del portal de la Comunidad de Madrid y su sede electrónica.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las ayudas municipales se gestionan directamente con el Ayuntamiento de Madrid o la EMVS.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Dada la alta demanda, es fundamental presentar la solicitud lo antes posible una vez abierta la convocatoria, con toda la documentación técnica preparada de antemano.</span>
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
