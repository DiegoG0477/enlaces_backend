import { ServicioRepository } from "../domain/ServicioRepository";
import { Servicio } from "../domain/entities/Servicio";
import { ServicioCreateDto } from "../domain/DTOs/ServicioCreateDto";
import { ServicioGetDto } from "../domain/DTOs/ServicioGetDto";
import { ServicioUpdateDto } from "../domain/DTOs/ServicioUpdateDto";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

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
                servicio.descripccionActividad,
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
                servicio.descripccion_actividad,
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

    async getAllServicio(): Promise<ServicioGetDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllServicio()';
            const [result]: any = await query(queryStr, []);

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
                servicio.descripccionActividad,
                servicio.nivel,
                servicio.fotos,
                servicio.observaciones,
                servicio.tipoEnvio,
                servicio.estatus,
                servicio.tipoServicio,
                servicio.contrato,
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

            const servicio: Servicio = new Servicio(
                result[0][0].folio,
                result[0][0].nombre_solicitante,
                result[0][0].nombre_receptor,
                result[0][0].fecha_inicio,
                result[0][0].fecha_termino,
                result[0][0].hora_inicio,
                result[0][0].hora_termino,
                result[0][0].descripcion_falla,
                result[0][0].descripccion_actividad,
                result[0][0].nivel,
                result[0][0].fotos,
                result[0][0].observaciones,
                result[0][0].tipo_envio,
                result[0][0].estatus,
                result[0][0].id_tipo_servicio,
                result[0][0].id_contrato,
                result[0][0].id_tipo_actividad,
                result[0][0].id_estado_servicio,
                result[0][0].id_direccion,
                result[0][0].id_cargo,
                result[0][0].createdBy,
                result[0][0].id
            );

            return servicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async getServicioById(servicioId: string): Promise<ServicioGetDto | null> {
        try {
            const queryStr: string = 'CALL getServicioById(?)';
            const values: any[] = [servicioId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const servicio: ServicioGetDto = new ServicioGetDto(
                result[0][0].id,
                result[0][0].folio,
                result[0][0].nombre_solicitante,
                result[0][0].nombre_receptor,
                result[0][0].fecha_inicio,
                result[0][0].fecha_termino,
                result[0][0].hora_inicio,
                result[0][0].hora_termino,
                result[0][0].descripcion_falla,
                result[0][0].descripccion_actividad,
                result[0][0].nivel,
                result[0][0].fotos,
                result[0][0].observaciones,
                result[0][0].tipo_envio,
                result[0][0].estatus,
                result[0][0].tipo_servicio,
                result[0][0].contrato,
                result[0][0].tipo_actividad,
                result[0][0].estado_servicio,
                result[0][0].direccion,
                result[0][0].dependencia,
                result[0][0].cargo,
                result[0][0].createdBy,
            );

            return servicio;
        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }

    async updateServicio(servicioId: string, updateData: any): Promise<Servicio | null> {
        try{
            const queryStr: string = 'CALL updateServicio(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

            const values: any[] = [
                servicioId,
                updateData.folio ?? null,
                updateData.nombreSolicitante ?? null,
                updateData.nombreReceptor ?? null,
                updateData.fechaInicio ?? null,
                updateData.fechaTermino ?? null,
                updateData.horaInicio ?? null,
                updateData.horaTermino ?? null,
                updateData.descripcionFalla ?? null,
                updateData.descripccionActividad ?? null,
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

            if (result[0].length === 0) {
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
                servicioSql.descripccion_actividad,
                servicioSql.nivel,
                servicioSql.fotos,
                servicioSql.observaciones,
                servicioSql.tipoEnvio,
                servicioSql.estatus,
                servicioSql.id_tipo_servicio,
                servicioSql.id_contrato,
                servicioSql.id_tipo_actividad,
                servicioSql.id_estado_servicio,
                servicioSql.id_direccion,
                servicioSql.id_cargo,
                servicioSql.updatedBy,
                servicioSql.id
            );

            return updatedServicio;

        } catch (error: any) {
            logger.error(error);
            throw error;
        }
    }
}