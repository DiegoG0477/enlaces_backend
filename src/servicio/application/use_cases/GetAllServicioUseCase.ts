import { ServicioGetDto } from "../../domain/DTOs/ServicioGetDto";
import { ServicioRepository } from "../../domain/ServicioRepository";

export class GetAllServicioUseCase {
    constructor(private servicioRepository: ServicioRepository) {}

    async run(estatus: number): Promise<ServicioGetDto[] | null> {
        try {
            return await this.servicioRepository.getAllServicio(estatus);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}