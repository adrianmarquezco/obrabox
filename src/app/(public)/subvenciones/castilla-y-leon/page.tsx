import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Castilla y León — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en Castilla y León. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/castilla-y-leon" },
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
          <span className="text-gray-400">Castilla y León</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Castilla y León
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Castilla y León es la comunidad autónoma más extensa de España y una de las más afectadas por la despoblación rural. La Junta de Castilla y León ha desplegado un amplio abanico de ayudas para la rehabilitación de viviendas, combinando fondos europeos, estatales y autonómicos para mejorar un parque de viviendas que, en muchas zonas rurales, supera los 50 años de antigüedad.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU con bonificación climática</h2>
          <p>
            Castilla y León se beneficia especialmente de los fondos Next Generation EU gracias a su clasificación en zona climática E, la más fría de España. Esta clasificación otorga una bonificación adicional del 15% sobre las ayudas base para actuaciones de mejora de la eficiencia energética. Las reformas que incluyan aislamiento térmico de fachadas, cubiertas y suelos, así como la sustitución de sistemas de calefacción por alternativas renovables, pueden recibir subvenciones de hasta el 80% del coste total de la obra en los casos de mayor ahorro energético demostrado.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Plan de Vivienda de Castilla y León</h2>
          <p>
            La Junta gestiona su propio Plan de Vivienda autonómico, que complementa las ayudas estatales con líneas específicas para la rehabilitación de viviendas en el medio rural. Este plan incluye subvenciones para la mejora de la habitabilidad, la accesibilidad y la eficiencia energética, con importes que pueden alcanzar los 12.000 euros por vivienda. Los municipios de menos de 5.000 habitantes y las zonas declaradas como áreas de especial necesidad de vivienda reciben prioridad en la tramitación y mayores porcentajes de subvención.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">ARI en centros históricos</h2>
          <p>
            Castilla y León cuenta con un patrimonio arquitectónico excepcional, y los programas de Áreas de Rehabilitación Integral (ARI) son fundamentales para la conservación de sus cascos históricos. Ciudades como Salamanca, Segovia, Ávila y Burgos disponen de ARI activas que financian la rehabilitación de edificios residenciales en zonas protegidas. Estas ayudas cubren desde la consolidación estructural hasta la mejora de instalaciones, pasando por la restauración de elementos arquitectónicos singulares, con subvenciones que pueden superar los 20.000 euros por vivienda.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Zonas de despoblación con acceso prioritario</h2>
          <p>
            Las provincias con mayor índice de despoblación —Soria, Zamora, Ávila y Segovia— cuentan con acceso prioritario a las convocatorias de ayudas y baremos de puntuación más favorables. La Junta ha establecido criterios específicos que priorizan las solicitudes procedentes de municipios en riesgo de despoblación, facilitando que los propietarios en estas zonas puedan rehabilitar sus viviendas con financiación pública significativa.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Consulta las convocatorias en el portal de la Junta de Castilla y León y en la Consejería de Medio Ambiente, Vivienda y Ordenación del Territorio.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Obtén un certificado de eficiencia energética de tu vivienda y solicita presupuestos detallados a profesionales cualificados.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Presenta la solicitud telemáticamente a través de la sede electrónica de la Junta de Castilla y León.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Una vez aprobada, ejecuta las obras y justifica los gastos con facturas, certificados energéticos finales y reportaje fotográfico.</span>
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
