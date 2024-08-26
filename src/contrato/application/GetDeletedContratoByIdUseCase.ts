import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { ContratoGetDeletedDto } from "../domain/DTOS/ContratoGetDeletedDto";

export class GetDeletedContratoByIdUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId:string): Promise<ContratoGetDeletedDto|null> {
        return await this.contratoRepository.getDeletedContratoById(contratoId);
    }
}