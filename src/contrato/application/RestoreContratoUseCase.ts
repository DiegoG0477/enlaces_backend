import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class RestoreContratoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(contratoId:string): Promise<boolean> {
        return await this.contratoRepository.restoreContrato(contratoId);
    }
}