import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en el País Vasco — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en el País Vasco. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/pais-vasco" },
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
          <span className="text-gray-400">País Vasco</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en el País Vasco
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            El País Vasco (Euskadi) cuenta con uno de los sistemas de ayudas a la rehabilitación más completos y generosos de España. El Gobierno Vasco / Eusko Jaurlaritza, a través del Departamento de Vivienda (Etxebizitza), gestiona múltiples líneas de subvención que, combinadas con las ventajas del régimen foral vasco, hacen de esta comunidad un referente nacional en rehabilitación de edificios.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en el País Vasco</h2>
          <p>
            Euskadi ha sido una de las comunidades más activas en la captación y distribución de fondos Next Generation para rehabilitación energética. Las ayudas se destinan a la mejora de la envolvente térmica de edificios, la sustitución de sistemas de calefacción por alternativas de alta eficiencia y la instalación de energías renovables. El clima atlántico del País Vasco, con inviernos fríos y húmedos, hace que las mejoras en aislamiento térmico sean especialmente rentables y prioritarias.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Plan Renove y programa BULTZATU</h2>
          <p>
            El Plan Renove del País Vasco es un programa emblemático que financia la rehabilitación integral de edificios residenciales. Cubre desde mejoras estructurales hasta eficiencia energética y accesibilidad, con porcentajes de subvención que pueden superar el 50% del coste de la obra. El programa BULTZATU, por su parte, está específicamente diseñado para impulsar la regeneración urbana en barrios y áreas degradadas, ofreciendo ayudas adicionales que se suman a las del Plan Renove.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Etxebizitza: Departamento de Vivienda</h2>
          <p>
            El Departamento de Vivienda del Gobierno Vasco (Etxebizitza) coordina todas las políticas de rehabilitación y ofrece un servicio integral de asesoramiento. A través de sus oficinas territoriales en Vitoria-Gasteiz, Bilbao y Donostia-San Sebastián, los propietarios pueden obtener información personalizada sobre las ayudas disponibles y recibir apoyo en la tramitación. Las sociedades públicas de vivienda de las tres diputaciones forales complementan esta red de atención.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Ventajas del régimen foral vasco</h2>
          <p>
            Al igual que Navarra, el País Vasco dispone de un régimen fiscal propio gestionado por las tres diputaciones forales (Álava, Bizkaia y Gipuzkoa). Las deducciones en el IRPF por obras de rehabilitación energética pueden ser significativamente superiores a las del territorio común, lo que permite reducir aún más el coste neto de la reforma al combinar subvención directa y beneficio fiscal. Cada diputación foral puede establecer sus propias deducciones, por lo que conviene consultar la normativa específica de cada territorio.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las solicitudes para programas autonómicos se tramitan a través de la sede electrónica del Gobierno Vasco / Eusko Jaurlaritza.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las oficinas de Etxebizitza en las tres capitales ofrecen asesoramiento presencial gratuito.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Es fundamental consultar la normativa fiscal de la diputación foral correspondiente para maximizar las deducciones aplicables.</span>
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
