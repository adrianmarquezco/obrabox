"use client";

import Link from "next/link";
import { Plus, Users, Search, Phone, Mail, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Cliente } from "@/lib/supabase/types";

const tipoLabels: Record<string, string> = {
  particular: "Particular",
  empresa: "Empresa",
  comunidad: "Comunidad",
  aseguradora: "Aseguradora",
};

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  useEffect(() => {
    loadClientes();
  }, []);

  async function loadClientes() {
    const supabase = createClient();
    const { data } = await supabase
      .from("clientes")
      .select("*")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });
    setClientes(data || []);
    setLoading(false);
  }

  const filtered = clientes.filter((c) => {
    const matchSearch =
      !search ||
      c.nombre.toLowerCase().includes(search.toLowerCase()) ||
      (c.email && c.email.toLowerCase().includes(search.toLowerCase())) ||
      (c.telefono && c.telefono.includes(search));
    const matchTipo = !filtroTipo || c.tipo === filtroTipo;
    return matchSearch && matchTipo;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Clientes</h1>
        <Link
          href="/dashboard/clientes/nuevo"
          className="btn-primary flex items-center gap-2 !text-sm"
        >
          <Plus className="w-4 h-4" /> Nuevo cliente
        </Link>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, email o teléfono..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input !pl-10 !py-2.5 !text-sm"
          />
        </div>
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="input !py-2.5 !text-sm sm:w-48"
        >
          <option value="">Todos los tipos</option>
          <option value="particular">Particular</option>
          <option value="empresa">Empresa</option>
          <option value="comunidad">Comunidad</option>
          <option value="aseguradora">Aseguradora</option>
        </select>
      </div>

      {loading ? (
        <div className="card p-8 text-center">
          <p className="text-gray-400">Cargando clientes...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="card p-8 text-center">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-secondary mb-2">
            {clientes.length === 0
              ? "Sin clientes registrados"
              : "No se encontraron resultados"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {clientes.length === 0
              ? "Añade tu primer cliente para empezar"
              : "Prueba con otros términos de búsqueda"}
          </p>
          {clientes.length === 0 && (
            <Link
              href="/dashboard/clientes/nuevo"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Añadir cliente
            </Link>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <Link
              key={c.id}
              href={`/dashboard/clientes/${c.id}`}
              className="card p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-secondary">{c.nombre}</h3>
                  <span className="badge-neutral text-xs mt-1">
                    {tipoLabels[c.tipo] || c.tipo}
                  </span>
                </div>
                {c.valoracion && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary-400 text-primary-400" />
                    <span className="text-xs text-gray-500">{c.valoracion}</span>
                  </div>
                )}
              </div>
              {c.telefono && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  {c.telefono}
                </div>
              )}
              {c.email && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Mail className="w-3.5 h-3.5" />
                  {c.email}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
