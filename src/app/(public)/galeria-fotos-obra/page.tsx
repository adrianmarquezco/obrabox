import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { Camera, Columns2, Share2, Upload, Calendar, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "Galería de Fotos de Obra — Antes, Durante y Después Organizados",
  description: "Documenta tus obras con fotos antes/durante/después. Crea comparativas para redes sociales con tu logo. Subida masiva desde el móvil.",
  alternates: { canonical: "/galeria-fotos-obra" },
};

export default function GaleriaFotosPage() {
  return (
    <FeaturePage
      title="Documenta tus obras con fotos antes, durante y después"
      subtitle="Galería organizada por fecha y fase. Subida masiva desde el móvil. Comparativas antes/después con tu logo para redes sociales."
      description={[
        "Las fotos de una obra son oro para un reformista. Sirven para documentar el trabajo, resolver conflictos con clientes ('esto ya estaba así'), y sobre todo, para captar nuevos clientes mostrando tu trabajo. Pero si las tienes desperdigadas entre el carrete del móvil, WhatsApp y alguna carpeta del ordenador, no te sirven de nada.",
        "ObraBox organiza las fotos de cada obra en una galería cronológica. Cada foto se categoriza como 'antes', 'durante' o 'después', y se puede vincular a una fase concreta de la obra (demolición, fontanería, alicatados, pintura...).",
        "La subida es masiva: seleccionas 10, 20 o 50 fotos desde el móvil y se suben todas a la obra correspondiente. No hace falta ir una a una. Y como ObraBox es una PWA, puedes hacer las fotos directamente desde la app y subirlas sin salir.",
        "La funcionalidad estrella es el generador de comparativas antes/después. Seleccionas una foto del 'antes' y otra del 'después', y ObraBox genera automáticamente una imagen comparativa lado a lado con el logo de tu empresa y el texto 'Gestionado con ObraBox'. Esta imagen está lista para compartir en Instagram, Facebook o donde quieras.",
        "Las comparativas antes/después son el contenido que más engagement genera en redes sociales para reformistas. Muestran visualmente la transformación y generan confianza en potenciales clientes. Con ObraBox, crear este contenido te lleva 30 segundos.",
        "Si tienes el plan Business, las fotos seleccionadas pueden aparecer en tu portfolio público dentro del directorio de ObraBox, que es visible en Google y atrae tráfico orgánico de personas buscando reformistas en tu zona.",
        "Las fotos del portal del cliente se nutren de esta misma galería. Tú decides cuáles se muestran al cliente y cuáles son solo internas. Las fotos de 'antes' pueden ser útiles para el cliente, pero quizás una foto de un problema de humedades oculto no quieres compartirla hasta hablarlo.",
      ]}
      benefits={[
        { icon: Upload, title: "Subida masiva", desc: "Sube 50 fotos de golpe desde el móvil. Sin ir una a una, sin salir de la app." },
        { icon: Calendar, title: "Organización cronológica", desc: "Fotos ordenadas por fecha y categorizadas por fase de obra." },
        { icon: Columns2, title: "Comparativas antes/después", desc: "Genera imágenes comparativas con tu logo, listas para redes sociales." },
        { icon: Share2, title: "Compartir en redes", desc: "Descarga las comparativas optimizadas para Instagram, Facebook y WhatsApp." },
        { icon: Camera, title: "Categorías: antes/durante/después", desc: "Etiqueta cada foto para encontrarla fácilmente y mostrarla donde corresponda." },
        { icon: Image, title: "Portfolio público", desc: "Con el plan Business, muestra tus mejores fotos en tu perfil del directorio ObraBox." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Ana, reformista en Zaragoza",
        texto: "Ana siempre hacía fotos de sus obras pero acababan perdidas en el carrete del móvil entre fotos personales. Cuando un cliente potencial le pedía 'fotos de trabajos anteriores', tardaba 20 minutos buscando y enviaba 5-6 fotos desordenadas. Con ObraBox, Ana sube las fotos a cada obra desde la propia obra. Cuando un potencial cliente le pide ver su trabajo, le envía el link a su portfolio público donde están las mejores comparativas antes/después de sus últimas 15 reformas. Ana ha triplicado sus leads de Instagram publicando una comparativa cada semana.",
      }}
      faqs={[
        { q: "¿Cuántas fotos puedo subir por obra?", a: "No hay límite en el plan Pro y Business. En el plan Gratis, puedes subir hasta 50 fotos por obra." },
        { q: "¿Las fotos se ven en el portal del cliente?", a: "Sí, las fotos de avance aparecen en el portal del cliente organizadas por fecha. Tú controlas qué se muestra." },
        { q: "¿Puedo añadir marca de agua a las fotos?", a: "Las comparativas antes/después incluyen automáticamente tu logo. Para fotos individuales, esta funcionalidad llegará próximamente." },
        { q: "¿En qué formatos puedo subir fotos?", a: "JPG, PNG y HEIC (el formato nativo de iPhone). Las fotos se optimizan automáticamente para no ocupar demasiado espacio." },
      ]}
      relatedLinks={[
        { href: "/gestion-obra-completa", label: "Gestión de obras completa" },
        { href: "/portal-cliente-obras", label: "Portal del cliente" },
        { href: "/crm-reformas", label: "CRM para reformas" },
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
      ]}
    />
  );
}
