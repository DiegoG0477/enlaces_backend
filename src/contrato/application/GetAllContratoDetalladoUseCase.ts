import { ContratoDto } from "../domain/DTOS/ContratoDto";
import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class GetAllContratoDetalladoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(): Promise<ContratoDto[]|null> {
        return this.contratoRepository.getAllContratoDetallado();
    }
}