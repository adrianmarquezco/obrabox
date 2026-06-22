import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones para Reformas en Comunidad Valenciana — Ayudas Disponibles 2026",
  description: "Descubre las subvenciones y ayudas disponibles para reformas en la Comunidad Valenciana. Fondos Next Generation, rehabilitación energética y más.",
  alternates: { canonical: "/subvenciones/comunidad-valenciana" },
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
          <span className="text-gray-400">Comunidad Valenciana</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Subvenciones para reformas en la Comunidad Valenciana
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            La Comunidad Valenciana cuenta con una amplia oferta de subvenciones para la rehabilitación de viviendas, impulsada tanto por los fondos europeos como por programas propios de la Generalitat Valenciana. La región combina necesidades de mejora energética en un clima mediterráneo con la reconstrucción de zonas afectadas por fenómenos meteorológicos adversos, lo que ha motivado la creación de líneas de ayuda específicas y generosas.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Fondos Next Generation EU en la Comunidad Valenciana</h2>
          <p>
            La Comunidad Valenciana ha recibido una asignación destacada de los fondos Next Generation EU para la rehabilitación de edificios residenciales. La Generalitat Valenciana, a través de GVA Habitatge (Vicepresidencia Segunda y Conselleria de Servicios Sociales, Igualdad y Vivienda), gestiona estas ayudas que cubren actuaciones de mejora de la envolvente térmica, instalación de energías renovables, mejora de la eficiencia de las instalaciones y actuaciones de accesibilidad. Las subvenciones oscilan entre el 40% y el 80% del coste, con importes máximos que pueden alcanzar los 21.400 euros por vivienda en los programas más ambiciosos.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Plan Renhata para reformas interiores</h2>
          <p>
            El Plan Renhata es un programa emblemático de la Comunidad Valenciana que subvenciona reformas en el interior de las viviendas, especialmente en cocinas y baños. A diferencia de la mayoría de ayudas estatales que se centran en elementos comunes y envolvente, Renhata permite financiar la renovación de instalaciones interiores de fontanería, electricidad y saneamiento, así como la mejora de la accesibilidad dentro de la vivienda. Las ayudas pueden alcanzar hasta 5.000 euros por vivienda y son especialmente populares entre propietarios de viviendas antiguas que necesitan una actualización integral de sus instalaciones.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Ayudas de reconstrucción tras la DANA</h2>
          <p>
            Tras los episodios de DANA que han afectado gravemente a diversas localidades de la Comunidad Valenciana, se han habilitado programas extraordinarios de ayudas para la reconstrucción y rehabilitación de viviendas dañadas. Estos programas cubren desde la reparación estructural hasta la reposición de instalaciones y acabados, con procedimientos de tramitación acelerados y porcentajes de subvención que pueden llegar al 100% del coste en los casos más graves. Las zonas afectadas cuentan con oficinas de atención específicas para facilitar la gestión de estas ayudas.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Consideraciones climáticas mediterráneas</h2>
          <p>
            El clima mediterráneo de la Comunidad Valenciana plantea retos específicos en materia de eficiencia energética. Las ayudas priorizan actuaciones que mejoren el comportamiento térmico de las viviendas tanto en verano como en invierno, con especial atención a la protección solar, la ventilación cruzada y la reducción de la demanda de refrigeración. La instalación de sistemas de aerotermia y paneles solares fotovoltaicos para autoconsumo son actuaciones especialmente bien valoradas en las convocatorias valencianas.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-3">Cómo solicitar las ayudas</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Consulta las convocatorias vigentes en la web de GVA Habitatge y en el DOGV (Diari Oficial de la Generalitat Valenciana).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Prepara la documentación: certificado energético, presupuestos de al menos dos empresas y proyecto técnico si la obra lo requiere.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Presenta la solicitud a través de la sede electrónica de la Generalitat Valenciana.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <span>Tras la aprobación, ejecuta las obras dentro del plazo establecido y justifica con facturas y certificados finales.</span>
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
