"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
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
          <h1 className="text-2xl font-bold text-secondary">Nueva contraseña</h1>
          <p className="text-gray-500 mt-2">Introduce tu nueva contraseña</p>
        </div>

        <div className="card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="password" className="label">Nueva contraseña</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Mínimo 6 caracteres" required minLength={6} />
            </div>
            <div>
              <label htmlFor="confirm" className="label">Confirmar contraseña</label>
              <input id="confirm" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" placeholder="Repite la contraseña" required minLength={6} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
              {loading ? "Guardando..." : "Establecer contraseña"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
