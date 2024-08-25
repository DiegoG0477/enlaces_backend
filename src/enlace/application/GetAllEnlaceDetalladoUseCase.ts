import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceDto } from "../domain/DTOs/EnlaceDto";

export class GetAllEnlaceDetalladoUseCase {
    constructor(
        readonly enlaceRepository: EnlaceRepository,
    ) {}

    async run(): Promise<EnlaceDto[] | null> {
        return await this.enlaceRepository.getAllEnlaceDetallado();
    }
}