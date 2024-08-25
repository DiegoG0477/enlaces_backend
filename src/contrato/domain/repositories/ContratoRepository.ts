import { Contrato } from "../entities/Contrato";
import { IctiTipos } from "../../../shared/domain/interfaces/IctiTipos";
import { ContratoDto } from "../DTOS/ContratoDto";
import { VersionContrato } from "../entities/VersionContrato";

export interface ContratoRepository {
    addContrato(contrato:Contrato):Promise<Contrato|null>;

    getContratosByEnlace(enlaceId:string):Promise<Contrato[]|null>;

    getContratos():Promise<Contrato[]|null>;

    getAllContratoDetallado():Promise<ContratoDto[]|null>;

    getContratoDetalladoById(contratoId:string):Promise<ContratoDto|null>;
    
    getAllContratoDetalladoByEnlace(enlaceId:string):Promise<ContratoDto[]|null>;

    getAllTipoInstalacion():Promise<IctiTipos[]|null>;

    getAllTipoContrato():Promise<IctiTipos[]|null>;

    getAllVersionContrato():Promise<VersionContrato[]|null>;

    getVersionesByTipoContratoId(tipoContratoId:string):Promise<VersionContrato[]|null>;

    updateContrato(contratoId:string, updateData:any):Promise<Contrato|null>;

    deleteContrato(contratoId:string, userId: string, deleteDate: Date):Promise<boolean>;
}