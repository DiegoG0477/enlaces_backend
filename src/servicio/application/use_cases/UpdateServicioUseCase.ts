import { Servicio } from "../../domain/entities/Servicio";
import { ServicioRepository } from "../../domain/ServicioRepository";

export class UpdateServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(servicioId: string, updateData: any): Promise<Servicio | null> {
        try {
            const servicioBackup = await this.servicioRepository.getBackupServicioById(servicioId);

            if (!servicioBackup) {
                throw new Error('Servicio no encontrado');
            }

            const backupDate = new Date();

            const backedUp = await this.servicioRepository.backupServicio(servicioBackup, backupDate);

            if (!backedUp) {
                throw new Error('Error respaldando servicio');
            }

            return await this.servicioRepository.updateServicio(servicioId, updateData);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}