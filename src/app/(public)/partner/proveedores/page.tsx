import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, Eye, TrendingUp, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners — Proveedores de Materiales | ObraBox",
  description: "Llega a miles de reformistas en España a través de ObraBox. Programa de partners para proveedores de materiales de construcción.",
  alternates: { canonical: "/partner/proveedores" },
};

export default function ProveedoresPartnerPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary">
            ¿Eres proveedor de materiales?
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Llega a miles de reformistas en España a través de ObraBox. Conviértete en proveedor recomendado dentro de la plataforma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="card p-6">
            <Eye className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Visibilidad</h2>
            <p className="text-sm text-gray-600">Aparece como proveedor recomendado cuando los reformistas registran gastos de materiales.</p>
          </div>
          <div className="card p-6">
            <ShoppingCart className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Catálogo integrado</h2>
            <p className="text-sm text-gray-600">Tus productos pueden aparecer en el histórico de precios de los reformistas.</p>
          </div>
          <div className="card p-6">
            <TrendingUp className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Datos de mercado</h2>
            <p className="text-sm text-gray-600">Accede a tendencias de compra del sector de reformas de forma agregada y anónima.</p>
          </div>
          <div className="card p-6">
            <Handshake className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Programa flexible</h2>
            <p className="text-sm text-gray-600">Diferentes niveles de partnership según tus necesidades y presupuesto.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contacto" className="btn-primary text-lg px-8 py-4">
            Contactar para ser partner
          </Link>
        </div>
      </div>
    </section>
  );
}
