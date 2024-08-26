import { EnlaceRepository } from "../domain/EnlaceRepository";
import { Enlace } from "../domain/Enlace";
import { EnlaceDto } from "../domain/DTOs/EnlaceDto";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";
import { EnlaceCompletoDto } from "../domain/DTOs/EnlaceCompletoDto";
import { EnlaceCreateDto } from "../domain/DTOs/EnlaceCreateDto";
import { EnlaceGetDeletedDto } from "../domain/DTOs/EnlaceGetDeletedDto";
import { EnlaceGetModifiedDto } from "../domain/DTOs/EnlaceGetModifiedDto";

const signale = new Signale({scope: 'MysqlEnlaceRepository'});

export class MysqlEnlaceRepository implements EnlaceRepository {
    async addEnlace(enlace: EnlaceCreateDto): Promise<Enlace | null> {
        try{
            const queryStr: string = 'CALL addEnlace(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const values: any[] = [
                enlace.createdAt,
                enlace.nombre, 
                enlace.apellidoP, 
                enlace.apellidoM, 
                enlace.correo, 
                enlace.telefono, 
                enlace.estatus, 
                enlace.adscripcionId, 
                enlace.cargoId, 
                enlace.createdBy, 
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
                enlace.createdBy,
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
                enlaceSql.createdBy,
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
                enlace.createdBy,
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
            const queryStr: string = "CALL updateEnlace(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            const values: any = [
                enlaceId,
                updateData.updatedAt,
                updateData.updatedBy,
                updateData.nombre ?? null,
                updateData.apellidoPaterno ?? null,
                updateData.apellidoMaterno ?? null,
                updateData.correo ?? null,
                updateData.telefono ?? null,
                updateData.estatus ?? null, //de momento no se actualiza, mas que en el delete
                updateData.adscripcion ?? null,
                updateData.cargo ?? null,
                updateData.createdBy ?? null, //de momento no se actualiza
                updateData.tipoPersona_id ?? null, //de momento no se actualiza
                updateData.direccion ?? null,
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
                enlaceSql.createdBy,
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

    async deleteEnlace(id: string, userId:string, deletedAt: Date): Promise<boolean> {
        try {
            const queryStr: string = 'CALL deleteEnlace(?, ?, ?)';
            const values: any[] = [id, userId, deletedAt];

            const [result]: any = await query(queryStr, values);

            if(result.affectedRows === 0){
                return false;
            }

            return true;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllDeletedEnlace(): Promise<EnlaceGetDeletedDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllDeletedEnlace()';
            const [result]: any = await query(queryStr, []);

            if(result[0].length === 0){
                return null;
            }

            const enlaces: EnlaceGetDeletedDto[] = result[0].map((enlace: any) => new EnlaceGetDeletedDto(
                enlace.deletedAt,
                enlace.deletedBy,
                enlace.createdBy,
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

    async getAllModifiedEnlace(): Promise<EnlaceGetModifiedDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllModifiedEnlace()';
            const [result]: any = await query(queryStr, []);

            if(result[0].length === 0){
                return null;
            }

            const enlaces: EnlaceGetModifiedDto[] = result[0].map((enlace: any) => new EnlaceGetModifiedDto(
                enlace.updatedAt,
                enlace.updatedBy,
                enlace.createdBy,
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

    async getDeletedEnlaceById(enlaceId: string): Promise<EnlaceGetDeletedDto | null> {
        try {
            const queryStr: string = 'CALL getDeletedEnlaceById(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const enlace = result[0][0];

            const enlaceDeleted: EnlaceGetDeletedDto = new EnlaceGetDeletedDto(
                enlace.deletedAt,
                enlace.deletedBy,
                enlace.createdBy,
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
            );

            return enlaceDeleted;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getModifiedEnlaceById(enlaceId: string): Promise<EnlaceGetModifiedDto | null> {
        try {
            const queryStr: string = 'CALL getModifiedEnlaceById(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const enlace = result[0][0];

            const enlaceModified: EnlaceGetModifiedDto = new EnlaceGetModifiedDto(
                enlace.updatedAt,
                enlace.updatedBy,
                enlace.createdBy,
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
            );

            return enlaceModified;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDomainDeletedEnlaceById(enlaceId: string): Promise<Enlace | null> {
        try {
            const queryStr: string = 'CALL getDomainDeletedEnlaceById(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const enlace = result[0][0];

            const deletedEnlace: Enlace = new Enlace(
                enlace.nombre,
                enlace.apellidoP,
                enlace.apellidoM,
                enlace.correo,
                enlace.telefono,
                enlace.estatus,
                enlace.adscripcion_id,
                enlace.cargo_id,
                enlace.createdBy,
                enlace.tipoPersona_id,
                enlace.direccion_id,
                enlace.idPersona
            );

            return deletedEnlace;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDomainModifiedEnlaceById(enlaceId: string): Promise<Enlace | null> {
        try {
            const queryStr: string = 'CALL getDomainModifiedEnlaceById(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const enlace = result[0][0];

            const modifiedEnlace: Enlace = new Enlace(
                enlace.nombre,
                enlace.apellidoP,
                enlace.apellidoM,
                enlace.correo,
                enlace.telefono,
                enlace.estatus,
                enlace.adscripcion_id,
                enlace.cargo_id,
                enlace.createdBy,
                enlace.tipoPersona_id,
                enlace.direccion_id,
                enlace.idPersona
            );

            return modifiedEnlace;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async restoreEnlace(enlaceId: string): Promise<boolean> {
        try {
            const queryStr: string = 'CALL restoreEnlace(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async restoreModifiedEnlace(modifiedId: string): Promise<boolean> {
        try {
            const queryStr: string = 'CALL restoreModifiedEnlace(?)';
            const values: any[] = [modifiedId];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;
            
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }
}