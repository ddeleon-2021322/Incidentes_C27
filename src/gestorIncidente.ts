import { Incidente, prioridad, estadoIncidente } from './incidente';
export class GestorIncidente {
        private incidente: Incidente[] = [];

    crearIncidente(id: number, titulo: string, descripcion: string, reportadoPor: string, prioridad: prioridad, estado: estadoIncidente, fecha: Date): void {
        const nuevoIncidente: Incidente = {
            id,
            titulo,
            descripcion,
            reportadoPor,
            prioridad,
            estado: 'abierto',
            fecha: new Date()
        };
        this.incidente.push(nuevoIncidente);
        console.log(`Se ha creado un nuevo incidente con el id: ${id}`);
    }    
    
    obtenerTodosLosIncidentes(): Incidente[] {
        return this.incidente;

    }
}
