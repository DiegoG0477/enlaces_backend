import { ServicioRepository } from "../../domain/ServicioRepository";
import { ServicioGetModifiedDto } from "../../domain/DTOs/ServicioGetModifiedDto";

export class GetAllModifiedServicioByServicioIdUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(servicioId: string): Promise<ServicioGetModifiedDto[] | null> {
        return await this.servicioRepository.getAllModifiedServicioByServicioId(servicioId);
    }
}