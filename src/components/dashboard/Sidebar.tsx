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
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

const allMenuItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Inicio", modulo: "dashboard" },
  { href: "/dashboard/obras", icon: Building2, label: "Obras", modulo: "obras" },
  { href: "/dashboard/presupuestos", icon: FileText, label: "Presupuestos", modulo: "presupuestos" },
  { href: "/dashboard/clientes", icon: Users, label: "Clientes", modulo: "clientes" },
  { href: "/dashboard/pipeline", icon: Kanban, label: "Pipeline / CRM", modulo: "pipeline" },
  { href: "/dashboard/gastos", icon: Wallet, label: "Gastos", modulo: "gastos" },
  { href: "/dashboard/facturacion", icon: Receipt, label: "Facturación", modulo: "facturas" },
  { href: "/dashboard/equipo", icon: UserCog, label: "Equipo", modulo: "equipo" },
  { href: "/dashboard/agenda", icon: CalendarDays, label: "Agenda", modulo: "agenda" },
  { href: "/dashboard/informes", icon: BarChart3, label: "Informes", modulo: "informes" },
  { href: "/dashboard/plantillas", icon: FileStack, label: "Plantillas", modulo: "plantillas" },
  { href: "/dashboard/subvenciones", icon: BadgeEuro, label: "Subvenciones", modulo: "subvenciones" },
  { href: "/dashboard/comunicaciones", icon: MessageSquare, label: "Comunicaciones", modulo: "comunicaciones" },
  { href: "/dashboard/notificaciones", icon: Bell, label: "Notificaciones", modulo: null },
  { href: "/dashboard/configuracion", icon: Settings, label: "Configuración", modulo: null },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [activeModulos, setActiveModulos] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadModulos() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data: usr } = await supabase.from("usuarios").select("empresa_id").eq("id", user.id).single();
      if (!usr) return;
      const { data } = await supabase.from("modulos_activos").select("modulo").eq("empresa_id", usr.empresa_id).eq("activo", true);
      if (data) {
        setActiveModulos(new Set(data.map((m: { modulo: string }) => m.modulo)));
      }
      setLoaded(true);
    }
    loadModulos();
  }, []);

  const menuItems = loaded
    ? allMenuItems.filter((item) => item.modulo === null || activeModulos.has(item.modulo))
    : allMenuItems.filter((item) => ["dashboard", "obras", "presupuestos", "clientes"].includes(item.modulo || "") || item.modulo === null);

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
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
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
