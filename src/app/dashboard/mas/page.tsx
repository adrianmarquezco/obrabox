import Link from "next/link";
import {
  Kanban,
  Wallet,
  Receipt,
  UserCog,
  CalendarDays,
  BarChart3,
  FileStack,
  BadgeEuro,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

const items = [
  { href: "/dashboard/pipeline", icon: Kanban, label: "Pipeline / CRM" },
  { href: "/dashboard/gastos", icon: Wallet, label: "Gastos" },
  { href: "/dashboard/facturacion", icon: Receipt, label: "Facturación" },
  { href: "/dashboard/equipo", icon: UserCog, label: "Equipo" },
  { href: "/dashboard/agenda", icon: CalendarDays, label: "Agenda" },
  { href: "/dashboard/informes", icon: BarChart3, label: "Informes" },
  { href: "/dashboard/plantillas", icon: FileStack, label: "Plantillas" },
  { href: "/dashboard/subvenciones", icon: BadgeEuro, label: "Subvenciones" },
  { href: "/dashboard/comunicaciones", icon: MessageSquare, label: "Comunicaciones" },
  { href: "/dashboard/notificaciones", icon: Bell, label: "Notificaciones" },
  { href: "/dashboard/configuracion", icon: Settings, label: "Configuración" },
];

export default function MasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Más opciones</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="card p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow text-center"
          >
            <item.icon className="w-8 h-8 text-primary-500" />
            <span className="text-sm font-medium text-secondary">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
