import { ServicioRepository } from "../../domain/ServicioRepository";

export class RestoreModifiedServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(modifiedId:string): Promise<boolean> {
        const modifiedServicio = await this.servicioRepository.getDomainModifiedServicioById(modifiedId);

        if (!modifiedServicio) {
            throw new Error('Servicio no encontrado');
        }

        return await this.servicioRepository.restoreModifiedServicio(modifiedId, modifiedServicio);
    }
}