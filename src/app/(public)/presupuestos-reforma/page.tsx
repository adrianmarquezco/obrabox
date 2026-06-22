import type { Metadata } from "next";
import FeaturePage from "@/components/public/FeaturePage";
import { FileText, Zap, Smartphone, PenTool, Copy, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Software de Presupuestos para Reformas — Crea Presupuestos Profesionales en Minutos",
  description: "Crea presupuestos de reforma profesionales con plantillas, opciones básico/medio/premium, firma digital y envío por WhatsApp. Prueba ObraBox gratis.",
  alternates: { canonical: "/presupuestos-reforma" },
};

export default function PresupuestosReformaPage() {
  return (
    <FeaturePage
      title="Crea presupuestos profesionales en minutos"
      subtitle="Deja de perder horas con Excel. Plantillas listas, opciones básico/medio/premium, firma digital y envío directo por WhatsApp o email."
      description={[
        "Hacer un presupuesto de reforma no debería llevar horas. Con ObraBox, puedes crear presupuestos profesionales con tu logo, partidas detalladas por capítulo, y enviarlos al cliente directamente desde el móvil. Todo en menos de 10 minutos.",
        "El sistema de presupuestos de ObraBox está diseñado específicamente para empresas de reformas en España. Incluye plantillas precargadas para los tipos de reforma más habituales: baños, cocinas, reformas integrales, pintura y locales comerciales. Cada plantilla viene con los capítulos y partidas más comunes, que tú solo tienes que ajustar.",
        "¿Tu cliente quiere comparar opciones? ObraBox permite crear presupuestos con opciones básico, medio y premium dentro del mismo documento. El cliente ve las tres opciones y elige la que más le conviene. Esto aumenta la tasa de conversión porque el cliente siente que tiene el control.",
        "Una de las funcionalidades más valoradas es el margen oculto. Puedes añadir un porcentaje de margen a cada partida que solo tú ves. En el PDF que recibe el cliente, el margen no aparece, pero tú siempre sabes cuánto vas a ganar.",
        "Cuando el presupuesto está listo, puedes previsualizarlo como PDF con tu logo y datos de empresa, descargarlo, enviarlo por email o compartirlo por WhatsApp con un solo clic. El cliente puede firmarlo digitalmente desde su móvil, sin necesidad de imprimir nada.",
        "Cada presupuesto tiene un historial de versiones. Si el cliente pide cambios, creas una v2 o v3 sin perder las anteriores. Y cuando el presupuesto se acepta, lo conviertes en obra con un clic: todos los datos se trasladan automáticamente.",
        "Además, puedes guardar partidas favoritas para insertar rápidamente en futuros presupuestos. Si siempre presupuestas las mismas partidas de fontanería o electricidad, no las escribas cada vez: selecciona de tu lista y listo.",
      ]}
      benefits={[
        { icon: FileText, title: "Plantillas por tipo de reforma", desc: "Baño, cocina, integral, pintura, local... Empieza con capítulos y partidas precargadas." },
        { icon: Layers, title: "Opciones básico/medio/premium", desc: "Presenta 3 opciones en un solo presupuesto. El cliente elige y tú cierras más obras." },
        { icon: PenTool, title: "Firma digital", desc: "El cliente firma desde su móvil. Sin papel, sin impresoras, sin esperas." },
        { icon: Smartphone, title: "Envío por WhatsApp y email", desc: "Comparte el PDF con un clic. Link directo al presupuesto o archivo adjunto." },
        { icon: Copy, title: "Duplicar y versionar", desc: "Copia un presupuesto como base para otro. Historial de v1, v2, v3 con cambios." },
        { icon: Zap, title: "Partidas favoritas", desc: "Guarda las partidas que más usas e insértalas en cualquier presupuesto en segundos." },
      ]}
      casoDeUso={{
        titulo: "Ejemplo real: Juan, reformista en Valencia",
        texto: "Juan tiene una empresa de reformas integrales en Valencia. Antes tardaba 2-3 horas en hacer un presupuesto con Excel: buscar los precios, formatear el documento, calcular los totales... Con ObraBox, selecciona la plantilla de reforma integral, ajusta las partidas, añade las opciones básica y premium, y en 15 minutos tiene el PDF listo. Lo envía por WhatsApp al cliente, que firma desde el móvil esa misma tarde. Juan ha pasado de cerrar 2 de cada 10 presupuestos a cerrar 4 de cada 10, porque el formato profesional y las opciones generan más confianza.",
      }}
      faqs={[
        { q: "¿Puedo personalizar las plantillas de presupuesto?", a: "Sí, puedes editar las plantillas existentes o crear las tuyas propias desde cero. Cada plantilla incluye capítulos y partidas que puedes modificar libremente." },
        { q: "¿El margen de beneficio aparece en el PDF del cliente?", a: "No. El margen es solo visible para ti dentro de ObraBox. En el PDF que recibe el cliente, solo aparecen los precios finales." },
        { q: "¿Puedo enviar presupuestos desde el móvil?", a: "Sí, ObraBox está diseñado mobile-first. Puedes crear, editar y enviar presupuestos directamente desde tu teléfono." },
        { q: "¿Qué pasa cuando el cliente acepta el presupuesto?", a: "Puedes convertirlo en obra con un clic. Todos los datos del presupuesto (cliente, partidas, importes) se trasladan a la nueva obra automáticamente." },
        { q: "¿Puedo usar mi propio logo en los presupuestos?", a: "Sí. Sube tu logo en la configuración y aparecerá en todos los PDFs de presupuestos y facturas." },
      ]}
      relatedLinks={[
        { href: "/facturacion-reformas", label: "Facturación para reformas" },
        { href: "/gestion-obra-completa", label: "Gestión de obras" },
        { href: "/crm-reformas", label: "CRM para reformas" },
        { href: "/control-gastos-obra", label: "Control de gastos" },
      ]}
    />
  );
}
