import { EnlaceRepository } from "../domain/EnlaceRepository";

export class RestoreModifiedEnlaceUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(enlaceId: string): Promise<boolean> {
        return await this.enlaceRepository.restoreModifiedEnlace(enlaceId);
    }
}