import { ContratoDto } from "../domain/DTOS/ContratoDto";
import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class GetAllContratoDetalladoByEnlaceUseCase{
    constructor(private contratoRepository: ContratoRepository) {}

    async run(enlaceId:string): Promise<ContratoDto[]|null> {
        return this.contratoRepository.getAllContratoDetalladoByEnlace(enlaceId);
    }
}