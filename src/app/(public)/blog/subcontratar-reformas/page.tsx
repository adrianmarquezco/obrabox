import type { Metadata } from "next";
import BlogArticle from "@/components/public/BlogArticle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subcontratar en Reformas: Guía Legal y Práctica",
  description: "Guía completa sobre subcontratación en reformas: requisitos legales, libro de subcontratación, contratos, responsabilidades y mejores prácticas.",
  alternates: { canonical: "/blog/subcontratar-reformas" },
};

export default function SubcontratarReformasArticle() {
  return (
    <BlogArticle
      title="Subcontratar en Reformas: Guía Legal y Práctica"
      fecha="2026-05-28"
      categoria="Legal"
      relatedLinks={[
        { href: "/blog/licencia-obra-menor", label: "Licencia de obra menor: qué es y cuándo la necesitas" },
        { href: "/blog/seguro-responsabilidad-civil-reformas", label: "Seguro de responsabilidad civil para reformas" },
        { href: "/blog/gestionar-empresa-reformas", label: "Cómo gestionar una empresa de reformas" },
        { href: "/blog/cobrar-reforma-impagos", label: "Cómo cobrar una reforma y evitar impagos" },
      ]}
    >
      <p>
        La subcontratación es una práctica habitual en el sector de las reformas. Muy pocos profesionales pueden abarcar todos los oficios que requiere una obra integral: electricidad, fontanería, albañilería, pintura, carpintería, climatización... Lo normal es que el contratista principal coordine la obra y delegue trabajos especializados en otros profesionales o empresas. Pero subcontratar no es simplemente llamar a un conocido y pagarle en mano. Hay una normativa específica que regula esta práctica, y desconocerla puede salir muy caro.
      </p>
      <p>
        En esta guía vamos a repasar todo lo que necesitas saber para subcontratar de forma legal y eficiente: cuándo tiene sentido hacerlo, qué dice la ley, qué documentación necesitas y cómo protegerte ante posibles problemas.
      </p>

      <h2>Qué es la subcontratación en reformas</h2>
      <p>
        La subcontratación se produce cuando una empresa o autónomo (contratista principal) contrata a otra empresa o autónomo (subcontratista) para que ejecute una parte de los trabajos de una obra que el primero ha asumido frente al cliente final. El contratista principal mantiene la relación contractual con el cliente y la responsabilidad global sobre la obra, mientras que el subcontratista se encarga de un trabajo concreto dentro de ella.
      </p>
      <p>
        Es importante distinguir la subcontratación del trabajo con empleados propios. Si tienes a un electricista en plantilla, no es subcontratación. La subcontratación implica que el subcontratista es un tercero independiente, con su propia estructura empresarial, alta en Hacienda y Seguridad Social.
      </p>

      <h2>Cuándo tiene sentido subcontratar</h2>
      <p>
        La subcontratación es la solución lógica en varias situaciones que se repiten constantemente en el día a día de una empresa de reformas:
      </p>
      <ul>
        <li><strong>Oficios especializados</strong>: electricidad, fontanería, gas, climatización o telecomunicaciones requieren profesionales con titulación y habilitación específica. No puedes hacer una instalación eléctrica sin un instalador autorizado.</li>
        <li><strong>Picos de trabajo</strong>: cuando tienes varias obras simultáneas y tu equipo no da abasto, subcontratar te permite mantener el ritmo sin contratar personal fijo que luego no necesitarás.</li>
        <li><strong>Trabajos puntuales</strong>: alicatado, microcemento, suelos técnicos, impermeabilizaciones especiales... Son trabajos que no justifican tener un especialista en plantilla si no los haces a diario.</li>
        <li><strong>Reducción de costes fijos</strong>: mantener una plantilla grande implica nóminas, seguros sociales y obligaciones laborales permanentes. Subcontratar permite ajustar los recursos a cada proyecto.</li>
        <li><strong>Cobertura geográfica</strong>: si aceptas obras fuera de tu zona habitual, puede tener más sentido subcontratar a profesionales locales que desplazar a tu equipo.</li>
      </ul>

      <h2>Marco legal: Ley 32/2006 de subcontratación</h2>
      <p>
        La <strong>Ley 32/2006, de 18 de octubre, reguladora de la subcontratación en el sector de la construcción</strong>, es la norma principal que regula esta práctica en España. Fue desarrollada por el <strong>Real Decreto 1109/2007</strong> que aprueba su reglamento. Aunque la ley se centra en la construcción, sus principios aplican directamente al sector de las reformas cuando las obras tienen cierta entidad.
      </p>
      <p>
        Los objetivos principales de esta ley son:
      </p>
      <ul>
        <li>Garantizar la seguridad y salud de los trabajadores en las obras.</li>
        <li>Evitar cadenas de subcontratación excesivas que diluyan la responsabilidad.</li>
        <li>Asegurar que todas las empresas que participan en una obra cumplan los requisitos legales mínimos.</li>
        <li>Combatir la precariedad laboral y el fraude en el sector.</li>
      </ul>

      <h3>Requisitos para poder subcontratar</h3>
      <p>
        Según la Ley 32/2006, tanto el contratista principal como el subcontratista deben cumplir una serie de requisitos para poder participar en la cadena de subcontratación:
      </p>
      <ul>
        <li>Estar inscritos en el <strong>Registro de Empresas Acreditadas (REA)</strong> de la autoridad laboral competente.</li>
        <li>Contar con un porcentaje mínimo de <strong>trabajadores en plantilla con contrato indefinido</strong> (al menos el 30%, según la normativa vigente).</li>
        <li>Disponer de <strong>recursos humanos propios</strong> para la actividad que van a desarrollar, con la formación adecuada en prevención de riesgos laborales.</li>
        <li>Estar al corriente de sus obligaciones tributarias y con la Seguridad Social.</li>
      </ul>

      <h2>Límites en la cadena de subcontratación</h2>
      <p>
        Uno de los aspectos más importantes de la ley es la limitación del número de niveles de subcontratación. La cadena máxima permitida es:
      </p>
      <ol>
        <li><strong>Promotor</strong> contrata al <strong>contratista principal</strong>.</li>
        <li>El contratista principal puede subcontratar a un <strong>primer subcontratista</strong>.</li>
        <li>El primer subcontratista puede subcontratar a un <strong>segundo subcontratista</strong>.</li>
        <li>El segundo subcontratista puede subcontratar a un <strong>tercer subcontratista</strong>, pero este ya <strong>no puede volver a subcontratar</strong>.</li>
      </ol>
      <p>
        En total, la cadena permite un máximo de <strong>tres niveles de subcontratación</strong> por debajo del contratista principal. Además, los trabajadores autónomos que actúan como subcontratistas no pueden a su vez subcontratar los trabajos que se les han encomendado.
      </p>
      <p>
        Excepcionalmente, la dirección facultativa puede autorizar un nivel adicional de subcontratación cuando esté justificado por la complejidad de la obra, debiendo anotarlo en el Libro de Subcontratación.
      </p>

      <h2>El Libro de Subcontratación</h2>
      <p>
        El <strong>Libro de Subcontratación</strong> es un documento obligatorio que debe llevar el contratista principal en cada obra donde exista subcontratación. Se regula en el artículo 8 de la Ley 32/2006 y en los artículos 13 a 16 del Real Decreto 1109/2007.
      </p>
      <h3>Cuándo es obligatorio</h3>
      <p>
        Es obligatorio en todas las obras de construcción incluidas en el ámbito de aplicación del Real Decreto 1627/1997 sobre disposiciones mínimas de seguridad y salud en obras de construcción. En la práctica, esto incluye la gran mayoría de reformas de cierta envergadura, especialmente las que requieren proyecto técnico o comunicación de apertura de centro de trabajo.
      </p>
      <h3>Qué debe contener</h3>
      <p>
        Por cada subcontratista que intervenga en la obra, el Libro de Subcontratación debe recoger:
      </p>
      <ul>
        <li>Identificación del subcontratista (nombre o razón social, NIF/CIF).</li>
        <li>Objeto del contrato (descripción de los trabajos).</li>
        <li>Nivel de subcontratación dentro de la cadena.</li>
        <li>Fecha de inicio y fin previstos de los trabajos.</li>
        <li>Número previsto de trabajadores del subcontratista en la obra.</li>
        <li>Acreditación de que el subcontratista está inscrito en el REA.</li>
        <li>Acreditación de que dispone de la formación en PRL exigida.</li>
      </ul>
      <p>
        El Libro debe estar disponible en la obra para su consulta por parte de la Inspección de Trabajo, la dirección facultativa y los representantes de los trabajadores.
      </p>

      <h2>Documentación exigible al subcontratista</h2>
      <p>
        Antes de incorporar a un subcontratista a tu obra, debes verificar y archivar la siguiente documentación:
      </p>
      <ul>
        <li><strong>Alta en el IAE</strong> (Impuesto de Actividades Económicas) correspondiente a la actividad que va a realizar.</li>
        <li><strong>Alta en la Seguridad Social</strong> de la empresa y de los trabajadores que van a intervenir en la obra.</li>
        <li><strong>Certificado de estar al corriente</strong> con Hacienda y Seguridad Social (TC1, TC2 o certificado de corriente de pago).</li>
        <li><strong>Seguro de responsabilidad civil</strong> vigente.</li>
        <li><strong>Inscripción en el REA</strong> (Registro de Empresas Acreditadas).</li>
        <li><strong>Plan de prevención de riesgos laborales</strong> o evaluación de riesgos actualizada.</li>
        <li><strong>Certificados de formación en PRL</strong> de los trabajadores.</li>
        <li><strong>Habilitaciones y autorizaciones</strong> específicas cuando sean necesarias (instalador eléctrico autorizado, carnet de gas, etc.).</li>
      </ul>

      <h2>El contrato con el subcontratista</h2>
      <p>
        Aunque la ley no impone un modelo de contrato específico, es fundamental que el acuerdo con el subcontratista conste por escrito. Un contrato bien redactado te protege ante incumplimientos y deja claro el alcance de la relación. Debe incluir como mínimo:
      </p>
      <ul>
        <li><strong>Descripción detallada de los trabajos</strong>: qué tiene que hacer exactamente, con qué calidades y en qué plazo.</li>
        <li><strong>Precio y forma de pago</strong>: precio cerrado, por medición o por administración. Condiciones de facturación y plazos de pago.</li>
        <li><strong>Plazos de ejecución</strong>: fecha de inicio, hitos intermedios y fecha límite de entrega.</li>
        <li><strong>Materiales</strong>: quién aporta los materiales, de qué calidad y quién asume su coste.</li>
        <li><strong>Garantías</strong>: periodo de garantía sobre los trabajos ejecutados y procedimiento para reclamaciones.</li>
        <li><strong>Penalizaciones por retraso</strong>: compensación económica en caso de incumplimiento de plazos.</li>
        <li><strong>Seguro y prevención de riesgos</strong>: obligación del subcontratista de mantener su seguro vigente y cumplir el plan de seguridad de la obra.</li>
        <li><strong>Responsabilidad por defectos</strong>: cláusula que establezca quién responde ante vicios o defectos en la ejecución.</li>
      </ul>

      <h2>Responsabilidad solidaria</h2>
      <p>
        Este es probablemente el punto que más preocupa a los contratistas principales, y con razón. La legislación española establece la <strong>responsabilidad solidaria</strong> del contratista principal respecto a las obligaciones del subcontratista en varios ámbitos:
      </p>
      <ul>
        <li><strong>Deudas salariales</strong>: si el subcontratista no paga a sus trabajadores, el contratista principal puede ser reclamado solidariamente durante el año siguiente a la finalización de los trabajos (artículo 42 del Estatuto de los Trabajadores).</li>
        <li><strong>Seguridad Social</strong>: la responsabilidad solidaria se extiende también a las cuotas impagadas a la Seguridad Social por parte del subcontratista.</li>
        <li><strong>Prevención de riesgos laborales</strong>: si se produce un accidente laboral y se acredita que hubo falta de coordinación o de medidas de seguridad, el contratista principal puede ser considerado responsable solidario.</li>
      </ul>
      <p>
        Para protegerte, la ley te permite solicitar al subcontratista un <strong>certificado de estar al corriente</strong> con sus obligaciones y verificar que tiene a sus trabajadores dados de alta. Si lo haces de forma diligente y lo documentas, reduces significativamente tu exposición.
      </p>

      <h2>Prevención de riesgos laborales con subcontratistas</h2>
      <p>
        Cuando hay subcontratación, la coordinación de la prevención de riesgos laborales se complica. El contratista principal tiene la obligación de:
      </p>
      <ul>
        <li>Informar al subcontratista sobre los riesgos existentes en la obra y las medidas de prevención aplicables.</li>
        <li>Exigir que el subcontratista cuente con la evaluación de riesgos y la planificación preventiva de los trabajos que va a realizar.</li>
        <li>Verificar que los trabajadores del subcontratista tienen la formación en PRL adecuada al puesto (mínimo formación de nivel básico de 8 o 20 horas según el convenio).</li>
        <li>Coordinar las actividades empresariales cuando coincidan en la obra trabajadores de varias empresas, conforme al Real Decreto 171/2004.</li>
        <li>Vigilar el cumplimiento de las medidas de seguridad durante la ejecución de los trabajos.</li>
      </ul>
      <p>
        Si no se nombra un coordinador de seguridad y salud (obligatorio cuando hay más de una empresa en la obra y existe proyecto), estas funciones recaen directamente sobre el contratista principal.
      </p>

      <h2>Sanciones por incumplimiento</h2>
      <p>
        Las infracciones en materia de subcontratación están tipificadas en la Ley de Infracciones y Sanciones en el Orden Social (LISOS). Las sanciones pueden ser considerables:
      </p>
      <ul>
        <li><strong>Infracciones leves</strong> (defectos formales en el Libro de Subcontratación): multas de 60 a 625 euros.</li>
        <li><strong>Infracciones graves</strong> (no llevar el Libro, superar los niveles de subcontratación permitidos, no verificar la inscripción en el REA): multas de 626 a 6.250 euros.</li>
        <li><strong>Infracciones muy graves</strong> (subcontratar vulnerando los derechos de los trabajadores, incumplimientos que pongan en peligro la seguridad): multas de 6.251 a 187.515 euros.</li>
      </ul>
      <p>
        Además, las empresas sancionadas pueden ser excluidas temporalmente de la contratación pública y perder la inscripción en el REA.
      </p>

      <h2>Buenas prácticas para subcontratar</h2>
      <p>
        Más allá de cumplir la ley, hay una serie de prácticas que te ahorrarán problemas y mejorarán la calidad de tu trabajo:
      </p>
      <ul>
        <li><strong>Trabaja solo con profesionales que puedas verificar</strong>: pide referencias, visita obras anteriores si es posible y comprueba que tienen la experiencia que dicen tener.</li>
        <li><strong>Siempre por escrito</strong>: aunque sea un trabajo pequeño, formaliza el acuerdo. Un email detallado con la aceptación del subcontratista ya es mejor que nada, pero un contrato firmado es lo ideal.</li>
        <li><strong>Aclara los plazos de pago antes de empezar</strong>: la mayoría de conflictos con subcontratistas nacen por desacuerdos en el pago. Define cuándo y cómo cobran antes de que empiece la obra.</li>
        <li><strong>No pagues todo por adelantado</strong>: retén un porcentaje (habitualmente entre el 5% y el 10%) hasta la recepción conforme de los trabajos.</li>
        <li><strong>Documenta la calidad de los trabajos</strong>: haz fotos durante la ejecución y al finalizar. Si surge una reclamación posterior, las pruebas visuales son muy valiosas.</li>
        <li><strong>Mantén una base de datos de subcontratistas</strong>: valora su rendimiento en cada obra (puntualidad, calidad, limpieza, comunicación) y prioriza a los que funcionan bien.</li>
        <li><strong>Coordina los trabajos con antelación</strong>: avisa al subcontratista con tiempo suficiente, confirma fechas y asegura que la obra estará lista para que entre a trabajar cuando llegue.</li>
      </ul>

      <p>
        La subcontratación bien gestionada es una herramienta que te permite crecer sin asumir costes fijos excesivos, ofrecer un servicio completo a tus clientes y acceder a especialistas que elevan la calidad de tus reformas. La clave está en hacerlo con rigor: conocer la normativa, documentar todo y trabajar con profesionales de confianza.
      </p>
    </BlogArticle>
  );
}
