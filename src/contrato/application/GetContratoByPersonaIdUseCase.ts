import { Contrato } from "../domain/Contrato";
import { ContratoRepository } from "../domain/ContratoRepository";

export class GetContratoByPersonaIdUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run (personaId:string): Promise<Contrato|null> {
        return this.contratoRepository.getContratoByPersonaId(personaId);
    }
}