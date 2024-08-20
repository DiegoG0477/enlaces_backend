import { Dependencia } from "../domain/Dependencia";
import { DependenciaRepository } from "../domain/DependenciaRepository";

export class GetDependenciasUseCase {
    constructor(private dependenciaRepository: DependenciaRepository) {}

    async run(): Promise<Dependencia[] | null> {
        return await this.dependenciaRepository.getDependencias();
    }
}