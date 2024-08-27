import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class RestoreModifiedContratoUseCase {
    constructor(private contratoRepository: ContratoRepository) {}

    async run(modifiedId:string): Promise<boolean> {
        const modifiedContrato = await this.contratoRepository.getDomainModifiedContratoById(modifiedId);

        if (!modifiedContrato) {
            throw new Error('Contrato not found');
        }

        return await this.contratoRepository.restoreModifiedContrato(modifiedId, modifiedContrato);
    }
}