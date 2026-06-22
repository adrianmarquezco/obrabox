"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    empresa: "",
    telefono: "",
    aceptaTerminos: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.aceptaTerminos) {
      setError("Debes aceptar los términos y la política de privacidad");
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          nombre: form.nombre,
          empresa: form.empresa,
          telefono: form.telefono,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  async function handleGoogle() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4 py-8">
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
          <h1 className="text-2xl font-bold text-secondary">Crear cuenta</h1>
          <p className="text-gray-500 mt-2">
            Empieza a gestionar tus obras gratis
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border rounded-lg font-medium text-secondary hover:bg-surface transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Registrarse con Google
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">o</span>
            </div>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="nombre" className="label">Nombre completo</label>
              <input id="nombre" type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className="input" placeholder="Tu nombre" required />
            </div>
            <div>
              <label htmlFor="email" className="label">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="tu@email.com" required />
            </div>
            <div>
              <label htmlFor="password" className="label">Contraseña</label>
              <input id="password" type="password" value={form.password} onChange={(e) => update("password", e.target.value)} className="input" placeholder="Mínimo 6 caracteres" required minLength={6} />
            </div>
            <div>
              <label htmlFor="empresa" className="label">Nombre de tu empresa</label>
              <input id="empresa" type="text" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} className="input" placeholder="Reformas López, S.L." required />
            </div>
            <div>
              <label htmlFor="telefono" className="label">
                Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
              </label>
              <input id="telefono" type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className="input" placeholder="612 345 678" />
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" checked={form.aceptaTerminos} onChange={(e) => update("aceptaTerminos", e.target.checked)} className="mt-1 rounded border-border text-primary-500 focus:ring-primary-500" />
              <span className="text-sm text-gray-600">
                Acepto los{" "}
                <Link href="/terminos" className="text-primary-500 hover:underline" target="_blank">
                  términos y condiciones
                </Link>{" "}
                y la{" "}
                <Link href="/privacidad" className="text-primary-500 hover:underline" target="_blank">
                  política de privacidad
                </Link>
              </span>
            </label>
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
              {loading ? "Creando cuenta..." : "Crear cuenta gratis"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-primary-500 font-medium hover:text-primary-600">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
