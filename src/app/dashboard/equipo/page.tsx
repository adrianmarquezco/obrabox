import { UserCog, Plus } from "lucide-react";
import Link from "next/link";

export default function EquipoPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Equipo</h1>
        <button className="btn-primary flex items-center gap-2 !text-sm">
          <Plus className="w-4 h-4" /> Añadir trabajador
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <Link href="/dashboard/equipo" className="badge-info">Equipo</Link>
        <Link href="/dashboard/equipo/planning" className="badge-neutral">Planning semanal</Link>
        <Link href="/dashboard/equipo/fichaje" className="badge-neutral">Fichaje</Link>
      </div>

      <div className="card p-8 text-center">
        <UserCog className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          Sin equipo registrado
        </h2>
        <p className="text-sm text-gray-500">
          Añade trabajadores y subcontratas para organizar tus obras
        </p>
      </div>
    </div>
  );
}
