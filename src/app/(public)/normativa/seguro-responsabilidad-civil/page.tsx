import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seguro de Responsabilidad Civil para Reformistas — Lo que Necesitas Saber",
  description:
    "Todo sobre el seguro de responsabilidad civil para profesionales de la reforma: coberturas, costes, requisitos legales y cómo elegir la mejor póliza.",
  alternates: { canonical: "/normativa/seguro-responsabilidad-civil" },
};

export default function SeguroResponsabilidadCivilPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Seguro de Responsabilidad Civil para Reformistas — Lo que Necesitas Saber
          </h1>
          <p className="text-sm text-gray-500 mb-8">Actualizado: junio 2026</p>

          <div className="prose prose-gray max-w-none">
            <p>
              El seguro de responsabilidad civil es una de las protecciones más importantes para
              cualquier profesional de la reforma y la construcción. Un accidente en obra, un daño a la
              propiedad de un vecino o una reclamación de un cliente pueden poner en riesgo la
              supervivencia económica de tu negocio si no cuentas con una cobertura adecuada. En esta
              guía analizamos qué cubre este seguro, si es legalmente obligatorio, cuánto cuesta y cómo
              elegir la póliza más adecuada para tu actividad.
            </p>

            <h2>Qué es el seguro de responsabilidad civil</h2>
            <p>
              El seguro de responsabilidad civil (RC) cubre los daños que el asegurado pueda causar
              involuntariamente a terceros durante el ejercicio de su actividad profesional. En el
              contexto de las reformas, &ldquo;terceros&rdquo; incluye a los clientes, vecinos del
              inmueble, transeúntes y cualquier persona ajena a la empresa que sufra un perjuicio como
              consecuencia de los trabajos.
            </p>
            <p>
              La base legal se encuentra en los artículos 1.902 y siguientes del Código Civil español,
              que establecen la obligación de reparar el daño causado por acción u omisión con
              culpa o negligencia. El seguro de RC traslada esa responsabilidad económica a la
              aseguradora, dentro de los límites de la póliza.
            </p>

            <h2>Tipos de cobertura: RC general vs. RC profesional</h2>
            <p>
              En el sector de la reforma es importante distinguir entre dos tipos de responsabilidad
              civil:
            </p>
            <ul>
              <li>
                <strong>RC de explotación (general):</strong> cubre los daños causados durante la
                ejecución de los trabajos. Por ejemplo: una tubería que revienta durante la reforma e
                inunda el piso de abajo, un operario que deja caer un escombro que daña un vehículo en
                la calle, o un incendio accidental provocado por una radial.
              </li>
              <li>
                <strong>RC profesional:</strong> cubre los daños derivados de errores u omisiones en el
                diseño o ejecución técnica del trabajo una vez entregado. Por ejemplo: una
                impermeabilización mal ejecutada que provoca humedades meses después, o una instalación
                eléctrica defectuosa que causa un cortocircuito.
              </li>
            </ul>
            <p>
              Lo ideal para un profesional de la reforma es contar con una póliza que incluya ambas
              coberturas: RC de explotación para los daños durante la obra y RC profesional (también
              llamada RC de producto o post-trabajos) para los defectos que se manifiesten después.
            </p>

            <h2>Es legalmente obligatorio</h2>
            <p>
              En España no existe una ley estatal que obligue a todas las empresas de reforma a tener un
              seguro de responsabilidad civil de forma genérica. Sin embargo, hay varios supuestos en
              los que sí es obligatorio o altamente recomendable:
            </p>
            <ul>
              <li>
                <strong>Registro de Empresas Acreditadas (REA):</strong> para trabajar como
                subcontratista en obras de construcción, la Ley 32/2006 reguladora de la subcontratación
                exige estar inscrito en el REA, y muchos registros autonómicos requieren acreditar un
                seguro de RC vigente.
              </li>
              <li>
                <strong>Contratación pública:</strong> la mayoría de los pliegos de licitaciones
                públicas exigen a los contratistas disponer de un seguro de RC con capitales mínimos.
              </li>
              <li>
                <strong>Requisito contractual:</strong> muchos clientes particulares, comunidades de
                propietarios y empresas promotoras exigen al reformista acreditar un seguro de RC antes
                de firmar el contrato.
              </li>
              <li>
                <strong>Normativas autonómicas:</strong> algunas comunidades autónomas regulan la
                obligatoriedad del seguro para determinadas actividades. En Cataluña, por ejemplo, el
                Decret 202/1998 establece requisitos de aseguramiento para empresas constructoras.
              </li>
            </ul>
            <p>
              En la práctica, aunque no sea legalmente obligatorio en todos los casos, operar sin un
              seguro de RC es un riesgo enorme. Una sola reclamación por daños a terceros puede suponer
              decenas de miles de euros que tendrías que pagar de tu bolsillo.
            </p>

            <h2>Qué cubre una póliza típica</h2>
            <p>
              Una póliza de RC para reformistas suele incluir:
            </p>
            <ul>
              <li>Daños materiales a propiedades de terceros (pisos vecinos, elementos comunes, vía pública).</li>
              <li>Daños personales (lesiones a terceros durante o como consecuencia de las obras).</li>
              <li>RC patronal (daños a empleados propios, complementaria a la Seguridad Social).</li>
              <li>RC cruzada (daños entre subcontratistas en la misma obra).</li>
              <li>Defensa jurídica y fianzas judiciales.</li>
              <li>RC post-trabajos o de productos (defectos que se manifiestan después de entregar la obra).</li>
              <li>Daños por incendio, explosión y agua.</li>
            </ul>

            <h2>Coberturas y costes habituales</h2>
            <p>
              Los capitales asegurados habituales para empresas de reforma en España oscilan entre:
            </p>
            <ul>
              <li>
                <strong>Autónomos y pequeñas empresas</strong> (facturación hasta 300.000 euros/año):
                capital de 300.000 a 600.000 euros. Prima anual entre 400 y 1.200 euros.
              </li>
              <li>
                <strong>Empresas medianas</strong> (facturación de 300.000 a 1.000.000 euros/año):
                capital de 600.000 a 1.500.000 euros. Prima anual entre 1.200 y 3.000 euros.
              </li>
              <li>
                <strong>Empresas grandes o con obra pública</strong>: capitales de 2.000.000 euros o más.
                Prima anual de 3.000 euros en adelante.
              </li>
            </ul>
            <p>
              El coste depende de múltiples factores: volumen de facturación, tipo de obras que
              realizas, número de empleados, historial de siniestros, franquicias y sublímites de la
              póliza.
            </p>

            <h2>Qué ocurre ante un siniestro</h2>
            <p>
              Cuando se produce un daño a un tercero durante o como consecuencia de tus trabajos, el
              proceso habitual es:
            </p>
            <ol>
              <li>Comunicar el siniestro a tu aseguradora lo antes posible (la mayoría de pólizas exigen notificación en un plazo de 7 días).</li>
              <li>Documentar los daños con fotografías, partes de incidencia y testimonios.</li>
              <li>La aseguradora envía un perito para valorar los daños.</li>
              <li>Negociación o acuerdo con el tercero perjudicado.</li>
              <li>Si no hay acuerdo, la aseguradora asume la defensa jurídica.</li>
              <li>Pago de la indemnización por parte de la aseguradora, descontando la franquicia si la hubiera.</li>
            </ol>

            <h2>Consejos para elegir tu seguro de RC</h2>
            <ul>
              <li>
                <strong>Compara al menos 3 ofertas</strong> de aseguradoras especializadas en
                construcción (Zurich, AXA, Mapfre, Mutua de Propietarios, entre otras).
              </li>
              <li>
                <strong>Revisa los sublímites:</strong> algunas pólizas tienen un capital general alto
                pero sublímites bajos para daños por agua o RC post-trabajos.
              </li>
              <li>
                <strong>Atención a las exclusiones:</strong> asegúrate de que la póliza no excluye las
                actividades concretas que realizas (por ejemplo, trabajos en altura, demoliciones,
                manipulación de gas).
              </li>
              <li>
                <strong>Franquicias:</strong> una franquicia más alta reduce la prima, pero implica que
                asumirás de tu bolsillo los primeros cientos o miles de euros de cada siniestro.
              </li>
              <li>
                <strong>Actualiza la póliza:</strong> si tu facturación crece o empiezas a hacer un tipo
                de obra diferente, comunícalo a tu aseguradora para que ajuste las coberturas.
              </li>
            </ul>
          </div>

          <div className="mt-12 card p-8 text-center bg-primary-50 border-primary-200">
            <h2 className="text-xl font-bold text-secondary mb-2">
              Guarda tu póliza y certificados en ObraBox
            </h2>
            <p className="text-gray-600 mb-4">
              Centraliza la documentación de seguros de tu empresa y de cada obra. Siempre accesible
              cuando un cliente o inspector la solicite.
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
                <Link href="/normativa/registro-jornada-laboral" className="text-primary-500 hover:underline">
                  Registro de Jornada Laboral en Obras de Reforma
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
