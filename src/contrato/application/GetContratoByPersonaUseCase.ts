import { Contrato } from "../domain/Contrato";
import { ContratoRepository } from "../domain/ContratoRepository";

export class GetContratoByPersonaUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run (personaId:string): Promise<Contrato|null> {
        return this.contratoRepository.getContratoByPersona(personaId);
    }
}