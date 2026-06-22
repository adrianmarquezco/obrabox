import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { Users, CalendarDays, MapPin, ClipboardCheck, Clock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestión de Equipos de Trabajo en Obras — Planning, Fichaje y Asignación",
  description: "Asigna trabajadores a obras, planifica la semana con un planning visual, controla fichajes con GPS y gestiona documentación de tu equipo.",
  alternates: { canonical: "/gestion-equipo-obra" },
};

export default function GestionEquipoPage() {
  return (
    <FeaturePage
      title="Organiza tu equipo y sabe quién está en cada obra"
      subtitle="Planning semanal visual, fichaje con GPS, asignación de trabajadores a obras, partes de trabajo y documentación."
      description={[
        "Cuando tienes varias obras en marcha y un equipo de trabajadores y subcontratas, organizar quién va a cada sitio cada día es un rompecabezas. ObraBox te da un planning semanal visual donde ves de un vistazo quién está asignado a cada obra.",
        "El planning funciona como un calendario simplificado tipo Gantt. Las filas son tus trabajadores, las columnas los días de la semana, y cada celda muestra la obra asignada con un color identificativo. Puedes arrastrar y soltar para reasignar. Y si un trabajador no está asignado, se ve inmediatamente.",
        "Cada trabajador o subcontrata tiene su ficha con datos de contacto, especialidad, coste por hora o día, y una valoración interna de calidad, puntualidad y limpieza. Esto te ayuda a decidir a quién asignar a cada obra y a presupuestar mejor la mano de obra.",
        "La documentación del equipo es crítica y a menudo se olvida. ObraBox te permite subir los documentos de cada trabajador (seguro de responsabilidad civil, alta en autónomos, certificaciones profesionales, carnet de electricista, PRL...) con fecha de caducidad. Cuando un documento está a punto de caducar, te avisa automáticamente.",
        "El registro de jornada laboral es obligatorio por ley en España desde 2019. Con ObraBox, tus trabajadores fichan desde su móvil con un botón grande de ENTRADA y SALIDA. Se registra la hora y, con su consentimiento, la ubicación GPS en el momento del fichaje. Tú ves una tabla con todos los fichajes, horas totales, y puedes exportarlo en PDF para una posible inspección de trabajo.",
        "Los partes de trabajo permiten registrar las horas dedicadas a cada obra y día. Así puedes calcular el coste real de la mano de obra en cada reforma y compararlo con lo que presupuestaste.",
        "La disponibilidad se gestiona desde un calendario donde marcas vacaciones, bajas y días no disponibles. Cuando planificas la semana, ObraBox te muestra automáticamente quién está libre cada día.",
      ]}
      benefits={[
        { icon: CalendarDays, title: "Planning semanal visual", desc: "Vista tipo Gantt: quién va a cada obra cada día. Arrastra y suelta para reasignar." },
        { icon: Clock, title: "Fichaje con GPS", desc: "Tus trabajadores fichan desde el móvil. Hora y ubicación registradas para Inspección de Trabajo." },
        { icon: Users, title: "Fichas de equipo", desc: "Datos, especialidad, coste, valoración y disponibilidad de cada trabajador y subcontrata." },
        { icon: FileCheck, title: "Documentación con alertas", desc: "Sube seguros, certificaciones y PRL con fecha caducidad. Alertas automáticas al caducar." },
        { icon: MapPin, title: "Asignación a obras", desc: "Asigna trabajadores a obras y ve quién está en cada sitio en todo momento." },
        { icon: ClipboardCheck, title: "Partes de trabajo", desc: "Registra horas por obra y día para calcular el coste real de mano de obra." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Carlos, empresa de reformas en Sevilla",
        texto: "Carlos tiene 8 trabajadores y gestiona 5-6 obras simultáneas. Antes organizaba la semana con un grupo de WhatsApp: 'Pepe mañana vas a la obra de la calle Mayor, Juan te quedas en el baño de Triana...'. Siempre había líos: alguien que no leía el mensaje, dos personas en la misma obra cuando sobraba una, una obra parada porque nadie fue. Con el planning de ObraBox, Carlos prepara la semana el domingo por la noche en 10 minutos. Cada trabajador sabe dónde ir. Y si hay un cambio, lo mueve en el planning y todos lo ven al instante.",
      }}
      faqs={[
        { q: "¿Es obligatorio el fichaje con GPS?", a: "La ubicación GPS es opcional y requiere el consentimiento del trabajador. ObraBox muestra un aviso claro al primer uso. El fichaje de horas sí es obligatorio por ley." },
        { q: "¿Puedo exportar los fichajes para una inspección de trabajo?", a: "Sí, puedes exportar los registros de jornada en PDF o Excel, cumpliendo con la obligación de conservarlos durante 4 años." },
        { q: "¿Los trabajadores necesitan la app?", a: "No necesitan descargarse nada. Acceden desde el navegador del móvil a través de un enlace o pueden instalar la PWA." },
        { q: "¿Puedo gestionar subcontratas además de empleados?", a: "Sí, puedes registrar empleados, subcontratas y autónomos colaboradores, cada uno con su tipo y coste." },
      ]}
      relatedLinks={[
        { href: "/gestion-obra-completa", label: "Gestión de obras completa" },
        { href: "/control-gastos-obra", label: "Control de gastos" },
        { href: "/agenda-reformista", label: "Agenda para reformistas" },
        { href: "/informes-rentabilidad", label: "Informes de rentabilidad" },
      ]}
    />
  );
}
