import { Receipt, Plus } from "lucide-react";

export default function FacturacionPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Facturación</h1>
        <button className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Nueva factura
        </button>
      </div>

      <div className="card p-8 text-center">
        <Receipt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin facturas emitidas
        </h2>
        <p className="text-sm text-gray-500">
          Crea facturas desde tus obras con numeración automática
        </p>
      </div>
    </div>
  );
}
