import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Modelo de Contrato de Obra y Reforma — Descarga Gratis",
  description: "Descarga un modelo de contrato de obra para reformas. Cláusulas legales, plazos, pagos y garantías. Adaptado a la normativa española.",
  alternates: { canonical: "/plantillas/contrato-reforma" },
};

export default function Page() {
  return (
    <PlantillaPage
      titulo="Modelo de Contrato de Obra y Reforma"
      descripcion="Contrato profesional para formalizar reformas entre profesional y cliente. Incluye todas las cláusulas necesarias para proteger a ambas partes: descripción de la obra, plazos, forma de pago, gestión de extras, garantías y resolución de conflictos."
      contenido={[
        "Identificación de las partes (reformista y cliente)",
        "Descripción detallada de la obra y alcance",
        "Plazo de ejecución con fechas de inicio y fin",
        "Precio y forma de pago (tramos/hitos)",
        "Cláusula de extras y modificaciones",
        "Garantías sobre materiales y mano de obra",
        "Penalizaciones por retraso",
        "Cláusula de resolución y jurisdicción",
      ]}
      funcionalidadLink={{ href: "/gestion-obra-completa", label: "Gestión de obras" }}
      relatedPlantillas={[
        { href: "/plantillas/acta-recepcion-obra", label: "Acta de recepción de obra" },
        { href: "/plantillas/presupuesto-reforma-integral", label: "Presupuesto reforma integral" },
        { href: "/plantillas/parte-trabajo", label: "Parte de trabajo" },
        { href: "/plantillas/checklist-reforma", label: "Checklist de obra" },
      ]}
    />
  );
}
