import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceGetDeletedDto } from "../domain/DTOs/EnlaceGetDeletedDto";

export class GetDeletedEnlaceByIdUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(enlaceId: string): Promise<EnlaceGetDeletedDto|null> {
        return await this.enlaceRepository.getDeletedEnlaceById(enlaceId);
    }
}