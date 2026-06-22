import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libro de Subcontratación en Obras — Qué Es y Cómo Cumplir",
  description:
    "Guía completa sobre el libro de subcontratación en obras: Ley 32/2006, cuándo es obligatorio, qué información registrar, límites de subcontratación y sanciones.",
  alternates: { canonical: "/normativa/libro-subcontratacion" },
};

export default function LibroSubcontratacionPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Libro de Subcontratación en Obras — Qué Es y Cómo Cumplir
          </h1>
          <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

          <div className="prose prose-gray max-w-none">
            <p>
              La subcontratación es una práctica habitual en el sector de la reforma y la construcción.
              Es frecuente que el contratista principal subcontrate trabajos especializados como
              fontanería, electricidad, pintura o climatización a otras empresas o autónomos. La Ley
              32/2006 reguladora de la subcontratación en el sector de la construcción establece
              obligaciones específicas para controlar esta cadena de subcontratación, siendo el libro de
              subcontratación una de las más importantes. En esta guía te explicamos qué es, cuándo lo
              necesitas y cómo cumplir con esta obligación.
            </p>

            <h2>Marco legal: Ley 32/2006 y Real Decreto 1109/2007</h2>
            <p>
              La <strong>Ley 32/2006, de 18 de octubre, reguladora de la subcontratación en el Sector
              de la Construcción</strong>, tiene como objetivo mejorar las condiciones de trabajo y la
              seguridad en las obras controlando la cadena de subcontratación. Su reglamento de
              desarrollo es el <strong>Real Decreto 1109/2007, de 24 de agosto</strong>.
            </p>
            <p>
              Esta normativa se aplica a las obras de construcción incluidas en el ámbito del{" "}
              <strong>Real Decreto 1627/1997</strong> sobre disposiciones mínimas de seguridad y salud
              en las obras de construcción. Esto incluye las obras de reforma, rehabilitación,
              reparación, saneamiento, mantenimiento y demolición de edificios.
            </p>

            <h2>Qué es el libro de subcontratación</h2>
            <p>
              El libro de subcontratación es un documento que debe estar en cada obra y en el que el
              contratista principal refleja, por orden cronológico, todas las subcontrataciones
              realizadas con empresas subcontratistas y trabajadores autónomos. Su función es garantizar
              la transparencia de la cadena de subcontratación y facilitar el control por parte de la
              autoridad laboral, la Inspección de Trabajo y los coordinadores de seguridad.
            </p>
            <p>
              El libro debe estar habilitado (sellado y diligenciado) por la autoridad laboral
              competente de la comunidad autónoma donde se ejecute la obra, antes del inicio de los
              trabajos. El modelo oficial está regulado en el Anexo III del Real Decreto 1109/2007.
            </p>

            <h2>Cuándo es obligatorio</h2>
            <p>
              El libro de subcontratación es obligatorio para el <strong>contratista
              principal</strong> en toda obra de construcción incluida en el ámbito del Real Decreto
              1627/1997. En la práctica, esto significa que es obligatorio en:
            </p>
            <ul>
              <li>Toda obra que tenga un contratista y al menos un subcontratista.</li>
              <li>Obras donde intervengan trabajadores autónomos subcontratados.</li>
              <li>Obras con proyecto técnico obligatorio.</li>
            </ul>
            <p>
              Para obras de reforma de escasa entidad donde el reformista trabaja directamente sin
              subcontratar a nadie, el libro no sería necesario. Sin embargo, en cuanto se subcontrate
              cualquier trabajo (un fontanero autónomo, un electricista, un pintor), la obligación se
              activa.
            </p>

            <h2>Qué información debe registrarse</h2>
            <p>
              Según el artículo 8 de la Ley 32/2006 y el artículo 13 del Real Decreto 1109/2007, el
              libro de subcontratación debe contener la siguiente información por cada
              subcontratación:
            </p>
            <ul>
              <li>Identificación del contratista principal: nombre o razón social, NIF/CIF, domicilio.</li>
              <li>Datos de la obra: dirección, promotor, director de obra, coordinador de seguridad.</li>
              <li>
                Por cada subcontratista o autónomo: identificación completa (nombre, NIF/CIF), nivel de
                subcontratación (primer, segundo o tercer nivel), objeto del contrato, fecha de inicio y
                fin previsto de los trabajos, número de trabajadores previstos, y referencia al plan de
                seguridad y salud.
              </li>
              <li>
                Acreditación de que el subcontratista está inscrito en el Registro de Empresas
                Acreditadas (REA) y dispone de recursos humanos propios (al menos el 30 % de su plantilla
                con contrato indefinido, según el artículo 4.4 de la Ley 32/2006).
              </li>
              <li>Firma del subcontratista y del contratista en cada anotación.</li>
            </ul>

            <h2>Límites a la cadena de subcontratación</h2>
            <p>
              Uno de los aspectos más relevantes de la Ley 32/2006 son los{" "}
              <strong>límites a los niveles de subcontratación</strong>, diseñados para evitar cadenas
              excesivamente largas que diluyan la responsabilidad y deterioren las condiciones laborales:
            </p>
            <ul>
              <li>
                <strong>Primer nivel:</strong> el contratista principal puede subcontratar la totalidad o
                parte de los trabajos a una o varias empresas subcontratistas.
              </li>
              <li>
                <strong>Segundo nivel:</strong> cada subcontratista de primer nivel puede a su vez
                subcontratar los trabajos a otra empresa, siempre que no se trate de una subcontratación
                de la totalidad de la obra contratada.
              </li>
              <li>
                <strong>Tercer nivel:</strong> el subcontratista de segundo nivel puede subcontratar a un
                tercer nivel, pero solo cuando se justifique por la especialización de los trabajos, la
                complejidad técnica o las circunstancias de la producción. Esta subcontratación debe ser
                autorizada por la dirección facultativa de la obra.
              </li>
              <li>
                <strong>Cuarto nivel y siguientes:</strong> prohibidos en todo caso. No se puede
                subcontratar más allá de tres niveles.
              </li>
            </ul>
            <p>
              Además, la ley establece que los trabajadores autónomos no pueden subcontratar los
              trabajos que les hayan sido encomendados, salvo en circunstancias excepcionales
              debidamente justificadas.
            </p>

            <h2>Obligaciones del contratista principal</h2>
            <p>
              El contratista principal tiene las siguientes obligaciones en relación con la
              subcontratación:
            </p>
            <ul>
              <li>Obtener y habilitar el libro de subcontratación antes del inicio de la obra.</li>
              <li>Mantener el libro actualizado y disponible en la obra en todo momento.</li>
              <li>
                Verificar que cada subcontratista está inscrito en el REA y cumple los requisitos de la
                Ley 32/2006 (recursos humanos propios, formación en prevención, etc.).
              </li>
              <li>
                Comunicar la subcontratación a la autoridad laboral cuando supere los límites legales o
                cuando lo requiera el convenio colectivo.
              </li>
              <li>
                Facilitar el libro al coordinador de seguridad y salud, a la Inspección de Trabajo y a
                la autoridad laboral cuando lo soliciten.
              </li>
              <li>Conservar el libro durante los cinco años posteriores a la finalización de la obra.</li>
            </ul>

            <h2>Sanciones por incumplimiento</h2>
            <p>
              El incumplimiento de las obligaciones sobre el libro de subcontratación se tipifica en la
              Ley sobre Infracciones y Sanciones en el Orden Social (LISOS), modificada por la Ley
              32/2006:
            </p>
            <ul>
              <li>
                <strong>Infracción leve</strong> (defectos formales en el libro, anotaciones incompletas):
                multa de 60 a 625 euros.
              </li>
              <li>
                <strong>Infracción grave</strong> (no disponer del libro en la obra, no habilitarlo, no
                mantenerlo actualizado, no respetar los límites de subcontratación): multa de 626 a
                6.250 euros.
              </li>
              <li>
                <strong>Infracción muy grave</strong> (superar los niveles de subcontratación de forma
                reiterada, subcontratación con empresas no inscritas en el REA que pongan en riesgo la
                seguridad de los trabajadores): multa de 6.251 a 187.515 euros y posible prohibición de
                contratar con la Administración Pública.
              </li>
            </ul>

            <h2>Formato digital del libro de subcontratación</h2>
            <p>
              Aunque tradicionalmente el libro de subcontratación ha sido un documento en papel sellado
              por la autoridad laboral, la tendencia es hacia la digitalización. Algunas comunidades
              autónomas ya permiten su tramitación electrónica a través de sus sedes electrónicas, y el
              Real Decreto 1109/2007 no prohíbe expresamente el formato digital siempre que cumpla los
              requisitos de integridad, autenticidad y disponibilidad.
            </p>
            <p>
              Mantener una copia digital actualizada del libro de subcontratación es una buena práctica
              que facilita las consultas, evita pérdidas del documento físico y agiliza las
              inspecciones. Herramientas como ObraBox permiten registrar digitalmente toda la
              información de la cadena de subcontratación de cada obra, generando un historial completo
              y accesible.
            </p>
          </div>

          <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
            <h2 className="text-xl font-bold text-secondary mb-2">
              Digitaliza tu libro de subcontratación con ObraBox
            </h2>
            <p className="text-gray-600 mb-4">
              Registra subcontratistas, controla los niveles de subcontratación y ten toda la
              documentación disponible en cada obra.
            </p>
            <Link href="/registro" className="btn-primary px-6 py-3">
              Prueba gratis 14 días
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-secondary mb-3">Artículos relacionados</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/normativa/registro-jornada-laboral" className="text-primary-500 hover:underline">
                  Registro de Jornada Laboral en Obras de Reforma
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
