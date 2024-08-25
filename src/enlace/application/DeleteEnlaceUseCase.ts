import { EnlaceRepository } from "../domain/EnlaceRepository";

export class DeleteEnlaceUseCase{
    constructor(private repository: EnlaceRepository) {}

    async run(enlaceId: string, userId: string, deletedAt: Date): Promise<boolean> {
        return await this.repository.deleteEnlace(enlaceId, userId, deletedAt);
    }
}