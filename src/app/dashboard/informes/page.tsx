import { BarChart3 } from "lucide-react";

export default function InformesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Informes</h1>
      <div className="card p-8 text-center">
        <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin datos suficientes
        </h2>
        <p className="text-sm text-gray-500">
          Los informes se generan automáticamente cuando tengas obras y facturas registradas
        </p>
      </div>
    </div>
  );
}
