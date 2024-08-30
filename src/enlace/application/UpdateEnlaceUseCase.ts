import { EnlaceRepository } from "../domain/EnlaceRepository";
import { Enlace } from "../domain/Enlace";

export class UpdateEnlaceUseCase {
    constructor(private repository: EnlaceRepository) {}

    async run(enlaceId: string, updateData: any): Promise<Enlace | null> {
        const enlaceBackup = await this.repository.getBackupEnlaceById(enlaceId);

        if (!enlaceBackup) {
            throw new Error('Enlace not found');
        }

        const backupDate = new Date();

        const backedUp = await this.repository.backupEnlace(enlaceBackup, backupDate);

        if (!backedUp) {
            throw new Error('Error backing up enlace');
        }

        return await this.repository.updateEnlace(enlaceId, updateData);
    }
}