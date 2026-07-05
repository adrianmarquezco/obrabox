# ObraBox

SaaS de gestión integral para empresas de reformas y construcción en España.

## Stack

| | |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Lenguaje** | TypeScript |
| **Estilos** | Tailwind CSS + Lucide React |
| **Base de datos** | Supabase (PostgreSQL + Auth + Storage) |
| **Despliegue** | Vercel (auto-deploy en push a `main`) |
| **Dominio** | obrabox.es |
| **Repo** | github.com/adrianmarquezco/obrabox |

## Servicios externos

| Servicio | Uso |
|---|---|
| Supabase | DB, autenticación, almacenamiento (logos, fotos de obra, documentos, facturas) |
| Vercel | Hosting y CDN |

## Estructura del producto

**Web pública (`/`)** — 70+ páginas SEO: home, precios, funcionalidades, sectores, calculadoras, blog, plantillas, directorio de profesionales.

**Dashboard privado (`/dashboard`)** — Portal del usuario con:
- Clientes, obras (fases + checklist), presupuestos (capítulos + partidas)
- CRM pipeline kanban, gastos, facturación
- Equipo, fichaje, agenda calendario
- Onboarding paso a paso

**Panel admin (`/admin`)** — Gestión de empresas, usuarios, planes y módulos. Protegido con RPC `check_is_admin()`.

## Diseño

Tema claro. Color primario: naranja `#F97316`. Mobile-first. Español.

## Despliegue

```
editar en local → git push → Vercel despliega automáticamente
```

No hay build en local. No instalar `node_modules` en local.
