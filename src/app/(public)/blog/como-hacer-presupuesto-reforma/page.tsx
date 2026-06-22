import type { Metadata } from "next";
import BlogArticle from "@/components/public/BlogArticle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Hacer un Presupuesto de Reforma Profesional — Guía Paso a Paso",
  description: "Aprende a crear presupuestos de reforma que conviertan: estructura, partidas, márgenes, opciones y presentación profesional. Con ejemplos reales.",
  alternates: { canonical: "/blog/como-hacer-presupuesto-reforma" },
};

export default function PresupuestoReformaArticle() {
  return (
    <BlogArticle
      title="Cómo Hacer un Presupuesto de Reforma Profesional — Guía Paso a Paso"
      fecha="2026-06-12"
      categoria="Gestión"
      relatedLinks={[
        { href: "/blog/iva-reformas-10-21", label: "IVA en reformas: 10% o 21%" },
        { href: "/blog/cobrar-reforma-impagos", label: "Cómo cobrar y evitar impagos" },
        { href: "/presupuestos-reforma", label: "Software de presupuestos para reformas" },
        { href: "/plantillas/presupuesto-reforma-bano", label: "Plantilla de presupuesto de baño" },
      ]}
    >
      <p>
        Un presupuesto bien hecho no es solo una lista de precios. Es tu carta de presentación, tu herramienta de venta y el documento que definirá la relación con tu cliente durante toda la obra. Un presupuesto profesional genera confianza, reduce malentendidos y aumenta tu tasa de conversión. Un presupuesto chapucero te hace perder obras que podrías haber ganado.
      </p>
      <p>
        En esta guía te explicamos paso a paso cómo crear un presupuesto de reforma profesional, desde la visita de valoración hasta el envío al cliente. Con ejemplos reales y consejos de reformistas que facturan más de 500.000€ al año.
      </p>

      <h2>Paso 1: La visita de valoración</h2>
      <p>
        Todo buen presupuesto empieza con una buena visita. No vayas con las manos vacías: lleva un metro láser, tu móvil para hacer fotos, y una libreta o la app de <Link href="/presupuestos-reforma">ObraBox</Link> para tomar notas.
      </p>
      <p>Durante la visita debes recoger:</p>
      <ul>
        <li><strong>Mediciones exactas</strong>: metros cuadrados de suelo, paredes, techo. Metros lineales de rodapié, cornisas, tuberías. No estimes, mide. Las estimaciones te cuestan dinero.</li>
        <li><strong>Estado actual</strong>: fotos del antes. Identifica posibles problemas: humedades, instalaciones antiguas, elementos de amianto, accesos difíciles para escombro.</li>
        <li><strong>Qué quiere el cliente</strong>: escucha antes de proponer. ¿Quiere una reforma básica o de alta gama? ¿Tiene preferencias de materiales? ¿Cuál es su presupuesto orientativo?</li>
        <li><strong>Condiciones de la obra</strong>: ¿hay ascensor o hay que subir material por escaleras? ¿Se puede poner contenedor en la calle? ¿Hay vecinos sensibles al ruido? ¿Necesita licencia de obra?</li>
      </ul>

      <h2>Paso 2: Estructura del presupuesto</h2>
      <p>
        Un presupuesto profesional tiene esta estructura:
      </p>
      <ol>
        <li><strong>Cabecera</strong>: tu logo, nombre de empresa, CIF, dirección, teléfono, email. Los datos del cliente: nombre, dirección de la obra, fecha del presupuesto y número de presupuesto.</li>
        <li><strong>Capítulos</strong>: agrupa las partidas por fases de obra. Los capítulos habituales son: Demolición, Albañilería, Fontanería, Electricidad, Solados y Alicatados, Carpintería, Pintura, Limpieza.</li>
        <li><strong>Partidas</strong>: dentro de cada capítulo, cada línea es una partida con: concepto, unidad de medida (m², ud, ml, pa), cantidad, precio unitario y total.</li>
        <li><strong>Resumen</strong>: subtotal, IVA (10% o 21% según corresponda) y total.</li>
        <li><strong>Condiciones</strong>: plazo de ejecución, forma de pago, validez del presupuesto, qué incluye y qué no.</li>
      </ol>

      <h2>Paso 3: Calcular las partidas</h2>
      <p>
        Cada partida debe tener un precio justo: ni tan bajo que pierdas dinero, ni tan alto que pierdas al cliente. Para calcular el precio de cada partida necesitas:
      </p>
      <ul>
        <li><strong>Coste de material</strong>: el precio que pagas tú por los materiales. Pide presupuesto a tus proveedores antes de hacer el tuyo.</li>
        <li><strong>Coste de mano de obra</strong>: las horas que va a llevar esa partida multiplicadas por el coste/hora de tu equipo (incluyendo seguros sociales, vacaciones, etc.).</li>
        <li><strong>Margen de beneficio</strong>: el porcentaje que añades para tu beneficio. Un margen sano está entre el 15% y el 25% dependiendo del tipo de obra y la competencia en tu zona.</li>
      </ul>
      <p>
        <strong>Fórmula</strong>: Precio partida = (Coste material + Coste mano de obra) × (1 + Margen/100)
      </p>
      <p>
        Ejemplo: unos azulejos cuestan 25€/m² (material), la mano de obra de colocación cuesta 20€/m², y tu margen es del 20%. Precio final = (25 + 20) × 1.20 = 54€/m².
      </p>

      <h2>Paso 4: Opciones (básico, medio, premium)</h2>
      <p>
        Este es el truco que más presupuestos cierra: en vez de presentar un solo precio, presenta tres opciones. El efecto psicológico es potente: el cliente deja de pensar "¿acepto o no?" y empieza a pensar "¿cuál elijo?".
      </p>
      <ul>
        <li><strong>Opción básica</strong>: materiales de gama media-baja, acabados estándar. Es la opción más económica.</li>
        <li><strong>Opción media</strong>: materiales de gama media, mejores acabados. Es la que más se elige (efecto ancla).</li>
        <li><strong>Opción premium</strong>: materiales de alta gama, acabados de lujo, detalles extra. Aunque no se elija, hace que la opción media parezca razonable.</li>
      </ul>
      <p>
        Con <Link href="/presupuestos-reforma">ObraBox</Link> puedes crear presupuestos con opciones directamente, cada una con sus partidas y totales independientes.
      </p>

      <h2>Paso 5: Lo que NO debe faltar en tu presupuesto</h2>
      <ul>
        <li><strong>Plazo de ejecución</strong>: "La obra se ejecutará en X semanas laborables a partir de la fecha de inicio."</li>
        <li><strong>Forma de pago</strong>: "30% al inicio de la obra, 40% a mitad de obra, 30% a la entrega." Nunca aceptes 100% al final. Nunca.</li>
        <li><strong>Validez</strong>: "Este presupuesto tiene una validez de 30 días." Los precios de materiales cambian.</li>
        <li><strong>Qué incluye y qué no</strong>: "Incluye: materiales, mano de obra, retirada de escombro. No incluye: licencias, tasas municipales, electrodomésticos, mobiliario."</li>
        <li><strong>Cláusula de extras</strong>: "Cualquier trabajo no incluido en este presupuesto se comunicará al cliente con su coste antes de ejecutarlo y requerirá aprobación por escrito."</li>
      </ul>

      <h2>Paso 6: El margen oculto</h2>
      <p>
        Un error muy común es no calcular bien el margen de beneficio. Muchos reformistas ponen el precio "a ojo" sin saber realmente cuánto van a ganar. Lo correcto es calcular el coste real (material + mano de obra) y añadir un margen.
      </p>
      <p>
        El margen debe ser <strong>invisible para el cliente</strong>. En el presupuesto que le envías, el cliente ve el precio final de cada partida. El desglose coste/margen es solo para ti. Con ObraBox, puedes configurar el margen por partida y el sistema calcula el precio final automáticamente. En el PDF que recibe el cliente, el margen no aparece.
      </p>

      <h2>Paso 7: Presentación y envío</h2>
      <p>
        La presentación importa más de lo que crees. Un presupuesto en PDF con tu logo, bien formateado y con diseño limpio transmite profesionalidad. Un presupuesto en un Word sin formato o en un WhatsApp a mano transmite lo contrario.
      </p>
      <p>Consejos para el envío:</p>
      <ul>
        <li>Envía el presupuesto el mismo día o al día siguiente de la visita. La rapidez vende.</li>
        <li>Acompaña el PDF con un mensaje personalizado: "Hola María, aquí tienes el presupuesto para la reforma de tu baño. He incluido tres opciones para que elijas la que más te encaje."</li>
        <li>Si el cliente no responde en 3 días, llámale. No esperes a que te llame él.</li>
        <li>Si el cliente pide rebajar el precio, no bajes el margen: reduce el alcance. "Puedo bajar el precio si usamos un azulejo más económico" es mejor que "te hago un descuento".</li>
      </ul>

      <h2>Paso 8: Seguimiento</h2>
      <p>
        El 70% de los presupuestos que se pierden no se pierden por precio. Se pierden porque el reformista no hace seguimiento. Un <Link href="/crm-reformas">CRM para reformas</Link> te ayuda a registrar cada contacto y no dejar que ningún presupuesto muera por abandono.
      </p>
      <p>Protocolo de seguimiento recomendado:</p>
      <ol>
        <li>Día 0: envío del presupuesto</li>
        <li>Día 3: llamada o WhatsApp preguntando si lo ha visto y si tiene dudas</li>
        <li>Día 7: segundo contacto ofreciendo aclarar cualquier punto</li>
        <li>Día 14: tercer contacto preguntando si ha tomado decisión</li>
        <li>Día 30: contacto final antes de que el presupuesto expire</li>
      </ol>

      <h2>Errores que debes evitar</h2>
      <ul>
        <li><strong>Presupuestar sin visitar</strong>: nunca des un precio sin ver la obra. Las sorpresas siempre salen caras.</li>
        <li><strong>No desglosar</strong>: un presupuesto con una sola línea "Reforma baño: 8.000€" no inspira confianza. Desglosa por capítulos y partidas.</li>
        <li><strong>Olvidar los extras</strong>: siempre hay extras. Incluye una cláusula y gestiónalos correctamente con aprobación por escrito.</li>
        <li><strong>Tardar en enviar</strong>: si tardas una semana en enviar el presupuesto, el cliente ya habrá contactado a 3 competidores más.</li>
        <li><strong>No hacer seguimiento</strong>: enviar y esperar es perder dinero.</li>
      </ul>

      <h2>Resumen rápido</h2>
      <p>
        Un presupuesto profesional: se basa en mediciones reales, desglosa por capítulos y partidas, incluye opciones (básico/medio/premium), tiene condiciones claras, se envía rápido en PDF con tu logo, y se acompaña de seguimiento activo. Si haces todo esto, cerrarás más obras que tu competencia.
      </p>
    </BlogArticle>
  );
}
