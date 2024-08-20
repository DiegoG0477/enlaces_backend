import { Contrato } from "../entities/Contrato";
import { IctiTipos } from "../../../shared/domain/interfaces/IctiTipos";
import { VersionContrato } from "../entities/VersionContrato";

export interface ContratoRepository {
    addContrato(contrato:Contrato):Promise<Contrato|null>;

    getContratoByEnlace(enlaceId:string):Promise<Contrato|null>;

    getContratos():Promise<Contrato[]|null>;

    getAllTipoInstalacion():Promise<IctiTipos[]|null>;

    getAllTipoContrato():Promise<IctiTipos[]|null>;

    getAllVersionContrato():Promise<VersionContrato[]|null>;

    getVersionesByTipoContratoId(tipoContratoId:string):Promise<VersionContrato[]|null>;
}