import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Extremadura — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en Extremadura. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/extremadura" },
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
          <span className="text-gray-400">Extremadura</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Extremadura
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Extremadura es una comunidad autónoma con un marcado carácter rural y un parque de viviendas que, en muchos municipios, necesita una rehabilitación profunda para alcanzar estándares actuales de habitabilidad y eficiencia energética. La Junta de Extremadura ha articulado diversas líneas de ayuda que combinan los fondos europeos Next Generation con programas propios orientados a las necesidades específicas de la región, especialmente en las zonas más despobladas.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Extremadura</h2>
          <p>
            Los fondos Next Generation EU destinados a Extremadura financian la rehabilitación energética de edificios residenciales con especial atención a las viviendas unifamiliares del medio rural, que representan una proporción muy significativa del parque residencial extremeño. Las ayudas cubren actuaciones de aislamiento térmico, sustitución de ventanas, instalación de sistemas de calefacción y agua caliente sanitaria basados en energías renovables, y mejora de la eficiencia de las instalaciones existentes. Los porcentajes de subvención van del 40% al 80%, y el menor coste de vida en Extremadura hace que los importes máximos subvencionables cubran un porcentaje real de la obra más alto que en otras comunidades.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programas para zonas rurales y despobladas</h2>
          <p>
            La Junta de Extremadura ha puesto en marcha programas específicos para la rehabilitación de viviendas en municipios de menos de 5.000 habitantes y en zonas declaradas como áreas de especial necesidad. Estos programas ofrecen condiciones más favorables que las convocatorias generales, con mayores porcentajes de subvención y criterios de puntuación que priorizan las solicitudes de zonas con riesgo de despoblación. El objetivo es hacer viable la permanencia en el medio rural mejorando las condiciones de las viviendas existentes.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Rehabilitación de pueblos históricos</h2>
          <p>
            Extremadura cuenta con numerosos pueblos con un patrimonio arquitectónico valioso que requiere intervenciones de rehabilitación respetuosas con su carácter histórico. La Junta gestiona programas específicos para la rehabilitación de viviendas en conjuntos históricos declarados, como Cáceres, Trujillo, Guadalupe o Zafra. Estas ayudas financian tanto la consolidación estructural como la mejora de instalaciones, siempre respetando los criterios de protección patrimonial. Los importes pueden ser superiores a los de las convocatorias generales debido a la complejidad técnica que implican estas intervenciones.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Agencia Extremeña de la Energía</h2>
          <p>
            La Agencia Extremeña de la Energía (AGENEX) gestiona líneas de ayuda complementarias para la mejora de la eficiencia energética en viviendas. Estas subvenciones se centran en la instalación de energías renovables para autoconsumo, la mejora del aislamiento térmico y la sustitución de equipos de climatización obsoletos por alternativas de alta eficiencia. Las ayudas de AGENEX son compatibles con otras subvenciones autonómicas y estatales, lo que permite a los propietarios extremeños maximizar la financiación disponible para sus proyectos de reforma.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Consulta las convocatorias vigentes en el portal de la Junta de Extremadura y en el DOE (Diario Oficial de Extremadura).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Solicita un certificado energético y recopila presupuestos detallados de las actuaciones previstas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Presenta la solicitud a través de la sede electrónica de la Junta de Extremadura.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Tras la aprobación, ejecuta las obras y justifica los gastos presentando facturas, certificados y documentación fotográfica.</span>
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
