import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { ContratoGetDeletedDto } from "../domain/DTOS/ContratoGetDeletedDto";

export class GetAllDeletedContratoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(): Promise<ContratoGetDeletedDto[]|null> {
        return await this.contratoRepository.getAllDeletedContrato();
    }
}