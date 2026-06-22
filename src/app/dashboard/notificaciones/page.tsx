import { Bell } from "lucide-react";

export default function NotificacionesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Notificaciones</h1>
        <button className="text-sm text-primary-500 font-medium">
          Marcar todas como leídas
        </button>
      </div>

      <div className="card p-8 text-center">
        <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-secondary mb-2">
          No tienes notificaciones
        </h2>
        <p className="text-sm text-gray-500">
          Aquí aparecerán las alertas de tus obras, facturas y presupuestos
        </p>
      </div>
    </div>
  );
}
