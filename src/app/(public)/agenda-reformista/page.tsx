import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { CalendarDays, Bell, Palette, Link2, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Agenda para Reformistas — Citas, Visitas y Planning de Obras",
  description: "Calendario visual con tipos de cita por colores: visitas, inicios de obra, entregas, reuniones. Recordatorios automáticos al cliente 24h antes.",
  alternates: { canonical: "/agenda-reformista" },
};

export default function AgendaPage() {
  return (
    <FeaturePage
      title="Organiza tus visitas, citas y planning de obras"
      subtitle="Calendario visual con tipos de cita por colores. Recordatorios automáticos al cliente. Vincula cada cita a su obra y cliente."
      description={[
        "Un reformista tiene muchos frentes abiertos: visitas de valoración, inicios de obra, entregas de material, reuniones con clientes, inspecciones... Gestionar todo esto de cabeza o con el calendario del móvil es una receta para olvidar citas y quedar mal.",
        "La agenda de ObraBox es un calendario visual con vista mensual, semanal y diaria. Cada tipo de cita tiene un color distinto para identificarla de un vistazo: verde para visitas de valoración, azul para inicios de obra, amarillo para entregas de material, morado para reuniones con cliente, naranja para inspecciones, rojo para fin de obra.",
        "Crear una cita es sencillo: seleccionas el tipo, la fecha y hora, vinculas al cliente y a la obra (ambos opcionales), añades la dirección y notas. La cita queda registrada y vinculada a la ficha del cliente y a la obra.",
        "Una de las funcionalidades más útiles es el recordatorio automático. 24 horas antes de la cita, ObraBox envía un email al cliente recordándole la visita o reunión. Esto reduce las cancelaciones de última hora y las esperas innecesarias.",
        "La agenda se integra con el resto de módulos. Cuando programas una visita de valoración desde el pipeline (CRM), se crea automáticamente una cita en la agenda. Cuando creas una obra con fecha de inicio, aparece en la agenda. Todo está conectado.",
        "En el dashboard, la agenda aparece como widget lateral mostrando las citas de hoy y mañana, para que siempre tengas presente qué toca sin tener que abrir el calendario completo.",
        "Los tipos de cita son editables: si necesitas categorías específicas como 'visita de seguro' o 'reunión con comunidad', puedes crearlas en la configuración con el color que prefieras.",
      ]}
      benefits={[
        { icon: Palette, title: "Citas por colores", desc: "Cada tipo de cita tiene su color. De un vistazo ves qué tipo de día tienes por delante." },
        { icon: Bell, title: "Recordatorios automáticos", desc: "Email al cliente 24h antes de la cita. Menos cancelaciones, menos esperas." },
        { icon: Link2, title: "Vinculada a obra y cliente", desc: "Cada cita se conecta a su obra y cliente. Historial completo en la ficha de cada uno." },
        { icon: CalendarDays, title: "Vista mes/semana/día", desc: "Tres vistas para planificar a largo y corto plazo. Zoom al nivel de detalle que necesites." },
        { icon: Clock, title: "Widget en dashboard", desc: "Las citas de hoy y mañana siempre visibles en tu panel principal." },
        { icon: MapPin, title: "Dirección de la cita", desc: "Registra la dirección para tenerla a mano. Abre en Google Maps con un clic." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Miguel, reformista autónomo en Alicante",
        texto: "Miguel trabaja solo y tiene 3-4 visitas de valoración a la semana más las obras en curso. Antes lo apuntaba todo en la agenda del móvil, pero se le olvidaba vincular las citas con los clientes y cuando llegaba a una visita no recordaba qué le había pedido esa persona. Con ObraBox, cada cita está vinculada al lead del pipeline. Cuando va a la visita, abre la cita y ve el nombre, teléfono, dirección, tipo de reforma y notas del primer contacto. Y el cliente recibe un recordatorio el día antes, así que nadie se olvida.",
      }}
      faqs={[
        { q: "¿Se puede sincronizar con Google Calendar?", a: "La integración con Google Calendar está prevista. Actualmente, la agenda de ObraBox funciona de forma independiente dentro de la plataforma." },
        { q: "¿Los recordatorios se envían por WhatsApp?", a: "Actualmente se envían por email. Los recordatorios por WhatsApp están en desarrollo." },
        { q: "¿Puedo ver la agenda de mis empleados?", a: "En el plan Pro puedes gestionar citas de tu equipo. Cada empleado puede tener sus propias citas vinculadas a las obras que gestiona." },
        { q: "¿Puedo crear tipos de cita personalizados?", a: "Sí, en la configuración puedes crear los tipos de cita que necesites con el color que prefieras." },
      ]}
      relatedLinks={[
        { href: "/crm-reformas", label: "CRM para reformas" },
        { href: "/gestion-equipo-obra", label: "Gestión de equipo" },
        { href: "/gestion-obra-completa", label: "Gestión de obras" },
        { href: "/portal-cliente-obras", label: "Portal del cliente" },
      ]}
    />
  );
}
