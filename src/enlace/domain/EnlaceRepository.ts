import { Enlace } from "./entities/Enlace";

export interface EnlaceRepository {
    addEnlace(Enlace: Enlace): Promise<Enlace|null>;
    getEnlaces(): Promise<Enlace[] | null>;
    getEnlaceById(id: string): Promise<Enlace | null>;
    getEnlacesByEstatus(estatus: number): Promise<Enlace[] | null>;
    updateEnlace(enlaceId: string, updateData: any): Promise<Enlace | null>;
    deleteEnlace(id: string): Promise<boolean>;
}