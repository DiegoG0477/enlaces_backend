import { EnlaceRepository } from "../domain/EnlaceRepository";
import { Enlace } from "../domain/entities/Enlace";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlEnlaceRepository'});

export class MysqlEnlaceRepository implements EnlaceRepository {
    async addEnlace(enlace: Enlace): Promise<Enlace | null> {
        try{
            const queryStr: string = 'CALL addEnlace(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const values: any[] = [
                enlace.nombre, 
                enlace.apellidoP, 
                enlace.apellidoM, 
                enlace.correo, 
                enlace.telefono, 
                enlace.estatus, 
                enlace.adscripcionId, 
                enlace.cargoId, 
                enlace.userId, 
                enlace.tipoPersonaId, 
                enlace.direccionId
            ];

            const [result]: any = await query(queryStr, values);

            if(result.affectedRows === 0){
                return null;
            }

            const newEnlace: Enlace = new Enlace(
                result[0].nombre,
                result[0].apellidoP,
                result[0].apellidoM,
                result[0].correo,
                result[0].telefono,
                result[0].estatus,
                result[0].adscripcion_id,
                result[0].cargo_id,
                result[0].auth_user_id,
                result[0].tipoPersona_id,
                result[0].direccion_id,
                result[0].idPersona
            );

            return newEnlace;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getEnlaces(): Promise<Enlace[] | null> {
        try {
            const queryStr: string = 'CALL getEnlaces()';
            const [result]: any = await query(queryStr, []);

            if(result.length === 0){
                return null;
            }

            const enlaces: Enlace[] = result.map((enlace: any) => new Enlace(
                enlace.nombre,
                enlace.apellidoP,
                enlace.apellidoM,
                enlace.correo,
                enlace.telefono,
                enlace.estatus,
                enlace.adscripcion_id,
                enlace.cargo_id,
                enlace.auth_user_id,
                enlace.tipoPersona_id,
                enlace.direccion_id,
                enlace.idPersona
            ));

            return enlaces;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getEnlaceById(id: string): Promise<Enlace | null> {
        try {
            const queryStr: string = 'CALL getEnlaceById(?)';
            const values: any[] = [id];

            const [result]: any = await query(queryStr, values);

            if(result.length === 0){
                return null;
            }

            const enlace: Enlace = new Enlace(
                result[0].nombre,
                result[0].apellidoP,
                result[0].apellidoM,
                result[0].correo,
                result[0].telefono,
                result[0].estatus,
                result[0].adscripcion_id,
                result[0].cargo_id,
                result[0].auth_user_id,
                result[0].tipoPersona_id,
                result[0].direccion_id,
                result[0].idPersona
            );

            return enlace;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getEnlacesByEstatus(estatus: number): Promise<Enlace[] | null> {
        try {
            const queryStr: string = 'CALL getEnlacesByEstatus(?)';
            const values: any[] = [estatus];

            const [result]: any = await query(queryStr, values);

            if(result.length === 0){
                return null;
            }

            const enlaces: Enlace[] = result.map((enlace: any) => new Enlace(
                enlace.nombre,
                enlace.apellidoP,
                enlace.apellidoM,
                enlace.correo,
                enlace.telefono,
                enlace.estatus,
                enlace.adscripcion_id,
                enlace.cargo_id,
                enlace.auth_user_id,
                enlace.tipoPersona_id,
                enlace.direccion_id,
                enlace.idPersona
            ));

            return enlaces;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async updateEnlace(enlaceId: string, updateData: any): Promise<Enlace | null> {
        try {
            const queryStr: string = "CALL updateEnlace(?,?,?,?,?,?,?,?,?,?,?,?)";

            const values: any = [
                enlaceId,
                updateData.nombre ?? null,
                updateData.apellidoP ?? null,
                updateData.apellidoM ?? null,
                updateData.correo ?? null,
                updateData.telefono ?? null,
                updateData.estatus ?? null,
                updateData.adscripcion_id ?? null,
                updateData.cargo_id ?? null,
                updateData.auth_user_id ?? null,
                updateData.tipoPersona_id ?? null,
                updateData.direccion_id ?? null,
            ];

            const [result]: any = await query(queryStr, values);

            if(result.affectedRows === 0){
                return null;
            }

            const updatedEnlace: Enlace = new Enlace(
                result[0].nombre,
                result[0].apellidoP,
                result[0].apellidoM,
                result[0].correo,
                result[0].telefono,
                result[0].estatus,
                result[0].adscripcion_id,
                result[0].cargo_id,
                result[0].auth_user_id,
                result[0].tipoPersona_id,
                result[0].direccion_id,
                result[0].idPersona
            );

            return updatedEnlace;

        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async deleteEnlace(id: string): Promise<boolean> {
        try {
            const queryStr: string = 'CALL deleteEnlace(?)';
            const values: any[] = [id];

            const [result]: any = await query(queryStr, values);

            if(result.affectedRows === 0){
                return false;
            }

            return true;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }
}