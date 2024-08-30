import { Enlace } from "../Enlace";

export class EnlaceTableDto extends Enlace {
    constructor(
        readonly deletedAt: Date,
        readonly updatedAt: Date,
        readonly deletedBy: number,
        readonly updatedBy: number,
        nombre: string,
        apellidoP: string,
        apellidoM: string,
        correo: string,
        telefono: string,
        estatus: number,
        adscripcionId: number,
        cargoId: number,
        createdBy: number,
        tipoPersonaId: number,
        direccionId: number,
        dependenciaId: number,
        id?: string,
        createdAt?: Date,
    ){
        super(nombre, apellidoP, apellidoM, correo, telefono, estatus, adscripcionId, cargoId, createdBy, tipoPersonaId, direccionId, dependenciaId, id, createdAt);
    }
}