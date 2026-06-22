import type { Metadata } from "next";
import Link from "next/link";
import { FileDown, Users, BadgeEuro, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners — Gestorías | ObraBox",
  description: "Recomienda ObraBox a tus clientes reformistas. Programa de partners para gestorías con comisiones y exportación directa.",
  alternates: { canonical: "/partner/gestorias" },
};

export default function GestoriasPartnerPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary">
            ¿Eres gestoría o asesoría?
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Recomienda ObraBox a tus clientes reformistas. Ellos se organizan mejor, y tú recibes las facturas limpias y en formato digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="card p-6">
            <FileDown className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Datos limpios</h2>
            <p className="text-sm text-gray-600">Tus clientes exportan facturas emitidas y recibidas en CSV, listas para importar en tu sistema.</p>
          </div>
          <div className="card p-6">
            <Users className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Menos consultas</h2>
            <p className="text-sm text-gray-600">Cuando tus clientes se organizan con ObraBox, te llegan menos consultas de última hora.</p>
          </div>
          <div className="card p-6">
            <BadgeEuro className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Comisión recurrente</h2>
            <p className="text-sm text-gray-600">Gana una comisión mensual por cada cliente que active un plan de pago a través de tu enlace.</p>
          </div>
          <div className="card p-6">
            <Handshake className="w-10 h-10 text-primary-500 mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Soporte conjunto</h2>
            <p className="text-sm text-gray-600">Te ayudamos a formar a tus clientes en ObraBox. Material de onboarding y soporte dedicado.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contacto" className="btn-primary text-lg px-8 py-4">
            Unirse al programa de gestorías
          </Link>
        </div>
      </div>
    </section>
  );
}
