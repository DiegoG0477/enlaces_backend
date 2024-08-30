import { ServicioGetDto } from "./DTOs/ServicioGetDto";
import { Servicio } from "./entities/Servicio";
import { FolioData } from "./entities/FolioData";
import { IctiTipos } from "../../shared/domain/interfaces/IctiTipos";
import { TipoServicio } from "./entities/TipoServicio";
import { ServicioTableDto } from "./DTOs/ServicioTableDto";
import { ServicioGetModifiedDto } from "./DTOs/ServicioGetModifiedDto";

export interface ServicioRepository {
    addServicio(servicio: Servicio): Promise<Servicio|null>;
    getAllDomainServicio(): Promise<Servicio[] | null>;
    getAllServicio(estatus: number): Promise<ServicioGetDto[] | null>;
    getDomainServicioById(servicioId: string): Promise<Servicio | null>;
    getServicioById(servicioId: string): Promise<ServicioGetDto | null>;
    updateServicio(servicioId: string, updateData: any): Promise<Servicio | null>;
    // deleteServicio(servicioId: string, userId: string, deletedAt: Date): Promise<boolean>;
    getLastFolioByTipoServicio(tipoServicioId: number): Promise<FolioData | null>;
    getCodigoFolioByTipoServicioId(tipoServicioId: number): Promise<string | null>;
    getAllTipoServicio(): Promise<TipoServicio[] | null>;
    getAllTipoActividad(): Promise<IctiTipos[] | null>;
    getAllEstadoServicio(): Promise<IctiTipos[] | null>;
    getDomainModifiedServicioById(servicioId: string): Promise<ServicioTableDto | null>;
    restoreServicio(servicioId: string): Promise<boolean>;
    restoreModifiedServicio(modifiedId: string, backup: ServicioTableDto): Promise<boolean>;
    getBackupServicioById(servicioId: string): Promise<ServicioTableDto | null>;
    backupServicio(servicio: ServicioTableDto, backupDate: Date): Promise<boolean>;
    getAllModifiedServicioByServicioId(servicioId: string): Promise<ServicioGetModifiedDto[] | null>;
}