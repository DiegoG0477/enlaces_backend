import { Departamento } from "../domain/Departamento";
import { DepartamentoRepository } from "../domain/DepartamentoRepository";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlDepartamentoRepository'});

export class MysqlDepartamentoRepository implements DepartamentoRepository {
    async getDepartamentos(): Promise<Departamento[] | null> {
        try {
            const queryStr: string = 'CALL getDepartamentos()';
            const [result]: any = await query(queryStr, []);

            if(result[0].length === 0){
                return null;
            }

            const departamentos: Departamento[] = result[0].map((departamento: any) => new Departamento(
                departamento.idDepartamento,
                departamento.nombreDepartamento,
                departamento.id_direccion
            ));

            return departamentos;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDepartamentosByDireccionId(direccionId: number): Promise<Departamento[] | null> {
        try {
            const queryStr: string = 'CALL getDepartamentosByDireccionId(?)';
            const values: any[] = [direccionId];
            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const departamentos: Departamento[] = result[0].map((departamento: any) => new Departamento(
                departamento.idDepartamento,
                departamento.nombreDepartamento,
                departamento.id_direccion
            ));

            return departamentos;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }
}