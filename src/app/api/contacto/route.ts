import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { tipo, nombre, email, telefono, empresa, empleados, mensaje } = body;

  if (!nombre || !email) {
    return NextResponse.json({ error: "Nombre y email son obligatorios" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("contacto_leads").insert({
    tipo: tipo || "contacto",
    nombre,
    email,
    telefono: telefono || null,
    empresa: empresa || null,
    empleados: empleados || null,
    mensaje: mensaje || null,
  });

  if (error) {
    return NextResponse.json({ error: "Error guardando mensaje" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
