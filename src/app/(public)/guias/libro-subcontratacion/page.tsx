import type { Metadata } from "next";
import InfoPage from "@/components/public/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libro de Subcontratación: Qué Es, Cuándo es Obligatorio y Cómo Rellenarlo",
  description: "Guía práctica del libro de subcontratación: normativa, cuándo es obligatorio, qué debe incluir, formato y sanciones por incumplimiento.",
  alternates: { canonical: "/guias/libro-subcontratacion" },
};

export default function Page() {
  return (
    <InfoPage
      titulo="Libro de Subcontratación: Qué Es, Cuándo es Obligatorio y Cómo Rellenarlo"
      breadcrumb={[{ href: "/guias/libro-subcontratacion", label: "Guías" }]}
      relatedLinks={[
        { href: "/normativa/libro-subcontratacion", label: "Normativa del libro de subcontratación" },
        { href: "/blog/subcontratar-reformas", label: "Subcontratar en reformas: guía práctica" },
        { href: "/gestion-equipo-obra", label: "Gestión de equipo con ObraBox" },
      ]}
    >
      <p>El libro de subcontratación es un documento obligatorio en obras de construcción regulado por la Ley 32/2006 y el Real Decreto 1109/2007. Su objetivo es dar transparencia a la cadena de subcontratación y garantizar la seguridad laboral en las obras.</p>

      <h2>¿Cuándo es obligatorio?</h2>
      <p>El libro de subcontratación es obligatorio en toda obra de construcción que requiera un plan de seguridad y salud, es decir, prácticamente todas las obras que necesitan proyecto técnico. En la práctica, para reformas pequeñas (un baño, pintar un piso) no suele requerirse, pero para reformas integrales, obras en edificios y locales comerciales, sí.</p>
      <p>El contratista principal (tú, si eres quien tiene el contrato con el cliente) es el responsable de tener el libro, rellenarlo y ponerlo a disposición del coordinador de seguridad y de la Inspección de Trabajo.</p>

      <h2>¿Qué debe incluir?</h2>
      <p>Por cada subcontratista que trabaje en la obra, debes registrar:</p>
      <ul>
        <li>Nombre o razón social y NIF/CIF</li>
        <li>Domicilio</li>
        <li>Objeto de la subcontratación (qué trabajos va a hacer)</li>
        <li>Nivel de subcontratación (1º, 2º, 3º nivel)</li>
        <li>Fecha de aprobación del plan de seguridad</li>
        <li>Instrucciones de seguridad dadas por el contratista</li>
        <li>Representante legal del subcontratista</li>
        <li>Número de trabajadores del subcontratista en la obra</li>
        <li>Fecha de inicio y fin de los trabajos</li>
      </ul>

      <h2>Límites de la cadena de subcontratación</h2>
      <p>La ley establece un máximo de 3 niveles de subcontratación:</p>
      <ol>
        <li><strong>Contratista</strong> (tú)</li>
        <li><strong>Primer subcontratista</strong> (el fontanero al que subcontratas)</li>
        <li><strong>Segundo subcontratista</strong> (el ayudante del fontanero, si tiene su propia empresa)</li>
        <li><strong>Tercer subcontratista</strong>: nivel máximo permitido, y solo para trabajos de especialización (no de mano de obra intensiva)</li>
      </ol>
      <p>Superar estos niveles es una infracción muy grave con multas de hasta 187.515€.</p>

      <h2>Formato del libro</h2>
      <p>El libro puede ser en papel (formato oficial habilitado por la Autoridad Laboral) o en formato digital. Desde 2022, muchas comunidades autónomas aceptan y promueven el formato digital. El libro debe conservarse en la obra y estar disponible para inspección en cualquier momento.</p>

      <h2>Sanciones por incumplimiento</h2>
      <ul>
        <li><strong>No tener libro</strong>: infracción grave, multa de 2.046€ a 40.985€.</li>
        <li><strong>No tenerlo al día</strong>: infracción leve a grave según el caso.</li>
        <li><strong>Superar niveles de subcontratación</strong>: infracción muy grave, multa de 40.986€ a 187.515€.</li>
      </ul>

      <h2>Cómo gestionarlo con ObraBox</h2>
      <p>En ObraBox puedes registrar los datos de cada subcontratista en la ficha de equipo: nombre, CIF, documentación (seguros, alta, PRL) con fechas de caducidad y alertas automáticas. Cuando asignas un subcontratista a una obra, los datos quedan vinculados. Esto no sustituye al libro oficial, pero te da toda la información organizada para rellenarlo correctamente.</p>
    </InfoPage>
  );
}
