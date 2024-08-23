import { EnlaceCompletoDto } from "../domain/EnlaceCompletoDto";
import { EnlaceRepository } from "../domain/EnlaceRepository";

export class GetEnlaceCompletoByIdUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(enlaceId: string): Promise<EnlaceCompletoDto | null> {
        return this.enlaceRepository.getEnlaceCompletoById(enlaceId);
    }
}