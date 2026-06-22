import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Navarra — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en Navarra. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/navarra" },
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
          <span className="text-gray-400">Navarra</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Navarra
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Navarra (Nafarroa) destaca por una tradición sólida en eficiencia energética y rehabilitación de viviendas, respaldada por su régimen foral propio que le otorga una capacidad fiscal diferenciada. El Gobierno de Navarra / Nafarroako Gobernua gestiona programas autonómicos que complementan las ayudas estatales y europeas, ofreciendo condiciones especialmente favorables para quienes acometen reformas integrales.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Navarra</h2>
          <p>
            Navarra ha desplegado los fondos europeos Next Generation con un enfoque prioritario en la rehabilitación energética de edificios residenciales. Las ayudas cubren mejoras en la envolvente térmica, sustitución de sistemas de calefacción obsoletos por alternativas de alta eficiencia como aerotermia o biomasa, e instalación de energías renovables. El clima frío de gran parte de la comunidad hace que las mejoras en aislamiento térmico tengan un retorno económico especialmente rápido.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">NASUVINSA y programas de vivienda</h2>
          <p>
            NASUVINSA, la sociedad pública de vivienda del Gobierno de Navarra, es un actor clave en la gestión de programas de rehabilitación. A través de NASUVINSA se canalizan ayudas para la rehabilitación integral de edificios, mejoras de accesibilidad e intervenciones en comunidades de propietarios. Sus programas suelen ofrecer porcentajes de subvención generosos, especialmente cuando las actuaciones combinan mejoras energéticas con accesibilidad.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Ventajas del régimen foral</h2>
          <p>
            El régimen foral navarro ofrece beneficios fiscales adicionales que complementan las subvenciones directas. Las deducciones en el IRPF navarro por obras de rehabilitación energética pueden suponer un ahorro fiscal significativo que se suma a las ayudas recibidas. Esto convierte a Navarra en una de las comunidades donde el coste neto de una reforma integral es más bajo, al combinar subvención directa y deducción fiscal.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programas regionales de eficiencia energética</h2>
          <p>
            El Gobierno de Navarra gestiona programas propios de eficiencia energética que se suman al PREE estatal. Estas líneas cubren desde la sustitución de calderas y ventanas hasta la instalación de sistemas de ventilación con recuperación de calor, una tecnología especialmente relevante en zonas de inviernos fríos. Las ayudas pueden alcanzar hasta el 50% del coste de la actuación en programas regionales.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las solicitudes se tramitan a través de la sede electrónica del Gobierno de Navarra / Nafarroako Gobernua.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>NASUVINSA ofrece oficinas de rehabilitación donde asesoran gratuitamente sobre los programas disponibles y ayudan con la tramitación.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Es recomendable consultar las deducciones fiscales forales aplicables antes de iniciar la reforma para maximizar el ahorro total.</span>
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
