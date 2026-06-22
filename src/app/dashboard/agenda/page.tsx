import { CalendarDays, Plus } from "lucide-react";

export default function AgendaPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Agenda</h1>
        <button className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva cita
        </button>
      </div>

      <div className="card p-8 text-center">
        <CalendarDays className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Tu agenda está vacía
        </h2>
        <p className="text-sm text-gray-500">
          Programa visitas, inicios de obra y reuniones con clientes
        </p>
      </div>
    </div>
  );
}
