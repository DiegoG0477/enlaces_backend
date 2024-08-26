import { ContratoRepository } from "../../domain/repositories/ContratoRepository";
import { Contrato } from "../../domain/entities/Contrato";
import { TipoContrato } from "../../domain/entities/TipoContrato";
import { TipoInstalacion } from "../../domain/entities/TipoInstalacion";
import { VersionContrato } from "../../domain/entities/VersionContrato";
import { ContratoDto } from "../../domain/DTOS/ContratoDto";
import { ContratoCreateDto } from "../../domain/DTOS/ContratoCreateDto";
import { ContratoGetDeletedDto } from "../../domain/DTOS/ContratoGetDeletedDto";
import { ContratoGetModifiedDto } from "../../domain/DTOS/ContratoGetModifiedDto";
import { query } from "../../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlContratoRepository'});

export class MysqlContratoRepository implements ContratoRepository {
    async addContrato(contrato: ContratoCreateDto): Promise<Contrato | null> {
        try {
            const queryStr: string = 'CALL addContrato(?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const values: any[] = [
                contrato.enlaceId, 
                contrato.estatus, 
                contrato.descripcion, 
                contrato.fechaContrato, 
                contrato.createdBy, 
                contrato.versionContratoId, 
                contrato.ubicacion, 
                contrato.tipoContratoId,
                contrato.createdAt
            ];
    
            const [result]: any = await query(queryStr, values);

            console.log(result);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];
    
            const newContrato: Contrato = new ContratoCreateDto(
                contratoSql.persona_id, 
                contratoSql.estatus, 
                contratoSql.descripcion, 
                contratoSql.fechaContrato, 
                contratoSql.createdBy, 
                contratoSql.id_versionContrato, 
                contratoSql.ubicacion, 
                contratoSql.id_tipoContrato, 
                contratoSql.idContrato,
                contratoSql.createdAt
            );
    
            return newContrato;
    
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }
    
    async getContratosByEnlace(enlaceId: string): Promise<Contrato[] | null> {
        try {
            const queryStr: string = 'CALL getContratosByPersonaId(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0){
                return null;
            }

            const contratos: Contrato[] = result[0].map((contrato: any) => new Contrato(
                contrato.persona_id, 
                contrato.estatus, 
                contrato.descripcion, 
                contrato.fechaContrato, 
                contrato.createdBy, 
                contrato.id_versionContrato, 
                contrato.ubicacion, 
                contrato.id_tipoContrato, 
                contrato.idContrato
            ));

            return contratos;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getContratos(): Promise<Contrato[] | null> {
        try {
            const queryStr: string = 'CALL getContratos()';

            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0){
                return null;
            }

            const contratos: Contrato[] = result[0].map((contrato: any) => new Contrato(
                contrato.persona_id, 
                contrato.estatus, 
                contrato.descripcion, 
                contrato.fechaContrato, 
                contrato.createdBy, 
                contrato.id_versionContrato, 
                contrato.ubicacion, 
                contrato.id_tipoContrato, 
                contrato.idContrato
            ));

            return contratos;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllContratoDetallado(): Promise<any[] | null> {
        try {
            const queryStr: string = 'CALL getAllContratoDetallado()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const contratoDtos: ContratoDto[] = result[0].map((contrato: any) => {
                return new ContratoDto(
                    contrato.id,
                    contrato.nombreEnlace,
                    contrato.apellidoPEnlace,
                    contrato.apellidoMEnlace,
                    contrato.enlaceId,
                    contrato.estatus,
                    contrato.descripcion,
                    contrato.fechaContrato,
                    contrato.versionContrato,
                    contrato.ubicacion,
                    contrato.tipoContrato
                );
            });

            return contratoDtos;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getContratoDetalladoById(contratoId: string): Promise<ContratoDto | null> {
        try {
            const queryStr: string = 'CALL getContratoDetalladoById(?)';
            const values: any[] = [contratoId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];


            const contrato: ContratoDto = new ContratoDto(
                contratoSql.id,
                contratoSql.nombreEnlace,
                contratoSql.apellidoPEnlace,
                contratoSql.apellidoMEnlace,
                contratoSql.enlaceId,
                contratoSql.estatus,
                contratoSql.descripcion,
                contratoSql.fechaContrato,
                contratoSql.versionContrato,
                contratoSql.ubicacion,
                contratoSql.tipoContrato
            );

            return contrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllContratoDetalladoByEnlace(enlaceId: string): Promise<ContratoDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllContratoDetalladoByPersonaId(?)';
            const values: any[] = [enlaceId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoDtos: ContratoDto[] = result[0].map((contrato: any) => {
                return new ContratoDto(
                    contrato.id,
                    contrato.nombreEnlace,
                    contrato.apellidoPEnlace,
                    contrato.apellidoMEnlace,
                    contrato.enlaceId,
                    contrato.estatus,
                    contrato.descripcion,
                    contrato.fechaContrato,
                    contrato.versionContrato,
                    contrato.ubicacion,
                    contrato.tipoContrato
                );
            });

            return contratoDtos;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllTipoInstalacion(): Promise<TipoInstalacion[] | null> {
        try {
            const queryStr: string = 'CALL getAllTipoInstalacion()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const tipoInstalacion: TipoInstalacion[] = result[0].map((tipo: any) => {
                return new TipoInstalacion(
                    tipo.id_tipoInstalacion,
                    tipo.nombre,
                    tipo.estatus
                );
            });

            return tipoInstalacion;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllTipoContrato(): Promise<TipoContrato[] | null> {
        try {
            const queryStr: string = 'CALL getAllTipoContrato()';
            const [result]: any = await query(queryStr, []);

            console.log(result);

            if (result[0].length === 0) {
                return null;
            }

            const tipoContrato: TipoContrato[] = result[0].map((tipo: any) => {
                return new TipoContrato(
                    tipo.idTipoContrato,
                    tipo.nombre,
                    tipo.estatus
                );
            });

            return tipoContrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllVersionContrato(): Promise<VersionContrato[] | null> {
        try {
            const queryStr: string = 'CALL getAllVersionContrato()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const versionContrato: VersionContrato[] = result[0].map((version: any) => {
                return new VersionContrato(
                    version.id_version,
                    version.descripcion,
                    version.estatus,
                    version.id_tipoContrato
                );
            });

            return versionContrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getVersionesByTipoContratoId(tipoContratoId: string): Promise<VersionContrato[] | null> {
        try {
            const queryStr: string = 'CALL getVersionesByTipoContratoId(?)';
            const values: any[] = [tipoContratoId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const versionContrato: VersionContrato[] = result[0].map((version: any) => {
                return new VersionContrato(
                    version.id_version,
                    version.descripcion,
                    version.estatus,
                    version.id_tipoContrato
                );
            });

            return versionContrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async updateContrato(contratoId: string, updateData: any): Promise<Contrato | null> {
        try{
            const queryStr: string = 'CALL updateContrato(?, ?, ?, ?, ?, ?, ?, ?, ?)';

            const values: any[] = [
                contratoId ?? null,
                updateData.estatus ?? null,
                updateData.descripcion ?? null,
                updateData.fechaContrato ?? null,
                updateData.updatedBy ?? null,
                updateData.versionContratoId ?? null,
                updateData.ubicacionId ?? null,
                updateData.tipoContratoId ?? null,
                updateData.updatedAt
            ];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];

            const contrato: Contrato = new Contrato(
                contratoSql.persona_id,
                contratoSql.estatus,
                contratoSql.descripcion, 
                contratoSql.fechaContrato, 
                contratoSql.createdBy,
                contratoSql.id_versionContrato, 
                contratoSql.ubicacion,
                contratoSql.id_tipoContrato, 
                contratoSql.idContrato
            );

            return contrato;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async deleteContrato(contratoId: string, userId: string, deleteDate: Date): Promise<boolean> {
        try {
            const queryStr: string = 'CALL deleteContrato(?, ?, ?)';
            const values: any[] = [contratoId, userId, deleteDate];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllDeletedContrato(): Promise<ContratoGetDeletedDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllDeletedContrato()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const contratos: ContratoGetDeletedDto[] = result[0].map((contrato: any) => new ContratoGetDeletedDto(
                contrato.deletedAt,
                contrato.deletedBy,
                contrato.createdBy,
                contrato.id,
                contrato.nombreEnlace,
                contrato.apellidoPEnlace,
                contrato.apellidoMEnlace,
                contrato.enlaceId,
                contrato.estatus,
                contrato.descripcion,
                contrato.fechaContrato,
                contrato.versionContrato,
                contrato.ubicacion,
                contrato.tipoContrato
            ));

            return contratos;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getAllModifiedContrato(): Promise<ContratoGetModifiedDto[] | null> {
        try {
            const queryStr: string = 'CALL getAllModifiedContrato()';
            const [result]: any = await query(queryStr, []);

            if (result[0].length === 0) {
                return null;
            }

            const contratos: ContratoGetModifiedDto[] = result[0].map((contrato: any) => new ContratoGetModifiedDto(
                contrato.updatedAt,
                contrato.updatedBy,
                contrato.createdBy,
                contrato.id,
                contrato.nombreEnlace,
                contrato.apellidoPEnlace,
                contrato.apellidoMEnlace,
                contrato.enlaceId,
                contrato.estatus,
                contrato.descripcion,
                contrato.fechaContrato,
                contrato.versionContrato,
                contrato.ubicacion,
                contrato.tipoContrato
            ));

            return contratos;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDeletedContratoById(contratoId: string): Promise<ContratoGetDeletedDto | null> {
        try {
            const queryStr: string = 'CALL getDeletedContratoById(?)';
            const values: any[] = [contratoId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];

            const contrato: ContratoGetDeletedDto = new ContratoGetDeletedDto(
                contratoSql.deletedAt,
                contratoSql.deletedBy,
                contratoSql.createdBy,
                contratoSql.id,
                contratoSql.nombreEnlace,
                contratoSql.apellidoPEnlace,
                contratoSql.apellidoMEnlace,
                contratoSql.enlaceId,
                contratoSql.estatus,
                contratoSql.descripcion,
                contratoSql.fechaContrato,
                contratoSql.versionContrato,
                contratoSql.ubicacion,
                contratoSql.tipoContrato
            );

            return contrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDomainDeletedContratoById(contratoId: string): Promise<Contrato | null> {
        try {
            const queryStr: string = 'CALL getDomainDeletedContratoById(?)';
            const values: any[] = [contratoId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];

            const contrato: Contrato = new Contrato(
                contratoSql.persona_id,
                contratoSql.estatus,
                contratoSql.descripcion, 
                contratoSql.fechaContrato, 
                contratoSql.createdBy,
                contratoSql.id_versionContrato, 
                contratoSql.ubicacion,
                contratoSql.id_tipoContrato, 
                contratoSql.idContrato
            );

            return contrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getDomainModifiedContratoById(contratoId: string): Promise<Contrato | null> {
        try {
            const queryStr: string = 'CALL getDomainModifiedContratoById(?)';
            const values: any[] = [contratoId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];

            const contrato: Contrato = new Contrato(
                contratoSql.persona_id,
                contratoSql.estatus,
                contratoSql.descripcion, 
                contratoSql.fechaContrato, 
                contratoSql.createdBy,
                contratoSql.id_versionContrato, 
                contratoSql.ubicacion,
                contratoSql.id_tipoContrato, 
                contratoSql.idContrato
            );

            return contrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getModifiedContratoById(contratoId: string): Promise<ContratoGetModifiedDto | null> {
        try {
            const queryStr: string = 'CALL getModifiedContratoById(?)';
            const values: any[] = [contratoId];

            const [result]: any = await query(queryStr, values);

            if (result[0].length === 0) {
                return null;
            }

            const contratoSql = result[0][0];

            const contrato: ContratoGetModifiedDto = new ContratoGetModifiedDto(
                contratoSql.updatedAt,
                contratoSql.updatedBy,
                contratoSql.createdBy,
                contratoSql.id,
                contratoSql.nombreEnlace,
                contratoSql.apellidoPEnlace,
                contratoSql.apellidoMEnlace,
                contratoSql.enlaceId,
                contratoSql.estatus,
                contratoSql.descripcion,
                contratoSql.fechaContrato,
                contratoSql.versionContrato,
                contratoSql.ubicacion,
                contratoSql.tipoContrato
            );

            return contrato;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async restoreContrato(contratoId: string): Promise<boolean> {
        try {
            const queryStr: string = 'CALL restoreContrato(?)';
            const values: any[] = [contratoId];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async restoreModifiedContrato(modifiedId: string): Promise<boolean> {
        try {
            const queryStr: string = 'CALL restoreModifiedContrato(?)';
            const values: any[] = [modifiedId];

            const [result]: any = await query(queryStr, values);

            return result.affectedRows > 0;

        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }
}