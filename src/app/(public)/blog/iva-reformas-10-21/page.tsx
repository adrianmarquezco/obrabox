import type { Metadata } from "next";
import BlogArticle from "@/components/public/BlogArticle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IVA en Reformas: ¿Cuándo Aplica el 10% y Cuándo el 21%? Guía Completa",
  description: "Guía completa sobre el IVA en reformas: cuándo aplicar el 10% reducido, cuándo el 21% general, requisitos legales y ejemplos prácticos para reformistas.",
  alternates: { canonical: "/blog/iva-reformas-10-21" },
};

export default function IVAReformasArticle() {
  return (
    <BlogArticle
      title="IVA en Reformas: ¿Cuándo Aplica el 10% y Cuándo el 21%? Guía Completa"
      fecha="2026-06-15"
      categoria="Legal"
      relatedLinks={[
        { href: "/blog/como-hacer-presupuesto-reforma", label: "Cómo hacer un presupuesto de reforma profesional" },
        { href: "/blog/cobrar-reforma-impagos", label: "Cómo cobrar una reforma y evitar impagos" },
        { href: "/calculadora/iva-reformas", label: "Calculadora de IVA en reformas" },
        { href: "/facturacion-reformas", label: "Facturación para empresas de reformas" },
      ]}
    >
      <p>
        El IVA en las reformas es uno de los temas que más quebraderos de cabeza da a los profesionales del sector. ¿Puedo facturar al 10%? ¿Cuándo tengo que aplicar el 21%? ¿Qué pasa si el cliente es una empresa? ¿Y si la vivienda tiene menos de dos años? Estas son preguntas que se repiten constantemente y cuya respuesta incorrecta puede suponer una sanción de Hacienda.
      </p>
      <p>
        En esta guía vamos a explicar, con ejemplos prácticos y lenguaje claro, cuándo aplica cada tipo de IVA en las reformas en España. Al final del artículo sabrás exactamente qué tipo impositivo aplicar en cada situación.
      </p>

      <h2>El IVA reducido del 10% en reformas</h2>
      <p>
        La Ley del IVA (artículo 91.uno.2.10º) establece que se puede aplicar el tipo reducido del 10% en las obras de renovación y reparación de viviendas cuando se cumplen <strong>todos</strong> estos requisitos simultáneamente:
      </p>
      <ol>
        <li><strong>La vivienda es de uso particular</strong>: debe ser una vivienda destinada a uso residencial privado. No aplica para locales comerciales, oficinas, naves industriales ni edificios públicos.</li>
        <li><strong>La vivienda tiene más de 2 años de antigüedad</strong>: se cuenta desde la fecha de la primera licencia de ocupación o, en su defecto, desde la fecha de construcción. Si la vivienda es nueva (menos de 2 años), se aplica el 21%.</li>
        <li><strong>Quien contrata es el particular</strong>: el destinatario de la obra debe ser una persona física que utiliza la vivienda como residencia. Si quien contrata es una empresa, comunidad de propietarios (para zonas comunes) o un promotor, se aplica el 21%.</li>
        <li><strong>El coste de los materiales no supera el 40% del total</strong>: si la proporción de materiales aportados por el reformista supera el 40% del coste total de la obra, se aplica el 21% porque se considera una entrega de bienes, no una prestación de servicios.</li>
      </ol>

      <h2>¿Qué se considera "renovación y reparación"?</h2>
      <p>
        La normativa incluye como renovación y reparación las siguientes obras:
      </p>
      <ul>
        <li>Reformas de baños y cocinas</li>
        <li>Cambio de suelos, alicatados y revestimientos</li>
        <li>Pintura interior y exterior de la vivienda</li>
        <li>Instalaciones eléctricas y de fontanería</li>
        <li>Cambio de ventanas y puertas</li>
        <li>Instalación de calefacción, aire acondicionado o caldera</li>
        <li>Impermeabilización de cubiertas y terrazas</li>
        <li>Trabajos de carpintería interior</li>
        <li>Reparación de humedades y grietas</li>
      </ul>
      <p>
        <strong>No se consideran renovación y reparación</strong> (y por tanto van al 21%): la construcción de una vivienda nueva, las ampliaciones de superficie (añadir una planta, cerrar una terraza para ampliar), la construcción de piscinas, garajes independientes o edificaciones nuevas dentro de la parcela.
      </p>

      <h2>El IVA general del 21%: cuándo aplica</h2>
      <p>
        Se aplica el 21% en los siguientes casos, sin excepción:
      </p>
      <ul>
        <li><strong>Reformas de locales comerciales, oficinas y naves</strong>: cualquier obra en un inmueble que no sea vivienda particular tributa al 21%.</li>
        <li><strong>Viviendas de menos de 2 años</strong>: si la vivienda es nueva, toda la reforma va al 21%.</li>
        <li><strong>Quien contrata es una empresa o profesional</strong>: aunque la reforma sea en una vivienda, si quien paga la factura es una sociedad (S.L., S.A.), se aplica el 21%.</li>
        <li><strong>Materiales superiores al 40%</strong>: si proporcionas más materiales que mano de obra (en coste), toda la factura va al 21%.</li>
        <li><strong>Obras de nueva construcción o ampliación</strong>: construir algo nuevo, aunque sea dentro de una vivienda existente, tributa al 21%.</li>
        <li><strong>Comunidades de propietarios (zonas comunes)</strong>: la reforma del portal, la fachada o el ascensor de una comunidad va al 21%, ya que el destinatario no es un particular sino la comunidad como entidad.</li>
      </ul>

      <h2>Ejemplos prácticos</h2>
      <h3>Ejemplo 1: Reforma de baño en vivienda habitual</h3>
      <p>
        María quiere reformar el baño de su piso en Madrid. El piso tiene 15 años y es su vivienda habitual. El presupuesto es de 6.000€ de mano de obra y 3.500€ de materiales (sanitarios, azulejos, grifería). Los materiales suponen el 37% del total (3.500 / 9.500 = 36,8%). <strong>Se aplica IVA del 10%</strong> porque se cumplen todos los requisitos: vivienda particular, más de 2 años, contrata un particular, y los materiales no superan el 40%.
      </p>

      <h3>Ejemplo 2: Reforma de cocina con electrodomésticos de alta gama</h3>
      <p>
        Pedro quiere reformar la cocina e incluir electrodomésticos Miele por valor de 8.000€. El total de la obra es 18.000€, de los cuales 10.000€ son materiales y electrodomésticos (55%). Como los materiales superan el 40%, <strong>se aplica IVA del 21%</strong> a toda la factura. Consejo: facturar los electrodomésticos por separado (con su factura al 21%) y la reforma de obra (al 10%) si la proporción de materiales de la obra en sí no supera el 40%.
      </p>

      <h3>Ejemplo 3: Reforma de local comercial</h3>
      <p>
        Una empresa quiere reformar su oficina. Independientemente de la antigüedad del local o la proporción de materiales, <strong>siempre es 21%</strong> porque no es vivienda particular.
      </p>

      <h3>Ejemplo 4: Pintar el piso de un inquilino</h3>
      <p>
        El propietario (persona física) contrata pintar el piso que tiene alquilado. El piso tiene 8 años. Aunque el propietario es particular, el piso no es su vivienda habitual sino un inmueble de inversión. Según la interpretación de Hacienda, <strong>se puede aplicar el 10%</strong> siempre que el destinatario sea el particular propietario (no la empresa gestora si la hay) y se cumplan el resto de requisitos.
      </p>

      <h3>Ejemplo 5: Cerrar una terraza para ampliar el salón</h3>
      <p>
        Un particular quiere cerrar la terraza de su piso (de 20 años) para ganar metros de salón. Esto se considera <strong>ampliación</strong>, no renovación. <strong>IVA 21%</strong>.
      </p>

      <h2>La regla del 40% de materiales: cómo calcularla</h2>
      <p>
        Este es uno de los puntos más conflictivos. La regla dice que si el coste de los materiales que tú aportas como reformista supera el 40% del coste total de la obra (materiales + mano de obra), se considera una entrega de bienes y no una prestación de servicios, por lo que se aplica el 21%.
      </p>
      <p>
        <strong>Importante</strong>: solo cuentan los materiales que tú compras y aportas. Si el cliente compra sus propios azulejos o sanitarios y tú solo pones la mano de obra, esos materiales no cuentan para el cálculo.
      </p>
      <p>
        <strong>Consejo práctico</strong>: si ves que la proporción de materiales va a estar cerca del 40%, valora facturar los materiales y la mano de obra por separado. La factura de materiales irá al 21% y la de mano de obra al 10%. Esto es perfectamente legal siempre que ambas facturas reflejen la realidad.
      </p>

      <h2>Subcontratación y IVA</h2>
      <p>
        Cuando subcontratas a otro profesional para una parte de la obra, la factura que te emite el subcontratista a ti va al 21% (es una operación entre empresarios). Tú, a su vez, facturas al cliente final con el IVA que corresponda según los criterios anteriores.
      </p>
      <p>
        Si eres subcontratista y facturas a la empresa principal (no al cliente final), tu factura es siempre al 21%, independientemente de que la obra final tribute al 10% para el cliente.
      </p>

      <h2>Errores comunes que debes evitar</h2>
      <ul>
        <li><strong>Aplicar el 10% a locales</strong>: nunca, aunque el local lleve 30 años construido.</li>
        <li><strong>No verificar la antigüedad</strong>: pide la escritura o la cédula de habitabilidad para confirmar que la vivienda tiene más de 2 años.</li>
        <li><strong>No calcular el porcentaje de materiales</strong>: si te acercas al 40%, haz el cálculo antes de emitir la factura.</li>
        <li><strong>Aplicar el 10% cuando contrata una empresa</strong>: aunque la reforma sea en la vivienda del administrador, si quien paga es la S.L., es 21%.</li>
        <li><strong>No guardar documentación</strong>: conserva un documento firmado por el cliente confirmando que la vivienda es de uso particular, tiene más de 2 años, y que es el destinatario final de la obra.</li>
      </ul>

      <h2>Consejos para reformistas</h2>
      <ol>
        <li><strong>Usa una <Link href="/calculadora/iva-reformas">calculadora de IVA para reformas</Link></strong> antes de hacer cada presupuesto.</li>
        <li><strong>Incluye el tipo de IVA en el presupuesto</strong>: que el cliente sepa desde el principio si su reforma va al 10% o al 21%.</li>
        <li><strong>Documenta los requisitos</strong>: pide al cliente una declaración firmada de que la vivienda cumple los requisitos para el 10%.</li>
        <li><strong>Consulta a tu gestor</strong> si tienes dudas sobre un caso concreto. El coste de una consulta es mucho menor que una sanción de Hacienda.</li>
        <li><strong>Usa <Link href="/facturacion-reformas">software de facturación para reformas</Link></strong> que te permita seleccionar el IVA correcto en cada factura y exportar los datos para tu gestoría.</li>
      </ol>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Puedo aplicar el 10% a una segunda vivienda?</h3>
      <p>Sí, siempre que sea de uso residencial particular (no un local) y cumpla el resto de requisitos. No es necesario que sea la vivienda habitual, solo que sea vivienda de uso particular.</p>

      <h3>¿Y si la reforma la paga una aseguradora?</h3>
      <p>Si quien contrata y paga es la aseguradora (empresa), se aplica el 21%. Si la aseguradora paga al particular y este te contrata a ti, se puede aplicar el 10% si se cumplen los requisitos.</p>

      <h3>¿El IVA del 10% aplica también a la certificación energética?</h3>
      <p>No. La certificación energética es un servicio profesional independiente que tributa al 21%.</p>

      <h3>¿Puedo aplicar IVA del 10% a obras de eficiencia energética?</h3>
      <p>Sí, las obras de mejora de eficiencia energética en viviendas de más de 2 años tributan al 10%. Además, algunas pueden beneficiarse temporalmente de tipos superreducidos si hay bonificaciones vigentes. Consulta la normativa actual.</p>
    </BlogArticle>
  );
}
