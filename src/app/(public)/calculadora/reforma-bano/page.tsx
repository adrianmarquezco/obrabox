"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

const preciosBase: Record<string, { min: number; max: number }> = {
  basica: { min: 350, max: 500 },
  media: { min: 500, max: 750 },
  premium: { min: 750, max: 1200 },
};

export default function CalculadoraBanoPage() {
  const [metros, setMetros] = useState("");
  const [calidad, setCalidad] = useState("media");
  const [fontaneria, setFontaneria] = useState(true);
  const [electricidad, setElectricidad] = useState(true);
  const [resultado, setResultado] = useState<{ min: number; max: number } | null>(null);

  function calcular(e: React.FormEvent) {
    e.preventDefault();
    const m2 = parseFloat(metros);
    if (!m2 || m2 <= 0) return;

    const base = preciosBase[calidad];
    let min = m2 * base.min;
    let max = m2 * base.max;

    if (fontaneria) { min += m2 * 80; max += m2 * 150; }
    if (electricidad) { min += m2 * 50; max += m2 * 100; }

    min = Math.round(min / 100) * 100;
    max = Math.round(max / 100) * 100;

    setResultado({ min, max });
  }

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary-500">Inicio</Link>
            <span>/</span>
            <span className="text-gray-400">Calculadora reforma baño</span>
          </nav>

          <div className="text-center mb-10">
            <Calculator className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
              ¿Cuánto cuesta reformar un baño?
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Calcula el precio estimado de tu reforma de baño en menos de 1 minuto
            </p>
          </div>

          <form onSubmit={calcular} className="card p-6 sm:p-8 space-y-6">
            <div>
              <label className="label text-base">Metros cuadrados del baño</label>
              <input
                type="number"
                step="0.1"
                min="1"
                value={metros}
                onChange={(e) => setMetros(e.target.value)}
                className="input text-lg"
                placeholder="Ej: 6"
                required
              />
              <p className="text-xs text-gray-400 mt-1">Un baño estándar tiene entre 4 y 8 m²</p>
            </div>

            <div>
              <label className="label text-base">Calidad de acabados</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "basica", label: "Básica", desc: "Materiales económicos", precio: "350-500€/m²" },
                  { id: "media", label: "Media", desc: "Gama media", precio: "500-750€/m²" },
                  { id: "premium", label: "Premium", desc: "Alta gama", precio: "750-1.200€/m²" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCalidad(opt.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${
                      calidad === opt.id ? "border-primary-500 bg-primary-50" : "border-border"
                    }`}
                  >
                    <p className="font-semibold text-secondary text-sm">{opt.label}</p>
                    <p className="text-xs text-gray-500">{opt.desc}</p>
                    <p className="text-xs text-primary-500 font-medium mt-1">{opt.precio}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="label text-base">¿Incluye?</label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={fontaneria} onChange={(e) => setFontaneria(e.target.checked)} className="rounded border-border text-primary-500 focus:ring-primary-500 w-5 h-5" />
                <div>
                  <span className="font-medium text-secondary">Fontanería</span>
                  <span className="text-xs text-gray-500 ml-2">Cambiar tuberías y puntos de agua</span>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={electricidad} onChange={(e) => setElectricidad(e.target.checked)} className="rounded border-border text-primary-500 focus:ring-primary-500 w-5 h-5" />
                <div>
                  <span className="font-medium text-secondary">Electricidad</span>
                  <span className="text-xs text-gray-500 ml-2">Cambiar puntos de luz y enchufes</span>
                </div>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-4">
              Calcular precio estimado
            </button>
          </form>

          {resultado && (
            <div className="card p-6 sm:p-8 mt-6 text-center bg-primary-50 border-primary-200">
              <p className="text-sm text-gray-600 mb-2">Precio estimado de tu reforma de baño:</p>
              <p className="text-4xl font-bold text-primary-500">
                {resultado.min.toLocaleString("es-ES")}€ — {resultado.max.toLocaleString("es-ES")}€
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *Precio orientativo para un baño de {metros} m² con calidad {calidad}
              </p>
              <div className="mt-6 space-y-3">
                <Link href="/registro" className="btn-primary w-full text-center block">
                  Crea presupuestos profesionales con ObraBox
                </Link>
                <Link href="/presupuestos-reforma" className="text-primary-500 text-sm font-medium flex items-center justify-center gap-1">
                  Ver cómo funciona <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Contenido SEO */}
          <div className="mt-12 prose prose-gray max-w-none">
            <h2>¿Cuánto cuesta reformar un baño en España en 2026?</h2>
            <p>
              El precio medio de reformar un baño en España en 2026 oscila entre <strong>3.500€ y 12.000€</strong>, dependiendo del tamaño, la calidad de los materiales y el alcance de la reforma. Un baño pequeño (4 m²) con acabados básicos puede costar unos 3.000-4.000€, mientras que un baño grande (10 m²) con materiales premium puede superar los 15.000€.
            </p>
            <h3>Factores que influyen en el precio</h3>
            <ul>
              <li><strong>Tamaño del baño</strong>: a más metros cuadrados, más material y más mano de obra.</li>
              <li><strong>Calidad de materiales</strong>: un azulejo de 15€/m² no es lo mismo que uno de 60€/m².</li>
              <li><strong>Instalaciones</strong>: cambiar toda la fontanería y electricidad encarece significativamente.</li>
              <li><strong>Cambio de distribución</strong>: mover el inodoro o la ducha de sitio implica más obra.</li>
              <li><strong>Accesibilidad</strong>: un piso sin ascensor o con accesos difíciles sube el precio.</li>
              <li><strong>Zona geográfica</strong>: reformar en Madrid o Barcelona es un 15-25% más caro que en ciudades medias.</li>
            </ul>
            <h3>¿Qué incluye una reforma de baño completa?</h3>
            <p>Una reforma completa de baño típicamente incluye: demolición del baño existente, fontanería nueva, electricidad nueva, alicatado de paredes, solado, instalación de sanitarios (inodoro, lavabo, ducha/bañera), grifería, mampara, espejo, iluminación, pintura del techo, y limpieza final.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo calcular el coste de reformar un baño",
            step: [
              { "@type": "HowToStep", text: "Mide los metros cuadrados del baño" },
              { "@type": "HowToStep", text: "Elige la calidad de acabados deseada" },
              { "@type": "HowToStep", text: "Indica si incluye cambio de fontanería y electricidad" },
              { "@type": "HowToStep", text: "Obtén el rango de precio estimado" },
            ],
          }),
        }}
      />
    </>
  );
}
