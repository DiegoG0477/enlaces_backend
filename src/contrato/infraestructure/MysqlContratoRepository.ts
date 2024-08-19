import { ContratoRepository } from "../domain/ContratoRepository";
import { Contrato } from "../domain/Contrato";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlContratoRepository'});

export class MysqlContratoRepository implements ContratoRepository {
    async addContrato(contrato: Contrato): Promise<Contrato | null> {
        try{
            const queryStr: string = 'CALL addContrato(?, ?, ?, ?. ?, ?, ?, ?)';
            const values: any[] = [contrato.personaId, contrato.estatus, contrato.descripcion, contrato.fechaContrato, contrato.userId, contrato.versionContratoId, contrato.ubicacion, contrato.tipoContratoId];

            const [result]: any = await query(queryStr, values);

            const newContrato: Contrato = new Contrato(
                result[0].persona_id, 
                result[0].estatus, 
                result[0].descripcion, 
                result[0].fechaContrato, 
                result[0].id_user, 
                result[0].id_versionContrato, 
                result[0].ubicacion, 
                result[0].id_tipoContrato, 
                result[0].idContrato
            );

            return newContrato;

        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getContratoByPersona(personaId: string): Promise<Contrato | null> {
        try {
            const queryStr: string = 'CALL getContratoByPersonaId(?)';
            const values: any[] = [personaId];

            const [result]: any = await query(queryStr, values);

            const contrato: Contrato = new Contrato(
                result[0].persona_id, 
                result[0].estatus, 
                result[0].descripcion, 
                result[0].fechaContrato, 
                result[0].id_user, 
                result[0].id_versionContrato, 
                result[0].ubicacion, 
                result[0].id_tipoContrato, 
                result[0].idContrato
            );

            return contrato;

        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getContratos(): Promise<Contrato[] | null> {
        try {
            const queryStr: string = 'CALL getContratos()';

            const [result]: any = await query(queryStr, []);

            const contratos: Contrato[] = result.map((contrato: any) => new Contrato(
                contrato.persona_id, 
                contrato.estatus, 
                contrato.descripcion, 
                contrato.fechaContrato, 
                contrato.id_user, 
                contrato.id_versionContrato, 
                contrato.ubicacion, 
                contrato.id_tipoContrato, 
                contrato.idContrato
            ));

            return contratos;

        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }
}