import { Enlace } from "./Enlace";
import { EnlaceDto } from "./DTOs/EnlaceDto";
import { EnlaceCompletoDto } from "./DTOs/EnlaceCompletoDto";
import { EnlaceGetDeletedDto } from "./DTOs/EnlaceGetDeletedDto";
import { EnlaceGetModifiedDto } from "./DTOs/EnlaceGetModifiedDto";

export interface EnlaceRepository {
    addEnlace(Enlace: Enlace): Promise<Enlace|null>;
    getEnlaces(): Promise<Enlace[] | null>;
    getAllEnlaceDetallado(): Promise<EnlaceDto[] | null>;
    getEnlaceById(id: string): Promise<Enlace | null>;
    getEnlaceCompletoById(enlaceId: string): Promise<EnlaceCompletoDto | null>;
    getEnlacesByEstatus(estatus: number): Promise<Enlace[] | null>;
    updateEnlace(enlaceId: string, updateData: any): Promise<Enlace | null>;
    deleteEnlace(enlaceId: string, userId: string, deletedAt: Date): Promise<boolean>;
    getAllDeletedEnlace(): Promise<EnlaceGetDeletedDto[] | null>;
    getDeletedEnlaceById(enlaceId: string): Promise<EnlaceGetDeletedDto | null>;
    getDomainDeletedEnlaceById(enlaceId: string): Promise<Enlace | null>;
    getAllModifiedEnlace(): Promise<EnlaceGetModifiedDto[] | null>;
    getModifiedEnlaceById(enlaceId: string): Promise<EnlaceGetModifiedDto | null>;
    getDomainModifiedEnlaceById(enlaceId: string): Promise<Enlace | null>;
    restoreEnlace(enlaceId: string): Promise<boolean>;
    restoreModifiedEnlace(modifiedId: string): Promise<boolean>;
}