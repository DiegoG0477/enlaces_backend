import { ContratoDto } from "./ContratoDto";

export class ContratoGetDeletedDto extends ContratoDto {
    constructor(
        readonly deletedAt: Date,
        readonly deletedBy: number,
        readonly createdBy: number,
        id: string,
        nombreEnlace: string,
        apellidoPEnlace: string,
        apellidoMEnlace: string,
        enlaceId: string,
        estatus: number,
        descripcion: string,
        fechaContrato: Date,
        versionContrato: string,
        ubicacion: string,
        tipoContrato: string,
    ) {
        super(
            id, 
            nombreEnlace, 
            apellidoPEnlace, 
            apellidoMEnlace, 
            enlaceId, 
            estatus, 
            descripcion, 
            fechaContrato, 
            versionContrato, 
            ubicacion, 
            tipoContrato)
    }
}