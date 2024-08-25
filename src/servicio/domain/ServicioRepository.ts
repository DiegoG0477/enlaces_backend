import { ServicioGetDto } from "./DTOs/ServicioGetDto";
import { Servicio } from "./entities/Servicio";

export interface ServicioRepository {
    addServicio(servicio: Servicio): Promise<Servicio|null>;
    getAllDomainServicio(): Promise<Servicio[] | null>;
    getAllServicio(): Promise<ServicioGetDto[] | null>;
    getDomainServicioById(servicioId: string): Promise<Servicio | null>;
    getServicioById(servicioId: string): Promise<ServicioGetDto | null>;
    updateServicio(servicioId: string, updateData: any): Promise<Servicio | null>;
    // deleteServicio(servicioId: string, userId: string, deletedAt: Date): Promise<boolean>;
}