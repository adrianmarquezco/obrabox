import { FileStack } from "lucide-react";

export default function PlantillasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Plantillas</h1>
      <div className="card p-8 text-center">
        <FileStack className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Gestiona tus plantillas
        </h2>
        <p className="text-sm text-gray-500">
          Plantillas de presupuesto, mensajes, checklists y contratos
        </p>
      </div>
    </div>
  );
}
