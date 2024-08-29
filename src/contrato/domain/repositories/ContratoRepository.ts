import { Contrato } from "../entities/Contrato";
import { IctiTipos } from "../../../shared/domain/interfaces/IctiTipos";
import { ContratoDto } from "../DTOS/ContratoDto";
import { ContratoGetDeletedDto } from "../DTOS/ContratoGetDeletedDto";
import { ContratoGetModifiedDto } from "../DTOS/ContratoGetModifiedDto";
import { ContratoTableDto } from "../DTOS/ContratoTableDto";
import { VersionContrato } from "../entities/VersionContrato";

export interface ContratoRepository {
    addContrato(contrato:Contrato):Promise<Contrato|null>;

    getContratosByEnlace(enlaceId:string):Promise<Contrato[]|null>;

    getContratos():Promise<Contrato[]|null>;

    getAllContratoDetallado(estatus: number):Promise<ContratoDto[]|null>;

    getContratoDetalladoById(contratoId:string):Promise<ContratoDto|null>;
    
    getAllContratoDetalladoByEnlace(enlaceId:string):Promise<ContratoDto[]|null>;

    getAllTipoInstalacion():Promise<IctiTipos[]|null>;

    getAllTipoContrato():Promise<IctiTipos[]|null>;

    getAllVersionContrato():Promise<VersionContrato[]|null>;

    getVersionesByTipoContratoId(tipoContratoId:string):Promise<VersionContrato[]|null>;

    updateContrato(contratoId:string, updateData:any):Promise<Contrato|null>;

    deleteContrato(contratoId:string, userId: string, deleteDate: Date):Promise<boolean>;

    getAllDeletedContrato():Promise<ContratoGetDeletedDto[] | null>;

    getDeletedContratoById(contratoId:string):Promise<ContratoGetDeletedDto|null>;

    getDomainDeletedContratoById(contratoId:string):Promise<Contrato|null>;

    getAllModifiedContrato():Promise<ContratoGetModifiedDto[]|null>;

    getModifiedContratoById(contratoId:string):Promise<ContratoGetModifiedDto|null>;

    getAllModifiedContratoByContratoId(contratoId:string):Promise<ContratoGetModifiedDto[]|null>;

    getDomainModifiedContratoById(contratoId:string):Promise<ContratoTableDto|null>;
    
    // restaura un contrato eliminado
    restoreContrato(contratoId:string):Promise<boolean>;

    // restaura un contrato modificado
    restoreModifiedContrato(modifiedId:string, backup: ContratoTableDto):Promise<boolean>;

    getBackupContratoById(contratoId:string):Promise<ContratoTableDto|null>;

    backupContrato(contrato:ContratoTableDto, backupDate: Date):Promise<boolean>;
}