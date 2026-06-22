import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { Receipt, Bell, CreditCard, FileDown, Timer, Split } from "lucide-react";

export const metadata: Metadata = {
  title: "Facturación para Empresas de Reformas — Factura, Cobra y Controla Impagos",
  description: "Factura desde la obra con numeración automática, recordatorios de impago, pagos fraccionados y exportación para gestoría. Prueba ObraBox gratis.",
  alternates: { canonical: "/facturacion-reformas" },
};

export default function FacturacionPage() {
  return (
    <FeaturePage
      title="Factura, cobra y controla impagos sin complicaciones"
      subtitle="Facturas profesionales con numeración automática, recordatorios de impago, pagos fraccionados por obra y exportación directa para tu gestoría."
      description={[
        "La facturación en una empresa de reformas tiene particularidades que los programas genéricos no entienden: pagos por fases, anticipos antes de empezar la obra, certificaciones parciales, el IVA del 10% para viviendas habituales vs. el 21% para locales y obras nuevas... ObraBox está diseñado para resolver exactamente estos problemas.",
        "Crear una factura es rápido: seleccionas la obra, y ObraBox precarga los datos del cliente, las partidas y los importes. La numeración es automática con el formato que tú configures (por ejemplo, F-2026-001). Añades el concepto, seleccionas el IVA (10% o 21%), la retención si el cliente es empresa, y generas el PDF con tu logo y datos bancarios.",
        "El sistema de pagos fraccionados es fundamental para reformas. Puedes definir tramos de pago por obra: por ejemplo, 30% al inicio, 40% a mitad de obra, 30% a la entrega. Cada tramo tiene su estado (pendiente, facturado, pagado) y puedes generar la factura de cada tramo con un clic cuando se completa la fase correspondiente.",
        "Los impagos son el dolor de cabeza número uno de muchos reformistas. ObraBox incluye recordatorios automáticos configurables: cuando una factura lleva 7 días sin pagarse, envía un email al cliente recordándoselo. Si a los 15 días sigue sin pagar, otro recordatorio. Y a los 30 días, un tercero con tono más urgente. Tú configuras los días y personalizas el mensaje.",
        "Para los anticipos, puedes crear facturas de tipo 'anticipo' vinculadas a la obra. Cuando llega el momento de la factura final, el anticipo se descuenta automáticamente.",
        "Al final de cada trimestre, exportas todas las facturas emitidas y recibidas en formato CSV o Excel para tu gestor. Base imponible, IVA, retenciones... todo listo para el modelo 303 sin tener que revisar una a una.",
        "El resumen de facturación te muestra gráficos de barras con la facturación mensual, trimestral y anual, el total facturado vs cobrado vs pendiente, y la evolución comparada con el año anterior.",
      ]}
      benefits={[
        { icon: Receipt, title: "Facturas desde la obra", desc: "Crea facturas precargadas con los datos de la obra: cliente, partidas, importes." },
        { icon: Bell, title: "Recordatorios automáticos", desc: "Emails automáticos a los 7, 15 y 30 días de impago. Tú configuras los plazos y el mensaje." },
        { icon: Split, title: "Pagos fraccionados", desc: "Define tramos de pago por obra: anticipo, mitad, fin. Genera facturas por cada fase." },
        { icon: CreditCard, title: "Métodos de pago", desc: "Registra pagos por transferencia, efectivo, Bizum. Marca facturas como pagadas parcial o totalmente." },
        { icon: FileDown, title: "Exportar para gestoría", desc: "CSV/Excel con todas las facturas del periodo. Listo para el modelo 303." },
        { icon: Timer, title: "Numeración automática", desc: "Formato configurable (F-2026-001). La numeración avanza sola sin errores ni duplicados." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Laura, reformista en Málaga",
        texto: "Laura terminó una reforma de cocina de 8.000€ y envió la factura. Pasaron 15 días y el cliente no pagaba. Laura no quería llamar para no parecer pesada. Con ObraBox, el recordatorio automático llegó al email del cliente a los 7 días con un tono educado. A los 14 días llegó otro. El cliente pagó al día siguiente del segundo recordatorio, disculpándose porque 'se le había pasado'. Laura cobró sin tener que hacer ninguna llamada incómoda.",
      }}
      faqs={[
        { q: "¿ObraBox sustituye a un programa de facturación?", a: "Para la mayoría de reformistas, sí. Genera facturas con todos los datos legales necesarios. Si necesitas facturación electrónica obligatoria (Verifactu), exporta los datos para tu gestoría." },
        { q: "¿Puedo facturar con IVA del 10%?", a: "Sí. Puedes seleccionar 10% o 21% en cada factura. ObraBox incluye una calculadora de IVA para saber cuándo aplica cada tipo." },
        { q: "¿Los recordatorios de impago se envían solos?", a: "Sí, una vez configurados. Puedes establecer los días (7, 15, 30 o los que quieras) y personalizar el mensaje. Se envían por email automáticamente." },
        { q: "¿Puedo registrar pagos parciales?", a: "Sí. Puedes marcar una factura como parcialmente pagada indicando el importe recibido. El estado cambia a 'parcial' hasta que se completa." },
      ]}
      relatedLinks={[
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
        { href: "/control-gastos-obra", label: "Control de gastos por obra" },
        { href: "/informes-rentabilidad", label: "Informes de rentabilidad" },
        { href: "/gestion-obra-completa", label: "Gestión de obras" },
      ]}
    />
  );
}
