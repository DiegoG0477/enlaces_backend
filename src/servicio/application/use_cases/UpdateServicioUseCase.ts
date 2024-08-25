import { Servicio } from "../../domain/entities/Servicio";
import { ServicioRepository } from "../../domain/ServicioRepository";

export class UpdateServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(servicioId: string, updateData: any): Promise<Servicio | null> {
        try {
            return await this.servicioRepository.updateServicio(servicioId, updateData);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}