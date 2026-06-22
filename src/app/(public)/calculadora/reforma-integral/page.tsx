import type { Metadata } from "next";
import CalculadoraReforma from "@/components/public/CalculadoraReforma";

export const metadata: Metadata = {
  title: "Calculadora de Reforma Integral de Piso — Coste Estimado",
  description: "Calcula cuánto cuesta una reforma integral de piso. Introduce los m² y la calidad para obtener un precio estimado actualizado a 2026.",
  alternates: { canonical: "/calculadora/reforma-integral" },
};

export default function CalculadoraIntegralPage() {
  return (
    <CalculadoraReforma
      titulo="¿Cuánto cuesta una reforma integral?"
      subtitulo="Calcula el precio estimado de reformar tu piso completo"
      metrosLabel="Metros cuadrados del piso"
      metrosHint="Un piso de 2-3 habitaciones tiene entre 60 y 90 m²"
      precios={{ basica: { min: 400, max: 550 }, media: { min: 550, max: 800 }, premium: { min: 800, max: 1300 } }}
      extras={[
        { id: "fontaneria", label: "Fontanería completa", desc: "Cambiar todas las tuberías", min: 40, max: 80 },
        { id: "electricidad", label: "Electricidad completa", desc: "Nuevo cuadro y cableado", min: 35, max: 70 },
        { id: "ventanas", label: "Cambio de ventanas", desc: "Ventanas nuevas de aluminio/PVC", min: 50, max: 120 },
      ]}
      contenidoSEO={
        <>
          <h2>¿Cuánto cuesta una reforma integral en España en 2026?</h2>
          <p>Una reforma integral de piso en España cuesta entre <strong>30.000€ y 100.000€</strong> dependiendo del tamaño y la calidad. Para un piso de 80 m² con acabados de gama media, el precio habitual está entre 45.000€ y 65.000€. Una reforma integral incluye: demolición completa, tabiquería nueva si hay cambio de distribución, fontanería, electricidad, suelos, alicatados, carpintería interior, pintura y limpieza.</p>
          <h3>Factores que más influyen en el precio</h3>
          <p>El cambio de distribución (mover tabiques, cambiar el baño de sitio) es lo que más encarece una reforma integral. También influye significativamente la calidad de materiales, el estado de las instalaciones existentes, y si el edificio tiene ascensor o no.</p>
        </>
      }
      schemaSteps={["Introduce los metros cuadrados del piso", "Selecciona la calidad de acabados", "Indica los extras a incluir", "Obtén el precio estimado de la reforma integral"]}
    />
  );
}
