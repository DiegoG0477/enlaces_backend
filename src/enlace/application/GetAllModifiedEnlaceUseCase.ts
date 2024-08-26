import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceGetModifiedDto } from "../domain/DTOs/EnlaceGetModifiedDto";

export class GetAllModifiedEnlaceUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(): Promise<EnlaceGetModifiedDto[]|null> {
        return await this.enlaceRepository.getAllModifiedEnlace();
    }
}