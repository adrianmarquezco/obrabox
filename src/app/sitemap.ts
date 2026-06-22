import type { MetadataRoute } from "next";

const BASE_URL = "https://obrabox.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/precios",
    "/contacto",
    "/sobre-nosotros",
    "/demo",
    "/casos-de-exito",
    "/ayuda",
    "/referidos",
    "/novedades",
    "/integraciones",
    "/comunidad",
    "/login",
    "/registro",
    // Funcionalidades
    "/presupuestos-reforma",
    "/portal-cliente-obras",
    "/control-gastos-obra",
    "/gestion-equipo-obra",
    "/facturacion-reformas",
    "/galeria-fotos-obra",
    "/agenda-reformista",
    "/crm-reformas",
    "/gestion-obra-completa",
    "/informes-rentabilidad",
    // Sectores
    "/sectores/reformas-integrales",
    "/sectores/reformas-banos",
    "/sectores/reformas-cocinas",
    "/sectores/pintura",
    "/sectores/electricidad",
    "/sectores/fontaneria",
    "/sectores/albanileria",
    "/sectores/carpinteria",
    "/sectores/construccion",
    // Perfiles
    "/para-autonomos",
    "/para-empresas",
    "/para-constructoras",
    "/para-administradores-fincas",
    "/para-interioristas",
    // Calculadoras
    "/calculadora/reforma-bano",
    "/calculadora/reforma-cocina",
    "/calculadora/reforma-integral",
    "/calculadora/pintar-piso",
    "/calculadora/cambiar-ventanas",
    "/calculadora/reforma-local",
    "/calculadora/iva-reformas",
    // Plantillas
    "/plantillas/presupuesto-reforma-bano",
    "/plantillas/presupuesto-reforma-cocina",
    "/plantillas/presupuesto-reforma-integral",
    "/plantillas/contrato-reforma",
    "/plantillas/acta-recepcion-obra",
    "/plantillas/parte-trabajo",
    "/plantillas/checklist-reforma",
    // Directorio
    "/directorio",
    // Blog
    "/blog",
    "/blog/iva-reformas-10-21",
    "/blog/como-hacer-presupuesto-reforma",
    "/blog/como-captar-clientes-reformas",
    "/blog/cobrar-reforma-impagos",
    "/blog/licencia-obra-menor",
    "/blog/gestionar-empresa-reformas",
    "/blog/subcontratar-reformas",
    "/blog/seguro-responsabilidad-civil-reformas",
    "/blog/marketing-reformistas",
    "/blog/digitalizar-empresa-reformas",
    // Guías
    "/guias/montar-empresa-reformas",
    "/guias/facturacion-reformas",
    "/guias/gestion-residuos-obra",
    "/guias/libro-subcontratacion",
    // Subvenciones
    "/subvenciones",
    "/subvenciones/next-generation",
    "/subvenciones/rehabilitacion-energetica",
    // Comparativas
    "/comparativas/obrabox-vs-excel",
    "/comparativas/obrabox-vs-whatsapp",
    "/comparativas/obrabox-vs-papel",
    // Normativa
    "/normativa/licencia-obra-menor",
    "/normativa/gestion-residuos-obra",
    "/normativa/seguro-responsabilidad-civil",
    "/normativa/registro-jornada-laboral",
    "/normativa/libro-subcontratacion",
    // Legal
    "/privacidad",
    "/terminos",
    "/cookies",
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog") ? 0.8 : 0.7,
  }));
}
