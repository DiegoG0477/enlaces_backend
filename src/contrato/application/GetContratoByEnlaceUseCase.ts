import { Contrato } from "../domain/Contrato";
import { ContratoRepository } from "../domain/ContratoRepository";

export class GetContratoByEnlaceUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run (enlaceId:string): Promise<Contrato|null> {
        return this.contratoRepository.getContratoByEnlace(enlaceId);
    }
}