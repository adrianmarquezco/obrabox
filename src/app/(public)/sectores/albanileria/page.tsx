import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Empresas de Albañilería",
  description: "ObraBox es el software para empresas de albañilería. Gestiona obras, cuadrillas, materiales, presupuestos y clientes desde el móvil.",
  alternates: { canonical: "/sectores/albanileria" },
};

export default function AlbanileriaPage() {
  return (
    <SectorPage
      titulo="Software para empresas de albañilería"
      subtitulo="Controla obras, cuadrillas y materiales. Sabe en tiempo real si cada obra es rentable o se está comiendo el margen."
      descripcion={[
        "La albañilería es el gremio que más obras mueve y el que más margen pierde por falta de control. Entre la compra de materiales a granel, las cuadrillas rotando entre obras, los imprevistos estructurales y los extras que el cliente pide de palabra, es fácil terminar una obra sin saber si has ganado dinero.",
        "ObraBox te da visibilidad total sobre cada obra: sabes cuánto has presupuestado, cuánto llevas gastado en materiales y mano de obra, y cuánto te queda de margen. Cada cuadrilla registra sus horas y avances desde el móvil, y tú ves desde cualquier sitio cómo van todas tus obras a la vez.",
        "Los extras son el punto más conflictivo en albañilería: derribos imprevistos, refuerzos estructurales, cambios de distribución. Con ObraBox los documentas con fotos, los presupuestas y el cliente los aprueba digitalmente antes de ejecutarlos. Sin malentendidos, sin discusiones al cobrar.",
      ]}
      problemas={[
        "No saber el margen real de cada obra hasta que termina (y a veces ni entonces)",
        "Cuadrillas en varias obras sin control de horas ni rendimiento por trabajo",
        "Compras de material a granel que no se asignan correctamente a cada obra",
        "Extras verbales que luego el cliente no reconoce o se niega a pagar",
        "Presupuestos que se hacen rápido y no contemplan todos los costes reales",
        "Imprevistos estructurales que se absorben sin repercutir al cliente",
      ]}
      beneficios={[
        "Control de gastos en tiempo real: materiales, mano de obra y subcontratas por obra",
        "Registro de horas por cuadrilla y por obra desde el móvil",
        "Extras con fotos, presupuesto y firma digital del cliente antes de ejecutar",
        "Presupuestos detallados con partidas de demolición, obra nueva y acabados",
        "Planning semanal para distribuir cuadrillas entre obras",
        "Portal del cliente con avance de obra, fotos y documentación accesible",
      ]}
      faqs={[
        { q: "¿Puedo controlar varias cuadrillas en obras diferentes?", a: "Sí, asignas cada cuadrilla a sus obras y ves en el planning semanal quién está en cada sitio. Cada trabajador registra horas desde su móvil." },
        { q: "¿Cómo gestiono los extras que surgen durante la obra?", a: "Creas el extra con descripción, fotos y coste, lo envías al cliente para aprobación digital, y si acepta se añade automáticamente al presupuesto de la obra." },
        { q: "¿Sirve para pequeñas obras de albañilería o solo para grandes?", a: "Para cualquier tamaño. Desde un tabique o una solera hasta una construcción completa. El plan gratuito permite hasta 3 obras activas." },
        { q: "¿Puedo asignar gastos de material a una obra concreta?", a: "Sí, cada gasto se registra dentro de la obra correspondiente. Si compras material para varias obras, puedes dividir el gasto y asignarlo proporcionalmente." },
      ]}
    />
  );
}
