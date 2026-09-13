"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard, Building2, Users, MessageSquare, Settings, LogOut, Shield,
} from "lucide-react";

const nav = [
  { href: "/admin", icon: LayoutDashboard, label: "Overview" },
  { href: "/admin/empresas", icon: Building2, label: "Empresas" },
  { href: "/admin/usuarios", icon: Users, label: "Usuarios" },
  { href: "/admin/leads", icon: MessageSquare, label: "Leads" },
  { href: "/admin/config", icon: Settings, label: "Config global" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function check() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.replace("/login"); return; }
      const { data: isAdmin } = await supabase.rpc("check_is_admin");
      if (!isAdmin) { router.replace("/dashboard"); return; }
      setChecking(false);
    }
    check();
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <p className="text-gray-400 text-sm">Verificando acceso...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-950 text-gray-100">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800 flex items-center gap-2">
          <Shield className="w-5 h-5 text-orange-400" />
          <span className="font-bold text-orange-400">Admin Panel</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          {nav.map((item) => {
            const isActive = item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-orange-500/20 text-orange-400"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-100"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-gray-800">
          <Link href="/dashboard"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <LogOut className="w-3.5 h-3.5" /> Volver al dashboard
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}
