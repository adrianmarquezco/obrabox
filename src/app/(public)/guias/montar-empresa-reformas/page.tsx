import type { Metadata } from "next";
import InfoPage from "@/components/public/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Montar una Empresa de Reformas desde Cero — Guía Completa",
  description: "Guía paso a paso para montar tu empresa de reformas en España: forma jurídica, licencias, seguros, herramientas, captación de clientes y más.",
  alternates: { canonical: "/guias/montar-empresa-reformas" },
};

export default function Page() {
  return (
    <InfoPage
      titulo="Cómo Montar una Empresa de Reformas desde Cero"
      breadcrumb={[{ href: "/guias/montar-empresa-reformas", label: "Guías" }]}
      relatedLinks={[
        { href: "/guias/facturacion-reformas", label: "Guía de facturación para reformas" },
        { href: "/normativa/seguro-responsabilidad-civil", label: "Seguro de responsabilidad civil" },
        { href: "/blog/gestionar-empresa-reformas", label: "Cómo gestionar una empresa de reformas" },
        { href: "/para-autonomos", label: "ObraBox para autónomos" },
      ]}
    >
      <p>Montar una empresa de reformas en España es una de las opciones más accesibles para profesionales de la construcción que quieren trabajar por su cuenta. La demanda es alta, la inversión inicial es moderada y el margen de beneficio puede ser muy atractivo. Pero hay que hacerlo bien desde el principio para evitar problemas legales, fiscales y de reputación.</p>

      <h2>1. Elige tu forma jurídica</h2>
      <p>Las dos opciones más habituales son:</p>
      <ul>
        <li><strong>Autónomo (persona física)</strong>: la forma más sencilla y rápida. Te das de alta en Hacienda (modelo 036/037) y en el RETA (Régimen Especial de Trabajadores Autónomos). Cuota de autónomo: desde 80€/mes con la tarifa plana para nuevos autónomos. Ideal si empiezas solo.</li>
        <li><strong>Sociedad Limitada (S.L.)</strong>: capital social mínimo de 1€ (desde la Ley Crea y Crece). Protege tu patrimonio personal frente a deudas de la empresa. Recomendable cuando facturas más de 40.000-50.000€/año o cuando tienes empleados.</li>
      </ul>

      <h2>2. Trámites obligatorios</h2>
      <ol>
        <li><strong>Alta en Hacienda</strong>: modelo 036/037 con el epígrafe del IAE correspondiente. Para reformas, los epígrafes más habituales son 501.3 (albañilería y pequeños trabajos de construcción) y 505.5 (carpintería).</li>
        <li><strong>Alta en la Seguridad Social</strong>: RETA para autónomos o Régimen General para administradores de S.L.</li>
        <li><strong>Seguro de responsabilidad civil</strong>: no es legalmente obligatorio en todos los casos, pero es imprescindible. Un accidente en una obra puede arruinarte. Cuesta entre 300€ y 1.500€/año.</li>
        <li><strong>Inscripción en el REA</strong>: el Registro de Empresas Acreditadas es obligatorio si vas a subcontratar en obras de construcción (Ley 32/2006).</li>
        <li><strong>Prevención de riesgos laborales</strong>: si tienes empleados, necesitas un plan de PRL y contratar un servicio de prevención ajeno.</li>
      </ol>

      <h2>3. Herramientas esenciales</h2>
      <p>No necesitas una oficina ni un equipamiento caro para empezar. Lo básico:</p>
      <ul>
        <li><strong>Furgoneta</strong>: nueva o de segunda mano, es tu herramienta más importante. Renting desde 300€/mes.</li>
        <li><strong>Herramienta profesional</strong>: invierte en calidad para las herramientas que usas a diario. El resto, alquila.</li>
        <li><strong>Software de gestión</strong>: <Link href="/">ObraBox</Link> te permite gestionar presupuestos, obras, clientes y facturación desde el móvil. Plan gratuito para empezar.</li>
        <li><strong>Cuenta bancaria profesional</strong>: separa las finanzas personales de las de la empresa desde el primer día.</li>
        <li><strong>Gestoría</strong>: un buen gestor que conozca el sector de la construcción te ahorra problemas con Hacienda.</li>
      </ul>

      <h2>4. Tus primeros clientes</h2>
      <p>La captación de clientes es el mayor reto al empezar. Las estrategias más efectivas para nuevos reformistas:</p>
      <ul>
        <li><strong>Red de contactos</strong>: amigos, familia, vecinos. Tu primera obra será por recomendación.</li>
        <li><strong>Google Business Profile</strong>: crea tu perfil gratuito. Es lo primero que buscan los potenciales clientes.</li>
        <li><strong>Instagram</strong>: publica fotos de tus trabajos. Los antes/después generan mucho interés.</li>
        <li><strong>Presupuestos profesionales</strong>: un presupuesto con logo, partidas detalladas y opciones genera más confianza que un WhatsApp con un número.</li>
      </ul>
      <p>Lee nuestra <Link href="/blog/como-captar-clientes-reformas">guía completa de captación de clientes para reformistas</Link>.</p>

      <h2>5. Precios y márgenes</h2>
      <p>El error más común al empezar es cobrar demasiado barato. Calcula tus costes reales (material + mano de obra + seguros + impuestos + amortización de herramienta) y añade un margen del 20-25%. Si cobras barato, trabajarás mucho y ganarás poco. Y el cliente barato es el que más problemas da.</p>

      <h2>6. Obligaciones fiscales</h2>
      <ul>
        <li><strong>IVA</strong>: declaración trimestral (modelo 303). Cobra el IVA a tus clientes y deduce el IVA de tus compras.</li>
        <li><strong>IRPF</strong>: retenciones trimestrales (modelo 130) si eres autónomo. Los primeros años puedes aplicar una retención reducida del 7%.</li>
        <li><strong>Modelo 347</strong>: declaración anual de operaciones con terceros superiores a 3.005,06€.</li>
        <li><strong>Impuesto de Sociedades</strong>: si tienes S.L., tipo del 25% (15% los dos primeros años).</li>
      </ul>
      <p>Consulta nuestra <Link href="/guias/facturacion-reformas">guía de facturación para reformas</Link>.</p>

      <h2>7. Consejos de reformistas veteranos</h2>
      <ul>
        <li>No aceptes todas las obras: selecciona las que puedes hacer bien y a tiempo.</li>
        <li>Documenta todo: fotos del antes, presupuesto firmado, extras aprobados por escrito.</li>
        <li>Cobra por adelantado: un 30% al inicio, 40% a mitad, 30% al final. Nunca todo al final.</li>
        <li>Digitaliza desde el principio: llevar la gestión en papel solo funciona con 1-2 obras. Cuando crezcas, te arrepentirás de no haber empezado antes.</li>
        <li>Cuida tu reputación: una mala reseña en Google puede costarte 10 clientes potenciales.</li>
      </ul>
    </InfoPage>
  );
}
