import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestión de Residuos de Obra — Normativa y Obligaciones",
  description:
    "Guía completa sobre la gestión de residuos de construcción y demolición (RCD) en España: Real Decreto 105/2008, obligaciones, documentación y sanciones.",
  alternates: { canonical: "/normativa/gestion-residuos-obra" },
};

export default function GestionResiduosObraPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Gestión de Residuos de Obra — Normativa y Obligaciones
          </h1>
          <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

          <div className="prose prose-gray max-w-none">
            <p>
              La gestión de residuos de construcción y demolición (RCD) es una de las obligaciones
              legales más importantes y a la vez más desconocidas por los profesionales de la reforma en
              España. Cada año se generan millones de toneladas de escombros, y la normativa exige un
              tratamiento adecuado para minimizar el impacto ambiental. En esta guía te explicamos el
              marco legal, tus obligaciones como profesional y la documentación que debes gestionar en
              cada obra.
            </p>

            <h2>Marco legal: Real Decreto 105/2008</h2>
            <p>
              La norma de referencia es el <strong>Real Decreto 105/2008, de 1 de febrero</strong>, por
              el que se regula la producción y gestión de los residuos de construcción y demolición.
              Este decreto establece el régimen jurídico aplicable a los RCD en todo el territorio
              nacional, aunque las comunidades autónomas pueden desarrollar normativas complementarias
              más exigentes.
            </p>
            <p>
              Además, la <strong>Ley 7/2022, de 8 de abril, de residuos y suelos contaminados para una
              economía circular</strong> actualizó el marco general de gestión de residuos en España,
              reforzando los principios de economía circular e introduciendo nuevas obligaciones de
              trazabilidad y separación en origen.
            </p>

            <h2>Qué son los residuos de construcción y demolición (RCD)</h2>
            <p>
              Los RCD son los residuos generados en obras de construcción, rehabilitación, reforma,
              reparación o demolición de inmuebles. Se clasifican en varias categorías según el Catálogo
              Europeo de Residuos (código LER 17):
            </p>
            <ul>
              <li>
                <strong>Hormigón, ladrillos, tejas y materiales cerámicos</strong> (LER 17 01): los más
                habituales en reformas interiores.
              </li>
              <li>
                <strong>Madera, vidrio y plástico</strong> (LER 17 02): restos de carpintería, marcos de
                ventanas, tuberías de PVC.
              </li>
              <li>
                <strong>Mezclas bituminosas, alquitrán de hulla</strong> (LER 17 03): procedentes de
                impermeabilizaciones y cubiertas.
              </li>
              <li>
                <strong>Metales</strong> (LER 17 04): tuberías de cobre, perfiles de aluminio, radiadores.
              </li>
              <li>
                <strong>Tierra, piedras y lodos de drenaje</strong> (LER 17 05).
              </li>
              <li>
                <strong>Materiales de aislamiento</strong> (LER 17 06): lana de roca, poliestireno,
                poliuretano.
              </li>
              <li>
                <strong>Residuos peligrosos</strong>: amianto (LER 17 06 05*), pinturas con disolventes,
                resinas. Requieren gestión especializada por gestor autorizado.
              </li>
            </ul>

            <h2>Obligaciones del productor de residuos</h2>
            <p>
              Según el artículo 4 del Real Decreto 105/2008, el <strong>productor de residuos</strong>{" "}
              (quien genera los RCD, normalmente el promotor de la obra o el reformista) tiene las
              siguientes obligaciones:
            </p>
            <ul>
              <li>
                Incluir en el proyecto de obra un <strong>Estudio de Gestión de Residuos</strong> que
                estime las cantidades de cada tipo de residuo, las medidas de prevención, las operaciones
                de reutilización y valorización, y el destino previsto.
              </li>
              <li>
                Disponer de la <strong>documentación acreditativa</strong> de que los residuos han sido
                gestionados correctamente: contratos con gestores autorizados, certificados de entrega,
                etc.
              </li>
              <li>
                Constituir, cuando corresponda, una <strong>fianza o garantía financiera</strong>{" "}
                equivalente al coste estimado de la gestión de residuos. Esta fianza, regulada en el
                artículo 6, la exige el ayuntamiento al conceder la licencia de obra y se devuelve una
                vez acreditada la correcta gestión.
              </li>
              <li>
                Separar los residuos en obra cuando se superen determinadas cantidades. La Ley 7/2022
                reforzó esta obligación exigiendo la separación en origen de al menos las fracciones de
                madera, plástico, metal, vidrio, yeso y residuos pétreos.
              </li>
            </ul>

            <h2>Obligaciones del gestor de residuos</h2>
            <p>
              El gestor autorizado que recoge y trata los RCD debe:
            </p>
            <ul>
              <li>Estar inscrito en el Registro de Gestores de Residuos de la comunidad autónoma correspondiente.</li>
              <li>Emitir certificados de aceptación y de gestión final de los residuos.</li>
              <li>Llevar un archivo cronológico con la cantidad, naturaleza, origen y destino de los residuos gestionados.</li>
              <li>Enviar los residuos no valorizables a vertederos autorizados y pagar el correspondiente canon de vertido.</li>
            </ul>

            <h2>Estudio de Gestión de Residuos</h2>
            <p>
              El Estudio de Gestión de Residuos es el documento técnico que debe incluirse en el
              proyecto de obra. Según el artículo 4.1.a del Real Decreto 105/2008, debe contener como
              mínimo:
            </p>
            <ul>
              <li>Estimación de la cantidad de cada tipo de residuo que se generará (en toneladas y metros cúbicos).</li>
              <li>Medidas de prevención para reducir la generación de residuos.</li>
              <li>Operaciones de reutilización, valorización o eliminación previstas.</li>
              <li>Medidas de separación en obra (contenedores, zonas de acopio).</li>
              <li>Planos de las instalaciones de almacenamiento temporal de residuos en la obra.</li>
              <li>Valoración del coste previsto de la gestión de residuos.</li>
            </ul>
            <p>
              Para obras menores de reforma, muchos ayuntamientos aceptan un estudio simplificado o
              incluso lo integran en el formulario de la licencia, pero es obligatorio en todo caso
              tener prevista la gestión de los residuos que se generen.
            </p>

            <h2>Separación en origen</h2>
            <p>
              Desde la entrada en vigor de la Ley 7/2022, la separación en origen de residuos de
              construcción es más exigente. En obras que generen más de 80 toneladas de RCD (o
              equivalente en volumen), es obligatorio separar al menos las siguientes fracciones:
              madera, fracciones minerales (hormigón, ladrillos, azulejos, cerámicos), metales, vidrio,
              plástico y yeso. Las comunidades autónomas pueden establecer umbrales más bajos.
            </p>
            <p>
              En la práctica, para reformas de viviendas que generan cantidades menores, la obligación
              se cumple contratando a un gestor autorizado que recoge los contenedores de escombros y
              realiza la separación en sus instalaciones.
            </p>

            <h2>Sanciones por incumplimiento</h2>
            <p>
              El incumplimiento de las obligaciones de gestión de residuos de obra puede acarrear
              sanciones graves. Según la Ley 7/2022:
            </p>
            <ul>
              <li>
                <strong>Infracciones leves</strong> (falta de documentación, deficiencias menores en la
                separación): multas de 300 a 3.000 euros.
              </li>
              <li>
                <strong>Infracciones graves</strong> (vertido no autorizado de residuos no peligrosos,
                falta de estudio de gestión): multas de 3.001 a 600.000 euros.
              </li>
              <li>
                <strong>Infracciones muy graves</strong> (vertido de residuos peligrosos, gestión ilegal
                de amianto): multas de 600.001 a 3.500.000 euros y posible clausura de la actividad.
              </li>
            </ul>
            <p>
              Además, el responsable del vertido ilegal puede ser obligado a restaurar el terreno
              afectado a su costa, lo que en la práctica puede suponer un coste muy superior a la propia
              multa.
            </p>

            <h2>Cómo ObraBox te ayuda con la gestión de residuos</h2>
            <p>
              ObraBox permite centralizar toda la documentación de gestión de residuos de cada obra en
              un solo lugar: contratos con gestores autorizados, certificados de entrega, el estudio de
              gestión de residuos y los justificantes de vertedero. Así, cuando el ayuntamiento o una
              inspección solicite la documentación, la tienes disponible de forma inmediata sin buscar
              entre carpetas y papeles.
            </p>
          </div>

          <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
            <h2 className="text-xl font-bold text-secondary mb-2">
              Controla la documentación de residuos con ObraBox
            </h2>
            <p className="text-gray-600 mb-4">
              Sube contratos, certificados y estudios de gestión de residuos en cada obra. Todo
              organizado y accesible.
            </p>
            <Link href="/registro" className="btn-primary px-6 py-3">
              Prueba gratis 14 días
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-secondary mb-3">Artículos relacionados</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/normativa/licencia-obra-menor" className="text-primary-500 hover:underline">
                  Licencia de Obra Menor en España — Guía Completa 2026
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
