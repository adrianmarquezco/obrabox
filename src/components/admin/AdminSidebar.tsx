"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Building2, Users, CreditCard, Puzzle,
  ScrollText, Shield, Settings, Activity, Database, FileText,
} from "lucide-react";

const menuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/empresas", icon: Building2, label: "Empresas" },
  { href: "/admin/usuarios", icon: Users, label: "Usuarios" },
  { href: "/admin/planes", icon: CreditCard, label: "Planes y suscripciones" },
  { href: "/admin/modulos", icon: Puzzle, label: "Módulos" },
  { href: "/admin/contenido", icon: FileText, label: "Contenido" },
  { href: "/admin/logs", icon: Activity, label: "Logs de actividad" },
  { href: "/admin/admins", icon: Shield, label: "Administradores" },
  { href: "/admin/config", icon: Settings, label: "Configuración" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-slate-900 text-white h-screen sticky top-0">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-sm font-bold">ObraBox</span>
            <span className="text-xs text-slate-400 block">Panel Admin</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                isActive
                  ? "bg-red-500/20 text-red-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <Link href="/dashboard" className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
          <Database className="w-4 h-4" />
          Ir al dashboard de usuario
        </Link>
      </div>
    </aside>
  );
}
