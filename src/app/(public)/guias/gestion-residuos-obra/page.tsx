import type { Metadata } from "next";
import InfoPage from "@/components/public/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestión de Residuos en Obras: Obligaciones Legales y Cómo Cumplirlas",
  description: "Guía práctica sobre gestión de residuos de construcción y demolición (RCD): normativa, obligaciones, tipos de residuos y cómo cumplir la ley.",
  alternates: { canonical: "/guias/gestion-residuos-obra" },
};

export default function Page() {
  return (
    <InfoPage
      titulo="Gestión de Residuos en Obras: Obligaciones Legales y Cómo Cumplirlas"
      breadcrumb={[{ href: "/guias/gestion-residuos-obra", label: "Guías" }]}
      relatedLinks={[
        { href: "/normativa/gestion-residuos-obra", label: "Normativa de gestión de residuos (RCD)" },
        { href: "/gestion-obra-completa", label: "Gestión de obras con ObraBox" },
        { href: "/guias/montar-empresa-reformas", label: "Cómo montar una empresa de reformas" },
      ]}
    >
      <p>La gestión de residuos de construcción y demolición (RCD) es una obligación legal para toda empresa que realice obras. El Real Decreto 105/2008 y la Ley 7/2022 de residuos establecen las responsabilidades del productor y del poseedor de residuos. Incumplirlas puede suponer multas de hasta 1.750.000€ en casos graves.</p>

      <h2>¿Qué son los RCD?</h2>
      <p>Los residuos de construcción y demolición incluyen todo el material sobrante de una obra: escombro (ladrillos, hormigón, azulejos), madera, metales, plásticos, vidrio, materiales aislantes, tierra y piedras, y residuos peligrosos (amianto, pinturas, disolventes). Se clasifican según el catálogo europeo de residuos (LER) en el capítulo 17.</p>

      <h2>Obligaciones del reformista</h2>
      <h3>Como poseedor de residuos</h3>
      <ul>
        <li><strong>Separación en origen</strong>: a partir de ciertas cantidades, debes separar los residuos por tipos (hormigón, madera, metal, plástico, vidrio, papel).</li>
        <li><strong>Entrega a gestor autorizado</strong>: los residuos deben entregarse a una empresa gestora autorizada. Nunca abandones residuos en la vía pública o en vertederos ilegales.</li>
        <li><strong>Documentación</strong>: conserva los albaranes de entrega y los certificados de gestión de residuos durante al menos 5 años.</li>
        <li><strong>Estudio de gestión de residuos</strong>: para obras que requieran proyecto técnico, el proyecto debe incluir un estudio de gestión de residuos.</li>
      </ul>

      <h3>Residuos peligrosos</h3>
      <p>El amianto es el más frecuente en reformas de edificios antiguos (construidos antes de 2002). Si encuentras materiales con amianto, <strong>debes parar la obra</strong> y contratar a una empresa inscrita en el RERA (Registro de Empresas con Riesgo de Amianto). Está prohibido que tú lo retires.</p>

      <h2>¿Cuánto cuesta gestionar los residuos?</h2>
      <ul>
        <li><strong>Contenedor de 5 m³</strong> (lo más habitual en reformas de vivienda): entre 150€ y 350€ según ciudad.</li>
        <li><strong>Contenedor de 10 m³</strong> (reformas integrales o locales): entre 300€ y 600€.</li>
        <li><strong>Licencia de ocupación de vía pública</strong> para el contenedor: según ayuntamiento, entre 30€ y 150€.</li>
      </ul>

      <h2>Cómo gestionarlo con ObraBox</h2>
      <p>En la ficha de cada obra, ObraBox incluye una sección de gestión de residuos donde puedes registrar: tipo de contenedor, empresa transportista, fechas de entrega y recogida, coste, y adjuntar el certificado de gestión de residuos en PDF. Todo documentado y accesible si alguna vez tienes una inspección.</p>

      <h2>Consejos prácticos</h2>
      <ol>
        <li>Incluye el coste del contenedor en el presupuesto de la obra como partida visible.</li>
        <li>Pide siempre el certificado de gestión al transportista y guárdalo.</li>
        <li>Si la obra es pequeña (un baño), a veces es más económico llevar el escombro tú mismo a un punto limpio autorizado.</li>
        <li>Separa los metales: los chatarreros los recogen gratis o incluso te pagan.</li>
      </ol>
    </InfoPage>
  );
}
