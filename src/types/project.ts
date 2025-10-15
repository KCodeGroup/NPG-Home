export interface CasaTipo {
  nombre: string;
  areaPiso1?: string;
  areaPiso2?: string;
  areaTotal?: string;
  caracteristicas: {
    salaComedor?: number;
    habitaciones?: number;
    banos?: number;
    cocina?: number;
    jardin?: number;
    patio?: number;
    terraza?: number;
    piscina?: number;
    jacuzzi?: number;
    familyRoom?: number;
    habitacionServicios?: number;
    parqueaderos?: number;
    asoleadoras?: number;
    alcobas?: number;
  };
  opcionesPlanta3?: {
    opcion1?: {
      area: string;
      caracteristicas: string[];
    };
    opcion2?: {
      area: string;
      caracteristicas: string[];
    };
  };
}

export interface Financiacion {
  lotesDesde: string;
  cuotaInicial: string;
  cuotaMensual?: string;
  cuotaFinal?: string;
  financiacion: string;
  separaTuLotePor: string;
  precioPorM2Desde: string;
}

export interface Ubicacion {
  ciudad: string;
  departamento: string;
}

export interface Project {
  id: string;
  nombre: string;
  ubicacion: Ubicacion;
  descripcion: string;
  amenidades: string[];
  puntosDeInteres: string[];
  casasTipo: CasaTipo[];
  financiacion: Financiacion;
  imagenes?: string[];
  caracteristicasEspeciales?: string[];
}

