import { Wallet, Plus } from "lucide-react";
import Link from "next/link";

export default function GastosPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Gastos</h1>
        <button className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nuevo gasto
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/gastos" className="badge-info">Gastos</Link>
        <Link href="/dashboard/gastos/proveedores" className="badge-neutral">Proveedores</Link>
        <Link href="/dashboard/gastos/facturas-recibidas" className="badge-neutral">Facturas recibidas</Link>
      </div>

      <div className="card p-8 text-center">
        <Wallet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin gastos registrados
        </h2>
        <p className="text-sm text-gray-500">
          Registra gastos con foto del ticket directamente desde el móvil
        </p>
      </div>
    </div>
  );
}
