import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class RestoreModifiedContratoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(modifiedId:string): Promise<boolean> {
        return await this.contratoRepository.restoreModifiedContrato(modifiedId);
    }
}