export type prioridad = "baja" | "media" | "alta";
//Type restrinje el valor de la prioridad y el estado incidente a los valores que ahy se especifican
export type estadoIncidente = "abierto" | "en progreso" | "cerrado";

export interface Incidente{
    readonly id: number;
    titulo: string;
    descripcion: string;
    reportadoPor: string;
    prioridad: prioridad;
    estado: estadoIncidente;
    fecha: Date;

}
