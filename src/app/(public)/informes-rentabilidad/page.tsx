import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { BarChart3, TrendingUp, PieChart, Calendar, FileDown, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Informes de Rentabilidad para Reformas — Sabe Cuánto Ganas en Cada Obra",
  description: "Facturación por periodo, rentabilidad por obra, tasa de conversión de presupuestos, estacionalidad y comparativa año anterior. Exporta en PDF y Excel.",
  alternates: { canonical: "/informes-rentabilidad" },
};

export default function InformesPage() {
  return (
    <FeaturePage
      title="Sabe cuánto ganas en cada obra y en tu empresa"
      subtitle="Informes de facturación, rentabilidad por obra, tasa de conversión de presupuestos, estacionalidad y comparativa interanual."
      description={[
        "La diferencia entre un reformista que crece y uno que se estanca es que el primero toma decisiones con datos. ¿Qué tipo de reforma te deja más margen? ¿En qué meses facturas más? ¿Cuántos presupuestos envías para cerrar una obra? ObraBox te responde con informes claros.",
        "El informe de facturación te muestra un gráfico de barras con la facturación mensual, trimestral y anual. Total facturado vs total cobrado vs total pendiente. Puedes comparar con el año anterior para ver si creces o no.",
        "La rentabilidad por obra es el informe más revelador. Para cada obra ves: ingresos (facturas cobradas), gastos (materiales, subcontratas, mano de obra...), beneficio neto y margen porcentual. Puedes ordenar por margen y descubrir que las reformas de baño te dejan un 25% de margen pero las integrales solo un 12%.",
        "El ranking de rentabilidad por tipo de reforma te ayuda a decidir en qué especializarte. Si los baños son más rentables que las cocinas, quizás deberías enfocar tu marketing en baños.",
        "La tasa de conversión de presupuestos te dice cuántos presupuestos envías para cerrar una obra. Si envías 10 presupuestos y cierras 3, tu tasa es del 30%. Puedes verla por mes, por tipo de reforma y por rango de precio para entender dónde eres más competitivo.",
        "La estacionalidad te muestra en qué meses facturas más y en cuáles menos. Esto te permite planificar: si en enero y febrero la actividad baja, puedes intensificar el marketing en noviembre y diciembre para llenar la agenda.",
        "El tiempo medio por tipo de obra compara lo estimado con lo real. Si estimaste 4 semanas para un baño pero tardaste 6, sabes que necesitas revisar tu planificación.",
        "El informe de pipeline muestra los leads por origen y la tasa de conversión por origen: ¿los leads de Google convierten más que los de Instagram? ¿Las recomendaciones son tu mejor fuente?",
        "Todos los informes se pueden exportar en PDF (para presentar a socios o al banco) y en Excel (para análisis propio). Los datos son tuyos.",
      ]}
      benefits={[
        { icon: BarChart3, title: "Facturación mensual", desc: "Gráfico de barras con evolución mensual. Facturado vs cobrado vs pendiente." },
        { icon: TrendingUp, title: "Rentabilidad por obra", desc: "Ingresos, gastos, beneficio y margen de cada obra. Ranking por rentabilidad." },
        { icon: Target, title: "Tasa de conversión", desc: "Presupuestos enviados vs aceptados. Por mes, tipo y rango de precio." },
        { icon: Calendar, title: "Estacionalidad", desc: "En qué meses facturas más. Planifica marketing y recursos según temporada." },
        { icon: PieChart, title: "Margen por tipo de obra", desc: "Descubre qué tipo de reforma te deja más beneficio para especializarte." },
        { icon: FileDown, title: "Exportar PDF y Excel", desc: "Todos los informes exportables. Para socios, para el banco, para tu análisis." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Reformas López, empresa en Granada",
        texto: "Reformas López llevaba 5 años haciendo 'de todo': baños, cocinas, integrales, pintura, locales. Facturaban bien pero no crecían. Con los informes de ObraBox descubrieron que las reformas integrales, que eran sus obras más grandes, tenían un margen medio del 8% (casi no ganaban), mientras que los baños y cocinas les dejaban un 22% de margen. Decidieron enfocar su marketing en baños y cocinas y rechazar las integrales que no cumplieran un margen mínimo del 15%. En un año, facturaron lo mismo pero el beneficio neto subió un 40%.",
      }}
      faqs={[
        { q: "¿Cuándo empiezo a ver datos en los informes?", a: "Los informes se generan automáticamente con los datos que registras. Con una sola obra y sus gastos ya puedes ver la rentabilidad." },
        { q: "¿Puedo comparar con el año anterior?", a: "Sí, la comparativa interanual está disponible cuando tienes datos de al menos dos periodos." },
        { q: "¿Los informes se actualizan en tiempo real?", a: "Sí, cada vez que registras un gasto, cobras una factura o cierras un presupuesto, los informes se actualizan automáticamente." },
        { q: "¿Están disponibles en el plan Gratis?", a: "No, los informes de rentabilidad están disponibles a partir del plan Pro (29€/mes)." },
      ]}
      relatedLinks={[
        { href: "/control-gastos-obra", label: "Control de gastos" },
        { href: "/facturacion-reformas", label: "Facturación para reformas" },
        { href: "/crm-reformas", label: "CRM para reformas" },
        { href: "/presupuestos-reforma", label: "Presupuestos profesionales" },
      ]}
    />
  );
}
