import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Plantilla de Presupuesto de Reforma de Cocina — Gratis",
  description: "Descarga gratis una plantilla de presupuesto para reforma de cocina con capítulos, partidas y cálculos automáticos.",
  alternates: { canonical: "/plantillas/presupuesto-reforma-cocina" },
};

export default function Page() {
  return (
    <PlantillaPage
      titulo="Plantilla de Presupuesto de Reforma de Cocina"
      descripcion="Plantilla profesional para presupuestos de reforma de cocina. Capítulos específicos: demolición, fontanería, electricidad, solado, alicatado, muebles de cocina, encimera, electrodomésticos, pintura y limpieza."
      contenido={[
        "Capítulos específicos de cocina: muebles, encimera, electrodomésticos",
        "Partidas detalladas por unidad de medida",
        "Separación de materiales y mano de obra",
        "Cálculo automático de totales e IVA",
        "Diseño profesional con logo de empresa",
        "Condiciones y forma de pago",
      ]}
      funcionalidadLink={{ href: "/presupuestos-reforma", label: "Presupuestos profesionales" }}
      relatedPlantillas={[
        { href: "/plantillas/presupuesto-reforma-bano", label: "Presupuesto reforma baño" },
        { href: "/plantillas/presupuesto-reforma-integral", label: "Presupuesto reforma integral" },
        { href: "/plantillas/contrato-reforma", label: "Contrato de reforma" },
        { href: "/plantillas/acta-recepcion-obra", label: "Acta de recepción de obra" },
      ]}
    />
  );
}
