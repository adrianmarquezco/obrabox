"use client";

import { useState } from "react";
import { Play, CheckCircle2 } from "lucide-react";

export default function DemoPage() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    empleados: "",
  });
  const [sent, setSent] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
              Solicita una demo personalizada
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Te enseñamos ObraBox en una videollamada de 15 minutos adaptada a tu tipo de empresa. Sin compromiso.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Te mostramos las funcionalidades que más te interesan",
                "Resolvemos tus dudas en directo",
                "Te ayudamos a configurar tu cuenta si decides empezar",
                "Sin compromiso, sin presión comercial",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-secondary mb-2">
                  Demo solicitada
                </h2>
                <p className="text-gray-500">
                  Te contactaremos en menos de 24 horas para agendar la videollamada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-secondary mb-2">
                  Rellena el formulario
                </h2>
                <div>
                  <label htmlFor="nombre" className="label">Nombre</label>
                  <input id="nombre" type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className="input" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label htmlFor="empresa" className="label">Empresa</label>
                  <input id="empresa" type="text" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} className="input" placeholder="Nombre de tu empresa" required />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="tu@email.com" required />
                </div>
                <div>
                  <label htmlFor="telefono" className="label">Teléfono</label>
                  <input id="telefono" type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className="input" placeholder="612 345 678" required />
                </div>
                <div>
                  <label htmlFor="empleados" className="label">¿Cuántas personas sois?</label>
                  <select id="empleados" value={form.empleados} onChange={(e) => update("empleados", e.target.value)} className="input" required>
                    <option value="">Selecciona</option>
                    <option value="1">Solo yo</option>
                    <option value="2-5">2-5 personas</option>
                    <option value="6-15">6-15 personas</option>
                    <option value="mas">Más de 15</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Solicitar demo gratuita
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Te contactaremos en menos de 24 horas
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
