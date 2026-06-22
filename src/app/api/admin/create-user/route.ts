import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

  const { data: admin } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", user.id)
    .eq("activo", true)
    .single();
  if (!admin) return NextResponse.json({ error: "No autorizado" }, { status: 403 });

  const body = await request.json();
  const { nombre, email, password, empresa_id, rol, telefono } = body;

  if (!nombre || !email || !password || !empresa_id) {
    return NextResponse.json({ error: "Campos obligatorios: nombre, email, password, empresa_id" }, { status: 400 });
  }

  const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { nombre, empresa: "" },
  });

  if (authError) {
    if (authError.message?.includes("already")) {
      return NextResponse.json({ error: "Ya existe un usuario con ese email" }, { status: 400 });
    }
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  if (!authUser.user) {
    return NextResponse.json({ error: "Error creando usuario en auth" }, { status: 500 });
  }

  const { error: usrError } = await supabase.from("usuarios").insert({
    id: authUser.user.id,
    empresa_id,
    nombre,
    email,
    telefono: telefono || null,
    rol: rol || "admin",
  });

  if (usrError) {
    return NextResponse.json({ error: "Error vinculando usuario a empresa" }, { status: 500 });
  }

  await supabase.from("admin_logs").insert({
    admin_id: user.id,
    accion: "user_create",
    entidad: "usuarios",
    entidad_id: authUser.user.id,
    detalles: { email, empresa_id, rol },
  });

  return NextResponse.json({ created: true, user_id: authUser.user.id });
}
