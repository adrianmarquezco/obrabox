import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/cliente/", "/auth/", "/api/", "/admin/"],
      },
    ],
    sitemap: "https://obrabox.es/sitemap.xml",
  };
}
