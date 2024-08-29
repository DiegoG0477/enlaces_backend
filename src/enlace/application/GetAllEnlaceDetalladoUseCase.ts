import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceDto } from "../domain/DTOs/EnlaceDto";

export class GetAllEnlaceDetalladoUseCase {
    constructor(
        readonly enlaceRepository: EnlaceRepository,
    ) {}

    async run(estatus: number): Promise<EnlaceDto[] | null> {
        return await this.enlaceRepository.getAllEnlaceDetallado(estatus);
    }
}