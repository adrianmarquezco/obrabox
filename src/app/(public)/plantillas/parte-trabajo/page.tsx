import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Parte de Trabajo para Reformas — Plantilla Gratis",
  description: "Plantilla de parte de trabajo para registrar horas, materiales y tareas realizadas en cada jornada de obra.",
  alternates: { canonical: "/plantillas/parte-trabajo" },
};

export default function Page() {
  return (
    <PlantillaPage
      titulo="Parte de Trabajo para Reformas"
      descripcion="El parte de trabajo es el documento donde se registra qué se ha hecho cada día en la obra: trabajadores presentes, horas trabajadas, tareas realizadas y materiales utilizados. Es fundamental para calcular el coste real de mano de obra y para resolver cualquier conflicto."
      contenido={[
        "Datos de la obra y fecha",
        "Lista de trabajadores presentes y horas de cada uno",
        "Tareas realizadas durante la jornada",
        "Materiales utilizados y cantidades",
        "Incidencias o notas del día",
        "Firma del encargado",
      ]}
      funcionalidadLink={{ href: "/gestion-equipo-obra", label: "Gestión de equipo" }}
      relatedPlantillas={[
        { href: "/plantillas/checklist-reforma", label: "Checklist de obra" },
        { href: "/plantillas/contrato-reforma", label: "Contrato de reforma" },
        { href: "/plantillas/acta-recepcion-obra", label: "Acta de recepción" },
        { href: "/plantillas/presupuesto-reforma-integral", label: "Presupuesto reforma integral" },
      ]}
    />
  );
}
