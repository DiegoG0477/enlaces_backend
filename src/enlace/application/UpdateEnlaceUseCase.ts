import { EnlaceRepository } from "../domain/EnlaceRepository";
import { Enlace } from "../domain/entities/Enlace";

export class UpdateEnlaceUseCase {
    constructor(private repository: EnlaceRepository) {}

    async run(enlaceId: string, updateData: any): Promise<Enlace | null> {
        return await this.repository.updateEnlace(enlaceId, updateData);
    }
}