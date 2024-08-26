import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { Contrato } from "../domain/entities/Contrato";

export class GetDomainModifiedContratoByIdUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId:string): Promise<Contrato|null> {
        return await this.contratoRepository.getDomainModifiedContratoById(contratoId);
    }
}