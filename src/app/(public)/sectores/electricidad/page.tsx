import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Electricistas — Gestión de Instalaciones y Obras",
  description: "ObraBox es el software para electricistas y empresas de instalaciones eléctricas. Gestiona obras, boletines, presupuestos y equipos desde el móvil.",
  alternates: { canonical: "/sectores/electricidad" },
};

export default function ElectricidadPage() {
  return (
    <SectorPage
      titulo="Software para electricistas — gestión de instalaciones y obras"
      subtitulo="Controla tus instalaciones, gestiona boletines y certificados, y lleva al día presupuestos y equipos desde cualquier obra."
      descripcion={[
        "Los electricistas y las empresas de instalaciones eléctricas trabajan en entornos muy regulados: boletines eléctricos, certificados de instalación, cumplimiento del REBT, inspecciones periódicas. A esto se suma la coordinación con otros gremios en obras de reforma, la gestión de materiales específicos y los plazos ajustados.",
        "ObraBox te permite gestionar cada instalación como un proyecto con fases claras: canalización, cableado, mecanismos, cuadro eléctrico, verificación. Documentas todo con fotos y notas desde el móvil, registras los materiales utilizados y controlas el tiempo real de cada trabajo frente a lo presupuestado.",
        "Cuando trabajas como subcontrata en reformas integrales, necesitas visibilidad sobre tus plazos y dependencias con otros gremios. ObraBox te da esa visión: sabes cuándo puedes entrar, qué necesitas tener preparado y qué has gastado en cada obra. Sin Excel, sin papeles, sin perder margen.",
      ]}
      problemas={[
        "Documentación regulatoria dispersa: boletines, certificados, actas de inspección",
        "Coordinar tu entrada en obras con otros gremios (albañilería, fontanería)",
        "Presupuestos con muchas partidas de material específico difíciles de calcular",
        "No registrar las horas reales por instalación y perder margen sin darte cuenta",
        "Material sobrante en unas obras y faltante en otras por falta de control",
        "Clientes que no entienden el alcance del trabajo ni los plazos necesarios",
      ]}
      beneficios={[
        "Fases específicas para instalaciones: canalización, cableado, mecanismos, cuadro, verificación",
        "Documentación centralizada: boletines, certificados y fotos accesibles por obra",
        "Control de materiales por instalación: cable, mecanismos, protecciones, cuadros",
        "Registro de horas por trabajo para conocer la rentabilidad real de cada obra",
        "Portal del cliente donde ve el avance y la documentación de su instalación",
        "Presupuestos detallados con partidas de material y mano de obra separadas",
      ]}
      faqs={[
        { q: "¿Puedo guardar los boletines y certificados dentro de ObraBox?", a: "Sí, cada obra tiene una sección de documentación donde subes boletines, certificados de instalación, actas de inspección y cualquier otro documento." },
        { q: "¿Sirve para electricistas autónomos o solo para empresas?", a: "Para ambos. ObraBox se adapta tanto a un electricista autónomo que gestiona 5 trabajos al mes como a una empresa con varios equipos en obra." },
        { q: "¿Puedo controlar el material eléctrico utilizado en cada instalación?", a: "Sí, registras cada gasto de material por obra y ves en tiempo real cuánto llevas gastado frente a lo presupuestado." },
        { q: "¿Funciona cuando trabajo como subcontrata en reformas?", a: "Sí, puedes gestionar tus trabajos como subcontrata igual que tus obras propias, controlando plazos, gastos y documentación de cada una." },
      ]}
    />
  );
}
