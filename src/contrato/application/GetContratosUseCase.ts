import { Contrato } from "../domain/Contrato";
import { ContratoRepository } from "../domain/ContratoRepository";

export class GetContratosUseCase{
    constructor(private contratoRepository: ContratoRepository) {}

    async run(): Promise<Contrato[]|null> {
        return this.contratoRepository.getContratos();
    }
}