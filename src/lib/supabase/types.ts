export type Empresa = {
  id: string;
  nombre: string;
  cif: string | null;
  direccion: string | null;
  telefono: string | null;
  email: string | null;
  web: string | null;
  logo_url: string | null;
  firma_url: string | null;
  iban: string | null;
  color_primario: string;
  numeracion_factura_prefijo: string;
  numeracion_factura_contador: number;
  iva_defecto: number;
  tamano_empresa: string | null;
  onboarding_completado: boolean;
  plan: "gratis" | "pro" | "business";
  created_at: string;
  updated_at: string;
};

export type Usuario = {
  id: string;
  empresa_id: string;
  nombre: string;
  email: string;
  telefono: string | null;
  avatar_url: string | null;
  rol: "admin" | "empleado";
  activo: boolean;
  created_at: string;
};

export type Cliente = {
  id: string;
  empresa_id: string;
  nombre: string;
  telefono: string | null;
  email: string | null;
  direccion: string | null;
  nif_cif: string | null;
  tipo: "particular" | "empresa" | "comunidad" | "aseguradora";
  origen: string | null;
  valoracion: number | null;
  valoracion_nota: string | null;
  notas: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Obra = {
  id: string;
  empresa_id: string;
  cliente_id: string | null;
  presupuesto_id: string | null;
  nombre: string;
  tipo_reforma: string | null;
  descripcion: string | null;
  direccion: string | null;
  estado: "pendiente" | "en_curso" | "pausada" | "finalizada" | "cancelada";
  presupuesto_aprobado: number | null;
  fecha_inicio: string | null;
  fecha_fin_estimada: string | null;
  fecha_fin_real: string | null;
  notas_internas: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  clientes?: Cliente;
};

export type ObraFase = {
  id: string;
  obra_id: string;
  nombre: string;
  orden: number;
  estado: "pendiente" | "en_curso" | "completada";
  fecha_completado: string | null;
  notas: string | null;
  created_at: string;
};

export type Presupuesto = {
  id: string;
  empresa_id: string;
  cliente_id: string | null;
  numero: string | null;
  tipo_reforma: string | null;
  estado: "borrador" | "enviado" | "aceptado" | "rechazado" | "expirado";
  validez_dias: number;
  subtotal: number;
  iva_porcentaje: number;
  iva_importe: number;
  total: number;
  notas_cliente: string | null;
  notas_internas: string | null;
  fecha_envio: string | null;
  version_actual: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  clientes?: Cliente;
};

export type PresupuestoCapitulo = {
  id: string;
  presupuesto_id: string;
  opcion_id: string | null;
  nombre: string;
  orden: number;
  partidas?: PresupuestoPartida[];
};

export type PresupuestoPartida = {
  id: string;
  capitulo_id: string;
  concepto: string;
  descripcion: string | null;
  unidad: string;
  cantidad: number;
  precio_unitario: number;
  margen_porcentaje: number;
  total: number;
  orden: number;
};
