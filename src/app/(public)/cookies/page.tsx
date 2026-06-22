import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — ObraBox",
  description: "Información sobre las cookies que utiliza ObraBox y cómo puedes gestionarlas.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-secondary">Política de Cookies</h1>
        <p className="text-sm text-gray-500">Última actualización: junio 2026</p>

        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para recordar tus preferencias, mantener tu sesión iniciada y analizar el uso del sitio.</p>

        <h2>Cookies que utilizamos</h2>

        <h3>Cookies estrictamente necesarias</h3>
        <p>Son imprescindibles para el funcionamiento de ObraBox. Incluyen las cookies de sesión de autenticación que te permiten acceder a tu cuenta sin tener que iniciar sesión cada vez.</p>
        <table>
          <thead><tr><th>Cookie</th><th>Finalidad</th><th>Duración</th></tr></thead>
          <tbody>
            <tr><td>sb-*-auth-token</td><td>Sesión de usuario (Supabase Auth)</td><td>1 año</td></tr>
          </tbody>
        </table>

        <h3>Cookies analíticas</h3>
        <p>Nos ayudan a entender cómo se usa ObraBox para mejorar el servicio. Se utilizan de forma agregada y anónima. Solo se instalan con tu consentimiento.</p>

        <h3>Cookies de terceros</h3>
        <p>Actualmente ObraBox no utiliza cookies de terceros con fines publicitarios.</p>

        <h2>¿Cómo gestionar las cookies?</h2>
        <p>Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que si bloqueas las cookies estrictamente necesarias, ObraBox podría no funcionar correctamente.</p>
        <ul>
          <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
          <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
          <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
        </ul>

        <h2>Más información</h2>
        <p>Si tienes dudas sobre nuestra política de cookies, contacta con nosotros en <a href="mailto:privacidad@obrabox.es">privacidad@obrabox.es</a>.</p>
      </div>
    </section>
  );
}
