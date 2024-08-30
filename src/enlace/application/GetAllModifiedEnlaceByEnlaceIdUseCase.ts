import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceGetModifiedDto } from "../domain/DTOs/EnlaceGetModifiedDto";

export class GetAllModifiedEnlaceByEnlaceId {
    constructor(private repository: EnlaceRepository) {}

    async run(enlaceId: string): Promise<EnlaceGetModifiedDto[] | null> {
        return await this.repository.getAllModifiedEnlaceByEnlaceId(enlaceId);
    }
}