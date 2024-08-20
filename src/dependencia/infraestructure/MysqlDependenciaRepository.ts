import { Dependencia } from "../domain/Dependencia";
import { DependenciaRepository } from "../domain/DependenciaRepository";
import { query } from "../../shared/infraestructure/adapters/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlDependenciaRepository'});

export class MysqlDependenciaRepository implements DependenciaRepository {
    async getDependencias(): Promise<Dependencia[] | null> {
        try {
            const queryStr: string = 'CALL getDependencias()';
            const [result]: any = await query(queryStr, []);

            if(result.length === 0){
                return null;
            }

            const dependencias: Dependencia[] = result.map((dependencia: any) => new Dependencia(
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
            return error;
        }
    }
}