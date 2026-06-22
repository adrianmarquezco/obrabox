import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en la Región de Murcia — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en la Región de Murcia. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/murcia" },
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
          <span className="text-gray-400">Región de Murcia</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en la Región de Murcia
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            La Región de Murcia ofrece diversas líneas de ayudas para la rehabilitación y reforma de viviendas, con especial atención a la eficiencia energética en una zona de clima mediterráneo donde la demanda de refrigeración representa un gasto energético considerable. La Comunidad Autónoma de la Región de Murcia (CARM) gestiona tanto los fondos estatales como sus propios programas regionales.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Murcia</h2>
          <p>
            La Región de Murcia ha recibido una dotación significativa de los fondos europeos Next Generation para rehabilitación de edificios. Estas ayudas se destinan a mejorar la eficiencia energética del parque residencial murciano, cubriendo actuaciones como el aislamiento de fachadas y cubiertas, la sustitución de carpinterías, la instalación de protecciones solares y la mejora de sistemas de climatización. En una región con veranos extremos, las mejoras en aislamiento térmico tienen un impacto directo en el confort y el ahorro energético.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programas de rehabilitación urbana</h2>
          <p>
            Murcia cuenta con áreas de rehabilitación integral (ARI) declaradas en varios municipios, incluyendo zonas del casco histórico de Murcia capital, Cartagena y Lorca. En estas áreas, las ayudas pueden ser más cuantiosas y cubrir un porcentaje mayor del coste de las obras. Además, existen programas específicos para la rehabilitación de edificios en zonas costeras como La Manga del Mar Menor, donde el deterioro por la salinidad y la humedad requiere intervenciones periódicas.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Agencia de la Energía de la Región de Murcia</h2>
          <p>
            La Agencia de la Energía de Murcia impulsa programas complementarios de eficiencia energética que pueden combinarse con las ayudas estatales. Estas líneas incluyen incentivos para la instalación de paneles solares fotovoltaicos y térmicos, aerotermia y sistemas de gestión energética inteligente. En una región con más de 3.000 horas de sol al año, las instalaciones de energía solar son especialmente rentables.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Programas PREE en Murcia</h2>
          <p>
            El Programa de Rehabilitación Energética de Edificios (PREE) tiene convocatorias específicas gestionadas por la CARM. Las ayudas pueden alcanzar entre el 40% y el 80% del coste de la actuación, dependiendo del tipo de mejora y de la situación socioeconómica del solicitante. Las actuaciones en la envolvente térmica del edificio suelen ser las más demandadas.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Las solicitudes se tramitan a través de la sede electrónica de la CARM (Comunidad Autónoma de la Región de Murcia).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Es necesario contar con un certificado de eficiencia energética previo y posterior a la reforma para justificar la mejora.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>La Agencia de la Energía de Murcia ofrece asesoramiento gratuito sobre qué programas se ajustan mejor a cada caso.</span>
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
