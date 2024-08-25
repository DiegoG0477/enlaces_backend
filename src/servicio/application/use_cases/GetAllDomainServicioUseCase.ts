import { Servicio } from "../../domain/entities/Servicio";
import { ServicioRepository } from "../../domain/ServicioRepository";

export class GetAllDomainServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(): Promise<Servicio[] | null> {
        try {
            return await this.servicioRepository.getAllDomainServicio();
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}