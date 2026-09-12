import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

  const { data: caller } = await supabase
    .from("usuarios").select("empresa_id, rol").eq("id", user.id).single();

  if (!caller || caller.rol !== "admin") {
    return NextResponse.json({ error: "Solo los administradores pueden invitar usuarios" }, { status: 403 });
  }

  const body = await request.json();
  const { nombre, email, password, rol = "empleado" } = body;

  if (!nombre || !email || !password) {
    return NextResponse.json({ error: "nombre, email y password son obligatorios" }, { status: 400 });
  }

  if (!["admin", "empleado"].includes(rol)) {
    return NextResponse.json({ error: "Rol inválido" }, { status: 400 });
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    return NextResponse.json({ error: "Configuración de servidor incompleta" }, { status: 500 });
  }

  const serviceClient = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceKey
  );

  const { data: authUser, error: authError } = await serviceClient.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { nombre },
  });

  if (authError) {
    if (authError.message?.includes("already")) {
      return NextResponse.json({ error: "Ya existe un usuario con ese email" }, { status: 400 });
    }
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  if (!authUser.user) {
    return NextResponse.json({ error: "Error creando usuario" }, { status: 500 });
  }

  const { error: usrError } = await serviceClient.from("usuarios").insert({
    id: authUser.user.id,
    empresa_id: caller.empresa_id,
    nombre,
    email,
    rol,
  });

  if (usrError) {
    await serviceClient.auth.admin.deleteUser(authUser.user.id);
    return NextResponse.json({ error: "Error vinculando usuario: " + usrError.message }, { status: 500 });
  }

  return NextResponse.json({ created: true, user_id: authUser.user.id });
}
