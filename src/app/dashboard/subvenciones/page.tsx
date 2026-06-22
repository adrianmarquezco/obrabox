import { BadgeEuro } from "lucide-react";

export default function SubvencionesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Subvenciones</h1>
      <div className="card p-8 text-center">
        <BadgeEuro className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Comprobador de subvenciones
        </h2>
        <p className="text-sm text-gray-500">
          Consulta las ayudas disponibles para tus reformas según tipo de obra y ubicación
        </p>
      </div>
    </div>
  );
}
