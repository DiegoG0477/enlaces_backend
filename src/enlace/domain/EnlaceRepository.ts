import { Enlace } from "./Enlace";
import { EnlaceDto } from "./EnlaceDto";
import { EnlaceCompletoDto } from "./EnlaceCompletoDto";
export interface EnlaceRepository {
    addEnlace(Enlace: Enlace): Promise<Enlace|null>;
    getEnlaces(): Promise<Enlace[] | null>;
    getAllEnlaceDetallado(): Promise<EnlaceDto[] | null>;
    getEnlaceById(id: string): Promise<Enlace | null>;
    getEnlaceCompletoById(enlaceId: string): Promise<EnlaceCompletoDto | null>;
    getEnlacesByEstatus(estatus: number): Promise<Enlace[] | null>;
    updateEnlace(enlaceId: string, updateData: any): Promise<Enlace | null>;
    deleteEnlace(id: string): Promise<boolean>;
}