import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Castilla-La Mancha — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en Castilla-La Mancha. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/castilla-la-mancha" },
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
          <span className="text-gray-400">Castilla-La Mancha</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Castilla-La Mancha
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Castilla-La Mancha es una de las comunidades autónomas con mayor extensión territorial y un parque de viviendas envejecido, especialmente en zonas rurales. La Junta de Comunidades de Castilla-La Mancha (JCCM) ha canalizado importantes fondos europeos y estatales para impulsar la rehabilitación de edificios y viviendas en toda la región.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Castilla-La Mancha</h2>
          <p>
            A través del Plan de Recuperación, Transformación y Resiliencia, Castilla-La Mancha ha recibido una asignación significativa de los fondos Next Generation EU destinados a la rehabilitación energética de edificios residenciales. Estas ayudas cubren actuaciones como el aislamiento térmico de fachadas y cubiertas, la sustitución de ventanas por otras de alta eficiencia, la instalación de sistemas de climatización renovable y la mejora de instalaciones de iluminación y agua caliente sanitaria. Las subvenciones pueden cubrir entre el 40% y el 80% del coste de la obra, dependiendo del ahorro energético conseguido.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programa PREE y rehabilitación energética</h2>
          <p>
            El Programa de Rehabilitación Energética de Edificios (PREE) tiene especial relevancia en Castilla-La Mancha por las condiciones climáticas extremas de la meseta, con veranos muy calurosos e inviernos fríos. Las actuaciones de mejora de la envolvente térmica y la eficiencia de las instalaciones permiten reducir significativamente el consumo energético de las viviendas. Las ayudas del PREE son compatibles con otras subvenciones autonómicas, lo que permite maximizar la financiación disponible para cada proyecto de reforma.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Áreas de Rehabilitación Integral (ARI)</h2>
          <p>
            La JCCM gestiona programas específicos de Áreas de Rehabilitación Integral (ARI) en núcleos urbanos y rurales con patrimonio arquitectónico relevante. Estas áreas reciben financiación adicional para rehabilitar conjuntos de edificios, mejorar la accesibilidad y revitalizar barrios históricos. Municipios como Toledo, Cuenca o Albacete cuentan con ARI activas que permiten a los propietarios acceder a subvenciones reforzadas para obras de rehabilitación integral.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Enfoque rural y despoblación</h2>
          <p>
            Dado el amplio territorio rural de Castilla-La Mancha, existen líneas de ayuda específicas para la rehabilitación de viviendas en municipios de menos de 5.000 habitantes. Estas subvenciones buscan frenar la despoblación facilitando que las viviendas rurales alcancen estándares modernos de habitabilidad y eficiencia energética. Los importes máximos subvencionables suelen ser más elevados en estas zonas prioritarias.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Consulta las convocatorias vigentes en la web de la JCCM y en la Consejería de Fomento.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Reúne la documentación necesaria: certificado energético actual, presupuesto detallado de la obra y memoria técnica.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Presenta la solicitud de forma telemática a través de la sede electrónica de la Junta de Comunidades.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Tras la aprobación, ejecuta la obra y justifica los gastos con facturas y certificados de finalización.</span>
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
