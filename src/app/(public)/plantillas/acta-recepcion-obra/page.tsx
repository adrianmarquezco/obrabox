import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Acta de Recepción de Obra — Modelo Gratis para Descargar",
  description: "Descarga un modelo de acta de recepción de obra para reformas. Documento que formaliza la entrega de la obra terminada al cliente.",
  alternates: { canonical: "/plantillas/acta-recepcion-obra" },
};

export default function Page() {
  return (
    <PlantillaPage
      titulo="Acta de Recepción de Obra"
      descripcion="El acta de recepción de obra es el documento que formaliza la entrega de la reforma terminada al cliente. Desde ese momento comienzan a contar las garantías. Es un documento esencial que protege al reformista y al cliente."
      contenido={[
        "Datos del profesional y del cliente",
        "Dirección y descripción de la obra",
        "Fecha de inicio y fecha de finalización",
        "Declaración de conformidad del cliente",
        "Reservas y observaciones (si las hay)",
        "Firma de ambas partes",
        "Inicio del periodo de garantía",
      ]}
      funcionalidadLink={{ href: "/gestion-obra-completa", label: "Gestión de obras" }}
      relatedPlantillas={[
        { href: "/plantillas/contrato-reforma", label: "Contrato de reforma" },
        { href: "/plantillas/checklist-reforma", label: "Checklist de obra" },
        { href: "/plantillas/parte-trabajo", label: "Parte de trabajo" },
        { href: "/plantillas/presupuesto-reforma-bano", label: "Presupuesto reforma baño" },
      ]}
    />
  );
}
