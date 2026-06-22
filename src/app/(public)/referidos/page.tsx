import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programa de Referidos — Invita y Gana un Mes Gratis | ObraBox",
  description: "Invita a otro reformista a ObraBox y ambos ganáis 1 mes gratis del plan Pro. Sin límites de invitaciones.",
  alternates: { canonical: "/referidos" },
};

export default function ReferidosPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            Invita a un reformista, gana un mes gratis
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comparte ObraBox con otros reformistas. Cuando se registren y activen su cuenta, ambos ganáis 1 mes gratis del plan Pro.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-500">1</span>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Comparte tu enlace</h3>
            <p className="text-sm text-gray-600">Copia tu enlace de referido desde el dashboard y envíalo por WhatsApp, email o redes.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-500">2</span>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Tu amigo se registra</h3>
            <p className="text-sm text-gray-600">Se registra con tu enlace y activa su cuenta. Empieza con los 14 días de prueba gratis.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-500">3</span>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Los dos ganáis</h3>
            <p className="text-sm text-gray-600">Cuando tu amigo active un plan de pago, ambos recibís 1 mes gratis de Pro.</p>
          </div>
        </div>

        <div className="card p-8 text-center bg-primary-50 border-primary-200">
          <h2 className="text-2xl font-bold text-secondary mb-2">Sin límite de invitaciones</h2>
          <p className="text-gray-600 mb-6">Invita a 5 amigos y gana 5 meses gratis. Invita a 20 y no pagas en todo el año.</p>
          <Link href="/registro" className="btn-primary">Crear cuenta y empezar a invitar</Link>
        </div>
      </div>
    </section>
  );
}
