"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const funcionalidades = [
  { href: "/presupuestos-reforma", label: "Presupuestos" },
  { href: "/gestion-obra-completa", label: "Gestión de obras" },
  { href: "/control-gastos-obra", label: "Control de gastos" },
  { href: "/facturacion-reformas", label: "Facturación" },
  { href: "/gestion-equipo-obra", label: "Gestión de equipo" },
  { href: "/crm-reformas", label: "CRM / Pipeline" },
  { href: "/portal-cliente-obras", label: "Portal del cliente" },
  { href: "/galeria-fotos-obra", label: "Galería de fotos" },
  { href: "/agenda-reformista", label: "Agenda" },
  { href: "/informes-rentabilidad", label: "Informes" },
];

const recursos = [
  { href: "/blog", label: "Blog" },
  { href: "/calculadora/reforma-bano", label: "Calculadoras" },
  { href: "/plantillas/presupuesto-reforma-bano", label: "Plantillas gratis" },
  { href: "/directorio", label: "Directorio profesionales" },
  { href: "/subvenciones", label: "Subvenciones" },
  { href: "/guias/montar-empresa-reformas", label: "Guías" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [funcDrop, setFuncDrop] = useState(false);
  const [recurDrop, setRecurDrop] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OB</span>
            </div>
            <span className="text-xl font-bold text-secondary">
              Obra<span className="text-primary-500">Box</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setFuncDrop(true)}
              onMouseLeave={() => setFuncDrop(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors">
                Funcionalidades <ChevronDown className="w-4 h-4" />
              </button>
              {funcDrop && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl border border-border shadow-lg py-2 z-50">
                  {funcionalidades.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface hover:text-primary-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/precios"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
            >
              Precios
            </Link>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
            >
              Blog
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setRecurDrop(true)}
              onMouseLeave={() => setRecurDrop(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors">
                Recursos <ChevronDown className="w-4 h-4" />
              </button>
              {recurDrop && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl border border-border shadow-lg py-2 z-50">
                  {recursos.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface hover:text-primary-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
            >
              Contacto
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="btn-outline text-sm !px-4 !py-2">
              Iniciar sesión
            </Link>
            <Link href="/registro" className="btn-primary text-sm !px-4 !py-2">
              Prueba gratis
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-2">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Funcionalidades
            </p>
            {funcionalidades.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-500"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border my-2" />
            <Link
              href="/precios"
              className="block px-3 py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <p className="px-3 pt-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Recursos
            </p>
            {recursos.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-500"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block px-3 py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Contacto
            </Link>
            <div className="border-t border-border my-2" />
            <div className="flex flex-col gap-2 px-3">
              <Link href="/login" className="btn-outline text-sm text-center">
                Iniciar sesión
              </Link>
              <Link href="/registro" className="btn-primary text-sm text-center">
                Prueba gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
