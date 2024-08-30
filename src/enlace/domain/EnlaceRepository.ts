import { Enlace } from "./Enlace";
import { EnlaceDto } from "./DTOs/EnlaceDto";
import { EnlaceCompletoDto } from "./DTOs/EnlaceCompletoDto";
import { EnlaceGetDeletedDto } from "./DTOs/EnlaceGetDeletedDto";
import { EnlaceGetModifiedDto } from "./DTOs/EnlaceGetModifiedDto";
import { EnlaceCreateDto } from "./DTOs/EnlaceCreateDto";
import { EnlaceTableDto } from "./DTOs/EnlaceTableDto";

export interface EnlaceRepository {
    addEnlace(Enlace: Enlace): Promise<EnlaceCreateDto|null>;
    getEnlaceByDependenciaId(dependenciaId: number): Promise<Enlace | null>;
    getEnlaces(): Promise<Enlace[] | null>;
    getAllEnlaceDetallado(estatus: number): Promise<EnlaceDto[] | null>;
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
    getDomainModifiedEnlaceById(enlaceId: string): Promise<EnlaceTableDto | null>;
    restoreEnlace(enlaceId: string): Promise<boolean>;
    restoreModifiedEnlace(modifiedId: string, backup: EnlaceTableDto): Promise<boolean>;
    getBackupEnlaceById(enlaceId: string): Promise<EnlaceTableDto | null>;
    backupEnlace(enlace: EnlaceTableDto, backupDate: Date): Promise<boolean>;
    getAllModifiedEnlaceByEnlaceId(enlaceId: string): Promise<EnlaceGetModifiedDto[] | null>;
}