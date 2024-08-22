import { Dependencia } from "../domain/Dependencia";
import { DependenciaRepository } from "../domain/DependenciaRepository";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlDependenciaRepository'});

export class MysqlDependenciaRepository implements DependenciaRepository {
    async getDependencias(): Promise<Dependencia[] | null> {
        try {
            const queryStr: string = 'CALL getDependencias()';
            const [result]: any = await query(queryStr, []);

            if(result[0].length === 0){
                return null;
            }

            const dependencias: Dependencia[] = result[0].map((dependencia: any) => new Dependencia(
                dependencia.idDependencia,
                dependencia.nombreDependencia,
                dependencia.nombreCorto,
                dependencia.ubicacionDependencia,
                dependencia.codigoPostal,
                dependencia.colonia,
                dependencia.conmutador,
                dependencia.correo,
                dependencia.domicilio,
                dependencia.fax,
                dependencia.idDependenciatxt,
                dependencia.idMunicipio,
                dependencia.idSector,
                dependencia.telefonoDirecto,
                dependencia.tipoOrgano,
                dependencia.web
            ));

            return dependencias;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDependenciaByDireccionId(direccionId: string): Promise<Dependencia|null>{
        try{
            const queryStr: string = "CALL getDependenciaByDireccionId(?)";
            const values = [direccionId]

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const dependenciaSql = result[0][0];

            const dependencia: Dependencia = new Dependencia(
                dependenciaSql.idDependencia,
                dependenciaSql.nombreDependencia,
                dependenciaSql.nombreCorto,
                dependenciaSql.ubicacionDependencia,
                dependenciaSql.codigoPostal,
                dependenciaSql.colonia,
                dependenciaSql.conmutador,
                dependenciaSql.correo,
                dependenciaSql.domicilio,
                dependenciaSql.fax,
                dependenciaSql.idDependenciatxt,
                dependenciaSql.idMunicipio,
                dependenciaSql.idSector,
                dependenciaSql.telefonoDirecto,
                dependenciaSql.tipoOrgano,
                dependenciaSql.web
            );

            return dependencia;

        }catch(error: any){
            signale.error(error);
            throw error;
        }
    }
}