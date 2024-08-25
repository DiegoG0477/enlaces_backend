import { ServicioGetDto } from "../../domain/DTOs/ServicioGetDto";
import { ServicioRepository } from "../../domain/ServicioRepository";

export class GetServicioByIdUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(servicioId: string): Promise<ServicioGetDto | null> {
        try {
            return await this.servicioRepository.getServicioById(servicioId);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}