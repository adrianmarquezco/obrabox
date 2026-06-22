import { Kanban, Plus } from "lucide-react";

export default function PipelinePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Pipeline / CRM</h1>
        <button className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo lead
        </button>
      </div>

      <div className="card p-8 text-center">
        <Kanban className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Tu pipeline está vacío
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Añade leads y gestiona tu embudo de ventas
        </p>
      </div>
    </div>
  );
}
