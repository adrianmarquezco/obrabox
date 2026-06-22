import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  X,
  MessageCircle,
  ImageOff,
  Search,
  FolderOpen,
  Users,
  Receipt,
  FileText,
  Smartphone,
  Bell,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dejar de Gestionar Obras por WhatsApp — ObraBox vs WhatsApp",
  description:
    "Por qué gestionar reformas con grupos de WhatsApp no escala. Compara WhatsApp con ObraBox y descubre cómo organizar tus obras de verdad.",
  alternates: { canonical: "/comparativas/obrabox-vs-whatsapp" },
};

const comparativa = [
  {
    feature: "Organización de la información",
    whatsapp: "Mensajes mezclados: fotos, presupuestos, bromas y audios",
    obrabox: "Todo organizado por obra: fotos, gastos, documentos y chat",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Gestión de fotos de obra",
    whatsapp: "Fotos perdidas entre mensajes, sin fecha ni etiqueta",
    obrabox: "Galería por obra con fecha, etiquetas y antes/después",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Presupuestos y facturas",
    whatsapp: "Envías un PDF por chat que se pierde en días",
    obrabox: "Presupuestos con plantillas, firma digital y seguimiento",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Comunicación con el cliente",
    whatsapp: "Mensajes a deshora, audios eternos, sin límites",
    obrabox: "Portal del cliente: ve el avance sin llamarte ni escribirte",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Coordinación del equipo",
    whatsapp: "Grupo con 20 personas donde nadie lee los mensajes importantes",
    obrabox: "Asignación de tareas, planning semanal y fichaje GPS",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Control de gastos",
    whatsapp: "No existe. A veces envías fotos de tickets",
    obrabox: "Registro de gastos por obra con alertas de desviación",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Búsqueda de información antigua",
    whatsapp: "Scroll infinito buscando aquel mensaje de hace 3 meses",
    obrabox: "Búsqueda instantánea por obra, cliente o fecha",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Imagen profesional",
    whatsapp: "El cliente recibe todo por WhatsApp como si fuera informal",
    obrabox: "Portal profesional con tu logo y colores corporativos",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Historial de decisiones",
    whatsapp: "El cliente dice que no aprobó ese extra. No hay registro",
    obrabox: "Extras con firma digital y registro de aprobación",
    whatsappOk: false,
    obraboxOk: true,
  },
  {
    feature: "Disponibilidad",
    whatsapp: "Gratis, todo el mundo lo tiene",
    obrabox: "Plan gratuito disponible, Pro desde 29€/mes",
    whatsappOk: true,
    obraboxOk: true,
  },
];

const problemas = [
  {
    icon: ImageOff,
    titulo: "Las fotos se pierden",
    texto:
      "La foto del problema en la instalación eléctrica que te mandó tu operario hace 2 semanas está enterrada entre memes, audios y mensajes del grupo. Buena suerte encontrándola.",
  },
  {
    icon: Search,
    titulo: "No puedes buscar nada",
    texto:
      "¿Cuánto costaba aquella partida que presupuestaste en marzo? ¿Qué dijo el cliente sobre el cambio de azulejos? En WhatsApp, buscar información antigua es una pérdida de tiempo garantizada.",
  },
  {
    icon: FolderOpen,
    titulo: "No hay estructura",
    texto:
      "Todo va al mismo sitio: fotos de obra, facturas de proveedores, conversaciones personales y decisiones importantes. No hay forma de separar lo urgente de lo irrelevante.",
  },
  {
    icon: Receipt,
    titulo: "No controlas los gastos",
    texto:
      "Tu operario te manda una foto del ticket del material. Tú le das al like. Y ese gasto nunca llega a ninguna hoja de cálculo. Al final de la obra, no sabes cuánto has gastado de verdad.",
  },
  {
    icon: Shield,
    titulo: "Sin respaldo legal",
    texto:
      "El cliente aprobó el extra por un audio de WhatsApp. Cuando llega la factura, dice que nunca lo aprobó. No tienes un documento firmado, solo un mensaje que puede borrar.",
  },
  {
    icon: Bell,
    titulo: "Estás disponible 24/7",
    texto:
      "Si gestionas obras por WhatsApp, los clientes te escriben a las 22:00 un domingo. Y tú contestas, porque el chat personal y el profesional están en el mismo sitio.",
  },
];

export default function ObraBoxVsWhatsAppPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-6">
            <MessageCircle className="w-4 h-4 text-green-500" />
            Comparativa
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            Dejar de gestionar obras por WhatsApp
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Los grupos de WhatsApp no son una herramienta de gestión. Son un
            agujero negro donde se pierden fotos, decisiones y presupuestos.
            Hay una forma mejor.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Es normal. Todo el mundo tiene WhatsApp y es rápido. Creas un
              grupo para la obra, metes al cliente, al electricista, al
              fontanero y al pintor. Durante las primeras semanas funciona.
              Pero cuando llevas 3 obras simultáneas y 15 grupos activos, el
              caos es total.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              WhatsApp es una app de mensajería, no una herramienta de gestión
              de obras. No tiene estructura, no organiza la información, no
              genera presupuestos y no te protege ante un cliente que niega
              haber aprobado un cambio. Usarla para gestionar reformas es como
              usar un destornillador como cincel: puede funcionar, pero no es
              la herramienta correcta.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-10">
            6 problemas reales de gestionar obras por WhatsApp
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
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      WhatsApp
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
                        {row.whatsappOk ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                        <span className="text-xs text-gray-500">
                          {row.whatsapp}
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

      {/* Cómo ObraBox lo resuelve */}
      <section className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-8">
            Cómo ObraBox sustituye a WhatsApp
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: FolderOpen,
                titulo: "Una obra, un sitio",
                texto:
                  "Cada obra tiene su espacio con fotos, gastos, documentos y notas. No hay mezcla con otras obras ni con mensajes personales.",
              },
              {
                icon: Users,
                titulo: "El cliente tiene su portal",
                texto:
                  "En vez de mandarte mensajes a las 22:00, el cliente entra a su portal y ve las fotos, el avance y los documentos. Sin necesidad de llamarte.",
              },
              {
                icon: FileText,
                titulo: "Todo queda registrado",
                texto:
                  "Los extras se aprueban con firma digital. Los presupuestos se envían con enlace de seguimiento. No hay espacio para el \"yo no dije eso\".",
              },
              {
                icon: Smartphone,
                titulo: "Desde el móvil, pero profesional",
                texto:
                  "Tu equipo registra gastos, sube fotos y ficha desde el móvil. Con la misma comodidad que WhatsApp, pero con la estructura que necesitas.",
              },
            ].map((item) => (
              <div key={item.titulo} className="card p-6 flex items-start gap-4">
                <item.icon className="w-6 h-6 text-primary-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-secondary mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tus obras merecen algo mejor que un grupo de WhatsApp
          </h2>
          <p className="text-primary-100 mb-8">
            14 días gratis. Sin tarjeta. Sin compromisos.
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
