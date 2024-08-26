import { EnlaceRepository } from "../domain/EnlaceRepository";
import { EnlaceGetDeletedDto } from "../domain/DTOs/EnlaceGetDeletedDto";

export class GetAllDeletedEnlaceUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(): Promise<EnlaceGetDeletedDto[]|null> {
        return await this.enlaceRepository.getAllDeletedEnlace();
    }
}