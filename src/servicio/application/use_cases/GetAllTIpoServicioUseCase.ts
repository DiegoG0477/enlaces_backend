import { ServicioRepository } from "../../domain/ServicioRepository";
import { TipoServicio } from "../../domain/entities/TipoServicio";

export class GetAllTipoServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(): Promise<TipoServicio[] | null> {
        try {
            return await this.servicioRepository.getAllTipoServicio();
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}