import { Contrato } from "../entities/Contrato";

export class ContratoCreateDto extends Contrato {
    constructor(
        // createdAt es diferente a fechaContrato debido a que createdAt es la fecha en la que se crea el contrato
        // mientras que fechaContrato es la fecha en la que se firmó el contrato, y puede ser modificada
        // ademas, fechaContrato puede ser diferente a la fecha en la que se crea el objeto contrato
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
        super(enlaceId, estatus, descripcion, fechaContrato, createdBy, versionContratoId, ubicacion, tipoContratoId, id);
    }
}