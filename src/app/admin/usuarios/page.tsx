"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Search, X } from "lucide-react";

type Usuario = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
  created_at: string;
  empresa_id: string;
  empresas: { nombre: string } | null;
};

const PAGE_SIZE = 25;

export default function AdminUsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtroRol, setFiltroRol] = useState("");
  const [filtroActivo, setFiltroActivo] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const load = useCallback(async (p: number, q: string, rol: string, activo: string, replace = false) => {
    const supabase = createClient();
    let query = supabase.from("usuarios")
      .select("id, nombre, email, rol, activo, created_at, empresa_id, empresas(nombre)", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(p * PAGE_SIZE, (p + 1) * PAGE_SIZE - 1);
    if (q) query = query.or(`nombre.ilike.%${q}%,email.ilike.%${q}%`);
    if (rol) query = query.eq("rol", rol);
    if (activo !== "") query = query.eq("activo", activo === "true");
    const { data, count } = await query;
    const rows = (data || []) as unknown as Usuario[];
    setHasMore(rows.length === PAGE_SIZE);
    setTotal(count || 0);
    setUsuarios((prev) => replace ? rows : [...prev, ...rows]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setPage(0);
    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => load(0, search, filtroRol, filtroActivo, true), 300);
  }, [search, filtroRol, filtroActivo, load]);

  async function toggleActivo(userId: string, activo: boolean) {
    const supabase = createClient();
    await supabase.from("usuarios").update({ activo: !activo }).eq("id", userId);
    setUsuarios((prev) => prev.map((u) => u.id === userId ? { ...u, activo: !activo } : u));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Usuarios</h1>
          <p className="text-sm text-gray-500 mt-0.5">{total} usuario{total !== 1 ? "s" : ""} en total</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-48">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="text" placeholder="Buscar por nombre o email..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500" />
          {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2"><X className="w-3.5 h-3.5 text-gray-500" /></button>}
        </div>
        <select value={filtroRol} onChange={(e) => setFiltroRol(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500">
          <option value="">Todos los roles</option>
          <option value="admin">Admin</option>
          <option value="empleado">Empleado</option>
        </select>
        <select value={filtroActivo} onChange={(e) => setFiltroActivo(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-orange-500">
          <option value="">Todos</option>
          <option value="true">Activos</option>
          <option value="false">Inactivos</option>
        </select>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Empresa</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Rol</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase">Alta</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} className="p-8 text-center text-gray-600">Cargando...</td></tr>
            ) : usuarios.length === 0 ? (
              <tr><td colSpan={7} className="p-8 text-center text-gray-600">Sin resultados</td></tr>
            ) : usuarios.map((u) => (
              <tr key={u.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                <td className="p-3 font-medium text-gray-200">{u.nombre}</td>
                <td className="p-3 text-gray-500 text-xs">{u.email}</td>
                <td className="p-3">
                  {u.empresas ? (
                    <Link href={`/admin/empresas/${u.empresa_id}`}
                      className="text-xs text-orange-400 hover:text-orange-300">
                      {(u.empresas as any).nombre}
                    </Link>
                  ) : <span className="text-gray-600 text-xs">—</span>}
                </td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    u.rol === "admin" ? "bg-purple-900/40 text-purple-400" : "bg-gray-700 text-gray-400"
                  }`}>{u.rol}</span>
                </td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    u.activo ? "bg-green-900/40 text-green-400" : "bg-red-900/40 text-red-400"
                  }`}>{u.activo ? "Activo" : "Inactivo"}</span>
                </td>
                <td className="p-3 text-xs text-gray-500">{new Date(u.created_at).toLocaleDateString("es-ES")}</td>
                <td className="p-3">
                  <button onClick={() => toggleActivo(u.id, u.activo)}
                    className={`text-xs font-medium ${u.activo ? "text-red-500 hover:text-red-400" : "text-green-500 hover:text-green-400"}`}>
                    {u.activo ? "Desactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="text-center mt-4">
          <button onClick={() => { const next = page + 1; setPage(next); load(next, search, filtroRol, filtroActivo); }}
            className="text-sm text-orange-400 hover:text-orange-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
}
