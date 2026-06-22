import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { Eye, MessageSquare, PenTool, Camera, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Portal del Cliente para Obras y Reformas — Tus Clientes Ven el Avance en Tiempo Real",
  description: "Dale a tus clientes un portal donde ver fotos de avance, firmar extras, chatear contigo y consultar facturas. Sin contraseñas, con magic link.",
  alternates: { canonical: "/portal-cliente-obras" },
};

export default function PortalClientePage() {
  return (
    <FeaturePage
      title="Tus clientes ven el avance de su obra en tiempo real"
      subtitle="Un portal privado para cada cliente. Fotos de avance, mensajes, firmas de extras y facturas. Sin contraseñas, acceso por enlace."
      description={[
        "Uno de los mayores dolores de cabeza de cualquier reformista es la comunicación con el cliente durante la obra. Las llamadas constantes preguntando '¿cómo va mi baño?' o '¿ya habéis terminado la fontanería?'. Con el portal del cliente de ObraBox, esas llamadas desaparecen.",
        "Cada cliente recibe un enlace único (magic link) que le da acceso a su portal personalizado. No necesita contraseña ni descargar ninguna app. Solo hace clic en el enlace y ve toda la información de su obra.",
        "En el portal, el cliente puede ver el estado actual de la obra, las fotos de avance organizadas por fecha, qué fases están completadas y cuáles quedan por hacer. También puede consultar los próximos pasos que tú como reformista has programado.",
        "Si durante la obra surge un extra o una modificación, puedes enviarlo directamente al portal para que el cliente lo apruebe. El cliente ve la descripción, el impacto en precio y plazo, y puede aceptar o rechazar con firma digital. Todo queda registrado.",
        "El portal incluye un chat simple entre reformista y cliente. Mensajes cortos y directos, sin perderse en grupos de WhatsApp con 200 fotos. Y si el cliente necesita compartir documentos (planos, llaves, instrucciones), puede subirlos directamente.",
        "Al finalizar la obra, el cliente puede valorar su experiencia con una puntuación de 1 a 5 estrellas y un comentario. Esta valoración queda en tu ficha y, si tienes el plan Business, puede aparecer en tu portfolio público.",
        "El portal está personalizado con el logo y el color de tu empresa. Tu cliente ve TU marca, no la de ObraBox. Esto transmite profesionalidad y confianza.",
        "Lo mejor: tú decides qué ve el cliente. Los gastos, márgenes, notas internas y datos de equipo nunca son visibles en el portal. Solo se muestra lo que el cliente necesita saber.",
      ]}
      benefits={[
        { icon: Eye, title: "Avance en tiempo real", desc: "El cliente ve fotos, fases completadas y próximos pasos sin tener que llamarte." },
        { icon: MessageSquare, title: "Chat directo", desc: "Mensajes entre reformista y cliente dentro del portal. Sin WhatsApp desordenado." },
        { icon: PenTool, title: "Firma de extras", desc: "Envía extras y modificaciones para aprobación digital. Todo queda registrado." },
        { icon: Camera, title: "Galería de fotos", desc: "Fotos organizadas por fecha que el cliente puede consultar cuando quiera." },
        { icon: Shield, title: "Privacidad total", desc: "El cliente solo ve lo que tú decides. Gastos, márgenes y notas internas quedan ocultos." },
        { icon: Star, title: "Valoraciones", desc: "El cliente valora la obra al finalizar. Usa las valoraciones para tu portfolio público." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: María, reformista en Madrid",
        texto: "María gestiona 4 reformas de baño simultáneas. Antes recibía 15-20 llamadas diarias de clientes preguntando por el estado de su obra. Con el portal de ObraBox, cada mañana sube 2-3 fotos del avance de cada obra directamente desde el móvil. Los clientes acceden al portal, ven las fotos, consultan qué fase va, y dejan de llamar. María ha reducido las llamadas de clientes un 80% y sus clientes están más satisfechos porque sienten que tienen el control.",
      }}
      faqs={[
        { q: "¿El cliente necesita descargarse una app?", a: "No. El portal funciona en el navegador del móvil o del ordenador. El cliente accede con un enlace único que tú le envías por WhatsApp o email." },
        { q: "¿Puedo personalizar el portal con mi logo?", a: "Sí, en el plan Pro y Business. Puedes poner tu logo, tu color corporativo y un mensaje de bienvenida personalizado." },
        { q: "¿El cliente puede ver cuánto me está costando la obra?", a: "No. Los gastos, márgenes, notas internas y datos de equipo nunca se muestran en el portal del cliente." },
        { q: "¿Qué pasa si el cliente tiene varias obras conmigo?", a: "Si es un cliente repetidor, al acceder al portal verá un listado con todas sus obras y podrá entrar en cada una." },
        { q: "¿Puedo enviar el enlace del portal por WhatsApp?", a: "Sí. El enlace se puede compartir por WhatsApp, email, SMS o cualquier otro medio. Es un link normal que funciona en cualquier navegador." },
      ]}
      relatedLinks={[
        { href: "/gestion-obra-completa", label: "Gestión de obras completa" },
        { href: "/galeria-fotos-obra", label: "Galería de fotos de obra" },
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
        { href: "/facturacion-reformas", label: "Facturación para reformas" },
      ]}
    />
  );
}
