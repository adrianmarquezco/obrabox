import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Reformas de Cocinas",
  description: "ObraBox es el software para empresas especializadas en reformas de cocinas. Gestiona presupuestos, plazos de mobiliario, instalaciones y clientes desde el móvil.",
  alternates: { canonical: "/sectores/reformas-cocinas" },
};

export default function ReformasCocinasPage() {
  return (
    <SectorPage
      titulo="Software para reformas de cocinas"
      subtitulo="Controla cada fase de la reforma: demolición, instalaciones, mobiliario y acabados. Sin perder margen ni clientes."
      descripcion={[
        "Las reformas de cocinas son proyectos con muchas dependencias: la fontanería y la electricidad deben estar antes que el mobiliario, los electrodomésticos tienen plazos de entrega distintos, y el cliente quiere ver cómo queda su cocina lo antes posible. Un retraso en cualquier fase arrastra al resto.",
        "ObraBox te permite planificar cada reforma de cocina con fases claras y fechas realistas. Registras los plazos de entrega del mobiliario y los electrodomésticos, coordinas las instalaciones de fontanería y electricidad, y el cliente ve el avance en su portal sin llamarte todos los días.",
        "El margen en una reforma de cocina se pierde cuando no controlas los extras: un cambio de encimera, un electrodoméstico distinto al presupuestado, un problema oculto en las tuberías. Con ObraBox documentas cada cambio, lo firmas digitalmente con el cliente y mantienes la rentabilidad de cada obra.",
      ]}
      problemas={[
        "Coordinar plazos de entrega de mobiliario, encimera y electrodomésticos",
        "Cambios de última hora del cliente que no se documentan ni se cobran",
        "Retrasos en fontanería o electricidad que bloquean el montaje del mobiliario",
        "Presupuestos con muchas partidas y opciones que llevan horas preparar",
        "No saber si la obra va dentro de margen hasta que termina",
        "Fotos y mediciones en el móvil que se pierden entre WhatsApp y la galería",
      ]}
      beneficios={[
        "Fases predefinidas para cocinas: demolición, instalaciones, mobiliario, acabados",
        "Control de plazos de entrega de proveedores dentro de cada obra",
        "Extras con firma digital y actualización automática del presupuesto",
        "Portal del cliente con fotos del avance y documentación accesible",
        "Presupuestos con opciones y variantes para que el cliente elija",
        "Gastos reales vs presupuestados en tiempo real por cada reforma",
      ]}
      faqs={[
        { q: "¿Puedo gestionar los plazos de entrega del mobiliario dentro de ObraBox?", a: "Sí, dentro de cada obra puedes registrar proveedores, fechas de entrega previstas y vincularlas a las fases de la reforma para detectar posibles retrasos." },
        { q: "¿Sirve para reformas de cocinas pequeñas o solo para grandes proyectos?", a: "Para ambos. ObraBox se adapta tanto a reformas rápidas de 3.000€ como a cocinas completas de 20.000€ o más." },
        { q: "¿Puedo enviar al cliente opciones de presupuesto diferentes?", a: "Sí, puedes crear presupuestos con variantes (básico, medio, premium) para que el cliente compare y elija directamente." },
        { q: "¿Cómo gestiono los cambios que pide el cliente durante la obra?", a: "Registras el extra con descripción y coste, lo envías al cliente para aprobación digital, y si acepta, se suma automáticamente al presupuesto de la obra." },
      ]}
    />
  );
}
