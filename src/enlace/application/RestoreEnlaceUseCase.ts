import { EnlaceRepository } from "../domain/EnlaceRepository";

export class RestoreEnlaceUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(enlaceId: string): Promise<boolean> {
        return await this.enlaceRepository.restoreEnlace(enlaceId);
    }
}