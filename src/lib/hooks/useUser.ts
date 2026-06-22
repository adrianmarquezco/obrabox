"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Usuario, Empresa } from "@/lib/supabase/types";

export function useUser() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data: usr } = await supabase
        .from("usuarios")
        .select("*")
        .eq("id", user.id)
        .single();

      if (usr) {
        setUsuario(usr);
        const { data: emp } = await supabase
          .from("empresas")
          .select("*")
          .eq("id", usr.empresa_id)
          .single();
        if (emp) setEmpresa(emp);
      }

      setLoading(false);
    }

    load();
  }, []);

  return { usuario, empresa, loading };
}
