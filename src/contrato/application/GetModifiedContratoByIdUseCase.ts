import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { ContratoGetModifiedDto } from "../domain/DTOS/ContratoGetModifiedDto";

export class GetModifiedContratoByIdUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId:string): Promise<ContratoGetModifiedDto|null> {
        return await this.contratoRepository.getModifiedContratoById(contratoId);
    }
}