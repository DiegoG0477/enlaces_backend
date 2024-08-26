import { ServicioRepository } from "../../domain/ServicioRepository";
import { EstadoServicio } from "../../domain/entities/EstadoServicio";

export class GetAllEstadoServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(): Promise<EstadoServicio[] | null> {
        try {
            return await this.servicioRepository.getAllEstadoServicio();
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}