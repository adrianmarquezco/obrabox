import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { ClipboardCheck, AlertTriangle, Key, Shield, FileText, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestión de Obras Completa — Checklists, Documentación, Extras y Control de Calidad",
  description: "Controla cada fase de la obra: checklist por fase, extras con firma, incidencias, mediciones, control de calidad, llaves, garantías y documentos.",
  alternates: { canonical: "/gestion-obra-completa" },
};

export default function GestionObraPage() {
  return (
    <FeaturePage
      title="Controla cada detalle de tus obras"
      subtitle="Checklist por fase, extras con firma digital, incidencias, mediciones, control de calidad, gestión de llaves, garantías y toda la documentación."
      description={[
        "Una obra de reforma tiene decenas de detalles que controlar. Fases que completar, extras que aprobar, incidencias que resolver, documentos que firmar, llaves que devolver, garantías que registrar... Si lo llevas de cabeza o en papel, se te escapan cosas. ObraBox centraliza todo en la ficha de cada obra.",
        "Cada obra tiene un checklist de fases personalizable. Las fases predefinidas cubren la mayoría de reformas: Demolición, Albañilería, Fontanería, Electricidad, Carpintería, Solados/Alicatados, Pintura, Limpieza y Remates. Cada fase tiene estado (pendiente, en curso, completada), fecha de completado, notas y fotos de verificación. Una barra de progreso global muestra el % de avance basado en las fases completadas.",
        "Los extras y modificaciones son habituales en cualquier obra. Con ObraBox, registras cada extra con su descripción, motivo, impacto en precio y plazo, y lo envías al cliente para aprobación digital. El cliente recibe un enlace, ve el detalle y firma si acepta. Todo queda registrado con fecha y firma.",
        "Las incidencias durante obra (humedad, instalación no normativa, vicios ocultos, amianto...) se documentan con fotos y descripción. Puedes calcular el impacto en precio y plazo, y enviar al cliente el presupuesto del sobrecoste. Si el cliente acepta, la incidencia se convierte en extra automáticamente.",
        "El control de calidad funciona con checklists por fase completada: 'Nivel correcto', 'Juntas uniformes', 'Sin fugas', 'Diferencial funciona'... Cada ítem tiene estado OK/No OK/Pendiente y foto de verificación. Puedes generar un informe PDF de control de calidad para tu archivo o para entregar al cliente.",
        "La gestión de llaves es un detalle que parece menor pero causa problemas: quién tiene las llaves, cuándo se entregaron, cuándo se devolvieron. ObraBox te avisa si una obra finaliza y las llaves no se han devuelto.",
        "Las garantías de materiales y trabajos se registran con descripción, duración y fechas. ObraBox te alerta cuando una garantía está próxima a vencer, para que puedas informar al cliente.",
        "Toda la documentación formal se genera desde la ficha de obra: acta de visita, contrato de obra, acta de replanteo, acta de recepción con firma digital del cliente, y acta de recepción definitiva. Las mediciones (m², metros lineales, unidades por zona) se registran directamente y se pueden vincular al presupuesto.",
      ]}
      benefits={[
        { icon: ClipboardCheck, title: "Checklist por fase", desc: "Fases de obra con estado, fotos y barra de progreso. Personaliza las fases para cada tipo de reforma." },
        { icon: AlertTriangle, title: "Extras e incidencias", desc: "Registra extras con firma digital del cliente. Documenta incidencias con fotos e impacto económico." },
        { icon: Shield, title: "Control de calidad", desc: "Checklist de calidad por fase completada con fotos de verificación. Genera informe PDF." },
        { icon: Key, title: "Control de llaves", desc: "Registra quién tiene las llaves. Alerta automática si la obra termina y no se han devuelto." },
        { icon: FileText, title: "Documentación formal", desc: "Genera actas, contratos y certificados desde la ficha de obra. Con firma digital." },
        { icon: Ruler, title: "Mediciones", desc: "Registra m², metros lineales y unidades por zona. Vincula al presupuesto." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Reformas Gómez, empresa en Bilbao",
        texto: "Reformas Gómez estaba haciendo una reforma integral y descubrieron humedades tras demoler un tabique. Antes, esto habría sido una discusión con el cliente: '¿esto estaba incluido?', '¿cuánto va a costar?'. Con ObraBox, el jefe de obra sacó fotos de las humedades, creó una incidencia con descripción y fotos, calculó el coste del tratamiento (1.200€) y el impacto en plazo (3 días). Lo envió al portal del cliente, que vio las fotos y la explicación. El cliente aprobó el extra desde su móvil en 10 minutos. Todo documentado, sin discusiones, sin malentendidos.",
      }}
      faqs={[
        { q: "¿Puedo personalizar las fases del checklist?", a: "Sí, las fases son totalmente editables. Puedes añadir, quitar o renombrar fases según el tipo de reforma." },
        { q: "¿Cómo funciona la firma digital de extras?", a: "El cliente recibe un enlace al portal, ve la descripción y el impacto del extra, y firma tocando la pantalla de su móvil. La firma queda registrada con fecha." },
        { q: "¿Se pueden generar informes de control de calidad?", a: "Sí, puedes generar un PDF con todos los ítems de calidad, su estado, las fotos de verificación y las observaciones." },
        { q: "¿Las mediciones se vinculan al presupuesto?", a: "Sí, las mediciones de una visita de valoración pueden precargarse en el presupuesto para calcular cantidades y precios." },
      ]}
      relatedLinks={[
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
        { href: "/galeria-fotos-obra", label: "Galería de fotos" },
        { href: "/portal-cliente-obras", label: "Portal del cliente" },
        { href: "/control-gastos-obra", label: "Control de gastos" },
      ]}
    />
  );
}
