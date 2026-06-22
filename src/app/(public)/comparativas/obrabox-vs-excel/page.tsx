import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  X,
  FileSpreadsheet,
  Clock,
  AlertTriangle,
  Calculator,
  Users,
  Camera,
  Globe,
  Receipt,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ObraBox vs Excel para Gestionar Reformas — Comparativa Completa",
  description:
    "Comparativa entre gestionar obras y reformas con Excel frente a ObraBox. Descubre por qué las hojas de cálculo te cuestan más de lo que crees.",
  alternates: { canonical: "/comparativas/obrabox-vs-excel" },
};

const comparativa = [
  {
    feature: "Presupuestos profesionales",
    excel: "Plantillas manuales, formato inconsistente",
    obrabox: "Plantillas prediseñadas con opciones básico/medio/premium",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Facturación",
    excel: "Fórmulas manuales, sin numeración automática",
    obrabox: "Facturas automáticas desde el presupuesto aprobado",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Galería de fotos de obra",
    excel: "No es posible en una hoja de cálculo",
    obrabox: "Fotos organizadas por obra con fecha y etiquetas",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Portal del cliente",
    excel: "No existe. Envías el Excel por email",
    obrabox: "Portal con fotos, avance y documentos en tiempo real",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Gestión de equipo",
    excel: "No puedes asignar tareas ni ver cargas de trabajo",
    obrabox: "Asignación de trabajadores, planning semanal y fichaje GPS",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Control de gastos",
    excel: "Fórmulas que se rompen, datos duplicados",
    obrabox: "Gastos en tiempo real con alertas de desviación",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Acceso desde el móvil",
    excel: "Experiencia pésima en pantalla pequeña",
    obrabox: "App diseñada para usar desde la obra",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Tiempo para crear un presupuesto",
    excel: "30-60 minutos copiando y adaptando",
    obrabox: "5-10 minutos con plantillas y partidas guardadas",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Riesgo de errores",
    excel: "Alto: fórmulas rotas, celdas sobreescritas, versiones duplicadas",
    obrabox: "Bajo: cálculos automáticos y datos centralizados",
    excelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Curva de aprendizaje",
    excel: "Baja si ya lo usas, pero limitaciones enormes",
    obrabox: "Baja: interfaz pensada para reformistas, no para informáticos",
    excelOk: true,
    obraboxOk: true,
  },
];

export default function ObraBoxVsExcelPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-6">
            <FileSpreadsheet className="w-4 h-4 text-green-600" />
            Comparativa
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            ObraBox vs Excel para gestionar reformas
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Excel es gratis y lo conoces. Pero cada hora que pierdes formateando
            celdas, buscando versiones y rehaciendo fórmulas rotas tiene un
            coste real para tu negocio.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              La mayoría de reformistas empiezan gestionando sus obras con
              Excel. Es lógico: ya lo tienes instalado, sabes usarlo y puedes
              crear una plantilla de presupuesto en una tarde. El problema
              aparece cuando creces: más obras, más clientes, más trabajadores.
              Lo que empezó como una hoja de cálculo sencilla se convierte en
              un laberinto de archivos, versiones y fórmulas que nadie entiende
              excepto tú.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              No se trata de que Excel sea malo. Es una herramienta extraordinaria.
              Pero no fue diseñada para gestionar obras de reforma. No tiene
              galería de fotos, no envía presupuestos al cliente con un enlace,
              no te avisa cuando un gasto se desvía del presupuesto, y desde el
              móvil es prácticamente inusable.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-10">
            Comparativa detallada
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 font-semibold text-secondary w-1/3">
                    Funcionalidad
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500 w-1/3">
                    <div className="flex items-center justify-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-green-600" />
                      Excel
                    </div>
                  </th>
                  <th className="text-center py-4 pl-4 font-semibold text-primary-500 w-1/3">
                    ObraBox
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-medium text-secondary">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {row.excelOk ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                        <span className="text-xs text-gray-500">
                          {row.excel}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {row.obraboxOk ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                        <span className="text-xs text-gray-500">
                          {row.obrabox}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros y contras */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-12">
            Ventajas y limitaciones de cada opción
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Excel */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileSpreadsheet className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-secondary">Excel</h3>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-green-600 mb-3">Ventajas</p>
                <ul className="space-y-2">
                  {[
                    "Gratuito si ya tienes licencia de Office",
                    "Conocido por casi todo el mundo",
                    "Flexible: puedes hacer casi cualquier cálculo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-500 mb-3">Limitaciones</p>
                <ul className="space-y-2">
                  {[
                    "No gestiona fotos, equipo ni clientes",
                    "Las fórmulas se rompen al copiar entre archivos",
                    "Imposible colaborar en tiempo real en obra",
                    "Versiones duplicadas: nadie sabe cuál es la buena",
                    "Desde el móvil es casi inusable",
                    "No genera facturas ni presupuestos profesionales",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ObraBox */}
            <div className="card p-8 border-primary-200 bg-primary-50/30">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-primary-500" />
                <h3 className="text-xl font-bold text-secondary">ObraBox</h3>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-green-600 mb-3">Ventajas</p>
                <ul className="space-y-2">
                  {[
                    "Diseñado para reformistas: todo lo que necesitas",
                    "Presupuestos profesionales en minutos",
                    "Control de gastos y rentabilidad en tiempo real",
                    "Portal del cliente: menos llamadas, más confianza",
                    "Funciona perfectamente desde el móvil",
                    "Equipo, agenda, fotos y facturas en un solo sitio",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-500 mb-3">Limitaciones</p>
                <ul className="space-y-2">
                  {[
                    "Requiere conexión a internet",
                    "Curva de aprendizaje inicial (mínima)",
                    "Plan completo es de pago (14 días gratis)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coste oculto */}
      <section className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-8">
            El coste oculto de usar Excel
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">5-8h</p>
              <p className="text-sm text-gray-500 mt-1">
                por semana en tareas administrativas que ObraBox automatiza
              </p>
            </div>
            <div className="card p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">23%</p>
              <p className="text-sm text-gray-500 mt-1">
                de los presupuestos en Excel tienen errores de cálculo
              </p>
            </div>
            <div className="card p-6 text-center">
              <Calculator className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-secondary">300-500€</p>
              <p className="text-sm text-gray-500 mt-1">
                al mes en tiempo perdido y errores no detectados
              </p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Excel parece gratis, pero el tiempo que dedicas a formatear,
            buscar archivos y corregir errores tiene un coste real.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Deja de perder tiempo con hojas de cálculo
          </h2>
          <p className="text-primary-100 mb-8">
            14 días gratis. Sin tarjeta. Migra tus datos cuando quieras.
          </p>
          <Link
            href="/registro"
            className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </section>
    </>
  );
}
