import { ServicioRepository } from "../domain/ServicioRepository";
import { Servicio } from "../domain/entities/Servicio";
import { ServicioCreateDto } from "../domain/DTOs/ServicioCreateDto";
import { ServicioGetDto } from "../domain/DTOs/ServicioGetDto";
import { ServicioUpdateDto } from "../domain/DTOs/ServicioUpdateDto";
import { FolioData } from "../domain/entities/FolioData";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";
import { IctiTipos } from "../../shared/domain/interfaces/IctiTipos";
import { TipoServicio } from "../domain/entities/TipoServicio";
import { TipoActividad } from "../domain/entities/TipoActividad";
import { EstadoServicio } from "../domain/entities/EstadoServicio";
import { ServicioTableDto } from "../domain/DTOs/ServicioTableDto";
import { ServicioGetModifiedDto } from "../domain/DTOs/ServicioGetModifiedDto";

const logger: Signale = new Signale({ "scope": "MysqlServicioRepository" });

export class MysqlServicioRepository implements ServicioRepository {
    async addServicio(servicio: ServicioCreateDto): Promise<Servicio | null> {
        try {
            const queryStr: string = 'CALL addServicio(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

            const values: any[] = [
                servicio.createdAt,
                servicio.getFolio(),
                servicio.nombreSolicitante,
                servicio.nombreReceptor,
                servicio.fechaInicio,
                servicio.fechaTermino,
                servicio.horaInicio,
                servicio.horaTermino,
                servicio.descripcionFalla,
                servicio.descripcionActividad,
                servicio.nivel,
                servicio.fotos,
                servicio.observaciones,
                servicio.tipoEnvio,
                servicio.estatus,
                servicio.tipoServicioId,
                servicio.contratoId,
                servicio.tipoActividadId,
                servicio.estadoServicioId,
                servicio.direccionId ?? null,
                servicio.cargoId ?? null,
                servicio.createdBy
            ];

            const [result]: any = await query(queryStr, values);

            if (result.affectedRows === 0) {
                return null;
            }

            servicio.setId(result.insertId);

            return servicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getAllDomainServicio(): Promise<Servicio[] | null> {
        try {
            const queryStr: string = 'CALL getAllDomainServicio()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const servicios: Servicio[] = result[0].map((servicio: any) => new Servicio(
                servicio.folio,
                servicio.nombre_solicitante,
                servicio.nombre_receptor,
                servicio.fecha_inicio,
                servicio.fecha_termino,
                servicio.hora_inicio,
                servicio.hora_termino,
                servicio.descripcion_falla,
                servicio.descripcion_actividad,
                servicio.nivel,
                servicio.fotos,
                servicio.observaciones,
                servicio.tipo_envio,
                servicio.estatus,
                servicio.id_tipo_servicio,
                servicio.id_contrato,
                servicio.id_tipo_actividad,
                servicio.id_estado_servicio,
                servicio.id_direccion,
                servicio.id_cargo,
                servicio.createdBy,
                servicio.id
            ));

            return servicios;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getAllServicio(estatus: number): Promise<ServicioGetDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllServicioDetallado(?)';
            const values: any[] = [estatus !== 0 ? estatus : null];
            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const servicios: ServicioGetDto[] = result[0].map((servicio: any) => new ServicioGetDto(
                servicio.id,
                servicio.folio,
                servicio.nombreSolicitante,
                servicio.nombreReceptor,
                servicio.fechaInicio,
                servicio.fechaTermino,
                servicio.horaInicio,
                servicio.horaTermino,
                servicio.descripcionFalla,
                servicio.descripcionActividad,
                servicio.nivel,
                // fotos es el boolean de si el servicio incluye fotos o no
                // se recibe 0 o 1
                servicio.fotos,
                servicio.observaciones,
                servicio.tipoEnvio,
                // estatus es el id del estatus del servicio
                servicio.estatus,
                servicio.tipoServicio,
                servicio.codigoServicio,
                servicio.contratoId,
                servicio.tipoActividad,
                servicio.estadoServicio,
                servicio.direccion,
                servicio.dependencia,
                servicio.cargo,
                servicio.createdBy
            ));

            return servicios;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getDomainServicioById(servicioId: string): Promise<Servicio | null> {
        try {
            const queryStr: string = 'CALL getDomainServicioById(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const servicioSql = result[0][0];

            const servicio: Servicio = new Servicio(
                servicioSql.folio,
                servicioSql.nombre_solicitante,
                servicioSql.nombre_receptor,
                servicioSql.fecha_inicio,
                servicioSql.fecha_termino,
                servicioSql.hora_inicio,
                servicioSql.hora_termino,
                servicioSql.descripcion_falla,
                servicioSql.descripcion_actividad,
                servicioSql.nivel,
                servicioSql.fotos,
                servicioSql.observaciones,
                servicioSql.tipo_envio,
                servicioSql.estatus,
                servicioSql.id_tipo_servicio,
                servicioSql.id_contrato,
                servicioSql.id_tipo_actividad,
                servicioSql.id_estado_servicio,
                servicioSql.id_direccion,
                servicioSql.id_cargo,
                servicioSql.createdBy,
                servicioSql.id
            );

            return servicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getServicioById(servicioId: string): Promise<ServicioGetDto | null> {
        try {
            const queryStr: string = 'CALL getServicioDetalladoById(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const servicioSql = result[0][0];

            const servicio: ServicioGetDto = new ServicioGetDto(
                servicioSql.id,
                servicioSql.folio,
                servicioSql.nombreSolicitante,
                servicioSql.nombreReceptor,
                servicioSql.fechaInicio,
                servicioSql.fechaTermino,
                servicioSql.horaInicio,
                servicioSql.horaTermino,
                servicioSql.descripcionFalla,
                servicioSql.descripcionActividad,
                servicioSql.nivel,
                servicioSql.fotos,
                servicioSql.observaciones,
                servicioSql.tipoEnvio,
                servicioSql.estatus,
                servicioSql.tipoServicio,
                servicioSql.codigoServicio,
                servicioSql.contratoId,
                servicioSql.tipoActividad,
                servicioSql.estadoServicio,
                servicioSql.direccion,
                servicioSql.dependencia,
                servicioSql.cargo,
                servicioSql.createdBy
            );

            return servicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async updateServicio(servicioId: string, updateData: any): Promise<Servicio | null> {
        try{
            const queryStr: string = 'CALL updateServicio(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

            const values: any[] = [
                servicioId,
                updateData.nombreSolicitante ?? null,
                updateData.nombreReceptor ?? null,
                updateData.fechaInicio ?? null,
                updateData.fechaTermino ?? null,
                updateData.horaInicio ?? null,
                updateData.horaTermino ?? null,
                updateData.descripcionFalla ?? null,
                updateData.descripcionActividad ?? null,
                updateData.nivel ?? null,
                updateData.fotos ?? null,
                updateData.observaciones ?? null,
                updateData.tipoEnvio ?? null,
                updateData.estatus ?? null,
                updateData.tipoServicioId ?? null,
                updateData.tipoActividadId ?? null,
                updateData.estadoServicioId ?? null,
                updateData.direccionId ?? null,
                updateData.cargoId ?? null,
                updateData.updatedBy,
                updateData.updatedAt
            ];

            const [result]: any = await query(queryStr, values);

            if(result[1][0].affectedRows === 0 || result[0][0].affectedRows === 0){
                return null;
            }

            const servicioSql = result[0][0];

            const updatedServicio: Servicio = new ServicioUpdateDto(
                servicioSql.updatedAt,
                servicioSql.updatedBy,
                servicioSql.folio,
                servicioSql.nombre_solicitante,
                servicioSql.nombre_receptor,
                servicioSql.fecha_inicio,
                servicioSql.fecha_termino,
                servicioSql.hora_inicio,
                servicioSql.hora_termino,
                servicioSql.descripcion_falla,
                servicioSql.descripcion_actividad,
                servicioSql.nivel,
                servicioSql.fotos,
                servicioSql.observaciones,
                servicioSql.tipo_envio,
                servicioSql.estatus,
                servicioSql.id_tipo_servicio,
                servicioSql.id_contrato,
                servicioSql.id_tipo_actividad,
                servicioSql.id_estado_servicio,
                servicioSql.id_direccion,
                servicioSql.id_cargo,
                servicioSql.createdBy,
                servicioSql.id
            );

            return updatedServicio;

        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getLastFolioByTipoServicio(tipoServicioId: number): Promise<FolioData | null> {
        try {
            const queryStr: string = 'CALL getLastFolioByTipoServicio(?)';
            const values: any[] = [tipoServicioId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const folioData: FolioData = new FolioData(
                result[0][0].folio,
                result[0][0].createdAt,
                result[0][0].codigo
            );

            return folioData;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getCodigoFolioByTipoServicioId(tipoServicioId: number): Promise<string | null> {
        try {
            const queryStr: string = 'CALL getCodigoFolioByTipoServicioId(?)';
            const values: any[] = [tipoServicioId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            return result[0][0].codigo;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getAllEstadoServicio(): Promise<EstadoServicio[] | null> {
        try {
            const queryStr: string = 'CALL getAllEstadoServicio()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const estados: EstadoServicio[] = result[0].map((estado: any) => new EstadoServicio(
                estado.id,
                estado.nombre,
                estado.estatus
            ));

            return estados;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getAllTipoActividad(): Promise<IctiTipos[] | null> {
        try {
            const queryStr: string = 'CALL getAllTipoActividad()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const tiposActividad: TipoActividad[] = result[0].map((tipo: any) => new TipoActividad(
                tipo.id,
                tipo.nombre,
                tipo.estatus
            ));

            return tiposActividad;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getAllTipoServicio(): Promise<TipoServicio[] | null> {
        try {
            const queryStr: string = 'CALL getAllTipoServicio()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const tiposServicio: TipoServicio[] = result[0].map((tipo: any) => new TipoServicio(
                tipo.idServicio,
                tipo.nombre,
                tipo.estatus,
                tipo.codigo
            ));

            return tiposServicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getBackupServicioById(servicioId: string): Promise<ServicioTableDto | null> {
        try{
            const queryStr: string = 'CALL getDomainServicioById(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const servicioSql = result[0][0];

            const backupServicio: ServicioTableDto = new ServicioTableDto(
                servicioSql.updatedAt,
                servicioSql.createdAt,
                servicioSql.updatedBy,
                servicioSql.folio,
                servicioSql.nombre_solicitante,
                servicioSql.nombre_receptor,
                servicioSql.fecha_inicio,
                servicioSql.fecha_termino,
                servicioSql.hora_inicio,
                servicioSql.hora_termino,
                servicioSql.descripcion_falla,
                servicioSql.descripcion_actividad,
                servicioSql.nivel,
                servicioSql.fotos,
                servicioSql.observaciones,
                servicioSql.tipo_envio,
                servicioSql.estatus,
                servicioSql.id_tipo_servicio,
                servicioSql.id_contrato,
                servicioSql.id_tipo_actividad,
                servicioSql.id_estado_servicio,
                servicioSql.id_direccion,
                servicioSql.id_cargo,
                servicioSql.createdBy,
                servicioSql.id
            );

            return backupServicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async backupServicio(servicio: ServicioTableDto, backupDate: Date): Promise<boolean> {
        try{
            const queryStr: string = 'CALL backupServicio(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

            const values: any[] = [
                servicio.getId(),
                servicio.updatedAt,
                servicio.createdAt,
                servicio.updatedBy,
                servicio.getFolio(),
                servicio.nombreSolicitante,
                servicio.nombreReceptor,
                servicio.fechaInicio,
                servicio.fechaTermino,
                servicio.horaInicio,
                servicio.horaTermino,
                servicio.descripcionFalla,
                servicio.descripcionActividad,
                servicio.nivel,
                servicio.fotos,
                servicio.observaciones,
                servicio.tipoEnvio,
                servicio.estatus,
                servicio.tipoServicioId,
                servicio.contratoId,
                servicio.tipoActividadId,
                servicio.estadoServicioId,
                servicio.direccionId,
                servicio.cargoId,
                servicio.createdBy,
                backupDate
            ];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;
        }catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async restoreServicio(servicioId: string): Promise<boolean> {
        try{
            const queryStr: string = 'CALL restoreServicio(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;
            
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }
    
    async restoreModifiedServicio(modifiedId: string, backup: ServicioTableDto): Promise<boolean> {
        try{
            const queryStr: string = 'CALL restoreModifiedServicio(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

            const values = [
                modifiedId,
                backup.updatedAt,
                backup.createdAt,
                backup.updatedBy,
                backup.getFolio(),
                backup.nombreSolicitante,
                backup.nombreReceptor,
                backup.fechaInicio,
                backup.fechaTermino,
                backup.horaInicio,
                backup.horaTermino,
                backup.descripcionFalla,
                backup.descripcionActividad,
                backup.nivel,
                backup.fotos,
                backup.observaciones,
                backup.tipoEnvio,
                backup.estatus,
                backup.tipoServicioId,
                backup.contratoId,
                backup.tipoActividadId,
                backup.estadoServicioId,
                backup.direccionId,
                backup.cargoId,
                backup.createdBy,
                backup.getId()
            ];

            const [result]: any = await query(queryStr, values);

            return result[0][0].affectedRows > 0;

        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getAllModifiedServicioByServicioId(servicioId: string): Promise<ServicioGetModifiedDto[] | null> {
        try{
            const queryStr: string = 'CALL getAllModifiedServicioByServicioId(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const modifiedServicios: ServicioGetModifiedDto[] = result[0].map((servicio: any) => new ServicioGetModifiedDto(
                servicio.updatedAt,
                servicio.updatedBy,
                servicio.id,
                servicio.folio,
                servicio.nombreSolicitante,
                servicio.nombreReceptor,
                servicio.fechaInicio,
                servicio.fechaTermino,
                servicio.horaInicio,
                servicio.horaTermino,
                servicio.descripcionFalla,
                servicio.descripcionActividad,
                servicio.nivel,
                servicio.fotos,
                servicio.observaciones,
                servicio.tipoEnvio,
                servicio.estatus,
                servicio.tipoServicio,
                servicio.codigoServicio,
                servicio.contratoId,
                servicio.tipoActividad,
                servicio.estadoServicio,
                servicio.direccion,
                servicio.dependencia,
                servicio.cargo,
                servicio.createdBy
            ));

            return modifiedServicios;

        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getDomainModifiedServicioById(servicioId: string): Promise<ServicioTableDto | null> {
        try{
            const queryStr: string = 'CALL getDomainModifiedServicioById(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            if(result[0].length === 0){
                return null;
            }

            const servicioSql = result[0][0];

            const modifiedServicio: ServicioTableDto = new ServicioTableDto(
                servicioSql.updatedAt,
                servicioSql.createdAt,
                servicioSql.updatedBy,
                servicioSql.folio,
                servicioSql.nombre_solicitante,
                servicioSql.nombre_receptor,
                servicioSql.fecha_inicio,
                servicioSql.fecha_termino,
                servicioSql.hora_inicio,
                servicioSql.hora_termino,
                servicioSql.descripcion_falla,
                servicioSql.descripcion_actividad,
                servicioSql.nivel,
                servicioSql.fotos,
                servicioSql.observaciones,
                servicioSql.tipo_envio,
                servicioSql.estatus,
                servicioSql.id_tipo_servicio,
                servicioSql.id_contrato,
                servicioSql.id_tipo_actividad,
                servicioSql.id_estado_servicio,
                servicioSql.id_direccion,
                servicioSql.id_cargo,
                servicioSql.createdBy,
                servicioSql.id_servicio
            );

            return modifiedServicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }
}