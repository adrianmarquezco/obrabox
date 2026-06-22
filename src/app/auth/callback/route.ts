import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirect = searchParams.get("redirect") || "/dashboard";

  if (code) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.exchangeCodeForSession(code);

    if (user) {
      const { data: existingUser } = await supabase
        .from("usuarios")
        .select("id")
        .eq("id", user.id)
        .single();

      if (!existingUser) {
        const meta = user.user_metadata || {};
        const nombre = meta.nombre || meta.full_name || meta.name || "Usuario";
        const empresaNombre = meta.empresa || `Empresa de ${nombre}`;

        const { data: empresa } = await supabase
          .from("empresas")
          .insert({ nombre: empresaNombre })
          .select("id")
          .single();

        if (empresa) {
          await supabase.from("usuarios").insert({
            id: user.id,
            empresa_id: empresa.id,
            nombre,
            email: user.email || "",
            telefono: meta.telefono || null,
            rol: "admin",
          });

          return NextResponse.redirect(`${origin}/onboarding`);
        }
      }
    }
  }

  return NextResponse.redirect(`${origin}${redirect}`);
}
