"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, CheckCircle2, AlertTriangle } from "lucide-react";

export default function CalculadoraIVAPage() {
  const [tipoVivienda, setTipoVivienda] = useState("");
  const [tipoObra, setTipoObra] = useState("");
  const [quienContrata, setQuienContrata] = useState("");
  const [materialesSuperan40, setMaterialesSuperan40] = useState("");
  const [resultado, setResultado] = useState<{ iva: string; explicacion: string } | null>(null);

  function calcular(e: React.FormEvent) {
    e.preventDefault();

    if (quienContrata === "empresa") {
      setResultado({
        iva: "21%",
        explicacion: "Cuando quien contrata es una empresa o profesional (S.L., S.A., autónomo con factura), siempre se aplica el 21%, independientemente del tipo de vivienda o reforma.",
      });
      return;
    }

    if (tipoVivienda === "local") {
      setResultado({
        iva: "21%",
        explicacion: "Las reformas de locales comerciales, oficinas y naves industriales siempre tributan al 21%, sin excepción.",
      });
      return;
    }

    if (tipoVivienda === "nueva") {
      setResultado({
        iva: "21%",
        explicacion: "Las viviendas con menos de 2 años de antigüedad no cumplen el requisito temporal para el IVA reducido. Se aplica el 21%.",
      });
      return;
    }

    if (tipoObra === "ampliacion") {
      setResultado({
        iva: "21%",
        explicacion: "Las obras de ampliación (cerrar terraza, añadir planta, construir garaje) no se consideran renovación/reparación. Se aplica el 21%.",
      });
      return;
    }

    if (materialesSuperan40 === "si") {
      setResultado({
        iva: "21%",
        explicacion: "Si el coste de los materiales que aportas supera el 40% del total de la obra, se considera entrega de bienes y se aplica el 21%. Consejo: factura materiales y mano de obra por separado si es posible.",
      });
      return;
    }

    setResultado({
      iva: "10%",
      explicacion: "Tu reforma cumple todos los requisitos para el IVA reducido del 10%: vivienda particular de más de 2 años, contratada por un particular, obra de renovación/reparación, y materiales ≤ 40% del total. Recuerda guardar documentación que acredite estos requisitos.",
    });
  }

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary-500">Inicio</Link>
            <span>/</span>
            <span className="text-gray-400">Calculadora IVA reformas</span>
          </nav>

          <div className="text-center mb-10">
            <Calculator className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
              ¿IVA del 10% o del 21% en tu reforma?
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Responde 4 preguntas y te decimos qué IVA corresponde
            </p>
          </div>

          <form onSubmit={calcular} className="card p-6 sm:p-8 space-y-6">
            <div>
              <label className="label text-base">1. ¿Qué tipo de inmueble es?</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "habitual", label: "Vivienda +2 años", desc: "Vivienda particular con más de 2 años" },
                  { id: "nueva", label: "Vivienda nueva", desc: "Vivienda con menos de 2 años" },
                  { id: "local", label: "Local / Oficina", desc: "Local comercial, oficina o nave" },
                ].map((opt) => (
                  <button key={opt.id} type="button" onClick={() => setTipoVivienda(opt.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${tipoVivienda === opt.id ? "border-primary-500 bg-primary-50" : "border-border"}`}>
                    <p className="font-semibold text-secondary text-sm">{opt.label}</p>
                    <p className="text-xs text-gray-500">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label text-base">2. ¿Qué tipo de obra?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "renovacion", label: "Renovación / Reparación", desc: "Reformar baño, cocina, pintar, fontanería, electricidad..." },
                  { id: "ampliacion", label: "Ampliación / Obra nueva", desc: "Cerrar terraza, añadir planta, construir garaje..." },
                ].map((opt) => (
                  <button key={opt.id} type="button" onClick={() => setTipoObra(opt.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${tipoObra === opt.id ? "border-primary-500 bg-primary-50" : "border-border"}`}>
                    <p className="font-semibold text-secondary text-sm">{opt.label}</p>
                    <p className="text-xs text-gray-500">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label text-base">3. ¿Quién contrata la reforma?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "particular", label: "Particular", desc: "Persona física que vive en la vivienda" },
                  { id: "empresa", label: "Empresa / Profesional", desc: "Sociedad, autónomo, comunidad de propietarios" },
                ].map((opt) => (
                  <button key={opt.id} type="button" onClick={() => setQuienContrata(opt.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${quienContrata === opt.id ? "border-primary-500 bg-primary-50" : "border-border"}`}>
                    <p className="font-semibold text-secondary text-sm">{opt.label}</p>
                    <p className="text-xs text-gray-500">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label text-base">4. ¿Los materiales superan el 40% del total?</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "no", label: "No (≤ 40%)", desc: "Más mano de obra que materiales" },
                  { id: "si", label: "Sí (> 40%)", desc: "Más materiales que mano de obra" },
                  { id: "nosabe", label: "No lo sé", desc: "Necesito calcularlo" },
                ].map((opt) => (
                  <button key={opt.id} type="button" onClick={() => setMaterialesSuperan40(opt.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${materialesSuperan40 === opt.id ? "border-primary-500 bg-primary-50" : "border-border"}`}>
                    <p className="font-semibold text-secondary text-sm">{opt.label}</p>
                    <p className="text-xs text-gray-500">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-4"
              disabled={!tipoVivienda || !tipoObra || !quienContrata || !materialesSuperan40}>
              Comprobar IVA
            </button>
          </form>

          {resultado && (
            <div className={`card p-6 sm:p-8 mt-6 ${resultado.iva === "10%" ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
              <div className="flex items-start gap-4">
                {resultado.iva === "10%" ? (
                  <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0" />
                )}
                <div>
                  <p className="text-3xl font-bold text-secondary mb-2">IVA {resultado.iva}</p>
                  <p className="text-gray-700 leading-relaxed">{resultado.explicacion}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-current/10">
                <Link href="/blog/iva-reformas-10-21" className="text-primary-500 text-sm font-medium">
                  Lee la guía completa sobre IVA en reformas →
                </Link>
              </div>
            </div>
          )}

          <div className="mt-12 prose prose-gray max-w-none">
            <h2>¿Cuándo se aplica el IVA del 10% en reformas?</h2>
            <p>
              El IVA reducido del 10% se aplica en reformas de viviendas cuando se cumplen simultáneamente cuatro requisitos: la vivienda es de uso particular, tiene más de 2 años de antigüedad, quien contrata es un particular (persona física), y el coste de los materiales no supera el 40% del total de la obra.
            </p>
            <p>
              Si cualquiera de estos requisitos no se cumple, se aplica el IVA general del 21%. Las obras en locales comerciales, oficinas y naves siempre tributan al 21%, al igual que las obras de nueva construcción o ampliación.
            </p>
            <p>
              Para más información detallada con ejemplos prácticos, consulta nuestra <Link href="/blog/iva-reformas-10-21">guía completa sobre IVA en reformas</Link>.
            </p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo",
        name: "Cómo saber si aplicar IVA del 10% o 21% en una reforma",
        step: [
          { "@type": "HowToStep", text: "Identifica el tipo de inmueble (vivienda +2 años, vivienda nueva, local)" },
          { "@type": "HowToStep", text: "Determina el tipo de obra (renovación o ampliación)" },
          { "@type": "HowToStep", text: "Comprueba quién contrata (particular o empresa)" },
          { "@type": "HowToStep", text: "Calcula si los materiales superan el 40% del total" },
        ],
      })}} />
    </>
  );
}
