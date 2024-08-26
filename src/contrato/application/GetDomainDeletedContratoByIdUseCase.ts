import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { Contrato } from "../domain/entities/Contrato";

export class GetDomainDeletedContratoByIdUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId:string): Promise<Contrato|null> {
        return await this.contratoRepository.getDomainDeletedContratoById(contratoId);
    }
}