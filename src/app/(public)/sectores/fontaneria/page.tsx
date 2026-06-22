import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Fontaneros — Gestión de Servicios y Obras",
  description: "ObraBox es el software para fontaneros y empresas de fontanería. Gestiona servicios urgentes, obras de instalación, presupuestos y clientes desde el móvil.",
  alternates: { canonical: "/sectores/fontaneria" },
};

export default function FontaneriaPage() {
  return (
    <SectorPage
      titulo="Software para fontaneros — gestión de servicios y obras"
      subtitulo="Organiza reparaciones urgentes, instalaciones completas y obras de reforma. Controla gastos, equipos y clientes sin papeleo."
      descripcion={[
        "La fontanería combina dos mundos muy distintos: las reparaciones urgentes (fugas, atascos, averías) que necesitan respuesta inmediata, y las instalaciones completas en reformas que requieren planificación y coordinación con otros gremios. Gestionar ambos tipos de trabajo con las mismas herramientas es complicado si dependes de WhatsApp y papel.",
        "ObraBox te permite organizar tanto los servicios puntuales como las obras largas. Para urgencias, creas el trabajo en un minuto desde el móvil, registras lo que has hecho y el material utilizado, y generas el presupuesto o la factura al momento. Para instalaciones en reforma, planificas por fases y coordinas con el resto de gremios.",
        "El control de materiales es crítico en fontanería: tubería, grifería, sanitarios, calentadores. Cada trabajo consume material distinto y los precios fluctúan. Con ObraBox registras cada gasto por obra y sabes en tiempo real si estás dentro de margen o si necesitas ajustar el precio al cliente antes de que sea tarde.",
      ]}
      problemas={[
        "Combinar reparaciones urgentes con obras planificadas sin que se solape todo",
        "No registrar el material utilizado en cada servicio y perder dinero sin saberlo",
        "Presupuestos hechos de memoria o en papel que luego no se encuentran",
        "Coordinar la entrada en obra con albañilería y electricidad en reformas",
        "Clientes que llaman para urgencias y no sabes si puedes encajarlos esa semana",
        "Trabajos extras en obra (cambio de recorrido, añadir punto de agua) que no se cobran",
      ]}
      beneficios={[
        "Gestión rápida de urgencias: crea el trabajo, registra y presupuesta desde el móvil",
        "Planificación por fases para instalaciones completas en reformas",
        "Control de materiales por trabajo: tuberías, grifería, sanitarios, calentadores",
        "Planning semanal para ver la carga de trabajo y encajar urgencias",
        "Extras documentados con aprobación digital del cliente",
        "Historial completo de cada cliente con trabajos anteriores y documentación",
      ]}
      faqs={[
        { q: "¿Puedo gestionar reparaciones urgentes y obras largas en la misma herramienta?", a: "Sí, ObraBox gestiona ambos tipos de trabajo. Las urgencias las creas en un minuto, y las obras de reforma las planificas por fases con todo el detalle que necesites." },
        { q: "¿Sirve para fontaneros autónomos?", a: "Sí, el plan gratuito permite gestionar hasta 3 obras activas. Para más volumen, los planes Pro y Business no tienen límite de obras." },
        { q: "¿Puedo ver el historial de trabajos de un cliente?", a: "Sí, cada cliente tiene un historial con todos los trabajos realizados, presupuestos enviados y documentación asociada." },
        { q: "¿Cómo controlo el material que gasto en cada trabajo?", a: "Registras cada compra o gasto de material dentro de la obra correspondiente. ObraBox te muestra en tiempo real cuánto llevas gastado frente a lo que presupuestaste." },
      ]}
    />
  );
}
