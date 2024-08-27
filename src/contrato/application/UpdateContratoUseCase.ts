import { ContratoRepository } from "../domain/repositories/ContratoRepository";
import { Contrato } from "../domain/entities/Contrato";

export class UpdateContratoUseCase {
    constructor(private repository: ContratoRepository) {}

    async run(contratoId: string, updateData: any): Promise<Contrato | null> {
        const contratoBackup = await this.repository.getBackupContratoById(contratoId);

        if (!contratoBackup) {
            throw new Error('Contrato not found');
        }

        const backupDate = new Date();

        const backedUp = await this.repository.backupContrato(contratoBackup, backupDate);

        if (!backedUp) {
            throw new Error('Error backing up contrato');
        }

        return await this.repository.updateContrato(contratoId, updateData);
    }
}