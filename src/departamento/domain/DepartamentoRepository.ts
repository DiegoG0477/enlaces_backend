import { Departamento } from "./Departamento";

export interface DepartamentoRepository {
    getDepartamentos(): Promise<Departamento[] | null>;
    getDepartamentosByDireccionId(direccionId: number): Promise<Departamento[] | null>;
}