import { Enlace } from "../Enlace";

export class EnlaceUpdateDto extends Enlace {
    constructor(
        readonly updatedBy: number,
        readonly updatedAt: Date,
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
    ){
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
            dependenciaId,
            id
        )
    }
}