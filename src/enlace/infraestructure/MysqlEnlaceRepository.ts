import { EnlaceRepository } from "../domain/EnlaceRepository";
import { Enlace } from "../domain/Enlace";
import { EnlaceDto } from "../domain/EnlaceDto";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";
import { EnlaceCompletoDto } from "../domain/EnlaceCompletoDto";

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

            enlace.setId(result.insertId);

            return enlace;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getEnlaces(): Promise<Enlace[] | null> {
        try {
            const queryStr: string = 'CALL getEnlaces()';
            const [result]: any = await query(queryStr, []);

            if(result[0].length === 0){
                return null;
            }

            const enlaces: Enlace[] = result[0].map((enlace: any) => new Enlace(
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
            throw error;
        }
    }

    async getEnlaceById(id: string): Promise<Enlace | null> {
        try {
            const queryStr: string = 'CALL getEnlaceById(?)';
            const values: any[] = [id];

            const [result]: any = await query(queryStr, values);

            console.log(result);

            if(result[0].length === 0){
                return null;
            }

            const enlaceSql = result[0][0];

            const enlace: Enlace = new Enlace(
                enlaceSql.nombre,
                enlaceSql.apellidoP,
                enlaceSql.apellidoM,
                enlaceSql.correo,
                enlaceSql.telefono,
                enlaceSql.estatus,
                enlaceSql.adscripcion_id,
                enlaceSql.cargo_id,
                enlaceSql.auth_user_id,
                enlaceSql.tipoPersona_id,
                enlaceSql.direccion_id,
                enlaceSql.idPersona
            );

            return enlace;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getEnlaceCompletoById(enlaceId: string): Promise<EnlaceCompletoDto | null> {
        try {
            const queryStr: string = 'CALL getEnlaceCompletoById(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const enlaceSql = result[0][0];

            console.log(enlaceSql);

            const enlaceCompleto: EnlaceCompletoDto = new EnlaceCompletoDto(
                enlaceSql.dependenciaId,
                enlaceSql.cargoId,
                enlaceSql.direccionId,
                enlaceSql.adscripcionId,
                enlaceSql.tipoPersonaId,
                enlaceSql.userId,
                enlaceSql.id,
                enlaceSql.nombre,
                enlaceSql.apellidoP,
                enlaceSql.apellidoM,
                enlaceSql.correo,
                enlaceSql.telefono,
                enlaceSql.estatus,
                enlaceSql.dependencia,
                enlaceSql.cargo,
                enlaceSql.direccion,
                enlaceSql.adscripcion
            );

            return enlaceCompleto;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getEnlacesByEstatus(estatus: number): Promise<Enlace[] | null> {
        try {
            const queryStr: string = 'CALL getEnlacesByEstatus(?)';
            const values: any[] = [estatus];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const enlaces: Enlace[] = result[0].map((enlace: any) => new Enlace(
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
            throw error;
        }
    }

    async getAllEnlaceDetallado(): Promise<any[] | null> {
        try {
            const queryStr: string = 'CALL getAllEnlaceDetallado()';
            const [result]: any = await query(queryStr, []);

            if(result[0].length === 0){
                return null;
            }

            const enlaces: EnlaceDto[] = result[0].map((enlace: any) => new EnlaceDto(
                enlace.id,
                enlace.nombre,
                enlace.apellidoP,
                enlace.apellidoM,
                enlace.correo,
                enlace.telefono,
                enlace.estatus,
                enlace.dependencia,
                enlace.cargo,
                enlace.direccion,
                enlace.adscripcion
            ));

            return enlaces;
        } catch (error: any) {
            signale.error(error);
            throw error;
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

            if(result[0].length === 0){
                return null;
            }

            const enlaceSql = result[0][0];

            const updatedEnlace: Enlace = new Enlace(
                enlaceSql.nombre,
                enlaceSql.apellidoP,
                enlaceSql.apellidoM,
                enlaceSql.correo,
                enlaceSql.telefono,
                enlaceSql.estatus,
                enlaceSql.adscripcion_id,
                enlaceSql.cargo_id,
                enlaceSql.auth_user_id,
                enlaceSql.tipoPersona_id,
                enlaceSql.direccion_id,
                enlaceSql.idPersona
            );

            return updatedEnlace;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async deleteEnlace(id: string): Promise<boolean> {
        try {
            const queryStr: string = 'CALL deleteEnlace(?)';
            const values: any[] = [id];

            const [result]: any = await query(queryStr, values);

            console.log(result);

            if(result.affectedRows === 0){
                return false;
            }

            return true;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }
}