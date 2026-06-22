"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";

interface CalculadoraProps {
  titulo: string;
  subtitulo: string;
  metrosLabel: string;
  metrosHint: string;
  precios: { basica: { min: number; max: number }; media: { min: number; max: number }; premium: { min: number; max: number } };
  extras?: { id: string; label: string; desc: string; min: number; max: number }[];
  contenidoSEO: React.ReactNode;
  schemaSteps: string[];
}

export default function CalculadoraReforma({
  titulo, subtitulo, metrosLabel, metrosHint, precios, extras, contenidoSEO, schemaSteps,
}: CalculadoraProps) {
  const [metros, setMetros] = useState("");
  const [calidad, setCalidad] = useState("media");
  const [extrasActivos, setExtrasActivos] = useState<Record<string, boolean>>({});
  const [resultado, setResultado] = useState<{ min: number; max: number } | null>(null);

  function calcular(e: React.FormEvent) {
    e.preventDefault();
    const m2 = parseFloat(metros);
    if (!m2 || m2 <= 0) return;
    const base = precios[calidad as keyof typeof precios];
    let min = m2 * base.min;
    let max = m2 * base.max;
    if (extras) {
      for (const ext of extras) {
        if (extrasActivos[ext.id]) { min += m2 * ext.min; max += m2 * ext.max; }
      }
    }
    min = Math.round(min / 100) * 100;
    max = Math.round(max / 100) * 100;
    setResultado({ min, max });
  }

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Calculator className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary">{titulo}</h1>
            <p className="mt-4 text-lg text-gray-600">{subtitulo}</p>
          </div>

          <form onSubmit={calcular} className="card p-6 sm:p-8 space-y-6">
            <div>
              <label className="label text-base">{metrosLabel}</label>
              <input type="number" step="0.1" min="1" value={metros} onChange={(e) => setMetros(e.target.value)} className="input text-lg" placeholder="Ej: 10" required />
              <p className="text-xs text-gray-400 mt-1">{metrosHint}</p>
            </div>
            <div>
              <label className="label text-base">Calidad de acabados</label>
              <div className="grid grid-cols-3 gap-3">
                {(["basica", "media", "premium"] as const).map((id) => (
                  <button key={id} type="button" onClick={() => setCalidad(id)}
                    className={`p-4 rounded-xl border-2 text-left transition-colors ${calidad === id ? "border-primary-500 bg-primary-50" : "border-border"}`}>
                    <p className="font-semibold text-secondary text-sm capitalize">{id}</p>
                    <p className="text-xs text-primary-500 font-medium mt-1">{precios[id].min}-{precios[id].max}€/m²</p>
                  </button>
                ))}
              </div>
            </div>
            {extras && extras.length > 0 && (
              <div className="space-y-3">
                <label className="label text-base">Incluye</label>
                {extras.map((ext) => (
                  <label key={ext.id} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={!!extrasActivos[ext.id]} onChange={(e) => setExtrasActivos({ ...extrasActivos, [ext.id]: e.target.checked })} className="rounded border-border text-primary-500 focus:ring-primary-500 w-5 h-5" />
                    <div>
                      <span className="font-medium text-secondary">{ext.label}</span>
                      <span className="text-xs text-gray-500 ml-2">{ext.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
            <button type="submit" className="btn-primary w-full text-lg py-4">Calcular precio estimado</button>
          </form>

          {resultado && (
            <div className="card p-6 sm:p-8 mt-6 text-center bg-primary-50 border-primary-200">
              <p className="text-sm text-gray-600 mb-2">Precio estimado:</p>
              <p className="text-4xl font-bold text-primary-500">
                {resultado.min.toLocaleString("es-ES")}€ — {resultado.max.toLocaleString("es-ES")}€
              </p>
              <p className="text-sm text-gray-500 mt-2">*Precio orientativo para {metros} m² con calidad {calidad}</p>
              <div className="mt-6">
                <Link href="/registro" className="btn-primary w-full text-center block">Crea presupuestos con ObraBox</Link>
              </div>
            </div>
          )}

          <div className="mt-12 prose prose-gray max-w-none">{contenidoSEO}</div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo", name: titulo,
        step: schemaSteps.map((text) => ({ "@type": "HowToStep", text })),
      })}} />
    </>
  );
}
