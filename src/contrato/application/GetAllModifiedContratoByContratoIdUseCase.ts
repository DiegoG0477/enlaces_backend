import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { ContratoGetModifiedDto } from "../domain/DTOS/ContratoGetModifiedDto";

export class GetAllModifiedContratoByContratoIdUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId: string): Promise<ContratoGetModifiedDto[]|null> {
        return await this.contratoRepository.getAllModifiedContratoByContratoId(contratoId);
    }
}