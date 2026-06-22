import Link from "next/link";
import { Plus, Users } from "lucide-react";

export default function ClientesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Clientes</h1>
        <div className="flex gap-2">
          <button className="btn-secondary flex items-center gap-2 !text-sm">
            Importar Excel
          </button>
          <Link href="/dashboard/clientes/nuevo" className="btn-primary flex items-center gap-2 !text-sm">
            <Plus className="w-4 h-4" /> Nuevo cliente
          </Link>
        </div>
      </div>

      <div className="card p-8 text-center">
        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin clientes registrados
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Añade tu primer cliente o importa desde un archivo Excel
        </p>
        <Link href="/dashboard/clientes/nuevo" className="btn-primary inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Añadir cliente
        </Link>
      </div>
    </div>
  );
}
