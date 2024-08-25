import { ContratoDto } from "../domain/DTOS/ContratoDto";
import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class GetContratoDetalladoByIdUseCase{
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId:string): Promise<ContratoDto|null> {
        return this.contratoRepository.getContratoDetalladoById(contratoId);
    }
}