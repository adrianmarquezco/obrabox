import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Plantilla de Presupuesto de Reforma de Baño — Descarga Gratis",
  description: "Descarga gratis una plantilla profesional de presupuesto para reforma de baño. Con capítulos, partidas y cálculos automáticos.",
  alternates: { canonical: "/plantillas/presupuesto-reforma-bano" },
};

export default function PlantillaPresupuestoBanoPage() {
  return (
    <PlantillaPage
      titulo="Plantilla de Presupuesto de Reforma de Baño"
      descripcion="Plantilla profesional para presupuestar reformas de baño. Incluye los capítulos y partidas más habituales: demolición, fontanería, electricidad, alicatados, sanitarios, grifería, mampara y pintura. Solo tienes que rellenar las cantidades y precios."
      contenido={[
        "Capítulos predefinidos: demolición, fontanería, electricidad, alicatado, solado, sanitarios, carpintería, pintura",
        "Partidas detalladas con unidades de medida (m², ud, ml)",
        "Cálculo automático de subtotal, IVA y total",
        "Espacio para datos de empresa y cliente",
        "Condiciones de la obra y forma de pago",
        "Formato profesional listo para enviar al cliente",
      ]}
      funcionalidadLink={{ href: "/presupuestos-reforma", label: "Presupuestos profesionales" }}
      relatedPlantillas={[
        { href: "/plantillas/presupuesto-reforma-cocina", label: "Presupuesto reforma cocina" },
        { href: "/plantillas/presupuesto-reforma-integral", label: "Presupuesto reforma integral" },
        { href: "/plantillas/contrato-reforma", label: "Contrato de reforma" },
        { href: "/plantillas/checklist-reforma", label: "Checklist de obra" },
        { href: "/plantillas/parte-trabajo", label: "Parte de trabajo" },
      ]}
    />
  );
}
