import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { ContratoGetModifiedDto } from "../domain/DTOS/ContratoGetModifiedDto";

export class GetAllModifiedContratoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(): Promise<ContratoGetModifiedDto[]|null> {
        return await this.contratoRepository.getAllModifiedContrato();
    }
}