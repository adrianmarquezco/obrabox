import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export default function PresupuestosPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Presupuestos</h1>
        <Link href="/dashboard/presupuestos/nuevo" className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo presupuesto
        </Link>
      </div>

      <div className="card p-8 text-center">
        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin presupuestos todavía
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Crea tu primer presupuesto profesional en minutos
        </p>
        <Link href="/dashboard/presupuestos/nuevo" className="btn-primary inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> Crear presupuesto
        </Link>
      </div>
    </div>
  );
}
