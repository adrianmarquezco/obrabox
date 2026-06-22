import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licencia de Obra Menor en España — Guía Completa 2026",
  description:
    "Todo lo que necesitas saber sobre la licencia de obra menor en España: cuándo la necesitas, documentación, costes, plazos y diferencias con la comunicación previa.",
  alternates: { canonical: "/normativa/licencia-obra-menor" },
};

export default function LicenciaObraMenorPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Licencia de Obra Menor en España — Guía Completa 2026
          </h1>
          <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

          <div className="prose prose-gray max-w-none">
            <p>
              Si vas a hacer una reforma en tu vivienda o local comercial, es muy probable que necesites
              algún tipo de autorización municipal antes de empezar los trabajos. En España, las obras se
              clasifican en obras mayores y obras menores, y cada tipo requiere un trámite diferente ante
              el ayuntamiento. En esta guía te explicamos en detalle qué es la licencia de obra menor,
              cuándo la necesitas, cómo solicitarla y qué consecuencias tiene no hacerlo.
            </p>

            <h2>Qué es una obra menor</h2>
            <p>
              Una obra menor es aquella actuación constructiva de escasa complejidad técnica y económica
              que no altera la estructura portante del edificio, no modifica el volumen edificado, no
              cambia el uso del inmueble y no afecta a elementos protegidos del patrimonio. La definición
              concreta varía según la ordenanza municipal de cada ayuntamiento, pero en general se
              consideran obras menores las siguientes actuaciones:
            </p>
            <ul>
              <li>Reforma de baños y cocinas sin modificar tabiquería estructural.</li>
              <li>Cambio de suelos, alicatados y revestimientos interiores.</li>
              <li>Pintura y rehabilitación de fachadas (sin andamiaje que afecte a vía pública, en algunos municipios).</li>
              <li>Sustitución de ventanas y carpintería exterior.</li>
              <li>Instalación o sustitución de instalaciones interiores (fontanería, electricidad, calefacción).</li>
              <li>Reparación de cubiertas y terrazas sin modificar la estructura.</li>
              <li>Pequeñas demoliciones de tabiquería no estructural.</li>
            </ul>

            <h2>Comunicación previa vs. licencia de obra menor</h2>
            <p>
              Desde la aprobación de la Ley 12/2012 de medidas urgentes de liberalización del comercio
              y de determinados servicios, muchos ayuntamientos han sustituido la licencia de obra menor
              por un trámite más sencillo llamado <strong>declaración responsable</strong> o{" "}
              <strong>comunicación previa</strong>. La diferencia principal es:
            </p>
            <ul>
              <li>
                <strong>Comunicación previa / declaración responsable:</strong> presentas la documentación
                y puedes empezar las obras de forma inmediata o tras un plazo breve (normalmente 15 días).
                El ayuntamiento puede inspeccionar a posteriori.
              </li>
              <li>
                <strong>Licencia de obra menor:</strong> presentas la solicitud y debes esperar la
                resolución expresa del ayuntamiento antes de iniciar los trabajos. El plazo legal suele
                ser de 1 a 3 meses según el municipio.
              </li>
            </ul>
            <p>
              La tendencia en España desde 2012 es ampliar el ámbito de la comunicación previa para
              agilizar las reformas, pero cada municipio mantiene su propia ordenanza. Es imprescindible
              consultar en tu ayuntamiento qué trámite corresponde a tu obra concreta.
            </p>

            <h2>Documentación necesaria</h2>
            <p>
              Aunque varía según el municipio, la documentación habitual para solicitar una licencia de
              obra menor o presentar una comunicación previa incluye:
            </p>
            <ul>
              <li>Solicitud normalizada del ayuntamiento (formulario oficial).</li>
              <li>Fotocopia del DNI/NIE del solicitante o CIF de la empresa.</li>
              <li>Descripción detallada de las obras a realizar (memoria descriptiva).</li>
              <li>Presupuesto desglosado de la obra, firmado por el constructor o reformista.</li>
              <li>Plano de situación y emplazamiento del inmueble.</li>
              <li>Fotografías del estado actual.</li>
              <li>Justificante de pago de la tasa municipal y del ICIO (Impuesto sobre Construcciones, Instalaciones y Obras).</li>
              <li>En comunidades de propietarios: autorización de la comunidad si las obras afectan a elementos comunes.</li>
            </ul>
            <p>
              Para obras menores sencillas (pintar interior, cambiar sanitarios), muchos ayuntamientos
              solo exigen el formulario, el presupuesto y el pago de tasas. Para intervenciones en
              fachada o cubierta, es habitual que se requiera un proyecto técnico firmado por un
              arquitecto o arquitecto técnico.
            </p>

            <h2>Costes: tasas municipales e ICIO</h2>
            <p>
              El coste de obtener la licencia de obra menor tiene dos componentes principales:
            </p>
            <ul>
              <li>
                <strong>Tasa por tramitación:</strong> varía según el ayuntamiento. En municipios medios
                oscila entre 30 y 150 euros para obras sencillas. Las capitales de provincia suelen tener
                tasas más elevadas.
              </li>
              <li>
                <strong>ICIO (Impuesto sobre Construcciones, Instalaciones y Obras):</strong> es un
                impuesto municipal que grava el coste de ejecución material de la obra. El tipo impositivo
                máximo permitido es del 4 % del presupuesto de ejecución material, aunque cada municipio
                fija su tipo dentro de ese máximo. En la práctica, la mayoría aplica entre el 2 % y el 4 %.
              </li>
            </ul>
            <p>
              Por ejemplo, para una reforma de baño con un presupuesto de ejecución de 8.000 euros en un
              municipio que aplica un ICIO del 3,5 %, el impuesto sería de 280 euros, más la tasa de
              tramitación correspondiente.
            </p>

            <h2>Plazos de resolución</h2>
            <p>
              Si tu ayuntamiento exige licencia de obra menor (no comunicación previa), el plazo legal
              para resolver es normalmente de 1 mes desde la presentación completa de la documentación,
              según establece el artículo 21.3 de la Ley 39/2015 del Procedimiento Administrativo Común
              de las Administraciones Públicas, salvo que la ordenanza municipal establezca un plazo
              diferente. En la práctica, muchos ayuntamientos tardan entre 2 y 6 semanas.
            </p>
            <p>
              Si transcurre el plazo sin resolución expresa, en la mayoría de los municipios opera el
              silencio administrativo positivo: se entiende concedida la licencia. No obstante, esta
              regla tiene excepciones cuando la obra afecta al dominio público, al patrimonio histórico
              o contradice el planeamiento urbanístico.
            </p>

            <h2>Sanciones por obras sin licencia</h2>
            <p>
              Realizar obras sin la licencia o comunicación previa correspondiente constituye una
              infracción urbanística. Las consecuencias pueden incluir:
            </p>
            <ul>
              <li>
                <strong>Orden de paralización inmediata</strong> de las obras por parte del ayuntamiento.
              </li>
              <li>
                <strong>Expediente sancionador</strong> con multas que varían según la comunidad autónoma.
                Por ejemplo, en la Comunidad de Madrid (Ley 9/2001 del Suelo), las infracciones leves
                pueden conllevar multas de 600 a 30.000 euros.
              </li>
              <li>
                <strong>Obligación de restaurar</strong> la situación anterior (demoler lo construido sin
                licencia) si la obra no es legalizable.
              </li>
              <li>
                <strong>Imposibilidad de vender o escriturar</strong> la reforma si no consta la licencia
                en el registro municipal.
              </li>
            </ul>

            <h2>Novedades recientes en la normativa</h2>
            <p>
              La tendencia legislativa en España en los últimos años ha sido simplificar los trámites
              para obras menores. La Ley 12/2012, ampliada posteriormente por la Ley 14/2013 de apoyo a
              los emprendedores, eliminó la licencia de obra para determinadas actividades comerciales y
              de servicios, sustituyéndola por la declaración responsable. Muchas comunidades autónomas
              han adaptado sus normativas urbanísticas en la misma línea: Cataluña con el Decreto
              Legislativo 1/2010, Andalucía con la Ley 7/2021 de impulso para la sostenibilidad del
              territorio, y la Comunidad Valenciana con la Ley 1/2019 de modificación de la LOTUP.
            </p>
            <p>
              Además, la digitalización de los trámites avanza: cada vez más ayuntamientos permiten
              presentar la comunicación previa y el pago de tasas de forma telemática a través de sus
              sedes electrónicas, lo que reduce los plazos y facilita el proceso tanto para particulares
              como para profesionales de la reforma.
            </p>
          </div>

          <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
            <h2 className="text-xl font-bold text-secondary mb-2">
              Gestiona las licencias de tus obras con ObraBox
            </h2>
            <p className="text-gray-600 mb-4">
              Centraliza la documentación de cada obra, controla el estado de las licencias y no
              pierdas ningún trámite.
            </p>
            <Link href="/registro" className="btn-primary px-6 py-3">
              Prueba gratis 14 días
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-secondary mb-3">Artículos relacionados</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/normativa/gestion-residuos-obra" className="text-primary-500 hover:underline">
                  Gestión de Residuos de Obra — Normativa y Obligaciones
                </Link>
              </li>
              <li>
                <Link href="/normativa/seguro-responsabilidad-civil" className="text-primary-500 hover:underline">
                  Seguro de Responsabilidad Civil para Reformistas
                </Link>
              </li>
              <li>
                <Link href="/normativa/libro-subcontratacion" className="text-primary-500 hover:underline">
                  Libro de Subcontratación en Obras
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
