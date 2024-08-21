import { DireccionRepository } from "../domain/DireccionRepository";
import { Direccion } from "../domain/Direccion";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlDireccionRepository'});

export class MysqlDireccionRepository implements DireccionRepository {
    async getDirecciones(): Promise<Direccion[] | null> {
        try {
            const queryStr: string = 'CALL getDirecciones()';
            const [result]: any = await query(queryStr, []);

            if(result.length === 0){
                return null;
            }

            const direcciones: Direccion[] = result.map((direccion: any) => new Direccion(
                direccion.idDireccion,
                direccion.nombre,
                direccion.dependencia_id,
                direccion.idPadre_id
            ));

            return direcciones;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getDireccionesByDependencia(dependenciaId: number): Promise<Direccion[] | null> {
        try {
            const queryStr: string = 'CALL getDireccionesByDependenciaId(?)';
            const values: any[] = [dependenciaId];
            const [result]: any = await query(queryStr, values);

            if(result.length === 0){
                return null;
            }

            const direcciones: Direccion[] = result.map((direccion: any) => new Direccion(
                direccion.idDireccion,
                direccion.nombre,
                direccion.dependencia_id,
                direccion.idPadre_id
            ));

            return direcciones;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }
}