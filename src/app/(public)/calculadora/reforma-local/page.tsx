import type { Metadata } from "next";
import CalculadoraReforma from "@/components/public/CalculadoraReforma";

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta Reformar un Local Comercial?",
  description: "Calcula el precio de reformar un local comercial. Precios por m² según tipo de negocio y calidad de acabados. Actualizado 2026.",
  alternates: { canonical: "/calculadora/reforma-local" },
};

export default function CalculadoraLocalPage() {
  return (
    <CalculadoraReforma
      titulo="¿Cuánto cuesta reformar un local comercial?"
      subtitulo="Calcula el precio estimado de acondicionar tu local"
      metrosLabel="Metros cuadrados del local"
      metrosHint="Un local tipo tiene entre 50 y 200 m²"
      precios={{ basica: { min: 250, max: 400 }, media: { min: 400, max: 650 }, premium: { min: 650, max: 1100 } }}
      extras={[
        { id: "climatizacion", label: "Climatización", desc: "Aire acondicionado / calefacción", min: 40, max: 80 },
        { id: "electricidad", label: "Instalación eléctrica", desc: "Cuadro, cableado, iluminación", min: 50, max: 100 },
        { id: "bano", label: "Baño adaptado", desc: "Baño para clientes/empleados", min: 30, max: 60 },
      ]}
      contenidoSEO={
        <>
          <h2>¿Cuánto cuesta reformar un local en España en 2026?</h2>
          <p>El precio de reformar un local comercial oscila entre <strong>250€ y 1.100€ por m²</strong> dependiendo del tipo de negocio y los acabados. Un local de 80 m² para una tienda con acabados básicos puede costar entre 20.000€ y 35.000€. Un restaurante o clínica con instalaciones especiales puede superar los 80.000€.</p>
          <h3>Factores clave en el precio</h3>
          <p>El tipo de actividad determina las necesidades: un comercio textil necesita poco más que pintura, suelo e iluminación. Una peluquería necesita fontanería. Un restaurante necesita extracción de humos, cocina industrial y normativa específica. Una clínica necesita salas con requisitos sanitarios.</p>
          <p><strong>Importante:</strong> las reformas de locales comerciales siempre tributan al IVA del 21%, independientemente de las circunstancias.</p>
        </>
      }
      schemaSteps={["Introduce los metros cuadrados del local", "Selecciona la calidad de acabados", "Indica los extras necesarios", "Obtén el precio estimado de la reforma"]}
    />
  );
}
