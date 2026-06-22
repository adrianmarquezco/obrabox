"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  FileText,
  Users,
  MoreHorizontal,
} from "lucide-react";

const tabs = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Inicio" },
  { href: "/dashboard/obras", icon: Building2, label: "Obras" },
  { href: "/dashboard/presupuestos", icon: FileText, label: "Presupuestos" },
  { href: "/dashboard/clientes", icon: Users, label: "Clientes" },
  { href: "/dashboard/mas", icon: MoreHorizontal, label: "Más" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href ||
            (tab.href !== "/dashboard" && tab.href !== "/dashboard/mas" && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-1 w-full h-full text-xs font-medium transition-colors ${
                isActive ? "text-primary-500" : "text-gray-400"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
