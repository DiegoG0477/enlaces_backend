import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceGetModifiedDto } from "../domain/DTOs/EnlaceGetModifiedDto";

export class GetModifiedEnlaceByIdUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(modifiedId: string): Promise<EnlaceGetModifiedDto|null> {
        return await this.enlaceRepository.getModifiedEnlaceById(modifiedId);
    }
}