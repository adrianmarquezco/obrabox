import type { Metadata } from "next";
import PlantillaPage from "@/components/public/PlantillaPage";

export const metadata: Metadata = {
  title: "Plantilla de Presupuesto de Reforma Integral — Descarga Gratis",
  description: "Plantilla gratuita de presupuesto para reforma integral de piso. Todos los capítulos: demolición, albañilería, instalaciones, acabados.",
  alternates: { canonical: "/plantillas/presupuesto-reforma-integral" },
};

export default function Page() {
  return (
    <PlantillaPage
      titulo="Plantilla de Presupuesto de Reforma Integral"
      descripcion="La plantilla más completa para presupuestar reformas integrales de pisos y viviendas. Incluye todos los capítulos necesarios: demolición, albañilería, fontanería, electricidad, carpintería, solados, alicatados, pintura, limpieza y retirada de escombro."
      contenido={[
        "Todos los capítulos de una reforma integral (9 capítulos)",
        "Más de 50 partidas predefinidas editables",
        "Columnas: concepto, unidad, cantidad, precio unitario, total",
        "Resumen con subtotal, IVA (10% o 21%) y total",
        "Opciones básico/medio/premium (opcional)",
        "Condiciones generales, plazo y forma de pago",
      ]}
      funcionalidadLink={{ href: "/presupuestos-reforma", label: "Presupuestos profesionales" }}
      relatedPlantillas={[
        { href: "/plantillas/presupuesto-reforma-bano", label: "Presupuesto reforma baño" },
        { href: "/plantillas/presupuesto-reforma-cocina", label: "Presupuesto reforma cocina" },
        { href: "/plantillas/contrato-reforma", label: "Contrato de reforma" },
        { href: "/plantillas/checklist-reforma", label: "Checklist de obra" },
      ]}
    />
  );
}
