import { Persona } from "./entities/Persona";

export interface PersonaRepository {
    getPersonas(): Promise<Persona[] | null>;
    getPersonaById(id: string): Promise<Persona | null>;
    getPersonasByEstatus(estatus: number): Promise<Persona[] | null>;
    updatePersona(persona: Persona): Promise<Persona | null>;
    deletePersona(id: string): Promise<boolean>;
    updateDeletedPersona(id: string): Promise<boolean>;
}