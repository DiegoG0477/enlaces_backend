import { ServicioGetDto } from "./DTOs/ServicioGetDto";
import { Servicio } from "./entities/Servicio";
import { FolioData } from "./entities/FolioData";
import { IctiTipos } from "../../shared/domain/interfaces/IctiTipos";
import { TipoServicio } from "./entities/TipoServicio";

export interface ServicioRepository {
    addServicio(servicio: Servicio): Promise<Servicio|null>;
    getAllDomainServicio(): Promise<Servicio[] | null>;
    getAllServicio(): Promise<ServicioGetDto[] | null>;
    getDomainServicioById(servicioId: string): Promise<Servicio | null>;
    getServicioById(servicioId: string): Promise<ServicioGetDto | null>;
    updateServicio(servicioId: string, updateData: any): Promise<Servicio | null>;
    // deleteServicio(servicioId: string, userId: string, deletedAt: Date): Promise<boolean>;
    getLastFolioByTipoServicio(tipoServicioId: number): Promise<FolioData | null>;
    getCodigoFolioByTipoServicioId(tipoServicioId: number): Promise<string | null>;
    getAllTipoServicio(): Promise<TipoServicio[] | null>;
    getAllTipoActividad(): Promise<IctiTipos[] | null>;
    getAllEstadoServicio(): Promise<IctiTipos[] | null>;
}