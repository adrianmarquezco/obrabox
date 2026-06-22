import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Aragón — Ayudas Disponibles 2026",
  description:
    "Descubre las subvenciones y ayudas disponibles para reformas en Aragón. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/aragon" },
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
          <span className="text-gray-400">Aragón</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Aragón
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            El Gobierno de Aragón gestiona diversas líneas de ayuda para la
            rehabilitación de viviendas y edificios, tanto con cargo a los
            Fondos Next Generation EU como a través de programas propios
            autonómicos. La comunidad cuenta con un parque inmobiliario
            envejecido, especialmente en las zonas rurales de Huesca y Teruel,
            lo que convierte estas ayudas en una oportunidad clave para mejorar
            la eficiencia energética y las condiciones de habitabilidad.
          </p>

          <h2>Fondos Next Generation EU en Aragón</h2>
          <p>
            Aragón recibe una dotación significativa de los fondos europeos de
            rehabilitación, con especial atención a los municipios de menor
            población. Las ayudas pueden alcanzar hasta el 80 % del coste de la
            actuación en edificios residenciales completos y hasta el 40 % en
            viviendas unifamiliares. Los importes máximos varían entre 6.300 € y
            18.800 € por vivienda según el nivel de ahorro energético
            conseguido tras la reforma.
          </p>

          <h2>Programa PREE 5000 para pequeños municipios</h2>
          <p>
            El programa PREE 5000 está específicamente diseñado para municipios
            de menos de 5.000 habitantes, una realidad muy presente en Aragón
            donde gran parte del territorio es rural. Este programa financia
            actuaciones de mejora energética en viviendas y edificios de
            pequeñas localidades, con porcentajes de ayuda que pueden superar el
            50 % del coste total. Para Aragón, esta línea resulta
            especialmente relevante en las provincias de Huesca y Teruel.
          </p>

          <h2>Áreas de Rehabilitación Urbana (ARU)</h2>
          <p>
            El Gobierno de Aragón ha declarado varias Áreas de Rehabilitación
            Urbana, principalmente en Zaragoza capital y en cascos históricos de
            ciudades como Huesca, Teruel y Calatayud. Las viviendas ubicadas
            dentro de estas ARU pueden acceder a ayudas adicionales que se suman
            a las líneas generales, con condiciones más favorables y
            tramitación prioritaria. Estas zonas se definen por concentrar
            edificios con necesidades de rehabilitación estructural y
            energética.
          </p>

          <h2>Cómo solicitar las ayudas</h2>
          <ul>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Consulta las convocatorias vigentes en la web del{" "}
              <strong>Gobierno de Aragón</strong> (aragon.es).
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Comprueba si tu vivienda está dentro de un Área de Rehabilitación
              Urbana para acceder a condiciones mejoradas.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Obtén un certificado de eficiencia energética antes y después de la
              actuación.
            </li>
            <li>
              <CheckCircle2 className="inline-block w-5 h-5 text-primary-500 mr-1" />
              Presenta la solicitud telemáticamente con certificado digital o
              Cl@ve a través del portal del Gobierno de Aragón.
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
