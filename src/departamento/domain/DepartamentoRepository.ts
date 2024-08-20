import { Departamento } from "../../../departamento/domain/Departamento";

export interface DepartamentoRepository {
    getDepartamentos(): Promise<Departamento[] | null>;
    getDepartamentosByDireccionId(direccionId: number): Promise<Departamento[] | null>;
}