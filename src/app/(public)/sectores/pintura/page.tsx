import type { Metadata } from "next";
import SectorPage from "@/components/public/SectorPage";

export const metadata: Metadata = {
  title: "Software para Empresas de Pintura y Decoración",
  description: "ObraBox es el software para empresas de pintura y decoración. Organiza trabajos, equipos, presupuestos y clientes sin perder tiempo en papeleo.",
  alternates: { canonical: "/sectores/pintura" },
};

export default function PinturaPage() {
  return (
    <SectorPage
      titulo="Software para empresas de pintura y decoración"
      subtitulo="Gestiona múltiples trabajos simultáneos, controla materiales y mantén a tus clientes informados. Todo desde el móvil."
      descripcion={[
        "Las empresas de pintura gestionan muchos trabajos pequeños y medianos al mismo tiempo: un piso completo, una fachada, un local comercial, un par de habitaciones. El problema es que cada trabajo parece sencillo, pero cuando tienes 8 o 10 en marcha a la vez, se complica coordinar equipos, materiales y plazos.",
        "ObraBox te da una vista clara de todos tus trabajos en curso. Sabes qué equipo está en cada obra, cuánto material necesitas, y si el presupuesto se está cumpliendo. Los clientes ven el avance en su portal sin necesidad de llamarte, y tú generas presupuestos rápidos desde plantillas adaptadas a pintura.",
        "El margen en pintura se pierde cuando no registras bien las horas, cuando compras material de más, o cuando un trabajo se alarga sin cobrar el extra. ObraBox te ayuda a controlar estos tres puntos para que cada trabajo sea rentable, aunque sea pequeño.",
      ]}
      problemas={[
        "Gestionar 8-10 trabajos pequeños simultáneos sin perder el control",
        "No saber cuántas horas reales se dedican a cada trabajo",
        "Comprar material de más o quedarse corto y perder tiempo en desplazamientos",
        "Presupuestos que se hacen en papel o WhatsApp y luego no se encuentran",
        "Clientes que llaman para saber cuándo se empieza o cuándo se termina",
        "Trabajos extras (reparaciones, imprimaciones adicionales) que no se cobran",
      ]}
      beneficios={[
        "Vista global de todos los trabajos en curso con estado y equipo asignado",
        "Registro de horas por trabajo para saber la rentabilidad real",
        "Control de materiales: litros de pintura, imprimaciones, herramientas por obra",
        "Presupuestos rápidos desde plantillas adaptadas a pintura y decoración",
        "Portal del cliente con fechas estimadas y avance del trabajo",
        "Extras documentados con coste y aprobación digital del cliente",
      ]}
      faqs={[
        { q: "¿ObraBox sirve para trabajos pequeños de un día?", a: "Sí, puedes registrar trabajos de cualquier tamaño. Para trabajos rápidos, creas la obra en un minuto y controlas el gasto y las horas igualmente." },
        { q: "¿Puedo controlar el material utilizado en cada trabajo?", a: "Sí, registras los gastos de material por obra y ves en tiempo real cuánto llevas gastado frente a lo presupuestado." },
        { q: "¿Funciona para empresas de pintura industrial o solo decorativa?", a: "Para ambas. ObraBox gestiona obras de cualquier tipo y tamaño, tanto pintura residencial como industrial o de fachadas." },
        { q: "¿Mis pintores pueden registrar horas desde su móvil?", a: "Sí, cada trabajador puede fichar horas y registrar avances desde la app en su móvil." },
      ]}
    />
  );
}
