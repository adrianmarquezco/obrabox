import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — ObraBox",
  description: "Términos y condiciones de uso de ObraBox, el software de gestión para empresas de reformas.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-secondary">Términos y Condiciones de Uso</h1>
        <p className="text-sm text-gray-500">Última actualización: junio 2026</p>

        <h2>1. Objeto</h2>
        <p>Estos términos regulan el uso de la plataforma ObraBox (accesible desde obrabox.es), un software de gestión para empresas de reformas y construcción en España.</p>

        <h2>2. Registro y cuenta</h2>
        <p>Para usar ObraBox necesitas crear una cuenta con datos verídicos. Eres responsable de mantener la confidencialidad de tus credenciales de acceso. Debes ser mayor de 18 años y tener capacidad legal para contratar.</p>

        <h2>3. Planes y precios</h2>
        <p>ObraBox ofrece un plan Gratis y planes de pago (Pro y Business). Los precios están publicados en la página de precios y pueden actualizarse con un preaviso de 30 días. Los planes de pago se facturan mensual o anualmente según la opción elegida.</p>

        <h2>4. Periodo de prueba</h2>
        <p>Al registrarte, puedes disfrutar de un periodo de prueba gratuita de 14 días del plan Pro. Al finalizar, tu cuenta pasará al plan Gratis salvo que contrates un plan de pago.</p>

        <h2>5. Pagos y renovación</h2>
        <p>Los planes de pago se renuevan automáticamente al final de cada periodo. Puedes cancelar en cualquier momento desde la configuración de tu cuenta. La cancelación será efectiva al final del periodo en curso, sin reembolso proporcional.</p>

        <h2>6. Tus datos</h2>
        <p>Los datos que introduces en ObraBox (obras, clientes, presupuestos, etc.) son de tu propiedad. Puedes exportarlos en cualquier momento. Nosotros solo accedemos a tus datos para prestar el servicio y dar soporte técnico cuando lo solicites.</p>

        <h2>7. Uso aceptable</h2>
        <p>Te comprometes a usar ObraBox de forma legal y conforme a su propósito. No está permitido:</p>
        <ul>
          <li>Usar la plataforma para actividades ilegales.</li>
          <li>Intentar acceder a datos de otros usuarios.</li>
          <li>Realizar ingeniería inversa del software.</li>
          <li>Usar bots o scripts automatizados sin autorización.</li>
          <li>Subir contenido malicioso o ilegal.</li>
        </ul>

        <h2>8. Disponibilidad del servicio</h2>
        <p>Nos esforzamos por mantener ObraBox disponible 24/7 pero no garantizamos una disponibilidad del 100%. Realizamos mantenimientos programados con preaviso y no somos responsables de interrupciones por causas ajenas a nuestro control.</p>

        <h2>9. Limitación de responsabilidad</h2>
        <p>ObraBox es una herramienta de gestión. Las decisiones de negocio que tomes basándote en los datos de la plataforma son tu responsabilidad. No somos responsables de errores en presupuestos, facturas o informes derivados de datos incorrectos introducidos por el usuario.</p>

        <h2>10. Cancelación de cuenta</h2>
        <p>Puedes eliminar tu cuenta en cualquier momento desde la configuración. Al eliminar tu cuenta, tus datos se borrarán en un plazo de 30 días, salvo obligación legal de conservación.</p>
        <p>Nos reservamos el derecho de suspender o eliminar cuentas que incumplan estos términos, con notificación previa salvo casos graves.</p>

        <h2>11. Modificaciones</h2>
        <p>Podemos modificar estos términos. Te notificaremos por email de cualquier cambio significativo con al menos 15 días de antelación. Si no estás de acuerdo con los cambios, puedes cancelar tu cuenta.</p>

        <h2>12. Legislación aplicable</h2>
        <p>Estos términos se rigen por la legislación española. Para cualquier controversia, ambas partes se someten a los juzgados y tribunales de la ciudad de Madrid.</p>

        <h2>13. Contacto</h2>
        <p>Para cualquier consulta sobre estos términos: <a href="mailto:legal@obrabox.es">legal@obrabox.es</a></p>
      </div>
    </section>
  );
}
