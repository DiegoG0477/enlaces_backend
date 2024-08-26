import { EnlaceRepository } from "../domain/EnlaceRepository";
import { Enlace } from "../domain/Enlace";

export class GetDomainDeletedEnlaceByIdUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(enlaceId: string): Promise<Enlace|null> {
        return await this.enlaceRepository.getDomainDeletedEnlaceById(enlaceId);
    }
}