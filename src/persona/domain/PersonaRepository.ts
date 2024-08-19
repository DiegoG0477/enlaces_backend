import { Persona } from "./entities/Persona";

export interface PersonaRepository {
    getPersonas(): Promise<Persona[] | null>;
    getPersonasByEstatus(estatus: number): Promise<Persona[] | null>;
}