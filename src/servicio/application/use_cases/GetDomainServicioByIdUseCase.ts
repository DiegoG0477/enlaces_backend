import { Servicio } from "../../domain/Servicio";
import { ServicioRepository } from "../../domain/ServicioRepository";

export class GetDomainServicioByIdUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(servicioId: string): Promise<Servicio | null> {
        try {
            return await this.servicioRepository.getDomainServicioById(servicioId);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}