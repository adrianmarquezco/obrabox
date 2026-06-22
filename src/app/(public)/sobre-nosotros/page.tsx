import type { Metadata } from "next";
import Link from "next/link";
import { Target, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros — ObraBox",
  description: "Conoce al equipo detrás de ObraBox, el software de gestión para reformistas en España. Nuestra misión es digitalizar el sector de las reformas.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Estamos aquí para digitalizar el sector de las reformas
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              ObraBox nace de una pregunta simple: ¿por qué las empresas de reformas siguen gestionando sus obras con Excel, WhatsApp y papel en pleno 2026?
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              El sector de las reformas en España mueve más de 30.000 millones de euros al año. Hay más de 150.000 empresas y autónomos dedicados a la construcción y las reformas. Y la inmensa mayoría gestiona su negocio con herramientas que no están diseñadas para ellos: hojas de Excel para presupuestos, grupos de WhatsApp para coordinar equipos, tickets de papel en la guantera de la furgoneta.
            </p>
            <p>
              No es que los reformistas no quieran digitalizarse. Es que las herramientas que existen no están pensadas para ellos. Son demasiado complicadas, demasiado caras, o están diseñadas para grandes constructoras con equipos de 100 personas y departamentos de administración.
            </p>
            <p>
              ObraBox es diferente. Está diseñado desde el primer día para el reformista que trabaja con su equipo de 3-15 personas, que usa el móvil más que el ordenador, que no tiene tiempo para aprender un software complejo, y que necesita una herramienta que funcione tan fácil como WhatsApp pero que le permita gestionar su negocio de forma profesional.
            </p>
            <p>
              Nuestra misión es que ningún reformista en España pierda dinero por no saber cuánto le cuesta realmente una obra, que ningún presupuesto se pierda por estar mal presentado, y que ningún cliente esté insatisfecho por falta de comunicación.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <Target className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-secondary mb-2">Misión</h2>
              <p className="text-gray-600">
                Digitalizar las empresas de reformas en España con herramientas simples, accesibles y diseñadas para su día a día.
              </p>
            </div>
            <div className="card p-8 text-center">
              <Heart className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-secondary mb-2">Valores</h2>
              <p className="text-gray-600">
                Simplicidad ante todo. Si un reformista no puede usarlo en la obra con una mano mojada, no vale. Funcional antes que bonito.
              </p>
            </div>
            <div className="card p-8 text-center">
              <Zap className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-secondary mb-2">Visión</h2>
              <p className="text-gray-600">
                Que ObraBox sea la herramienta que todo reformista en España tiene instalada en su móvil. La referencia del sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">
            Hecho en España, para España
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              ObraBox está diseñado específicamente para el mercado español. El IVA del 10% para viviendas habituales, las subvenciones Next Generation, los requisitos del libro de subcontratación, el registro de jornada laboral obligatorio, las licencias de obra menor... Conocemos la normativa y la incluimos en la herramienta.
            </p>
            <p>
              El equipo de ObraBox está en España. Nuestro soporte es en español, nuestros servidores están en Europa y cumplimos con el RGPD. No somos una traducción de un software americano: somos un producto diseñado desde cero para el reformista español.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link href="/registro" className="btn-primary text-lg px-8 py-4">
              Prueba ObraBox gratis
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre ObraBox",
            url: "https://obrabox.es/sobre-nosotros",
          }),
        }}
      />
    </>
  );
}
