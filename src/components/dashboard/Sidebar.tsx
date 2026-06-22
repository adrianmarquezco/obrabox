"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  FileText,
  Users,
  Kanban,
  Receipt,
  Wallet,
  UserCog,
  CalendarDays,
  BarChart3,
  Bell,
  Settings,
  FileStack,
  BadgeEuro,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Inicio" },
  { href: "/dashboard/obras", icon: Building2, label: "Obras" },
  { href: "/dashboard/presupuestos", icon: FileText, label: "Presupuestos" },
  { href: "/dashboard/clientes", icon: Users, label: "Clientes" },
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

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden lg:flex flex-col bg-white border-r border-border h-screen sticky top-0 transition-all duration-200 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OB</span>
            </div>
            <span className="text-lg font-bold text-secondary">
              Obra<span className="text-primary-500">Box</span>
            </span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-surface text-gray-400"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                isActive
                  ? "bg-primary-50 text-primary-600"
                  : "text-gray-600 hover:bg-surface hover:text-secondary"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
