import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — ObraBox",
  description: "Política de privacidad de ObraBox. Información sobre cómo tratamos tus datos personales conforme al RGPD.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-secondary">Política de Privacidad</h1>
        <p className="text-sm text-gray-500">Última actualización: junio 2026</p>

        <h2>1. Responsable del tratamiento</h2>
        <p>ObraBox (en adelante, "nosotros") es responsable del tratamiento de los datos personales que nos facilites a través de esta plataforma. Puedes contactarnos en <a href="mailto:privacidad@obrabox.es">privacidad@obrabox.es</a>.</p>

        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos los datos que nos proporcionas directamente al registrarte y usar ObraBox:</p>
        <ul>
          <li><strong>Datos de cuenta:</strong> nombre, email, contraseña, nombre de empresa, teléfono, CIF.</li>
          <li><strong>Datos de uso:</strong> obras, presupuestos, clientes, facturas, gastos, fotos y documentos que subas a la plataforma.</li>
          <li><strong>Datos técnicos:</strong> dirección IP, tipo de dispositivo, navegador, páginas visitadas.</li>
          <li><strong>Datos de ubicación:</strong> solo en el módulo de fichaje, con consentimiento explícito del trabajador, y solo en el momento del fichaje.</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <ul>
          <li>Prestación del servicio de gestión de obras y reformas.</li>
          <li>Gestión de tu cuenta y autenticación.</li>
          <li>Envío de comunicaciones sobre el servicio (cambios, actualizaciones, soporte).</li>
          <li>Envío de comunicaciones comerciales, solo si has dado tu consentimiento.</li>
          <li>Mejora del servicio y análisis de uso agregado.</li>
        </ul>

        <h2>4. Base legal</h2>
        <ul>
          <li><strong>Ejecución del contrato:</strong> para prestar el servicio que has contratado.</li>
          <li><strong>Consentimiento:</strong> para comunicaciones comerciales y geolocalización.</li>
          <li><strong>Interés legítimo:</strong> para mejora del servicio y prevención de fraude.</li>
        </ul>

        <h2>5. Conservación de datos</h2>
        <p>Conservamos tus datos mientras mantengas tu cuenta activa. Si solicitas la eliminación de tu cuenta, eliminaremos tus datos personales en un plazo máximo de 30 días, salvo obligación legal de conservación (facturas: 5 años, fichajes: 4 años).</p>

        <h2>6. Destinatarios</h2>
        <p>Tus datos se almacenan en servidores de Supabase (infraestructura en la Unión Europea). No vendemos ni compartimos tus datos con terceros, salvo:</p>
        <ul>
          <li>Proveedores de servicios necesarios para el funcionamiento (hosting, email).</li>
          <li>Obligaciones legales (requerimiento judicial, Hacienda).</li>
        </ul>

        <h2>7. Tus derechos</h2>
        <p>Conforme al RGPD, tienes derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> saber qué datos tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento en determinadas circunstancias.</li>
          <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
        </ul>
        <p>Para ejercer tus derechos, escríbenos a <a href="mailto:privacidad@obrabox.es">privacidad@obrabox.es</a>.</p>

        <h2>8. Seguridad</h2>
        <p>Implementamos medidas técnicas y organizativas para proteger tus datos: cifrado en tránsito (TLS), cifrado en reposo, control de acceso basado en roles, copias de seguridad automáticas y auditorías periódicas.</p>

        <h2>9. Cambios en esta política</h2>
        <p>Podemos actualizar esta política periódicamente. Te notificaremos por email de cualquier cambio significativo.</p>
      </div>
    </section>
  );
}
