import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { data: existingUser } = await supabase
    .from("usuarios")
    .select("id")
    .eq("id", user.id)
    .single();

  if (existingUser) {
    return NextResponse.json({ exists: true });
  }

  const meta = user.user_metadata || {};
  const nombre = meta.nombre || meta.full_name || "Usuario";
  const empresaNombre = meta.empresa || `Empresa de ${nombre}`;

  const { data: empresa, error: empError } = await supabase
    .from("empresas")
    .insert({ nombre: empresaNombre })
    .select("id")
    .single();

  if (empError || !empresa) {
    return NextResponse.json({ error: "Error creando empresa" }, { status: 500 });
  }

  const { error: usrError } = await supabase.from("usuarios").insert({
    id: user.id,
    empresa_id: empresa.id,
    nombre,
    email: user.email || "",
    telefono: meta.telefono || null,
    rol: "admin",
  });

  if (usrError) {
    return NextResponse.json({ error: "Error creando usuario" }, { status: 500 });
  }

  return NextResponse.json({ created: true, empresa_id: empresa.id });
}
