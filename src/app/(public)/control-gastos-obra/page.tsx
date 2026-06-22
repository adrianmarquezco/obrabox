import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { Receipt, Camera, TrendingUp, AlertTriangle, ShoppingCart, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Control de Gastos por Obra — Sabe si Ganas o Pierdes Dinero en Cada Reforma",
  description: "Registra gastos con foto del ticket, asígnalos a cada obra y compara presupuestado vs real. Sabe exactamente cuánto ganas en cada reforma.",
  alternates: { canonical: "/control-gastos-obra" },
};

export default function ControlGastosPage() {
  return (
    <FeaturePage
      title="Sabe si ganas o pierdes dinero en cada reforma"
      subtitle="Registra cada gasto con foto del ticket desde el móvil. Compara presupuestado vs gastado real y toma decisiones con datos."
      description={[
        "La mayoría de reformistas no saben cuánto ganan realmente en cada obra hasta que la terminan. Y muchos se llevan sorpresas desagradables. Con el control de gastos de ObraBox, sabes en todo momento si una obra va por buen camino o si te estás pasando del presupuesto.",
        "Registrar un gasto es tan fácil como sacar una foto. Desde el móvil, en la misma obra, haces foto al ticket, indicas el concepto, seleccionas la obra y la categoría (material, subcontrata, transporte, herramientas...) y listo. El gasto queda registrado y asignado.",
        "Cada obra tiene su propia pestaña de gastos con una barra visual que compara lo presupuestado con lo gastado real. De un vistazo ves si vas al 60% del presupuesto o si ya te has pasado. Y ObraBox te avisa automáticamente cuando llegas al 85% del presupuesto de una obra.",
        "Los gastos se organizan por categorías editables: material, mano de obra, subcontrata, transporte, herramientas, alquiler, combustible y otros. Puedes filtrar por obra, por categoría, por proveedor o por fecha para encontrar cualquier gasto rápidamente.",
        "ObraBox también gestiona los gastos fijos de tu empresa que no están vinculados a ninguna obra: el alquiler de la furgoneta, el seguro, la gestoría, la cuota de autónomo, el almacén... Configuras la frecuencia (mensual, trimestral, anual) y se registran automáticamente.",
        "La sección de proveedores te permite mantener un directorio organizado de tus proveedores habituales con el historial de compras. Y lo más útil: el histórico de precios. ¿Cuánto pagaste por el metro cuadrado de azulejo la última vez? ObraBox lo recuerda, para que presupuestes mejor la próxima obra.",
        "Para las facturas recibidas de proveedores, puedes registrar el número de factura, la base imponible, el IVA y la retención. Adjuntas el PDF y al final del trimestre exportas todo para tu gestor con un clic. Modelo 303 resuelto sin dramas.",
      ]}
      benefits={[
        { icon: Camera, title: "Foto del ticket", desc: "Registra gastos con una foto desde el móvil. En la obra, en el momento, sin olvidar nada." },
        { icon: TrendingUp, title: "Presupuestado vs real", desc: "Barra visual que compara lo que presupuestaste con lo que llevas gastado en cada obra." },
        { icon: AlertTriangle, title: "Alertas automáticas", desc: "Te avisa cuando llegas al 85% del presupuesto de una obra. Sin sorpresas a final de mes." },
        { icon: ShoppingCart, title: "Gestión de proveedores", desc: "Directorio de proveedores con historial de compras y precios históricos." },
        { icon: Receipt, title: "Facturas de proveedor", desc: "Registra facturas recibidas y exporta para tu gestor. Base imponible, IVA y retención." },
        { icon: BarChart3, title: "Gastos fijos de empresa", desc: "Registra gastos recurrentes: seguro, gestoría, alquiler, cuotas. Se cargan solos." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Pedro, reformista en Barcelona",
        texto: "Pedro tenía una reforma de cocina presupuestada en 12.000€. A mitad de obra, pensaba que iba 'más o menos bien'. Cuando terminó y sumó todos los tickets, descubrió que había gastado 13.400€. Con su margen del 20%, en vez de ganar 2.400€ ganó solo 600€. Desde que usa ObraBox, Pedro registra cada gasto con foto del ticket en el momento. Cuando llega al 85% del presupuesto, le salta una alerta y puede tomar decisiones: renegociar con el proveedor, ajustar materiales o hablar con el cliente antes de que sea tarde.",
      }}
      faqs={[
        { q: "¿Puedo registrar gastos sin conexión a internet?", a: "ObraBox funciona como PWA. Puedes hacer la foto del ticket y registrar el gasto, y se sincronizará cuando recuperes conexión." },
        { q: "¿Se pueden exportar los gastos para la gestoría?", a: "Sí, puedes exportar todos los gastos y facturas recibidas en formato CSV o Excel, filtrados por periodo, para enviárselos a tu gestor." },
        { q: "¿Puedo ver el beneficio real de cada obra?", a: "Sí, en la sección de informes puedes ver los ingresos, gastos y beneficio neto de cada obra, con el margen porcentual." },
        { q: "¿Qué categorías de gasto puedo usar?", a: "ObraBox viene con categorías predefinidas (material, subcontrata, transporte, etc.) pero puedes crear las tuyas propias en la configuración." },
      ]}
      relatedLinks={[
        { href: "/facturacion-reformas", label: "Facturación para reformas" },
        { href: "/informes-rentabilidad", label: "Informes de rentabilidad" },
        { href: "/gestion-obra-completa", label: "Gestión de obras" },
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
      ]}
    />
  );
}
