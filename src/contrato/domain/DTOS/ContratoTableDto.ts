import { Contrato } from "../entities/Contrato";

export class ContratoTableDto extends Contrato {
    constructor(
        readonly deletedBy: number,
        readonly deletedAt: Date,
        readonly updatedBy: number,
        readonly updatedAt: Date,
        readonly createdAt: Date,
        enlaceId: string,
        estatus: number,
        descripcion: string,
        fechaContrato: Date,
        createdBy: number,
        versionContratoId: number,
        ubicacion: number,
        tipoContratoId: number,
        id?: string,
    ){
        super(
            enlaceId,
            estatus,
            descripcion,
            fechaContrato,
            createdBy,
            versionContratoId,
            ubicacion,
            tipoContratoId,
            id
        )
    }
}