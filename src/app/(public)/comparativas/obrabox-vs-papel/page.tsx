import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  X,
  FileStack,
  CloudOff,
  Search,
  Clock,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Camera,
  Receipt,
  Users,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "De Papel a Digital: Digitaliza tu Empresa de Reformas",
  description:
    "Descubre los beneficios de digitalizar tu empresa de reformas. Pasa de papel y carpetas a ObraBox: más rápido, más seguro, más profesional.",
  alternates: { canonical: "/comparativas/obrabox-vs-papel" },
};

const comparativa = [
  {
    feature: "Presupuestos",
    papel: "Escritos a mano o en Word, tardas 1-2 horas por presupuesto",
    obrabox: "Plantillas prediseñadas, listo en 10 minutos",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Facturas",
    papel: "Bloc de facturas o gestoría externa, sin seguimiento",
    obrabox: "Facturación automática con control de cobros e impagos",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Fotos de obra",
    papel: "En el móvil, mezcladas con fotos personales",
    obrabox: "Galería organizada por obra con fecha y etiquetas",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Control de gastos",
    papel: "Tickets en una caja de zapatos, cuadras a final de mes",
    obrabox: "Registro digital por obra con alertas de desviación",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Copia de seguridad",
    papel: "Si se pierde o se moja, adiós a la información",
    obrabox: "Todo en la nube, accesible desde cualquier dispositivo",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Búsqueda de información",
    papel: "Buscar entre carpetas y papeles durante 20 minutos",
    obrabox: "Búsqueda instantánea por cliente, obra o fecha",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Acceso remoto",
    papel: "Solo desde la oficina o donde tengas los papeles",
    obrabox: "Desde el móvil, tablet u ordenador en cualquier lugar",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Imagen profesional",
    papel: "Presupuesto escrito a mano o en papel genérico",
    obrabox: "Documentos con tu logo, colores y firma digital",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Informes de rentabilidad",
    papel: "No existen hasta que el gestor te pasa los números",
    obrabox: "Rentabilidad por obra en tiempo real",
    papelOk: false,
    obraboxOk: true,
  },
  {
    feature: "Coste",
    papel: "Aparentemente gratis, pero el tiempo perdido es caro",
    obrabox: "Plan gratuito disponible, Pro desde 29€/mes",
    papelOk: true,
    obraboxOk: true,
  },
];

const problemas = [
  {
    icon: FileStack,
    titulo: "Documentos que desaparecen",
    texto:
      "El presupuesto firmado del cliente de febrero. El ticket del material que compraste en Leroy Merlin. El contrato del subcontratista. Todo en papel, todo susceptible de perderse, mojarse o quedarse en el coche.",
  },
  {
    icon: CloudOff,
    titulo: "Sin copia de seguridad",
    texto:
      "Si pierdes la carpeta de una obra, pierdes todo: presupuestos, contratos, facturas, mediciones. No hay forma de recuperar la información. Con papel, no hay Ctrl+Z.",
  },
  {
    icon: Search,
    titulo: "Buscar es perder tiempo",
    texto:
      "¿Cuánto presupuestaste aquella cocina en Vallecas? ¿Cuándo firmó el cliente el contrato? Con papel, buscar información antigua implica abrir carpetas, revisar archivadores y rezar para encontrarlo.",
  },
  {
    icon: Clock,
    titulo: "Todo es más lento",
    texto:
      "Escribir un presupuesto a mano: 1-2 horas. Cuadrar los tickets a final de mes: media tarde. Preparar la documentación para la gestoría: un día entero. El papel multiplica el tiempo administrativo.",
  },
  {
    icon: Smartphone,
    titulo: "No llevas la oficina encima",
    texto:
      "Estás en la obra y el cliente te pide el presupuesto. O necesitas consultar cuánto pagaste por el material la última vez. Si la información está en papel en tu oficina, no puedes acceder.",
  },
  {
    icon: TrendingUp,
    titulo: "No sabes si ganas dinero",
    texto:
      "Cuando todo está en papel, no puedes calcular la rentabilidad real de una obra hasta que termina (si es que la calculas). Muchos reformistas descubren que perdieron dinero cuando ya es tarde.",
  },
];

const pasos = [
  {
    numero: "1",
    titulo: "Crea tu cuenta gratis",
    texto:
      "Regístrate en ObraBox en 2 minutos. Sin tarjeta de crédito. Configura tu empresa: nombre, logo y datos fiscales.",
  },
  {
    numero: "2",
    titulo: "Crea tu primera obra",
    texto:
      "Añade una obra activa con los datos básicos: cliente, dirección y presupuesto estimado. Puedes empezar con una obra que ya tengas en marcha.",
  },
  {
    numero: "3",
    titulo: "Sube tus datos existentes",
    texto:
      "Importa tus partidas de presupuesto habituales. Si tienes plantillas en Word o Excel, puedes usarlas como referencia para crear tus plantillas en ObraBox.",
  },
  {
    numero: "4",
    titulo: "Empieza a registrar desde la obra",
    texto:
      "Desde el móvil: sube fotos, registra gastos, apunta horas. En 5 minutos al día tienes toda la información de la obra actualizada.",
  },
  {
    numero: "5",
    titulo: "Invita a tu equipo y clientes",
    texto:
      "Añade a tus operarios para que fichen y registren su trabajo. Activa el portal del cliente para que vea el avance sin llamarte.",
  },
];

export default function ObraBoxVsPapelPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-6">
            <FileStack className="w-4 h-4 text-amber-600" />
            Comparativa
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            De papel a digital: digitaliza tu empresa de reformas
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Los tickets en una caja, los presupuestos en una carpeta y las
            fotos en el móvil. Si tu empresa funciona así, estás perdiendo
            tiempo y dinero cada día.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Muchos reformistas llevan décadas trabajando con papel. Y funciona,
              hasta cierto punto. Conoces el sistema, no dependes de la
              tecnología y no pagas ninguna suscripción. Pero en 2024, seguir
              gestionando una empresa de reformas solo con papel tiene un coste
              que no ves: horas perdidas en administración, información que
              desaparece, errores que se repiten y una imagen ante el cliente
              que no transmite profesionalidad.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Digitalizar tu empresa no significa convertirte en informático.
              Significa tener toda la información de tus obras accesible desde
              el móvil, generar presupuestos profesionales en minutos y saber
              en todo momento si una obra te está dando beneficio o te está
              costando dinero.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas del papel */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-10">
            Los problemas reales de gestionar obras en papel
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemas.map((p) => (
              <div key={p.titulo} className="card p-6">
                <p.icon className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-bold text-secondary mb-2">{p.titulo}</h3>
                <p className="text-sm text-gray-600">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12">
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
                      <FileStack className="w-4 h-4 text-amber-600" />
                      Papel
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
                        {row.papelOk ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                        <span className="text-xs text-gray-500">
                          {row.papel}
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

      {/* Beneficios de digitalizar */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-10">
            Qué ganas al digitalizar tu empresa
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                titulo: "5-8 horas a la semana",
                texto:
                  "Dejas de perder tiempo haciendo presupuestos a mano, buscando tickets y cuadrando cuentas. ObraBox automatiza lo que antes hacías en papel.",
              },
              {
                icon: Camera,
                titulo: "Fotos organizadas para siempre",
                texto:
                  "Cada foto queda asociada a su obra con fecha y etiqueta. Nunca más buscarás entre las 5.000 fotos del carrete del móvil.",
              },
              {
                icon: Receipt,
                titulo: "Gastos bajo control",
                texto:
                  "Registra cada gasto desde la obra. ObraBox te dice en tiempo real si vas dentro del presupuesto o te estás pasando.",
              },
              {
                icon: Users,
                titulo: "Clientes más contentos",
                texto:
                  "El portal del cliente les da acceso a fotos, documentos y avance de la obra. Menos llamadas, más confianza, más recomendaciones.",
              },
              {
                icon: ShieldCheck,
                titulo: "Todo respaldado",
                texto:
                  "Tus datos están en la nube. Si se te rompe el móvil o pierdes una carpeta, toda la información sigue ahí.",
              },
              {
                icon: BarChart3,
                titulo: "Sabes si ganas o pierdes",
                texto:
                  "Informes de rentabilidad por obra. Por primera vez, sabes exactamente cuánto margen te deja cada reforma.",
              },
            ].map((b) => (
              <div key={b.titulo} className="card p-6 flex items-start gap-4">
                <b.icon className="w-6 h-6 text-primary-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-secondary mb-1">{b.titulo}</h3>
                  <p className="text-sm text-gray-600">{b.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos para la transición */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-4">
            Cómo hacer la transición paso a paso
          </h2>
          <p className="text-center text-gray-600 mb-10">
            No necesitas digitalizar todo de golpe. Empieza con una obra y ve
            ampliando a tu ritmo.
          </p>
          <div className="space-y-6">
            {pasos.map((paso) => (
              <div key={paso.numero} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {paso.numero}
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">
                    {paso.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">{paso.texto}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              La mayoría de nuestros usuarios completan la transición en menos
              de una semana. Y muchos nos dicen lo mismo: &quot;No sé cómo
              trabajaba antes sin esto&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Digitaliza tu empresa de reformas hoy
          </h2>
          <p className="text-primary-100 mb-8">
            14 días gratis. Sin tarjeta. Empieza con una obra y decide.
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
