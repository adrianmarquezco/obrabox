"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function RecuperarContrasenaPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">OB</span>
            </div>
            <span className="text-2xl font-bold text-secondary">
              Obra<span className="text-primary-500">Box</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-secondary">
            Recuperar contraseña
          </h1>
          <p className="text-gray-500 mt-2">
            Te enviaremos un enlace para restablecer tu contraseña
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-secondary mb-2">
                Email enviado
              </h2>
              <p className="text-sm text-gray-500">
                Revisa tu bandeja de entrada en <strong>{email}</strong> y sigue
                el enlace para restablecer tu contraseña.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="tu@email.com" required />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                {loading ? "Enviando..." : "Enviar enlace de recuperación"}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link href="/login" className="text-primary-500 font-medium hover:text-primary-600">
            Volver al login
          </Link>
        </p>
      </div>
    </div>
  );
}
