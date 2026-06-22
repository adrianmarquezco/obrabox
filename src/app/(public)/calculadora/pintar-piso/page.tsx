import type { Metadata } from "next";
import CalculadoraReforma from "@/components/public/CalculadoraReforma";

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta Pintar un Piso? Calculadora de Precio",
  description: "Calcula cuánto cuesta pintar tu piso. Precio por m² según calidad de pintura. Calculadora actualizada a precios de 2026.",
  alternates: { canonical: "/calculadora/pintar-piso" },
};

export default function CalculadoraPintarPage() {
  return (
    <CalculadoraReforma
      titulo="¿Cuánto cuesta pintar un piso?"
      subtitulo="Calcula el precio de pintar tu vivienda"
      metrosLabel="Metros cuadrados del piso"
      metrosHint="Introduce la superficie total del piso (no de las paredes)"
      precios={{ basica: { min: 8, max: 12 }, media: { min: 12, max: 18 }, premium: { min: 18, max: 28 } }}
      extras={[
        { id: "techos", label: "Pintar techos", desc: "Techos en blanco mate", min: 4, max: 8 },
        { id: "molduras", label: "Lacado de molduras/puertas", desc: "Lijar y pintar puertas y marcos", min: 5, max: 12 },
      ]}
      contenidoSEO={
        <>
          <h2>¿Cuánto cuesta pintar un piso en España en 2026?</h2>
          <p>El precio de pintar un piso en España oscila entre <strong>600€ y 2.500€</strong> para un piso de 80 m². El precio medio está en 8-18€/m² dependiendo de la calidad de la pintura, el estado de las paredes (si necesitan reparación de grietas, alisado, etc.) y la altura de los techos.</p>
          <h3>¿Qué influye en el precio de pintar?</h3>
          <p>Estado de las paredes (si hay muchas grietas o goteras reparadas, sube el precio), número de manos de pintura necesarias, tipo de pintura (plástica, acrílica, ecológica), y si se incluyen techos y carpintería. Un piso recién pintado se vende o alquila más rápido y a mejor precio.</p>
        </>
      }
      schemaSteps={["Introduce los metros cuadrados del piso", "Selecciona la calidad de pintura", "Indica si incluye techos o lacado de puertas", "Obtén el precio estimado"]}
    />
  );
}
