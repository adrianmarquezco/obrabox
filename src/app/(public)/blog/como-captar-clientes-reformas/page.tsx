import type { Metadata } from "next";
import BlogArticle from "@/components/public/BlogArticle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Conseguir Clientes para tu Empresa de Reformas en 2026",
  description: "Estrategias probadas para captar clientes en reformas: Google, redes sociales, recomendaciones, directorios, marketing local y más.",
  alternates: { canonical: "/blog/como-captar-clientes-reformas" },
};

export default function CaptarClientesArticle() {
  return (
    <BlogArticle
      title="Cómo Conseguir Clientes para tu Empresa de Reformas en 2026"
      fecha="2026-06-10"
      categoria="Marketing"
      relatedLinks={[
        { href: "/blog/marketing-reformistas", label: "Marketing digital para reformistas" },
        { href: "/blog/como-hacer-presupuesto-reforma", label: "Cómo hacer presupuestos que conviertan" },
        { href: "/crm-reformas", label: "CRM para empresas de reformas" },
        { href: "/directorio", label: "Directorio de profesionales ObraBox" },
      ]}
    >
      <p>
        Conseguir clientes de forma constante es el reto número uno de cualquier empresa de reformas. Da igual lo bueno que seas con las manos: si no llegan clientes, no hay facturación. En 2026, las formas de captar clientes han cambiado. El boca a boca sigue siendo el rey, pero ya no es suficiente. Necesitas una estrategia que combine lo presencial con lo digital.
      </p>
      <p>
        En este artículo te presentamos las 10 estrategias que mejor funcionan para captar clientes en el sector de reformas en España, ordenadas de mayor a menor impacto según la experiencia de reformistas reales.
      </p>

      <h2>1. Recomendaciones y boca a boca (el rey)</h2>
      <p>
        El 60-70% de los clientes de la mayoría de empresas de reformas llegan por recomendación. Un cliente satisfecho es tu mejor comercial. Pero el boca a boca no se puede dejar al azar: hay que cultivarlo.
      </p>
      <ul>
        <li><strong>Pide reseñas activamente</strong>: al terminar cada obra, envía al cliente un enlace directo a tu perfil de Google Business para que deje una reseña. Con <Link href="/presupuestos-reforma">ObraBox</Link> puedes automatizar este envío.</li>
        <li><strong>Fotos antes/después</strong>: cada obra terminada es contenido para redes. Pide permiso al cliente y publica las comparativas.</li>
        <li><strong>Programa de referidos</strong>: ofrece un descuento o regalo al cliente que te recomiende a alguien que acabe contratando.</li>
      </ul>

      <h2>2. Google Business Profile (antes Google My Business)</h2>
      <p>
        Si solo puedes hacer una cosa de marketing, que sea tener un perfil de Google Business impecable. Cuando alguien busca "reformista en [tu ciudad]", los perfiles de Google Business aparecen en el mapa antes que cualquier web.
      </p>
      <ul>
        <li>Completa todos los datos: nombre, dirección, teléfono, horario, web, descripción.</li>
        <li>Sube fotos de calidad de tus obras (mínimo 20-30).</li>
        <li>Consigue reseñas: necesitas al menos 15-20 reseñas con 4.5+ estrellas para destacar.</li>
        <li>Publica novedades y ofertas regularmente (Google Posts).</li>
        <li>Responde a todas las reseñas, positivas y negativas.</li>
      </ul>

      <h2>3. Instagram: el escaparate visual</h2>
      <p>
        Instagram es la red social natural para reformistas. Las fotos de reformas generan engagement: antes/después, timelapses, detalles de acabados. No necesitas ser un experto en marketing, solo ser constante.
      </p>
      <ul>
        <li>Publica 3-4 veces por semana</li>
        <li>Usa stories para mostrar el día a día de la obra</li>
        <li>Reels de antes/después (el formato que más alcance genera)</li>
        <li>Hashtags locales: #reformasmadrid #reformistamadrid #reformasbano</li>
        <li>Responde a todos los comentarios y mensajes directos</li>
      </ul>

      <h2>4. Web propia con SEO local</h2>
      <p>
        Tu web es tu oficina digital. No necesitas una web espectacular, pero sí una que aparezca en Google cuando alguien busque tus servicios en tu zona. Las claves del SEO local para reformistas:
      </p>
      <ul>
        <li>Página por cada servicio: "reformas de baños en [ciudad]", "reformas de cocinas en [ciudad]"</li>
        <li>Incluir tu ciudad y zona en los títulos y textos</li>
        <li>Fotos de obras reales con texto descriptivo</li>
        <li>Datos de contacto visibles y formulario de solicitud de presupuesto</li>
        <li>Blog con artículos sobre temas que buscan tus potenciales clientes</li>
      </ul>

      <h2>5. Directorios de profesionales</h2>
      <p>
        Estar en directorios de reformas te da visibilidad y backlinks (que ayudan a tu SEO). Los más relevantes en España incluyen Habitissima, Houzz, el <Link href="/directorio">directorio de ObraBox</Link>, y directorios locales de tu municipio.
      </p>

      <h2>6. Publicidad en Google (Google Ads)</h2>
      <p>
        Para resultados rápidos, Google Ads es efectivo. Cuando alguien busca "presupuesto reforma baño madrid", tu anuncio puede aparecer el primero. El coste por clic en reformas oscila entre 2€ y 8€ según la ciudad y la competencia.
      </p>
      <p>
        Consejos: empieza con un presupuesto bajo (300-500€/mes), segmenta por tu zona de trabajo, y mide el coste por lead. Si cada clic cuesta 4€ y necesitas 10 clics para un contacto, cada lead te cuesta 40€. Si cierras 1 de cada 4 leads, cada cliente te cuesta 160€. ¿Eso es rentable para ti? Depende de tu ticket medio.
      </p>

      <h2>7. Facebook y grupos locales</h2>
      <p>
        Los grupos de Facebook de barrios y municipios son una mina de leads. La gente pregunta "¿alguien conoce un buen reformista?" y si estás atento, puedes responder con tu portfolio. No hagas spam: aporta valor, responde dudas, y la gente vendrá a ti.
      </p>

      <h2>8. Cartelería en obra</h2>
      <p>
        Mientras estás trabajando en una reforma, pon un cartel en la fachada o portal con tu nombre, teléfono y web. Los vecinos del edificio y de la calle te verán trabajando. Es publicidad gratuita y local.
      </p>

      <h2>9. Colaboraciones con otros profesionales</h2>
      <p>
        Inmobiliarias, arquitectos, interioristas, administradores de fincas... todos ellos tienen clientes que necesitan reformas. Crea relaciones con estos profesionales y establece un sistema de referidos cruzado.
      </p>

      <h2>10. Email marketing</h2>
      <p>
        Mantener una base de datos de clientes y contactos a los que enviar un email mensual con tus últimas obras, consejos y ofertas es una forma de mantenerte en la mente de la gente. Cuando necesiten una reforma, pensarán en ti primero.
      </p>

      <h2>¿Cuánto debería invertir en marketing?</h2>
      <p>
        Una regla general para empresas de reformas: invierte entre el 3% y el 8% de tu facturación en marketing. Si facturas 300.000€ al año, eso es entre 9.000€ y 24.000€ al año, o entre 750€ y 2.000€ al mes. Si empiezas y no tienes presupuesto, céntrate en Google Business, Instagram y recomendaciones: son gratis (excepto tu tiempo).
      </p>

      <h2>La importancia de medir</h2>
      <p>
        De nada sirve invertir en marketing si no mides los resultados. Con un <Link href="/crm-reformas">CRM como el de ObraBox</Link>, puedes registrar el origen de cada lead y saber exactamente cuántos clientes te llegan de cada canal. Si Google Ads te genera 10 leads al mes pero solo cierras 1, quizás Instagram te genera 5 pero cierras 3. Los datos te dicen dónde poner el dinero.
      </p>
    </BlogArticle>
  );
}
