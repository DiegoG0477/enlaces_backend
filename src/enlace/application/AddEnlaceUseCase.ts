import { Enlace } from "../domain/Enlace";
import { EnlaceRepository } from "../domain/EnlaceRepository";

export class AddEnlaceUseCase {
    constructor(private repository: EnlaceRepository) {}

    async run(Enlace: Enlace): Promise<Enlace|null> {
        return await this.repository.addEnlace(Enlace);
    }
}