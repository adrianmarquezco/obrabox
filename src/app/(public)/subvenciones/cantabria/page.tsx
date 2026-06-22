import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Cantabria — Ayudas Disponibles 2026",
  description:
    "Descubre las subvenciones y ayudas disponibles para reformas en Cantabria. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/cantabria" },
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
          <span className="text-gray-400">Cantabria</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Cantabria
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Cantabria, con su clima atlántico y un parque inmobiliario donde
            abundan los edificios anteriores a las primeras normativas de
            aislamiento térmico, es una comunidad donde las ayudas para
            rehabilitación energética tienen un impacto directo en la calidad
            de vida y el ahorro de sus habitantes. El Gobierno de Cantabria
            gestiona estas ayudas a través de la Dirección General de Vivienda,
            combinando fondos europeos con programas autonómicos propios.
          </p>

          <h2>Fondos Next Generation EU en Cantabria</h2>
          <p>
            Aunque la dotación para Cantabria es proporcionalmente menor que
            la de comunidades más pobladas, esto se traduce también en menor
            competencia por las ayudas. Las subvenciones cubren hasta el 80 %
            del coste en actuaciones sobre edificios completos y hasta el 40 %
            en viviendas unifamiliares, con importes máximos de entre 6.300 €
            y 18.800 € por vivienda según el ahorro energético alcanzado. La
            ratio de solicitudes aprobadas sobre presentadas suele ser más
            favorable que en comunidades con mayor demanda.
          </p>

          <h2>Ventajas por zona climática fría</h2>
          <p>
            La mayor parte del territorio cántabro se clasifica en zonas
            climáticas C y D, con algunas áreas de montaña en zona E. Los
            programas de rehabilitación energética aplican incrementos en el
            porcentaje de ayuda para estas zonas más frías, reconociendo que
            el ahorro potencial en calefacción es mayor. Las actuaciones de
            aislamiento de fachadas, cubiertas y sustitución de ventanas
            resultan especialmente rentables en Cantabria, donde la diferencia
            entre un edificio sin aislamiento y uno rehabilitado puede suponer
            una reducción del 50-60 % en la factura energética.
          </p>

          <h2>Prioridad para zonas rurales con despoblación</h2>
          <p>
            El Gobierno de Cantabria otorga prioridad en la tramitación y
            puntuación de solicitudes a las viviendas ubicadas en municipios
            con riesgo de despoblación. Las comarcas del interior como
            Liébana, Campoo y los valles del Saja-Nansa y Pas cuentan con
            condiciones preferentes en varias convocatorias. Esta medida busca
            fijar población en el medio rural facilitando que las viviendas
            alcancen estándares de confort y eficiencia energética equiparables
            a los de las zonas urbanas.
          </p>

          <h2>Cómo solicitar las ayudas</h2>
          <ul>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Consulta las convocatorias vigentes en la web del{" "}
              <strong>Gobierno de Cantabria</strong> (cantabria.es).
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Comprueba si tu municipio está en zona de despoblación para
              obtener puntuación adicional.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Obtén un certificado de eficiencia energética antes y después de la
              reforma.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Presenta la solicitud telemáticamente a través de la sede
              electrónica del Gobierno de Cantabria con certificado digital o
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
