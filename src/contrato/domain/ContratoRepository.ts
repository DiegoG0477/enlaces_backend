import { Contrato } from "./Contrato";

export interface ContratoRepository {
    addContrato(contrato:Contrato):Promise<Contrato|null>;

    getContratoByEnlace(enlaceId:string):Promise<Contrato|null>;

    getContratos():Promise<Contrato[]|null>;
}