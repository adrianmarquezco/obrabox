import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Pequeñas Constructoras",
  description: "ObraBox es el software para pequeñas constructoras. Gestiona obras, subcontratas, presupuestos, certificaciones y clientes desde el móvil.",
  alternates: { canonical: "/sectores/construccion" },
};

export default function ConstruccionPage() {
  return (
    <SectorPage
      titulo="Software para pequeñas constructoras"
      subtitulo="Gestiona obras completas con subcontratas, certificaciones y control de costes. Sin la complejidad ni el precio de un ERP industrial."
      descripcion={[
        "Las pequeñas constructoras gestionan obras de cierta envergadura pero no tienen el equipo administrativo de una gran empresa. El gerente hace de jefe de obra, comercial y gestor al mismo tiempo. Necesita controlar costes, coordinar subcontratas, gestionar certificaciones y mantener informado al promotor, todo desde el móvil mientras está en obra.",
        "ObraBox está pensado para este perfil: te da el control de un software profesional sin la complejidad de un ERP industrial. Gestionas cada obra con fases, asignas subcontratas, registras certificaciones de avance, controlas gastos reales frente a presupuesto y el promotor o cliente ve el avance en su portal.",
        "El margen en construcción se pierde obra a obra cuando no hay visibilidad: una subcontrata que se pasa de precio, un capítulo que se queda corto, materiales que suben y nadie actualiza el presupuesto. ObraBox te muestra estos desvíos en tiempo real para que tomes decisiones antes de que la obra se coma el beneficio.",
      ]}
      problemas={[
        "Gestionar 3-5 obras simultáneas siendo gerente, jefe de obra y comercial a la vez",
        "Subcontratas sin control: no sabes cuánto llevan ejecutado ni gastado por capítulo",
        "Certificaciones de avance que se preparan a última hora con datos aproximados",
        "Desviaciones de coste que no se detectan hasta que la obra está muy avanzada",
        "Documentación de obra dispersa: planos, licencias, actas, seguros en sitios diferentes",
        "Presupuestos por capítulos complejos que tardan días en preparar",
      ]}
      beneficios={[
        "Vista global de todas las obras con estado, avance y margen en tiempo real",
        "Gestión de subcontratas con control de coste por capítulo y certificación",
        "Certificaciones de avance con datos reales y documentación adjunta",
        "Control de desviaciones: presupuestado vs ejecutado vs certificado por partida",
        "Documentación centralizada: licencias, planos, actas, seguros, contratos por obra",
        "Portal del promotor o cliente con avance, fotos y documentación accesible",
      ]}
      faqs={[
        { q: "¿ObraBox sustituye a un ERP de construcción?", a: "No pretende ser un ERP completo. Está diseñado para pequeñas constructoras que necesitan control de obras sin la complejidad y el coste de un software industrial." },
        { q: "¿Puedo gestionar subcontratas dentro de cada obra?", a: "Sí, asignas subcontratas a cada obra, registras sus costes por capítulo y controlas cuánto llevan ejecutado frente a lo contratado." },
        { q: "¿Sirve para obras de obra nueva o solo para reformas?", a: "Para ambas. ObraBox gestiona cualquier tipo de obra: reformas, rehabilitaciones y obra nueva. Las fases y capítulos se adaptan a cada caso." },
        { q: "¿Puedo generar certificaciones de avance desde ObraBox?", a: "Sí, registras el avance por capítulos y generas la certificación con los datos reales de la obra, incluyendo documentación y fotos de respaldo." },
      ]}
    />
  );
}
