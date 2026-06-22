import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayudas para Rehabilitación Energética de Viviendas en España",
  description:
    "Guía completa del programa PREE y otras ayudas para rehabilitación energética: aislamiento, ventanas, climatización, renovables, deducciones IRPF y programas autonómicos.",
  alternates: { canonical: "/subvenciones/rehabilitacion-energetica" },
};

export default function RehabilitacionEnergeticaPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Ayudas para rehabilitación energética de viviendas en España
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            La rehabilitación energética de viviendas es una de las prioridades
            del Gobierno español y de la Unión Europea para cumplir los
            objetivos de descarbonización. Para impulsar estas actuaciones,
            existen múltiples líneas de ayudas que cubren desde el aislamiento
            de fachadas hasta la instalación de aerotermia, pasando por el
            cambio de ventanas y la mejora de los sistemas de climatización.
          </p>
          <p>
            El programa más relevante es el PREE (Programa de Rehabilitación
            Energética de Edificios), gestionado por el IDAE (Instituto para la
            Diversificación y Ahorro de la Energía) a través de las comunidades
            autónomas. Pero además del PREE, existen deducciones fiscales en el
            IRPF y programas regionales que pueden combinarse para reducir
            significativamente el coste de una reforma energética.
          </p>

          <h2>El programa PREE: qué es y qué cubre</h2>
          <p>
            El PREE es un programa de ayudas directas para la mejora de la
            eficiencia energética de edificios existentes. Está financiado con
            fondos del IDAE y de los fondos europeos FEDER. Desde su primera
            convocatoria en 2020, ha tenido sucesivas ampliaciones (PREE 5000)
            destinadas a municipios de menos de 5.000 habitantes.
          </p>
          <p>Las actuaciones subvencionables del PREE incluyen:</p>
          <ul>
            <li>
              <strong>Mejora de la envolvente térmica:</strong> aislamiento de
              fachadas, cubiertas, suelos y medianeras. Incluye tanto el SATE
              (Sistema de Aislamiento Térmico por el Exterior) como el
              aislamiento interior mediante insuflado o trasdosados.
            </li>
            <li>
              <strong>Sustitución de ventanas y cerramientos:</strong> cambio
              de ventanas, puertas exteriores y otros cerramientos acristalados
              por otros con rotura de puente térmico y vidrios de baja
              emisividad. Es una de las actuaciones más demandadas.
            </li>
            <li>
              <strong>Sustitución de instalaciones térmicas:</strong> cambio de
              calderas de gasóleo o gas por sistemas más eficientes como
              aerotermia (bombas de calor), calderas de biomasa o sistemas
              centralizados de alta eficiencia.
            </li>
            <li>
              <strong>Instalación de energías renovables:</strong> placas
              solares térmicas para agua caliente sanitaria, placas
              fotovoltaicas para autoconsumo y sistemas de geotermia.
            </li>
          </ul>

          <h2>Importes y porcentajes de ayuda</h2>
          <p>
            Los importes del PREE varían según el tipo de actuación y el tipo
            de beneficiario:
          </p>
          <ul>
            <li>
              <strong>Envolvente térmica:</strong> hasta el 50% del coste de la
              actuación para particulares, con un máximo de 12.000 EUR por
              vivienda en edificios y 6.000 EUR en viviendas unifamiliares. El
              porcentaje puede subir al 60-70% si se alcanzan criterios de
              eficiencia especialmente altos o si el beneficiario es vulnerable.
            </li>
            <li>
              <strong>Instalaciones térmicas:</strong> entre el 40% y el 70%
              del coste, dependiendo de la tecnología. La aerotermia y la
              biomasa suelen tener porcentajes más altos que las calderas de
              condensación.
            </li>
            <li>
              <strong>Energías renovables:</strong> entre el 40% y el 55% del
              coste. Las instalaciones de autoconsumo fotovoltaico con
              almacenamiento tienen porcentajes superiores.
            </li>
          </ul>

          <h2>Beneficiarios</h2>
          <p>Pueden solicitar las ayudas del PREE:</p>
          <ul>
            <li>Propietarios de viviendas unifamiliares</li>
            <li>Comunidades de propietarios</li>
            <li>Empresas propietarias de edificios residenciales</li>
            <li>Entidades locales y administraciones públicas</li>
            <li>Empresas de servicios energéticos (ESE) que actúen por cuenta del propietario</li>
          </ul>
          <p>
            Los arrendatarios también pueden ser beneficiarios si cuentan con la
            autorización del propietario y asumen el coste de la actuación.
          </p>

          <h2>Requisitos del certificado energético</h2>
          <p>
            Para solicitar ayudas del PREE es obligatorio disponer de un
            certificado de eficiencia energética del edificio o vivienda en su
            estado actual. Este certificado debe estar inscrito en el registro
            de la comunidad autónoma correspondiente.
          </p>
          <p>
            Una vez ejecutadas las obras, se debe obtener un nuevo certificado
            energético que demuestre la mejora conseguida. La diferencia entre
            ambos certificados es la prueba documental de que la actuación ha
            sido efectiva. En general, se exige que la demanda energética del
            edificio o vivienda se reduzca al menos un 10-30%, dependiendo de
            la comunidad autónoma y la convocatoria.
          </p>

          <h2>Deducciones fiscales en el IRPF</h2>
          <p>
            Además de las subvenciones directas, la Ley de medidas de
            prevención y lucha contra el fraude fiscal introdujo deducciones
            temporales en el IRPF por obras de mejora energética en viviendas,
            vigentes hasta el 31 de diciembre de 2026:
          </p>
          <ul>
            <li>
              <strong>20% de deducción</strong> (base máxima 5.000 EUR/año) por
              obras que reduzcan al menos un 7% la demanda de calefacción y
              refrigeración de la vivienda habitual.
            </li>
            <li>
              <strong>40% de deducción</strong> (base máxima 7.500 EUR/año) por
              obras que mejoren la calificación energética de la vivienda para
              alcanzar una clase A o B.
            </li>
            <li>
              <strong>60% de deducción</strong> (base máxima 5.000 EUR/año, con
              acumulación de hasta 15.000 EUR en cuatro años) por obras de
              rehabilitación energética en edificios de uso predominantemente
              residencial. Esta deducción se aplica a la cuota proporcional del
              propietario en los gastos de la comunidad.
            </li>
          </ul>
          <p>
            Estas deducciones son compatibles con las subvenciones del PREE y
            los fondos Next Generation, pero la base de deducción se reduce en
            el importe subvencionado. Es decir, solo se aplica la deducción
            fiscal sobre la parte no cubierta por la subvención.
          </p>

          <h2>Programas autonómicos destacados</h2>
          <p>
            Además de los programas estatales, varias comunidades autónomas
            tienen líneas propias de ayudas para rehabilitación energética:
          </p>
          <ul>
            <li>
              <strong>Cataluña:</strong> el programa de ayudas a la
              rehabilitación de la Agència de l&apos;Habitatge complementa las
              ayudas estatales con fondos propios, especialmente para fachadas
              y cubiertas en barrios prioritarios.
            </li>
            <li>
              <strong>País Vasco:</strong> el programa Renove Ventanas y las
              ayudas del EVE (Ente Vasco de la Energía) para calderas y
              aerotermia son de las más generosas del Estado.
            </li>
            <li>
              <strong>Andalucía:</strong> la Agencia Andaluza de la Energía
              gestiona convocatorias propias para instalaciones de autoconsumo
              y sustitución de calderas de gasóleo.
            </li>
            <li>
              <strong>Comunidad Valenciana:</strong> el IVACE ofrece líneas de
              ayudas para eficiencia energética en edificios residenciales que
              complementan el PREE.
            </li>
            <li>
              <strong>Madrid:</strong> el Plan Rehabilita del Ayuntamiento de
              Madrid ofrece ayudas adicionales para fachadas, cubiertas e
              instalaciones en edificios de más de 40 años.
            </li>
          </ul>

          <h2>Cómo solicitar las ayudas</h2>
          <p>
            El proceso general para solicitar ayudas de rehabilitación
            energética es:
          </p>
          <ol>
            <li>Obtener el certificado de eficiencia energética actual.</li>
            <li>Solicitar presupuestos detallados a profesionales cualificados.</li>
            <li>Presentar la solicitud de ayuda ante el organismo competente de la comunidad autónoma, antes de iniciar las obras.</li>
            <li>Esperar la resolución de concesión.</li>
            <li>Ejecutar las obras dentro del plazo establecido.</li>
            <li>Obtener el nuevo certificado de eficiencia energética.</li>
            <li>Presentar la documentación justificativa: facturas, certificados y fotografías del antes y después.</li>
          </ol>
          <p>
            Es importante no iniciar las obras antes de presentar la solicitud,
            ya que la mayoría de convocatorias excluyen las actuaciones ya
            iniciadas o finalizadas en el momento de la solicitud.
          </p>
        </div>

        <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
          <h2 className="text-xl font-bold text-secondary mb-2">
            Toda la documentación de la obra en un solo sitio
          </h2>
          <p className="text-gray-600 mb-4">
            Certificados energéticos, presupuestos, facturas y fotos del antes
            y después. Organiza cada obra subvencionada con ObraBox.
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
                href="/calculadora/cambiar-ventanas"
                className="text-primary-500 hover:underline"
              >
                Calculadora de coste de cambio de ventanas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
