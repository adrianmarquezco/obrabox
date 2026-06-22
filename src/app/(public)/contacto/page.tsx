"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo: "contacto", ...form }),
    });
    setSent(true);
  }

  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Contacta con nosotros
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Tienes dudas sobre ObraBox? ¿Necesitas ayuda para empezar?
              Escríbenos y te respondemos en menos de 24 horas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              {sent ? (
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-xl font-bold text-secondary mb-2">
                    Mensaje enviado
                  </h2>
                  <p className="text-gray-500">
                    Te responderemos en menos de 24 horas. Revisa tu email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="label">Nombre</label>
                      <input id="nombre" type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className="input" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="label">Email</label>
                      <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="label">Teléfono <span className="text-gray-400 font-normal">(opcional)</span></label>
                      <input id="telefono" type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className="input" placeholder="612 345 678" />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="label">Empresa <span className="text-gray-400 font-normal">(opcional)</span></label>
                      <input id="empresa" type="text" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} className="input" placeholder="Tu empresa" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="label">Mensaje</label>
                    <textarea id="mensaje" value={form.mensaje} onChange={(e) => update("mensaje", e.target.value)} className="input min-h-[120px] resize-y" placeholder="¿En qué podemos ayudarte?" required />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Email</h3>
                  <a href="mailto:hola@obrabox.es" className="text-primary-500 hover:text-primary-600">hola@obrabox.es</a>
                  <p className="text-sm text-gray-500 mt-1">Respondemos en menos de 24h</p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Teléfono</h3>
                  <a href="tel:+34900000000" className="text-primary-500 hover:text-primary-600">900 000 000</a>
                  <p className="text-sm text-gray-500 mt-1">Lunes a viernes, 9:00 - 18:00</p>
                </div>
              </div>

              <div className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Ubicación</h3>
                  <p className="text-gray-600">España</p>
                  <p className="text-sm text-gray-500 mt-1">Empresa 100% remota, hecha en España</p>
                </div>
              </div>

              <div className="card p-6 bg-primary-50 border-primary-200">
                <h3 className="font-semibold text-secondary mb-2">¿Necesitas una demo?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Si prefieres que te enseñemos ObraBox en una videollamada de 15 minutos, solicita una demo personalizada.
                </p>
                <a href="/demo" className="text-primary-500 font-medium text-sm hover:text-primary-600">
                  Solicitar demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto — ObraBox",
            url: "https://obrabox.es/contacto",
          }),
        }}
      />
    </>
  );
}
