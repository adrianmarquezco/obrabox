import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Checklist de Obra para Reformas — Descarga Gratis",
  description: "Checklist descargable con todas las fases de una reforma: demolición, instalaciones, acabados y limpieza. No te dejes nada.",
  alternates: { canonical: "/plantillas/checklist-reforma" },
};

export default function Page() {
  return (
    <PlantillaPage
      titulo="Checklist de Obra para Reformas"
      descripcion="Checklist completo para controlar que no se te olvida nada en una reforma. Organizado por fases de obra: antes de empezar, demolición, instalaciones, albañilería, acabados, remates y entrega. Cada fase tiene los puntos de verificación clave."
      contenido={[
        "Fase previa: licencias, materiales, protecciones, contenedor",
        "Demolición: derribos, retirada escombro, revisión estructura",
        "Instalaciones: fontanería, electricidad, climatización",
        "Albañilería: tabiques, rozas, nivelación",
        "Acabados: solados, alicatados, carpintería, pintura",
        "Remates: mecanismos eléctricos, grifería, juntas",
        "Entrega: limpieza, revisión final, acta de recepción",
        "Casillas para marcar OK / Pendiente / Observaciones",
      ]}
      funcionalidadLink={{ href: "/gestion-obra-completa", label: "Gestión de obras" }}
      relatedPlantillas={[
        { href: "/plantillas/parte-trabajo", label: "Parte de trabajo" },
        { href: "/plantillas/contrato-reforma", label: "Contrato de reforma" },
        { href: "/plantillas/acta-recepcion-obra", label: "Acta de recepción" },
        { href: "/plantillas/presupuesto-reforma-bano", label: "Presupuesto reforma baño" },
      ]}
    />
  );
}
