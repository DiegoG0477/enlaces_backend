import { Direccion } from "../../../direccion/domain/Direccion";

export interface DireccionRepository {
    getDirecciones(): Promise<Direccion[] | null>;
    getDireccionesByDependencia(dependenciaId: number): Promise<Direccion[] | null>;
}