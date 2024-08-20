import { Cargo } from "../domain/Cargo";
import { CargoRepository } from "../domain/CargoRepository";

export class GetCargosUseCase {
    constructor(private cargoRepository: CargoRepository) {}

    async run(): Promise<Cargo[] | null> {
        return await this.cargoRepository.getCargos();
    }
}