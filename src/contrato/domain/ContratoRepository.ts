import { Contrato } from "./Contrato";

export interface ContratoRepository {
    addContrato(contrato:Contrato):Promise<Contrato|null>;

    getContratoByPersonaId(personaId:string):Promise<Contrato|null>;

    getContratos():Promise<Contrato[]|null>;
}