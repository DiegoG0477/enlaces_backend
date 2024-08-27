import { ContratoDto } from "./ContratoDto";

export class ContratoGetModifiedDto extends ContratoDto {
    constructor(
        readonly updatedAt: Date,
        readonly updatedBy: number,
        readonly createdBy: number,
        readonly backedUpAt: Date,
        id: string,
        nombreEnlace: string,
        apellidoPEnlace: string,
        apellidoMEnlace: string,
        correoEnlace: string,
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
            correoEnlace,
            enlaceId, 
            estatus, 
            descripcion, 
            fechaContrato, 
            versionContrato, 
            ubicacion, 
            tipoContrato)
    }
}