import { Contrato } from "../domain/Contrato";
import { ContratoRepository } from "../domain/ContratoRepository";

export class AddContratoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contrato:Contrato):Promise<Contrato|null> {
        return this.contratoRepository.addContrato(contrato);
    }
}