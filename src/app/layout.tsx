import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ObraBox — Software de Gestión para Empresas de Reformas y Construcción",
    template: "%s | ObraBox",
  },
  description:
    "Gestiona tus obras, presupuestos, equipos y clientes desde una sola app. Prueba gratis ObraBox, el software para reformistas en España.",
  metadataBase: new URL("https://obrabox.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "ObraBox",
  },
  twitter: {
    card: "summary_large_image",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ObraBox",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#F97316" />
      </head>
      <body className="font-sans antialiased bg-white text-secondary">
        {children}
      </body>
    </html>
  );
}
