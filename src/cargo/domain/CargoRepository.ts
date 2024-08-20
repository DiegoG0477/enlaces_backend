import { Cargo } from "./Cargo";

export interface CargoRepository {
    getCargos(): Promise<Cargo[] | null>;
}