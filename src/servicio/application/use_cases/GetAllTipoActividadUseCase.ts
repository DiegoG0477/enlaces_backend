import { ServicioRepository } from "../../domain/ServicioRepository";
import { TipoActividad } from "../../domain/entities/TipoActividad";

export class GetAllTipoActividadUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(): Promise<TipoActividad[] | null> {
        try {
            return await this.servicioRepository.getAllTipoActividad();
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}