import {
  Building2,
  FileText,
  Receipt,
  TrendingUp,
  CalendarDays,
  AlertTriangle,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary">
          Bienvenido a tu panel
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Aquí tienes un resumen de tu actividad
        </p>
      </div>

      {/* Widgets principales */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link href="/dashboard/obras" className="card p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <Building2 className="w-8 h-8 text-primary-500" />
            <span className="badge-info">Activas</span>
          </div>
          <p className="text-2xl font-bold text-secondary">0</p>
          <p className="text-sm text-gray-500">Obras activas</p>
        </Link>

        <Link href="/dashboard/presupuestos" className="card p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <FileText className="w-8 h-8 text-blue-500" />
            <span className="badge-warning">Pendientes</span>
          </div>
          <p className="text-2xl font-bold text-secondary">0</p>
          <p className="text-sm text-gray-500">Presupuestos pendientes</p>
        </Link>

        <Link href="/dashboard/facturacion" className="card p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <Receipt className="w-8 h-8 text-red-500" />
            <span className="badge-danger">Impagadas</span>
          </div>
          <p className="text-2xl font-bold text-secondary">0€</p>
          <p className="text-sm text-gray-500">Facturas impagadas</p>
        </Link>

        <div className="card p-5">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <span className="badge-success">Este mes</span>
          </div>
          <p className="text-2xl font-bold text-secondary">0€</p>
          <p className="text-sm text-gray-500">Ingresos del mes</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Alertas urgentes */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h2 className="font-semibold text-secondary">Alertas urgentes</h2>
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-400">No tienes alertas pendientes</p>
          </div>
        </div>

        {/* Próximas citas */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5 text-blue-500" />
            <h2 className="font-semibold text-secondary">Próximas citas</h2>
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-400">No tienes citas próximas</p>
            <Link
              href="/dashboard/agenda"
              className="text-sm text-primary-500 font-medium mt-2 inline-block"
            >
              Crear cita
            </Link>
          </div>
        </div>

        {/* Actividad reciente */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-purple-500" />
            <h2 className="font-semibold text-secondary">Actividad reciente</h2>
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-400">
              Empieza creando tu primera obra o presupuesto
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <Link
                href="/dashboard/obras/nueva"
                className="text-sm text-primary-500 font-medium"
              >
                Nueva obra
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/dashboard/presupuestos/nuevo"
                className="text-sm text-primary-500 font-medium"
              >
                Nuevo presupuesto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
