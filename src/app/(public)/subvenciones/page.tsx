import type { Metadata } from "next";
import Link from "next/link";
import { Euro, Building2, Leaf, ArrowRight, Landmark, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Subvenciones y Ayudas para Reformas en España — Guía Actualizada 2026",
  description:
    "Guía completa de subvenciones y ayudas disponibles para reformas en España en 2026: fondos Next Generation, rehabilitación energética, ayudas autonómicas y deducciones fiscales.",
  alternates: { canonical: "/subvenciones" },
};

export default function SubvencionesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Subvenciones y ayudas para reformas en España
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Todas las ayudas públicas disponibles en 2026 para rehabilitar
            viviendas y edificios. Fondos europeos, programas estatales y ayudas
            autonómicas explicadas de forma clara.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none mb-12">
            <p>
              España vive uno de los momentos con mayor volumen de ayudas
              públicas destinadas a la rehabilitación de viviendas y edificios.
              La combinación de los fondos europeos Next Generation EU, los
              programas estatales de eficiencia energética y las convocatorias
              autonómicas ha creado un escenario en el que reformar una vivienda
              puede salir significativamente más barato si se conocen las ayudas
              disponibles y se gestiona correctamente la documentación.
            </p>
            <p>
              Para los profesionales del sector de las reformas, conocer estas
              subvenciones es una ventaja competitiva real. Un reformista que
              sabe orientar a su cliente sobre qué ayudas puede solicitar, qué
              documentación necesita y cómo encajar la obra dentro de los
              requisitos de la subvención, cierra más presupuestos y a mayor
              importe. El cliente percibe un valor añadido que va más allá de la
              obra en sí.
            </p>
            <p>
              El principal reto de las subvenciones es la burocracia. Cada
              programa tiene sus propios requisitos, plazos, formularios y
              justificaciones. Los fondos Next Generation, por ejemplo, exigen
              un certificado energético previo y posterior, un libro del
              edificio, un proyecto técnico y la intervención de un agente
              rehabilitador. Las ayudas del PREE requieren demostrar una
              reducción mínima de demanda energética. Y las ayudas autonómicas
              varían completamente de una comunidad a otra.
            </p>
            <p>
              En esta guía hemos recopilado las principales líneas de ayudas
              activas en España en 2026, explicando en cada caso quién puede
              solicitarlas, cuánto dinero cubren, qué obras se incluyen y cómo
              se tramitan. Si eres profesional de las reformas o propietario de
              una vivienda que quiere rehabilitar, aquí encontrarás la
              información que necesitas para aprovechar estas oportunidades.
            </p>
            <p>
              Además, muchas de estas ayudas son compatibles entre sí y con
              deducciones fiscales en el IRPF. Un propietario puede, por
              ejemplo, recibir una subvención Next Generation para cambiar las
              ventanas de su vivienda y además deducirse un porcentaje del coste
              restante en su declaración de la renta. Conocer estas
              combinaciones puede suponer un ahorro total del 50% o más sobre
              el coste de la reforma.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-secondary mb-6">
            Principales líneas de ayudas
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <Link
              href="/subvenciones/next-generation"
              className="card p-6 hover:shadow-md transition-shadow group"
            >
              <Building2 className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary-500 transition-colors">
                Fondos Next Generation EU
              </h3>
              <p className="text-sm text-gray-600">
                Hasta 21.400 EUR por vivienda para rehabilitación energética de
                edificios. El mayor programa de ayudas para reformas en la
                historia de España.
              </p>
              <span className="mt-3 inline-flex items-center text-sm text-primary-500 font-medium">
                Leer más <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/subvenciones/rehabilitacion-energetica"
              className="card p-6 hover:shadow-md transition-shadow group"
            >
              <Leaf className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary-500 transition-colors">
                Rehabilitación energética (PREE)
              </h3>
              <p className="text-sm text-gray-600">
                Programa de ayudas para mejorar la eficiencia energética de
                viviendas: aislamiento, ventanas, climatización y energías
                renovables.
              </p>
              <span className="mt-3 inline-flex items-center text-sm text-primary-500 font-medium">
                Leer más <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <div className="card p-6">
              <Euro className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="font-bold text-secondary mb-2">
                Deducciones fiscales IRPF
              </h3>
              <p className="text-sm text-gray-600">
                Deducciones del 20%, 40% o 60% en el IRPF por obras de mejora
                energética en viviendas. Compatibles con las subvenciones
                directas. Vigentes hasta el 31 de diciembre de 2026.
              </p>
            </div>

            <div className="card p-6">
              <Landmark className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="font-bold text-secondary mb-2">
                ITE e Inspección Técnica de Edificios
              </h3>
              <p className="text-sm text-gray-600">
                Algunas comunidades autónomas ofrecen ayudas para financiar la
                Inspección Técnica de Edificios (ITE) y las obras derivadas de
                sus resultados, especialmente en edificios de más de 50 años.
              </p>
            </div>

            <div className="card p-6 sm:col-span-2">
              <MapPin className="w-10 h-10 text-primary-500 mb-3" />
              <h3 className="font-bold text-secondary mb-2">
                Ayudas autonómicas y municipales
              </h3>
              <p className="text-sm text-gray-600">
                Cada comunidad autónoma y muchos ayuntamientos tienen sus
                propias convocatorias de ayudas para rehabilitación. Algunas
                destacadas: Plan Rehabilita de Madrid, ayudas de la Generalitat
                de Catalunya, Plan Renove del País Vasco, subvenciones del
                Govern Balear y programas de la Junta de Andalucía. Las
                cuantías y requisitos varían, pero son acumulables con las
                ayudas estatales en muchos casos.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>Compatibilidad entre ayudas</h2>
            <p>
              Uno de los aspectos menos conocidos es que muchas de estas ayudas
              son compatibles entre sí, siempre que la suma total de las ayudas
              no supere el coste de la actuación. Un propietario puede combinar,
              por ejemplo, una subvención Next Generation con una deducción
              fiscal en el IRPF y una ayuda municipal, reduciendo
              significativamente el desembolso final.
            </p>
            <p>
              La clave está en planificar la obra y la solicitud de ayudas de
              forma coordinada, asegurándose de cumplir los requisitos de cada
              programa y de tener toda la documentación preparada antes de
              iniciar los trabajos. En la mayoría de programas, las obras no
              pueden haber comenzado antes de solicitar la ayuda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gestiona la documentación de tus subvenciones con ObraBox
          </h2>
          <p className="text-primary-100 mb-8">
            Centraliza presupuestos, facturas, certificados energéticos y toda
            la documentación que necesitas para solicitar y justificar
            subvenciones de rehabilitación.
          </p>
          <Link
            href="/registro"
            className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </section>
    </>
  );
}
