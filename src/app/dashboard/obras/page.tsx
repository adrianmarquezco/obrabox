import Link from "next/link";
import { Plus, Building2 } from "lucide-react";

export default function ObrasPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Obras</h1>
        <Link href="/dashboard/obras/nueva" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva obra
        </Link>
      </div>

      <div className="card p-8 text-center">
        <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Aún no tienes obras
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Crea tu primera obra para empezar a gestionar tus reformas
        </p>
        <Link href="/dashboard/obras/nueva" className="btn-primary inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Crear primera obra
        </Link>
      </div>
    </div>
  );
}
