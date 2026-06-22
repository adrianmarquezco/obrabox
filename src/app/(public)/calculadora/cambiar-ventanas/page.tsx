import type { Metadata } from "next";
import CalculadoraReforma from "@/components/public/CalculadoraReforma";

export const metadata: Metadata = {
  title: "Calculadora de Coste de Cambio de Ventanas",
  description: "Calcula cuánto cuesta cambiar las ventanas de tu casa. Precios por ventana según material y tipo. Precios actualizados 2026.",
  alternates: { canonical: "/calculadora/cambiar-ventanas" },
};

export default function CalculadoraVentanasPage() {
  return (
    <CalculadoraReforma
      titulo="¿Cuánto cuesta cambiar las ventanas?"
      subtitulo="Calcula el precio del cambio de ventanas de tu vivienda"
      metrosLabel="Número de ventanas"
      metrosHint="Cuenta todas las ventanas y puertas de terraza que quieras cambiar"
      precios={{ basica: { min: 300, max: 450 }, media: { min: 450, max: 700 }, premium: { min: 700, max: 1200 } }}
      extras={[
        { id: "persiana", label: "Persianas nuevas", desc: "Cajón y lamas nuevas", min: 150, max: 300 },
        { id: "obra", label: "Obra de albañilería", desc: "Remates, yeso y pintura", min: 80, max: 150 },
      ]}
      contenidoSEO={
        <>
          <h2>¿Cuánto cuesta cambiar las ventanas en 2026?</h2>
          <p>El precio medio de cambiar una ventana en España está entre <strong>300€ y 1.200€ por ventana</strong>, dependiendo del material (aluminio, PVC, madera), el tipo de cristal (simple, doble, triple), y las dimensiones. Para un piso con 6-8 ventanas, el coste total suele oscilar entre 3.000€ y 8.000€.</p>
          <h3>Aluminio vs PVC</h3>
          <p>El aluminio con rotura de puente térmico (RPT) cuesta entre 350-600€/ventana y ofrece buena durabilidad. El PVC tiene mejor aislamiento térmico y acústico, cuesta entre 400-750€/ventana, y es la opción más popular en 2026. La madera es la opción premium (600-1.200€/ventana) para viviendas de estilo clásico.</p>
        </>
      }
      schemaSteps={["Cuenta el número de ventanas a cambiar", "Elige el material y calidad", "Indica si incluye persianas u obra", "Obtén el precio estimado del cambio"]}
    />
  );
}
