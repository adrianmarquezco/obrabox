import type { Metadata } from "next";
import InfoPage from "@/components/public/InfoPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guía de Facturación para Empresas de Reformas en España",
  description: "Todo sobre facturación en reformas: tipos de factura, IVA, retenciones, pagos fraccionados, impagos y cómo exportar para tu gestoría.",
  alternates: { canonical: "/guias/facturacion-reformas" },
};

export default function Page() {
  return (
    <InfoPage
      titulo="Guía de Facturación para Empresas de Reformas en España"
      breadcrumb={[{ href: "/guias/facturacion-reformas", label: "Guías" }]}
      relatedLinks={[
        { href: "/blog/iva-reformas-10-21", label: "IVA en reformas: 10% o 21%" },
        { href: "/blog/cobrar-reforma-impagos", label: "Cómo cobrar y evitar impagos" },
        { href: "/facturacion-reformas", label: "Software de facturación ObraBox" },
        { href: "/calculadora/iva-reformas", label: "Calculadora de IVA" },
      ]}
    >
      <p>La facturación en el sector de las reformas tiene particularidades que no cubren los programas de facturación genéricos. IVA reducido del 10%, anticipos, certificaciones de obra, pagos fraccionados por fases, retenciones cuando el cliente es empresa... Esta guía cubre todo lo que necesitas saber.</p>

      <h2>Datos obligatorios en una factura</h2>
      <p>Toda factura emitida debe incluir:</p>
      <ul>
        <li>Número de factura (correlativo, sin saltos)</li>
        <li>Fecha de emisión</li>
        <li>Datos del emisor: nombre/razón social, NIF/CIF, dirección</li>
        <li>Datos del cliente: nombre/razón social, NIF/CIF, dirección</li>
        <li>Descripción de los servicios o bienes</li>
        <li>Base imponible</li>
        <li>Tipo de IVA aplicado y cuota de IVA</li>
        <li>Total a pagar</li>
      </ul>

      <h2>Tipos de factura en reformas</h2>
      <h3>Factura normal</h3>
      <p>La factura estándar que emites al completar un trabajo o una fase de obra. Incluye el detalle de los trabajos realizados.</p>

      <h3>Factura de anticipo</h3>
      <p>Cuando cobras un porcentaje antes de empezar la obra (habitualmente el 30%). Es una factura a cuenta que se descuenta de la factura final. Debe indicar que es un anticipo y referenciar el presupuesto o contrato.</p>

      <h3>Certificación de obra</h3>
      <p>Habitual en obras grandes o con la administración pública. Es una factura parcial que certifica el avance de la obra (por ejemplo, "certificación nº 3 — 60% de obra ejecutada"). Incluye el detalle de las partidas ejecutadas hasta la fecha.</p>

      <h2>IVA en reformas</h2>
      <p>El tema del IVA es complejo y está detallado en nuestra <Link href="/blog/iva-reformas-10-21">guía completa de IVA en reformas</Link>. En resumen:</p>
      <ul>
        <li><strong>10%</strong>: reformas en viviendas particulares de más de 2 años, contratadas por un particular, con materiales ≤ 40% del total.</li>
        <li><strong>21%</strong>: locales, viviendas nuevas, cuando contrata una empresa, materiales > 40%, ampliaciones.</li>
      </ul>

      <h2>Retenciones (IRPF)</h2>
      <p>Cuando facturas a una empresa o profesional (no a un particular), deben practicarte retención de IRPF del 15% (7% los primeros 3 años de actividad). La retención la aplica el cliente sobre la base imponible y la ingresa en Hacienda a tu nombre.</p>
      <p>Ejemplo: base imponible 10.000€, IVA 21% (2.100€), retención 15% (-1.500€). Total a cobrar: 10.600€.</p>

      <h2>Pagos fraccionados por fases</h2>
      <p>En reformas es habitual cobrar por tramos vinculados a fases de la obra:</p>
      <ul>
        <li><strong>30% al inicio</strong>: factura de anticipo al firmar el presupuesto</li>
        <li><strong>40% a mitad de obra</strong>: cuando se completan las instalaciones (fontanería, electricidad)</li>
        <li><strong>30% a la entrega</strong>: factura final al completar la obra y firmar el acta de recepción</li>
      </ul>
      <p>Con <Link href="/facturacion-reformas">ObraBox</Link>, puedes definir estos tramos por obra y generar la factura de cada tramo con un clic.</p>

      <h2>Numeración de facturas</h2>
      <p>Las facturas deben tener numeración correlativa sin saltos. El formato más habitual es: prefijo + año + número. Ejemplo: F-2026-001, F-2026-002, etc. Si tienes varias series (por ejemplo, una para anticipos), cada serie tiene su propia numeración.</p>

      <h2>Gestionar impagos</h2>
      <p>Los impagos son frecuentes en reformas. Estrategias preventivas:</p>
      <ol>
        <li>Cobrar siempre un anticipo antes de empezar</li>
        <li>Definir los tramos de pago en el presupuesto firmado</li>
        <li>Enviar recordatorios automáticos a los 7, 15 y 30 días</li>
        <li>No entregar llaves ni acta de fin de obra hasta cobrar el último tramo</li>
        <li>Si pasan más de 60 días, enviar burofax exigiendo el pago</li>
      </ol>

      <h2>Exportar para la gestoría</h2>
      <p>Cada trimestre, tu gestor necesita:</p>
      <ul>
        <li>Listado de facturas emitidas con base, IVA y total</li>
        <li>Listado de facturas recibidas (proveedores) con base, IVA y retenciones</li>
        <li>Tickets de gastos deducibles</li>
      </ul>
      <p>Con ObraBox, exportas todo esto en CSV/Excel con un clic. Modelo 303 resuelto sin dramas.</p>
    </InfoPage>
  );
}
