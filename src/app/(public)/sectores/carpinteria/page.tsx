import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Carpinterías y Empresas de Madera",
  description: "ObraBox es el software para carpinterías y empresas de madera. Gestiona encargos, instalaciones en obra, presupuestos y clientes desde el móvil.",
  alternates: { canonical: "/sectores/carpinteria" },
};

export default function CarpinteriaPage() {
  return (
    <SectorPage
      titulo="Software para carpinterías y empresas de madera"
      subtitulo="Gestiona encargos de taller, instalaciones en obra y trabajos a medida. Controla tiempos, materiales y clientes sin complicaciones."
      descripcion={[
        "Las carpinterías trabajan en dos frentes: el taller (donde se fabrican muebles a medida, puertas, armarios) y la obra (donde se instalan). Coordinar la producción en taller con los plazos de la obra, gestionar los materiales y mantener al cliente informado del estado de su encargo es un reto diario.",
        "ObraBox te permite gestionar cada encargo como un proyecto con fases: medición, diseño, fabricación, acabado e instalación. Sabes en qué fase está cada trabajo, cuánto material has gastado, cuántas horas lleva el taller y si la instalación en obra está coordinada con el resto de gremios.",
        "El margen en carpintería se pierde cuando un mueble a medida lleva más horas de las previstas, cuando el cliente cambia medidas o acabados a mitad de producción, o cuando la instalación se retrasa porque la obra no está preparada. ObraBox te da visibilidad sobre estos puntos antes de que se conviertan en pérdidas.",
      ]}
      problemas={[
        "Coordinar la fabricación en taller con los plazos de instalación en obra",
        "Cambios de medidas o acabados a mitad de producción que no se cobran",
        "No saber cuántas horas reales lleva cada mueble o encargo a medida",
        "Material de madera y herrajes que no se registra correctamente por encargo",
        "Clientes que preguntan constantemente cuándo estará listo su encargo",
        "Instalaciones en obra que se retrasan porque otros gremios no han terminado",
      ]}
      beneficios={[
        "Fases por encargo: medición, diseño, fabricación, acabado, instalación",
        "Registro de horas de taller por encargo para conocer el coste real",
        "Control de materiales: madera, tablero, herrajes, acabados por trabajo",
        "Extras y cambios con coste actualizado y aprobación digital del cliente",
        "Portal del cliente con estado del encargo y fecha estimada de entrega",
        "Coordinación con otros gremios cuando la instalación depende de la obra",
      ]}
      faqs={[
        { q: "¿Puedo gestionar tanto el trabajo de taller como las instalaciones en obra?", a: "Sí, cada encargo tiene fases que cubren desde la medición y fabricación en taller hasta la instalación en obra. Gestionas todo en el mismo sitio." },
        { q: "¿Cómo controlo las horas que dedica el taller a cada encargo?", a: "Cada trabajador registra sus horas por encargo desde el móvil. Tú ves el total de horas y el coste real frente a lo presupuestado." },
        { q: "¿Sirve para carpintería metálica o solo de madera?", a: "ObraBox es genérico para cualquier tipo de carpintería. Las fases y la gestión de materiales se adaptan a madera, metal o PVC." },
        { q: "¿Qué pasa si el cliente cambia el diseño a mitad de fabricación?", a: "Registras el cambio como un extra con el nuevo coste, lo envías al cliente para aprobación digital y se actualiza automáticamente en el presupuesto de la obra." },
      ]}
    />
  );
}
