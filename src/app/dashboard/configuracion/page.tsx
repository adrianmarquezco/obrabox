import { Settings } from "lucide-react";

const secciones = [
  { title: "Empresa", desc: "Nombre, CIF, logo, datos bancarios" },
  { title: "Facturación", desc: "Numeración, IVA, textos legales, recordatorios" },
  { title: "Portal del cliente", desc: "Color, logo, mensaje de bienvenida" },
  { title: "Módulos", desc: "Activar o desactivar módulos del menú" },
  { title: "Equipo y permisos", desc: "Usuarios de la app y roles" },
  { title: "Categorías", desc: "Gastos, citas, especialidades, etiquetas" },
  { title: "Zonas de trabajo", desc: "Municipios y códigos postales donde operas" },
  { title: "Tarifas por defecto", desc: "Precios por m² y hora por especialidad" },
  { title: "Horario de trabajo", desc: "Horario laboral para el planning" },
  { title: "Importación / Exportación", desc: "Importar clientes y proveedores, exportar datos" },
  { title: "Notificaciones", desc: "Alertas por email y resumen semanal" },
  { title: "Cuenta", desc: "Plan actual, suscripción, eliminar cuenta" },
];

export default function ConfiguracionPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Configuración</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {secciones.map((s) => (
          <button
            key={s.title}
            className="card p-5 text-left hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-secondary mb-1">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
