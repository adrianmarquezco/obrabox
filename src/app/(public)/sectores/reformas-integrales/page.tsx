import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Empresas de Reformas Integrales",
  description: "ObraBox es el software diseñado para empresas de reformas integrales. Gestiona obras, presupuestos, equipo y clientes desde el móvil.",
  alternates: { canonical: "/sectores/reformas-integrales" },
};

export default function ReformasIntegralesPage() {
  return (
    <SectorPage
      titulo="Software para empresas de reformas integrales"
      subtitulo="Gestiona obras completas con múltiples gremios, fases, extras y documentación. Todo desde el móvil."
      descripcion={[
        "Las reformas integrales son las obras más complejas de gestionar. Implican múltiples gremios (albañilería, fontanería, electricidad, carpintería, pintura), coordinación de equipos, gestión de extras frecuentes y una comunicación constante con el cliente que quiere saber cómo va su casa.",
        "ObraBox está diseñado específicamente para esta complejidad. El checklist por fases te permite controlar cada etapa de la obra. Los extras se documentan y firman digitalmente. El portal del cliente reduce las llamadas diarias. Y el control de gastos te dice en tiempo real si la obra va dentro de presupuesto o se está desviando.",
        "Si gestionas reformas integrales, sabes que el margen se pierde en los detalles: un extra no cobrado, un gasto no registrado, un subcontratista que cobra más de lo presupuestado. ObraBox te da visibilidad sobre todos estos puntos para que cada obra sea rentable.",
      ]}
      problemas={[
        "Coordinar 5-6 gremios diferentes en la misma obra",
        "Extras y cambios que no se documentan ni se cobran",
        "No saber el margen real hasta que termina la obra",
        "Cliente llamando cada día para preguntar cómo va",
        "Presupuestos largos y complejos que tardan horas",
        "Documentación (contratos, actas, licencias) desperdigada",
      ]}
      beneficios={[
        "Checklist por fases con progreso visual de la obra",
        "Extras con firma digital del cliente y registro automático",
        "Control de gastos en tiempo real: presupuestado vs real",
        "Portal del cliente: ven las fotos y el avance sin llamarte",
        "Presupuestos con plantillas y opciones básico/medio/premium",
        "Documentación centralizada: contratos, actas, planos, fotos",
      ]}
      faqs={[
        { q: "¿ObraBox sirve para gestionar reformas con varios gremios?", a: "Sí, puedes asignar diferentes trabajadores y subcontratas a cada obra, planificar la semana con el planning visual, y controlar las horas de cada uno." },
        { q: "¿Puedo gestionar los extras durante la obra?", a: "Sí, registras el extra con descripción, coste y plazo, y lo envías al cliente para aprobación digital. Si acepta, se añade al presupuesto de la obra." },
        { q: "¿Cuántas obras puedo gestionar simultáneamente?", a: "En el plan Pro y Business, obras ilimitadas. En el plan Gratis, hasta 3 obras activas." },
        { q: "¿Funciona para reformas de más de 50.000€?", a: "Sí, ObraBox gestiona obras de cualquier tamaño. Las funcionalidades de control de gastos e informes son especialmente útiles en obras grandes." },
      ]}
    />
  );
}
