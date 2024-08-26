import { Servicio } from "../../domain/entities/Servicio";
import { ServicioRepository } from "../../domain/ServicioRepository";
import { IIctiService } from "../services/IIctiService";

export class AddServicioUseCase {
    constructor(
        private servicioRepository: ServicioRepository,
        private ictiService: IIctiService
    ) {}

    async run(servicio: Servicio): Promise<Servicio|null> {
        try {
            const folio = await this.ictiService.assignFolio(servicio.tipoServicioId);
            servicio.setFolio(folio);
            
            return await this.servicioRepository.addServicio(servicio);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}