import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Cataluña — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en Cataluña. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/cataluna" },
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
          <span className="text-gray-400">Cataluña</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en Cataluña
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Cataluña es una de las comunidades autónomas que mayor volumen de fondos ha recibido para la rehabilitación de edificios, gracias a su elevada densidad de población y a un parque residencial con una antigüedad media significativa, especialmente en el área metropolitana de Barcelona. La Generalitat de Catalunya, a través de la Agència de l'Habitatge de Catalunya, gestiona las principales líneas de subvenciones disponibles para propietarios y comunidades de vecinos.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en Cataluña</h2>
          <p>
            Cataluña ha recibido una de las mayores asignaciones de fondos Next Generation EU a nivel nacional para la rehabilitación energética de edificios. Estos fondos financian actuaciones integrales que incluyen el aislamiento de fachadas y cubiertas, la sustitución de carpinterías exteriores, la instalación de sistemas de generación térmica renovable y la mejora de la eficiencia de las instalaciones comunes. Las ayudas pueden cubrir entre el 40% y el 80% del coste de las obras, con importes máximos que varían según el ahorro energético alcanzado y la tipología del edificio.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Agència de l'Habitatge de Catalunya</h2>
          <p>
            La Agència de l'Habitatge de Catalunya es el organismo encargado de gestionar y tramitar las solicitudes de ayudas para rehabilitación en la comunidad. Además de los fondos Next Generation, la Agència administra programas propios de la Generalitat orientados a la mejora de la accesibilidad, la eliminación de barreras arquitectónicas y la rehabilitación de elementos comunes en edificios plurifamiliares. Las comunidades de propietarios pueden acceder a subvenciones específicas para la instalación de ascensores, la mejora de zonas comunes y la adaptación de espacios a normativa vigente.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Rehabilitación en el área metropolitana de Barcelona</h2>
          <p>
            El área metropolitana de Barcelona concentra un elevado número de edificios construidos entre las décadas de 1950 y 1970 que necesitan rehabilitación urgente. Existen programas específicos del Àrea Metropolitana de Barcelona (AMB) y del Ayuntamiento de Barcelona que complementan las ayudas autonómicas y estatales, permitiendo acumular subvenciones para obras de gran envergadura. Los barrios con mayor vulnerabilidad social y peor estado del parque edificatorio reciben atención prioritaria y porcentajes de subvención más elevados.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Eficiencia energética como prioridad</h2>
          <p>
            Cataluña ha puesto un fuerte énfasis en la eficiencia energética como criterio principal de sus programas de ayudas. Los proyectos que demuestran una reducción del consumo de energía primaria no renovable superior al 30% obtienen puntuaciones más altas en las convocatorias y acceden a tramos de subvención superiores. La combinación de aislamiento térmico con la instalación de paneles solares fotovoltaicos o sistemas aerotérmicos es una de las actuaciones más subvencionadas en la región.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Consulta las convocatorias vigentes en la web de la Agència de l'Habitatge de Catalunya.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Encarga un certificado de eficiencia energética y un proyecto técnico a un profesional habilitado.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Presenta la solicitud telemáticamente a través del portal de trámites de la Generalitat de Catalunya.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Tras la resolución favorable, ejecuta las obras y presenta la justificación documental completa.</span>
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
