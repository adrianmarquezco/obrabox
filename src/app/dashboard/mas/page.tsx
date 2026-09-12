"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
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

const allItems = [
  { href: "/dashboard/pipeline", icon: Kanban, label: "Pipeline / CRM", adminOnly: false },
  { href: "/dashboard/gastos", icon: Wallet, label: "Gastos", adminOnly: false },
  { href: "/dashboard/facturacion", icon: Receipt, label: "Facturación", adminOnly: false },
  { href: "/dashboard/equipo", icon: UserCog, label: "Equipo", adminOnly: false },
  { href: "/dashboard/agenda", icon: CalendarDays, label: "Agenda", adminOnly: false },
  { href: "/dashboard/informes", icon: BarChart3, label: "Informes", adminOnly: false },
  { href: "/dashboard/plantillas", icon: FileStack, label: "Plantillas", adminOnly: false },
  { href: "/dashboard/subvenciones", icon: BadgeEuro, label: "Subvenciones", adminOnly: false },
  { href: "/dashboard/comunicaciones", icon: MessageSquare, label: "Comunicaciones", adminOnly: false },
  { href: "/dashboard/notificaciones", icon: Bell, label: "Notificaciones", adminOnly: false },
  { href: "/dashboard/configuracion", icon: Settings, label: "Configuración", adminOnly: true },
];

export default function MasPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkRole() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setIsAdmin(false); return; }
      const { data } = await supabase.from("usuarios").select("rol").eq("id", user.id).single();
      setIsAdmin(data?.rol === "admin");
    }
    checkRole();
  }, []);

  const items = isAdmin === null
    ? allItems.filter((i) => !i.adminOnly)
    : allItems.filter((i) => !i.adminOnly || isAdmin);

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
