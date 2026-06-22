import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { Kanban, Phone, TrendingUp, Filter, Target, UserPlus } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM para Empresas de Reformas — Gestiona tus Leads y Cierra Más Obras",
  description: "Pipeline visual kanban para gestionar leads: desde el primer contacto hasta el presupuesto aceptado. Seguimiento, tasa de conversión y motivos de descarte.",
  alternates: { canonical: "/crm-reformas" },
};

export default function CRMPage() {
  return (
    <FeaturePage
      title="Gestiona tus leads y cierra más obras"
      subtitle="Pipeline visual tipo kanban: cada contacto avanza por fases hasta convertirse en obra. Seguimiento, métricas y motivos de descarte."
      description={[
        "¿Cuántos contactos recibes al mes? ¿Cuántos de esos contactos se convierten en visita? ¿Y cuántas visitas terminan en presupuesto? Si no lo sabes, estás dejando dinero sobre la mesa. El CRM de ObraBox te da una visión clara de tu embudo de ventas.",
        "El pipeline funciona como un tablero kanban con columnas arrastrables. Cada contacto (lead) es una tarjeta que avanza por las fases: Lead nuevo, Visita programada, Visita realizada, Presupuesto enviado, Negociando, Aceptado o Descartado. Arrastras la tarjeta de una columna a otra según avanza la relación.",
        "Cada tarjeta muestra el nombre del contacto, tipo de reforma, importe estimado, cuántos días lleva en esa fase y por dónde llegó (recomendación, web, publicidad, portal ObraBox, redes sociales). Al hacer clic, se abre un sidebar con todos los detalles y el historial de contactos.",
        "El registro de seguimiento es fundamental. Cada vez que llamas, envías un WhatsApp, un email o haces una visita, lo registras con un clic y una nota. Así, cuando vuelves a contactar a ese lead semanas después, sabes exactamente qué se habló y en qué quedó.",
        "Cuando un lead está listo, puedes crear el presupuesto directamente desde su ficha. Y cuando acepta, puedes convertirlo en cliente y crear la obra. Todo el historial se mantiene conectado.",
        "Las métricas del pipeline son oro para mejorar tu negocio: cuántos leads recibes al mes, cuál es tu tasa de conversión (leads que se convierten en obra), el valor total del pipeline (potencial de facturación), y los motivos de descarte más habituales (precio alto, eligió a otro, no contesta, aplazado).",
        "Si el motivo de descarte más común es 'precio alto', quizás necesitas revisar tu estrategia de precios o mejorar la percepción de valor. Si es 'no contesta', quizás necesitas hacer seguimiento antes. Los datos te dicen dónde mejorar.",
        "Los leads pueden llegar automáticamente si tienes el portfolio público (plan Business): cuando alguien encuentra tu perfil en el directorio de ObraBox y te solicita presupuesto, se crea un lead automáticamente en tu pipeline.",
      ]}
      benefits={[
        { icon: Kanban, title: "Pipeline visual kanban", desc: "Tablero con columnas arrastrables. Cada lead avanza por fases hasta convertirse en obra." },
        { icon: Phone, title: "Registro de seguimiento", desc: "Registra cada llamada, WhatsApp, email o visita. Nunca pierdas el hilo con un potencial cliente." },
        { icon: TrendingUp, title: "Tasa de conversión", desc: "Sabe qué porcentaje de leads se convierten en obra. Y qué origen genera más clientes." },
        { icon: Filter, title: "Motivos de descarte", desc: "Precio alto, eligió otro, no contesta... Entiende por qué pierdes clientes para mejorar." },
        { icon: Target, title: "Valor del pipeline", desc: "Sabe cuánto potencial de facturación tienes en el embudo en todo momento." },
        { icon: UserPlus, title: "Leads automáticos", desc: "Con portfolio público, los contactos del directorio llegan directamente a tu pipeline." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Reformas Ruiz, empresa en Madrid",
        texto: "Reformas Ruiz recibía unos 30 contactos al mes pero solo cerraba 5-6 obras. No sabían dónde perdían los otros 24. Con el CRM de ObraBox, descubrieron que el 40% de los leads se descartaba por 'no contesta después de la visita'. El problema era que hacían la visita, enviaban el presupuesto y no volvían a contactar. Implementaron un protocolo: llamar a los 3 días, WhatsApp a la semana, email a las dos semanas. En 3 meses pasaron de cerrar 5 a cerrar 9 obras mensuales. La tasa de conversión subió del 17% al 30%.",
      }}
      faqs={[
        { q: "¿Puedo crear leads manualmente?", a: "Sí, puedes crear un lead con nombre, teléfono, email, tipo de reforma y notas. También se pueden crear automáticamente desde el portfolio público." },
        { q: "¿Qué diferencia hay entre un lead y un cliente?", a: "Un lead es un contacto potencial que aún no ha contratado. Cuando acepta un presupuesto, se convierte en cliente y su historial de lead queda vinculado." },
        { q: "¿Puedo ver métricas por origen de lead?", a: "Sí, en los informes puedes ver la tasa de conversión por origen: cuántos leads de 'web' se convierten vs los de 'recomendación', por ejemplo." },
        { q: "¿El CRM está disponible en el plan Gratis?", a: "No, el CRM / Pipeline está disponible a partir del plan Pro (29€/mes)." },
      ]}
      relatedLinks={[
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
        { href: "/agenda-reformista", label: "Agenda para reformistas" },
        { href: "/informes-rentabilidad", label: "Informes de rentabilidad" },
        { href: "/gestion-obra-completa", label: "Gestión de obras" },
      ]}
    />
  );
}
