import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registro de Jornada Laboral en Obras de Reforma — Obligaciones",
  description:
    "Guía sobre el registro de jornada laboral obligatorio en obras de reforma: Real Decreto-ley 8/2019, requisitos, inspecciones y sanciones.",
  alternates: { canonical: "/normativa/registro-jornada-laboral" },
};

export default function RegistroJornadaLaboralPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Registro de Jornada Laboral en Obras de Reforma — Obligaciones
          </h1>
          <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

          <div className="prose prose-gray max-w-none">
            <p>
              Desde mayo de 2019, todas las empresas en España están obligadas a registrar la jornada
              diaria de sus trabajadores. Esta obligación, introducida por el Real Decreto-ley 8/2019,
              afecta de lleno al sector de la reforma y la construcción, donde las jornadas pueden ser
              irregulares y los centros de trabajo cambian constantemente. En esta guía te explicamos
              qué exige la ley, cómo aplicarla en el contexto de las obras y qué consecuencias tiene no
              cumplir.
            </p>

            <h2>Marco legal: Real Decreto-ley 8/2019</h2>
            <p>
              El <strong>Real Decreto-ley 8/2019, de 8 de marzo, de medidas urgentes de protección
              social y de lucha contra la precariedad laboral en la jornada de trabajo</strong>, modificó
              el artículo 34 del Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015)
              añadiendo un nuevo apartado 9 que establece:
            </p>
            <ul>
              <li>La empresa garantizará el registro diario de jornada, que deberá incluir el horario concreto de inicio y finalización de la jornada de trabajo de cada persona trabajadora.</li>
              <li>La organización y documentación del registro se realizará mediante negociación colectiva o acuerdo de empresa o, en su defecto, decisión del empresario previa consulta con los representantes legales de los trabajadores.</li>
              <li>La empresa conservará los registros durante cuatro años, y permanecerán a disposición de las personas trabajadoras, de sus representantes legales y de la Inspección de Trabajo y Seguridad Social.</li>
            </ul>

            <h2>A quién afecta en el sector de la reforma</h2>
            <p>
              La obligación de registro de jornada se aplica a <strong>todas las empresas</strong>,
              independientemente de su tamaño o sector, y a <strong>todos los trabajadores por cuenta
              ajena</strong>, incluidos:
            </p>
            <ul>
              <li>Trabajadores a jornada completa y a tiempo parcial.</li>
              <li>Trabajadores con contrato temporal o indefinido.</li>
              <li>Trabajadores móviles que se desplazan entre diferentes obras.</li>
              <li>Trabajadores de ETT puestos a disposición de la empresa de reforma.</li>
            </ul>
            <p>
              Los trabajadores autónomos (sin empleados) no están sujetos a esta obligación respecto a
              su propia jornada, pero sí deben registrar la jornada si tienen trabajadores a su cargo.
              Los autónomos económicamente dependientes (TRADE) tienen regulaciones específicas en el
              artículo 14 de la Ley 20/2007 del Estatuto del Trabajo Autónomo.
            </p>

            <h2>Qué debe incluir el registro</h2>
            <p>
              Aunque la ley no establece un formato obligatorio, el registro de jornada debe contener
              como mínimo:
            </p>
            <ul>
              <li><strong>Identificación del trabajador:</strong> nombre, apellidos y DNI/NIE.</li>
              <li><strong>Fecha</strong> del día de trabajo.</li>
              <li><strong>Hora de inicio</strong> de la jornada.</li>
              <li><strong>Hora de finalización</strong> de la jornada.</li>
              <li><strong>Firma o validación</strong> del trabajador (recomendable, aunque no explícitamente exigido por la ley).</li>
            </ul>
            <p>
              Es recomendable incluir también las pausas e interrupciones (tiempo de descanso para
              comida, por ejemplo) para que quede claro el tiempo de trabajo efectivo frente al tiempo de
              presencia. En el sector de la construcción, donde es habitual la jornada partida, esto es
              especialmente relevante.
            </p>

            <h2>Formato: digital vs. papel</h2>
            <p>
              La ley no impone un sistema concreto de registro. Las empresas pueden usar:
            </p>
            <ul>
              <li>
                <strong>Registro en papel:</strong> hojas de firma donde cada trabajador anota su hora de
                entrada y salida y firma cada día. Es el método más sencillo pero propenso a errores,
                pérdidas y manipulaciones.
              </li>
              <li>
                <strong>Sistemas digitales:</strong> aplicaciones de fichaje mediante geolocalización
                (GPS), huella dactilar, tarjeta NFC, código QR o fichaje desde el móvil. Son más
                fiables, difíciles de manipular y facilitan la conservación durante los 4 años exigidos.
              </li>
              <li>
                <strong>Sistemas mixtos:</strong> registro digital con posibilidad de corrección manual
                supervisada.
              </li>
            </ul>
            <p>
              La Inspección de Trabajo ha señalado en sus criterios internos (Criterio Técnico 101/2019
              sobre actuación de la Inspección de Trabajo en materia de registro de jornada) que el
              sistema elegido debe ser objetivo, fiable y accesible, y que los registros no deben poder
              ser modificados a posteriori sin dejar traza.
            </p>

            <h2>Particularidades del sector de la construcción</h2>
            <p>
              El sector de la reforma y la construcción presenta desafíos específicos para el registro
              de jornada:
            </p>
            <ul>
              <li>
                <strong>Centros de trabajo itinerantes:</strong> los trabajadores cambian de obra
                frecuentemente, lo que dificulta instalar sistemas fijos de fichaje.
              </li>
              <li>
                <strong>Subcontratación:</strong> en una misma obra pueden coincidir trabajadores de
                varias empresas, cada una con su propio sistema de registro.
              </li>
              <li>
                <strong>Jornadas irregulares:</strong> las condiciones meteorológicas, los retrasos en
                materiales y la naturaleza del trabajo pueden hacer que las jornadas varíen de un día a
                otro.
              </li>
              <li>
                <strong>Desplazamientos:</strong> el tiempo de desplazamiento desde el domicilio a la
                obra no se computa como jornada laboral (STS de 19 de noviembre de 2019), pero el
                desplazamiento entre obras sí puede computar.
              </li>
            </ul>
            <p>
              Por estas razones, los sistemas de fichaje por geolocalización desde el teléfono móvil son
              la solución más práctica para el sector. Permiten al trabajador registrar su entrada y
              salida desde cualquier ubicación con la validación GPS del centro de trabajo.
            </p>

            <h2>Inspecciones y sanciones</h2>
            <p>
              La Inspección de Trabajo y Seguridad Social (ITSS) realiza campañas específicas de
              control del registro de jornada. Los inspectores pueden personarse en cualquier obra y
              solicitar el registro de los últimos 4 años de todos los trabajadores presentes.
            </p>
            <p>
              Las sanciones por no disponer de registro de jornada se tipifican como{" "}
              <strong>infracción grave</strong> en el artículo 7.5 del Real Decreto Legislativo 5/2000
              (Ley sobre Infracciones y Sanciones en el Orden Social — LISOS). Las cuantías son:
            </p>
            <ul>
              <li><strong>Grado mínimo:</strong> de 751 a 1.500 euros.</li>
              <li><strong>Grado medio:</strong> de 1.501 a 3.750 euros.</li>
              <li><strong>Grado máximo:</strong> de 3.751 a 7.500 euros.</li>
            </ul>
            <p>
              Estas sanciones se aplican <strong>por empresa y centro de trabajo</strong>, no por cada
              trabajador sin registro. No obstante, si se detectan además irregularidades en las horas
              extras (no compensadas, no cotizadas), las sanciones pueden acumularse con infracciones
              adicionales por cada trabajador afectado.
            </p>
            <p>
              Es importante tener en cuenta que la ausencia de registro genera una presunción a favor
              del trabajador en caso de reclamación de horas extras: si no hay registro, se presume que
              el trabajador realizó las horas extras que reclama (criterio consolidado por la
              jurisprudencia del Tribunal Supremo).
            </p>

            <h2>Cómo ObraBox te ayuda a cumplir</h2>
            <p>
              ObraBox incluye una funcionalidad de fichaje con geolocalización GPS diseñada
              específicamente para el sector de la reforma. Tus trabajadores fichan la entrada y salida
              desde su móvil al llegar a cada obra, el sistema valida la ubicación GPS y genera el
              registro diario de forma automática. Todos los registros se almacenan de forma segura
              durante los 4 años exigidos y puedes exportarlos en cualquier momento si los necesitas
              para una inspección o una reclamación.
            </p>
          </div>

          <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
            <h2 className="text-xl font-bold text-secondary mb-2">
              Fichaje GPS para tus obras con ObraBox
            </h2>
            <p className="text-gray-600 mb-4">
              Cumple con el registro de jornada de forma sencilla. Tus trabajadores fichan desde el
              móvil y tú tienes el registro siempre disponible.
            </p>
            <Link href="/registro" className="btn-primary px-6 py-3">
              Prueba gratis 14 días
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-secondary mb-3">Artículos relacionados</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/normativa/libro-subcontratacion" className="text-primary-500 hover:underline">
                  Libro de Subcontratación en Obras
                </Link>
              </li>
              <li>
                <Link href="/normativa/seguro-responsabilidad-civil" className="text-primary-500 hover:underline">
                  Seguro de Responsabilidad Civil para Reformistas
                </Link>
              </li>
              <li>
                <Link href="/normativa/licencia-obra-menor" className="text-primary-500 hover:underline">
                  Licencia de Obra Menor en España — Guía Completa 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
