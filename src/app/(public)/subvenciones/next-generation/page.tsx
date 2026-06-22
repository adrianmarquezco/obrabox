import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fondos Next Generation para Rehabilitación de Edificios en España",
  description:
    "Guía completa sobre los fondos Next Generation EU para rehabilitación de edificios en España: requisitos, importes (hasta 21.400 EUR/vivienda), documentación y cómo solicitarlos.",
  alternates: { canonical: "/subvenciones/next-generation" },
};

export default function NextGenerationPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Fondos Next Generation para rehabilitación de edificios en España
        </h1>
        <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Los fondos Next Generation EU constituyen el mayor programa de
            inversión pública para rehabilitación de viviendas en la historia de
            España. Dentro del Plan de Recuperación, Transformación y
            Resiliencia, el Gobierno español destinó inicialmente más de 3.420
            millones de euros a programas de rehabilitación residencial y
            vivienda social, cifra que se ha ampliado con sucesivas
            convocatorias hasta 2026.
          </p>
          <p>
            Estos fondos se canalizan a través del Real Decreto 853/2021, que
            regula los programas de ayuda en materia de rehabilitación
            residencial y vivienda social. Las comunidades autónomas son las
            encargadas de gestionar las convocatorias y resolver las
            solicitudes, por lo que los plazos y procedimientos concretos
            varían según el territorio.
          </p>

          <h2>Programas principales</h2>
          <p>
            El Real Decreto 853/2021 establece seis programas de ayuda, de los
            cuales tres están directamente relacionados con la rehabilitación de
            edificios y viviendas:
          </p>
          <ul>
            <li>
              <strong>Programa 3 — Rehabilitación a nivel de edificio:</strong>{" "}
              ayudas para actuaciones de rehabilitación integral en edificios
              residenciales que consigan una reducción mínima del 30% en el
              consumo de energía primaria no renovable. Es el programa con
              mayor dotación y mayores importes por vivienda.
            </li>
            <li>
              <strong>Programa 4 — Rehabilitación a nivel de vivienda:</strong>{" "}
              ayudas para actuaciones dentro de viviendas individuales que
              mejoren la eficiencia energética, como cambio de ventanas,
              instalación de sistemas de calefacción eficientes o mejora del
              aislamiento interior.
            </li>
            <li>
              <strong>Programa 5 — Libro del edificio existente y proyectos técnicos:</strong>{" "}
              ayudas para financiar la elaboración del libro del edificio
              existente y los proyectos técnicos de rehabilitación necesarios
              para solicitar las ayudas de los programas 3 y 4.
            </li>
          </ul>

          <h2>Importes máximos de las ayudas</h2>
          <p>
            Los importes varían según el programa y el nivel de mejora
            energética conseguido:
          </p>
          <ul>
            <li>
              <strong>Programa 3 (edificio):</strong> entre 6.300 y 21.400 EUR
              por vivienda, dependiendo de la reducción de consumo energético
              alcanzada. Para reducciones del 30-45% se aplica la horquilla
              baja; para reducciones superiores al 60%, la máxima. Si el
              edificio está en zona climática E (zonas frías como Burgos, Soria
              o la montaña), los importes se incrementan en un 15%.
            </li>
            <li>
              <strong>Programa 4 (vivienda):</strong> hasta 3.000 EUR por
              vivienda para actuaciones individuales de mejora energética. El
              importe máximo sube a 6.000 EUR si el propietario es vulnerable
              económicamente.
            </li>
            <li>
              <strong>Programa 5 (libro del edificio):</strong> entre 700 y
              3.500 EUR por edificio, dependiendo del número de viviendas que
              tenga.
            </li>
          </ul>

          <h2>Obras que se financian</h2>
          <p>
            Las actuaciones subvencionables incluyen cualquier obra que mejore
            la eficiencia energética del edificio o la vivienda:
          </p>
          <ul>
            <li>Aislamiento térmico de fachadas, cubiertas y suelos</li>
            <li>Sustitución de ventanas y acristalamientos por otros de mayor eficiencia</li>
            <li>Instalación o renovación de sistemas de calefacción, refrigeración y agua caliente sanitaria eficientes</li>
            <li>Instalación de sistemas de energía renovable: aerotermia, placas solares térmicas o fotovoltaicas para autoconsumo</li>
            <li>Mejora de la accesibilidad del edificio (ascensores, rampas, eliminación de barreras) como actuación complementaria</li>
            <li>Mejora de la envolvente térmica en zonas comunes</li>
            <li>Actuaciones de conservación y mantenimiento estructural cuando se combinan con mejora energética</li>
          </ul>

          <h2>Requisitos para solicitarlas</h2>
          <p>
            Para acceder a estas ayudas es necesario cumplir una serie de
            requisitos:
          </p>
          <ol>
            <li>
              <strong>Certificado de eficiencia energética previo:</strong> el
              edificio o la vivienda debe tener un certificado energético
              emitido antes de las obras que sirva como referencia.
            </li>
            <li>
              <strong>Proyecto técnico:</strong> en el caso del Programa 3, es
              necesario un proyecto de rehabilitación redactado por un técnico
              competente que acredite la reducción de consumo energético
              prevista.
            </li>
            <li>
              <strong>Reducción mínima de consumo:</strong> el Programa 3 exige
              una reducción de al menos el 30% en el consumo de energía
              primaria no renovable. El Programa 4 no tiene un umbral mínimo,
              pero las actuaciones deben mejorar la calificación energética.
            </li>
            <li>
              <strong>Certificado de eficiencia energética posterior:</strong>{" "}
              una vez terminadas las obras, se debe obtener un nuevo certificado
              que acredite la mejora real.
            </li>
            <li>
              <strong>Agente rehabilitador (opcional pero recomendable):</strong>{" "}
              la normativa contempla la figura del agente rehabilitador, un
              profesional o empresa que gestiona todo el proceso de
              rehabilitación en nombre de la comunidad de propietarios o del
              particular. Puede adelantar el importe de la subvención.
            </li>
          </ol>

          <h2>Documentación necesaria</h2>
          <p>La documentación que se suele requerir incluye:</p>
          <ul>
            <li>Certificado de eficiencia energética del estado actual</li>
            <li>Proyecto técnico o memoria de la actuación</li>
            <li>Presupuestos detallados de las obras (por capítulos y partidas)</li>
            <li>Acta de la comunidad de propietarios aprobando las obras (para actuaciones en edificio)</li>
            <li>Fotografías del estado previo del edificio o vivienda</li>
            <li>Licencia de obras o comunicación previa</li>
            <li>Facturas y justificantes de pago una vez ejecutadas las obras</li>
            <li>Certificado de eficiencia energética posterior a las obras</li>
          </ul>

          <h2>Plazos y estado actual</h2>
          <p>
            Los fondos Next Generation tienen un horizonte temporal hasta 2026.
            Cada comunidad autónoma publica sus propias convocatorias con plazos
            específicos. A fecha de junio de 2026, la mayoría de comunidades
            están en la fase final de convocatorias, aunque algunas han abierto
            líneas adicionales con fondos remanentes. Es fundamental consultar
            la convocatoria vigente en tu comunidad autónoma, ya que los plazos
            se agotan.
          </p>
          <p>
            El plazo para ejecutar las obras suele ser de 18 a 26 meses desde
            la resolución de concesión, dependiendo de la comunidad autónoma.
          </p>

          <h2>Cómo ayuda ObraBox en el proceso</h2>
          <p>
            La gestión documental es el mayor cuello de botella en las
            solicitudes de subvención. Presupuestos desglosados, facturas,
            fotografías del antes y después, certificados, actas... todo debe
            estar organizado y accesible para la justificación.
          </p>
          <p>
            ObraBox permite centralizar toda esta documentación en cada obra:
            subir fotos con fecha automática, adjuntar presupuestos y facturas,
            registrar gastos por partidas y generar informes que facilitan la
            justificación ante la administración. Para el agente rehabilitador o
            el reformista que gestiona varias obras subvencionadas
            simultáneamente, tener toda la información estructurada en un solo
            sitio ahorra decenas de horas de trabajo administrativo.
          </p>
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
              <Link
                href="/subvenciones"
                className="text-primary-500 hover:underline"
              >
                Todas las subvenciones y ayudas para reformas
              </Link>
            </li>
            <li>
              <Link
                href="/subvenciones/rehabilitacion-energetica"
                className="text-primary-500 hover:underline"
              >
                Ayudas para rehabilitación energética de viviendas (PREE)
              </Link>
            </li>
            <li>
              <Link
                href="/blog/licencia-obra-menor"
                className="text-primary-500 hover:underline"
              >
                Licencia de obra menor: cuándo la necesitas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
