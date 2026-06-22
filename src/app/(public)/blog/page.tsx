import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de ObraBox — Consejos para Empresas de Reformas",
  description: "Artículos, guías y consejos para gestionar tu empresa de reformas: facturación, marketing, legal, materiales y más.",
  alternates: { canonical: "/blog" },
};

const articulos = [
  {
    slug: "iva-reformas-10-21",
    titulo: "IVA en Reformas: ¿Cuándo Aplica el 10% y Cuándo el 21%? Guía Completa",
    extracto: "Uno de los temas que más confusión genera entre reformistas es el IVA. ¿Cuándo puedes facturar al 10%? ¿Cuándo tienes que aplicar el 21%? Te lo explicamos con ejemplos.",
    categoria: "Legal",
    fecha: "2026-06-15",
    imagen: null,
  },
  {
    slug: "como-hacer-presupuesto-reforma",
    titulo: "Cómo Hacer un Presupuesto de Reforma Profesional — Guía Paso a Paso",
    extracto: "Un presupuesto bien hecho es la diferencia entre cerrar una obra o perder al cliente. Aprende a crear presupuestos profesionales que conviertan.",
    categoria: "Gestión",
    fecha: "2026-06-12",
    imagen: null,
  },
  {
    slug: "como-captar-clientes-reformas",
    titulo: "Cómo Conseguir Clientes para tu Empresa de Reformas en 2026",
    extracto: "Las estrategias que funcionan para captar clientes en el sector de las reformas: desde el boca a boca hasta el marketing digital.",
    categoria: "Marketing",
    fecha: "2026-06-10",
    imagen: null,
  },
  {
    slug: "cobrar-reforma-impagos",
    titulo: "Cómo Cobrar una Reforma y Evitar Impagos — Guía para Reformistas",
    extracto: "Los impagos son el mayor dolor de cabeza de los reformistas. Estrategias preventivas y qué hacer cuando un cliente no paga.",
    categoria: "Facturación",
    fecha: "2026-06-08",
    imagen: null,
  },
  {
    slug: "licencia-obra-menor",
    titulo: "Licencia de Obra Menor: Qué Es, Cuándo la Necesitas y Cómo Solicitarla",
    extracto: "No todas las reformas necesitan licencia, pero hacer una obra sin la licencia correspondiente puede salirte muy caro. Te explicamos todo.",
    categoria: "Legal",
    fecha: "2026-06-05",
    imagen: null,
  },
  {
    slug: "gestionar-empresa-reformas",
    titulo: "Cómo Gestionar una Empresa de Reformas de Forma Eficiente",
    extracto: "Desde la organización del equipo hasta el control financiero: las claves para que tu empresa de reformas sea rentable.",
    categoria: "Gestión",
    fecha: "2026-06-02",
    imagen: null,
  },
  {
    slug: "subcontratar-reformas",
    titulo: "Subcontratar en Reformas: Guía Legal y Práctica",
    extracto: "Cuándo subcontratar, qué documentación necesitas, el libro de subcontratación y cómo protegerte legalmente.",
    categoria: "Legal",
    fecha: "2026-05-28",
    imagen: null,
  },
  {
    slug: "seguro-responsabilidad-civil-reformas",
    titulo: "Seguro de Responsabilidad Civil para Reformas: ¿Es Obligatorio?",
    extracto: "Todo lo que necesitas saber sobre el seguro de RC para reformistas: cuándo es obligatorio, qué cubre y cuánto cuesta.",
    categoria: "Legal",
    fecha: "2026-05-25",
    imagen: null,
  },
  {
    slug: "marketing-reformistas",
    titulo: "Marketing Digital para Empresas de Reformas — Guía Completa",
    extracto: "Google, Instagram, Facebook, directorios... Las estrategias de marketing digital que funcionan para reformistas en 2026.",
    categoria: "Marketing",
    fecha: "2026-05-20",
    imagen: null,
  },
  {
    slug: "digitalizar-empresa-reformas",
    titulo: "Cómo Digitalizar tu Empresa de Reformas en 2026",
    extracto: "Del papel al digital: herramientas, procesos y mentalidad para modernizar tu empresa de reformas sin complicaciones.",
    categoria: "Gestión",
    fecha: "2026-05-15",
    imagen: null,
  },
];

const categorias = ["Todos", "Gestión", "Facturación", "Marketing", "Legal"];

export default function BlogPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary">Blog de ObraBox</h1>
            <p className="mt-4 text-lg text-gray-600">
              Consejos, guías y estrategias para gestionar tu empresa de reformas
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categorias.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-surface text-gray-600 hover:bg-primary-50 hover:text-primary-500 cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="bg-surface aspect-video flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge-neutral text-xs">{a.categoria}</span>
                    <span className="text-xs text-gray-400">
                      {new Date(a.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="font-semibold text-secondary group-hover:text-primary-500 transition-colors leading-snug mb-2">
                    {a.titulo}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">{a.extracto}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
