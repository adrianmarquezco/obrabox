import type { Metadata } from "next";
import Link from "next/link";
import { Star, Building2, TrendingUp, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito — Reformistas que Usan ObraBox",
  description: "Descubre cómo empresas de reformas en España han mejorado su gestión, aumentado su rentabilidad y ahorrado tiempo con ObraBox.",
  alternates: { canonical: "/casos-de-exito" },
};

const casos = [
  {
    empresa: "Reformas Martínez",
    ubicacion: "Valencia",
    empleados: "8 personas",
    especializacion: "Reformas integrales",
    problema: "Gestionaban todo con Excel y WhatsApp. Perdían tickets de gastos, no sabían el margen real de cada obra, y los clientes llamaban constantemente preguntando por el avance.",
    solucion: "Implementaron ObraBox con control de gastos, portal del cliente y presupuestos profesionales.",
    resultados: [
      { icon: TrendingUp, label: "Margen medio subió del 12% al 19%" },
      { icon: Clock, label: "80% menos llamadas de clientes" },
      { icon: Building2, label: "Presupuestos en 15 min en vez de 2 horas" },
    ],
    cita: "Antes no sabíamos si ganábamos o perdíamos en cada obra hasta que terminaba. Ahora lo sabemos en tiempo real.",
    persona: "Juan Martínez, fundador",
    rating: 5,
  },
  {
    empresa: "Baños Pro",
    ubicacion: "Madrid",
    empleados: "12 personas",
    especializacion: "Reformas de baños",
    problema: "Perdían muchos leads porque no hacían seguimiento. Enviaban el presupuesto y si el cliente no llamaba, se olvidaban.",
    solucion: "Activaron el CRM/Pipeline con registro de seguimiento y recordatorios. Presupuestos con opciones básico/medio/premium.",
    resultados: [
      { icon: TrendingUp, label: "Tasa conversión del 17% al 32%" },
      { icon: Building2, label: "5 obras más al mes" },
      { icon: Clock, label: "Seguimiento sistemático de cada lead" },
    ],
    cita: "Las opciones en los presupuestos fueron clave. El cliente elige, no rechaza. Cerramos el doble de obras.",
    persona: "María López, directora comercial",
    rating: 5,
  },
  {
    empresa: "Construye BCN",
    ubicacion: "Barcelona",
    empleados: "15 personas",
    especializacion: "Reformas integrales y locales",
    problema: "El equipo no sabía a qué obra ir cada día. Los fichajes se hacían en papel y se perdían. Los documentos de los trabajadores caducaban sin que nadie se diera cuenta.",
    solucion: "Planning semanal visual, fichaje con GPS desde el móvil, y gestión documental con alertas de caducidad.",
    resultados: [
      { icon: Clock, label: "0 incidencias con Inspección de Trabajo" },
      { icon: Building2, label: "Planning en 10 min los domingos" },
      { icon: TrendingUp, label: "20% menos tiempo perdido en coordinación" },
    ],
    cita: "El planning visual cambió nuestra forma de trabajar. Todo el equipo sabe dónde ir sin preguntar.",
    persona: "Pedro García, gerente",
    rating: 5,
  },
];

export default function CasosExitoPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Reformistas que ya trabajan con ObraBox
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Empresas reales, resultados reales. Descubre cómo ObraBox les ha ayudado a mejorar su gestión.
            </p>
          </div>

          <div className="space-y-12">
            {casos.map((caso) => (
              <div key={caso.empresa} className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">{caso.empresa}</h2>
                    <p className="text-gray-500 text-sm">
                      {caso.ubicacion} · {caso.empleados} · {caso.especializacion}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: caso.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">El problema</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{caso.problema}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">La solución</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{caso.solucion}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-2">Resultados</h3>
                    <ul className="space-y-2">
                      {caso.resultados.map((r) => (
                        <li key={r.label} className="flex items-start gap-2 text-sm text-gray-700">
                          <r.icon className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          {r.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-surface rounded-lg p-5">
                  <p className="text-gray-700 italic">&ldquo;{caso.cita}&rdquo;</p>
                  <p className="text-sm text-gray-500 mt-2">— {caso.persona}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h2>
            <Link href="/registro" className="btn-primary text-lg px-8 py-4">
              Prueba gratis 14 días
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
