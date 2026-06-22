import type { Metadata } from "next";
import CalculadoraReforma from "@/components/public/CalculadoraReforma";

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta Reformar una Cocina? Calcula el Presupuesto",
  description: "Calculadora de presupuesto para reformar una cocina. Introduce los m², calidad y extras para obtener un precio estimado.",
  alternates: { canonical: "/calculadora/reforma-cocina" },
};

export default function CalculadoraCocinaPage() {
  return (
    <CalculadoraReforma
      titulo="¿Cuánto cuesta reformar una cocina?"
      subtitulo="Calcula el precio estimado de tu reforma de cocina"
      metrosLabel="Metros cuadrados de la cocina"
      metrosHint="Una cocina estándar tiene entre 8 y 15 m²"
      precios={{ basica: { min: 400, max: 600 }, media: { min: 600, max: 900 }, premium: { min: 900, max: 1500 } }}
      extras={[
        { id: "fontaneria", label: "Fontanería", desc: "Cambiar tuberías y desagües", min: 60, max: 120 },
        { id: "electricidad", label: "Electricidad", desc: "Nuevo cuadro eléctrico y puntos", min: 50, max: 100 },
        { id: "muebles", label: "Muebles de cocina", desc: "Muebles nuevos altos y bajos", min: 200, max: 500 },
      ]}
      contenidoSEO={
        <>
          <h2>¿Cuánto cuesta reformar una cocina en España en 2026?</h2>
          <p>El precio medio de reformar una cocina en España en 2026 está entre <strong>5.000€ y 20.000€</strong>. Una reforma básica de cocina (cambiar suelo, alicatar, nuevos muebles económicos) ronda los 5.000-8.000€. Una reforma completa con electrodomésticos de gama media puede costar 10.000-15.000€. Y una cocina de diseño con materiales premium puede superar los 20.000€.</p>
          <h3>¿Qué incluye una reforma de cocina completa?</h3>
          <p>Demolición de la cocina existente, fontanería nueva, electricidad nueva (punto importante: la cocina es donde más electrodomésticos hay), solado, alicatado, muebles de cocina, encimera, fregadero, grifería e instalación de electrodomésticos. Los electrodomésticos en sí suelen ser un gasto aparte.</p>
        </>
      }
      schemaSteps={["Mide los metros cuadrados de la cocina", "Elige la calidad de acabados", "Selecciona los extras incluidos", "Obtén el rango de precio estimado"]}
    />
  );
}
