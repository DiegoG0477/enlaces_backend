import { Cargo } from "./Cargo";

export interface CargoRepository {
    getCargos(): Promise<Cargo[] | null>;
    getCargoById(cargoId: string): Promise<Cargo | null>;
}