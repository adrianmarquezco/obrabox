import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Novedades — Actualizaciones de ObraBox",
  description: "Descubre las últimas mejoras y funcionalidades de ObraBox. Changelog de actualizaciones del software de gestión para reformas.",
  alternates: { canonical: "/novedades" },
};

const updates = [
  {
    fecha: "Junio 2026",
    titulo: "Lanzamiento de ObraBox",
    items: [
      "Gestión de obras con checklist por fases",
      "Presupuestos profesionales con plantillas y firma digital",
      "Control de gastos con foto de ticket",
      "Facturación con numeración automática y recordatorios de impago",
      "CRM / Pipeline con kanban visual",
      "Gestión de equipo con planning semanal y fichaje GPS",
      "Portal del cliente con acceso por magic link",
      "Galería de fotos con comparativas antes/después",
      "Agenda con recordatorios automáticos",
      "Informes de rentabilidad",
      "PWA: instala ObraBox en tu móvil",
    ],
  },
];

export default function NovedadesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary">Novedades</h1>
          <p className="mt-4 text-lg text-gray-600">Qué hay de nuevo en ObraBox</p>
        </div>

        <div className="space-y-12">
          {updates.map((update) => (
            <div key={update.fecha}>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary-500" />
                <h2 className="text-xl font-bold text-secondary">{update.fecha}</h2>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">{update.titulo}</h3>
              <ul className="space-y-2">
                {update.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
