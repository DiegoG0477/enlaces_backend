import { ContratoRepository } from "../domain/repositories/ContratoRepository";

export class DeleteContratoUseCase {
    constructor(private repository: ContratoRepository) {}

    async run(contratoId: string, userId: string, deleteDate: Date): Promise<boolean> {
        return await this.repository.deleteContrato(contratoId, userId, deleteDate);
    }
}