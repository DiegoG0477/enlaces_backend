import { EnlaceRepository } from "../domain/EnlaceRepository";

export class RestoreModifiedEnlaceUseCase {
    constructor(private enlaceRepository: EnlaceRepository) {}

    async run(modifiedId: string): Promise<boolean> {
        const modifiedEnlace = await this.enlaceRepository.getDomainModifiedEnlaceById(modifiedId);

        if (!modifiedEnlace) {
            throw new Error('Enlace not found');
        }

        return await this.enlaceRepository.restoreModifiedEnlace(modifiedId, modifiedEnlace);
    }
}