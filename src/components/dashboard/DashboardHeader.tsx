"use client";

import Link from "next/link";
import { Bell, Search, User } from "lucide-react";
import { useState } from "react";

export default function DashboardHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 lg:px-6">
        <div className="lg:hidden flex items-center gap-2">
          <div className="w-7 h-7 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">OB</span>
          </div>
          <span className="text-lg font-bold text-secondary">
            Obra<span className="text-primary-500">Box</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar obras, clientes, presupuestos..."
              className="input !py-2 !pl-10 !text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface text-gray-500"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/dashboard/notificaciones"
            className="relative p-2 rounded-lg hover:bg-surface text-gray-500"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Link>
          <Link
            href="/dashboard/configuracion"
            className="p-2 rounded-lg hover:bg-surface text-gray-500"
          >
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="input !py-2 !pl-10 !text-sm"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
