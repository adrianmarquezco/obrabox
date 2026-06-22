"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Building2, Upload, Users, Rocket } from "lucide-react";

const pasos = [
  { icon: Building2, titulo: "Tu empresa" },
  { icon: Upload, titulo: "Tu logo" },
  { icon: Users, titulo: "Tu equipo" },
  { icon: Rocket, titulo: "Empezar" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nombre: "",
    cif: "",
    tamano: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleFinish() {
    setLoading(true);
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: usr } = await supabase
      .from("usuarios")
      .select("empresa_id")
      .eq("id", user.id)
      .single();

    if (usr) {
      await supabase
        .from("empresas")
        .update({
          nombre: form.nombre || undefined,
          cif: form.cif || null,
          tamano_empresa: form.tamano || null,
          onboarding_completado: true,
        })
        .eq("id", usr.empresa_id);

      const modulosBase = [
        "dashboard", "obras", "presupuestos", "clientes", "facturas", "agenda",
      ];
      const modulosMedio = ["equipo", "gastos"];
      const modulosFull = ["pipeline", "informes", "plantillas", "comunicaciones", "subvenciones"];

      let modulos = [...modulosBase];
      if (form.tamano === "2-5") modulos = [...modulos, ...modulosMedio];
      if (form.tamano === "6-15" || form.tamano === "mas-de-15") {
        modulos = [...modulos, ...modulosMedio, ...modulosFull];
      }

      const inserts = modulos.map((m) => ({
        empresa_id: usr.empresa_id,
        modulo: m,
        activo: true,
      }));

      await supabase.from("modulos_activos").insert(inserts);
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">OB</span>
            </div>
            <span className="text-2xl font-bold text-secondary">
              Obra<span className="text-primary-500">Box</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-secondary">
            Configura tu cuenta
          </h1>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {pasos.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  i <= step
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {i + 1}
              </div>
              {i < pasos.length - 1 && (
                <div className={`w-8 h-0.5 ${i < step ? "bg-primary-500" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="card p-6 sm:p-8">
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-secondary">
                ¿Cómo se llama tu empresa?
              </h2>
              <div>
                <label htmlFor="nombre" className="label">Nombre de la empresa</label>
                <input
                  id="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  className="input"
                  placeholder="Reformas López, S.L."
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="cif" className="label">
                  CIF <span className="text-gray-400 font-normal">(opcional)</span>
                </label>
                <input
                  id="cif"
                  type="text"
                  value={form.cif}
                  onChange={(e) => update("cif", e.target.value)}
                  className="input"
                  placeholder="B12345678"
                />
              </div>
              <button
                onClick={() => setStep(1)}
                className="btn-primary w-full"
                disabled={!form.nombre.trim()}
              >
                Siguiente
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-secondary">
                Sube el logo de tu empresa
              </h2>
              <p className="text-sm text-gray-500">
                Aparecerá en tus presupuestos, facturas y portal del cliente.
              </p>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                <Upload className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  Arrastra tu logo aquí o haz clic para subir
                </p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG o SVG. Máx 2MB.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(0)} className="btn-secondary flex-1">
                  Atrás
                </button>
                <button onClick={() => setStep(2)} className="btn-primary flex-1">
                  Siguiente
                </button>
              </div>
              <button
                onClick={() => setStep(2)}
                className="text-sm text-gray-400 hover:text-gray-600 w-full text-center"
              >
                Saltar por ahora
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-secondary">
                ¿Cuántas personas sois?
              </h2>
              <p className="text-sm text-gray-500">
                Esto nos ayuda a mostrarte los módulos que más te interesan.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "solo", label: "Solo yo" },
                  { value: "2-5", label: "2-5 personas" },
                  { value: "6-15", label: "6-15 personas" },
                  { value: "mas-de-15", label: "Más de 15" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => update("tamano", opt.value)}
                    className={`p-4 rounded-xl border-2 text-sm font-medium transition-colors ${
                      form.tamano === opt.value
                        ? "border-primary-500 bg-primary-50 text-primary-600"
                        : "border-border bg-white text-secondary hover:border-gray-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                  Atrás
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="btn-primary flex-1"
                  disabled={!form.tamano}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <Rocket className="w-16 h-16 text-primary-500 mx-auto" />
              <div>
                <h2 className="text-xl font-bold text-secondary">
                  ¡Todo listo, {form.nombre}!
                </h2>
                <p className="text-gray-500 mt-2">
                  Tu cuenta está configurada. ¿Qué quieres hacer primero?
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleFinish}
                  disabled={loading}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50"
                >
                  {loading ? "Preparando..." : "Ir al panel de control"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
