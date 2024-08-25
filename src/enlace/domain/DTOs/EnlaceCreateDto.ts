import { Enlace } from "../Enlace";

export class EnlaceCreateDto extends Enlace {
    constructor(
        readonly createdAt: Date,
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
        id?: string,
    ) {
        super(
            nombre,
            apellidoP,
            apellidoM,
            correo,
            telefono,
            estatus,
            adscripcionId,
            cargoId,
            createdBy,
            tipoPersonaId,
            direccionId,
            id,
        );
    }
}