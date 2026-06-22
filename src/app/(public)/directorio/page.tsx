import type { Metadata } from "next";
import Link from "next/link";
import { Search, MapPin, Star, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Directorio de Profesionales de Reformas en España — Encuentra tu Reformista",
  description: "Encuentra profesionales de reformas verificados en tu ciudad. Reformistas, electricistas, fontaneros, pintores y más en toda España.",
  alternates: { canonical: "/directorio" },
};

const ciudades = [
  "Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga", "Zaragoza", "Bilbao",
  "Alicante", "A Coruña", "Vigo", "Murcia", "Palma", "Las Palmas", "Valladolid", "Granada",
];

const especialidades = [
  { slug: "reformistas", label: "Reformas integrales" },
  { slug: "banos", label: "Reformas de baños" },
  { slug: "cocinas", label: "Reformas de cocinas" },
  { slug: "pintura", label: "Pintura" },
  { slug: "electricidad", label: "Electricidad" },
  { slug: "fontaneria", label: "Fontanería" },
  { slug: "albanileria", label: "Albañilería" },
  { slug: "carpinteria", label: "Carpintería" },
  { slug: "climatizacion", label: "Climatización" },
];

export default function DirectorioPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Directorio de profesionales de reformas
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra reformistas verificados en tu ciudad. Todos los profesionales gestionan sus obras con ObraBox.
            </p>
          </div>

          {/* Buscador */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="card p-6 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Ciudad o código postal..." className="input !pl-10" />
              </div>
              <select className="input sm:w-56">
                <option value="">Todas las especialidades</option>
                {especialidades.map((e) => <option key={e.slug} value={e.slug}>{e.label}</option>)}
              </select>
              <button className="btn-primary flex items-center gap-2">
                <Search className="w-4 h-4" /> Buscar
              </button>
            </div>
          </div>

          {/* Por especialidad */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-secondary mb-6">Buscar por especialidad</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {especialidades.map((e) => (
                <Link key={e.slug} href={`/directorio/${e.slug}`} className="card p-4 text-center hover:shadow-md transition-shadow">
                  <p className="font-medium text-secondary text-sm">{e.label}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Por ciudad */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-secondary mb-6">Buscar por ciudad</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {ciudades.map((ciudad) => (
                <Link key={ciudad} href={`/directorio/reformistas-${ciudad.toLowerCase().replace(/\s/g, "-").replace("á","a").replace("ó","o").replace("ú","u").replace("ñ","n")}`} className="card p-4 text-center hover:shadow-md transition-shadow">
                  <MapPin className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                  <p className="font-medium text-secondary text-sm">{ciudad}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Ejemplo de profesionales (placeholder) */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Profesionales destacados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { nombre: "Reformas Martínez", ciudad: "Valencia", especialidad: "Reformas integrales", rating: 4.8, obras: 45 },
                { nombre: "Baños Pro", ciudad: "Madrid", especialidad: "Reformas de baños", rating: 4.9, obras: 78 },
                { nombre: "Construye BCN", ciudad: "Barcelona", especialidad: "Reformas integrales", rating: 4.7, obras: 62 },
                { nombre: "PintaTop", ciudad: "Sevilla", especialidad: "Pintura", rating: 5.0, obras: 120 },
                { nombre: "ElectroFix", ciudad: "Málaga", especialidad: "Electricidad", rating: 4.6, obras: 35 },
                { nombre: "FontaPlus", ciudad: "Zaragoza", especialidad: "Fontanería", rating: 4.8, obras: 52 },
              ].map((pro) => (
                <div key={pro.nombre} className="card p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-secondary">{pro.nombre}</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                        <MapPin className="w-3 h-3" /> {pro.ciudad}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-primary-50 px-2 py-0.5 rounded-full">
                      <Shield className="w-3 h-3 text-primary-500" />
                      <span className="text-xs text-primary-600 font-medium">Verificado</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{pro.especialidad}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary-400 text-primary-400" />
                      <span className="text-sm font-medium text-secondary">{pro.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{pro.obras} obras realizadas</span>
                  </div>
                  <button className="btn-primary w-full mt-4 !text-sm">Solicitar presupuesto</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Eres reformista? Aparece en el directorio</h2>
          <p className="text-primary-100 mb-8">Con el plan Business, tu empresa aparece destacada en el directorio de ObraBox.</p>
          <Link href="/registro" className="inline-block bg-white text-primary-500 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
            Crear cuenta gratis
          </Link>
        </div>
      </section>
    </>
  );
}
