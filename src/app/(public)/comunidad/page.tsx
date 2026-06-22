import type { Metadata } from "next";
import Link from "next/link";
import { Users, MessageSquare, Lightbulb, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Comunidad de Reformistas — ObraBox",
  description: "Únete a la comunidad de reformistas de ObraBox. Comparte experiencias, resuelve dudas y aprende de otros profesionales del sector.",
  alternates: { canonical: "/comunidad" },
};

export default function ComunidadPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            La comunidad de reformistas de España
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Un espacio para compartir experiencias, resolver dudas y aprender de otros profesionales del sector de las reformas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="card p-6 text-center">
            <MessageSquare className="w-10 h-10 text-primary-500 mx-auto mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Foro de discusión</h2>
            <p className="text-sm text-gray-600">Pregunta, responde y debate con otros reformistas sobre gestión, materiales, normativa y más.</p>
          </div>
          <div className="card p-6 text-center">
            <Lightbulb className="w-10 h-10 text-primary-500 mx-auto mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Trucos y consejos</h2>
            <p className="text-sm text-gray-600">Comparte tus trucos de obra, descubre nuevos materiales y aprende de la experiencia de otros.</p>
          </div>
          <div className="card p-6 text-center">
            <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Casos de éxito</h2>
            <p className="text-sm text-gray-600">Muestra tus mejores reformas, recibe feedback y encuentra inspiración.</p>
          </div>
          <div className="card p-6 text-center">
            <Users className="w-10 h-10 text-primary-500 mx-auto mb-3" />
            <h2 className="font-semibold text-secondary mb-2">Networking</h2>
            <p className="text-sm text-gray-600">Conecta con otros profesionales, encuentra subcontratas y crea relaciones de negocio.</p>
          </div>
        </div>

        <div className="card p-8 text-center bg-primary-50 border-primary-200">
          <h2 className="text-2xl font-bold text-secondary mb-2">Próximamente</h2>
          <p className="text-gray-600 mb-4">La comunidad está en desarrollo. Regístrate en ObraBox para ser de los primeros en acceder.</p>
          <Link href="/registro" className="btn-primary">Crear cuenta gratis</Link>
        </div>
      </div>
    </section>
  );
}
