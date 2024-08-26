import { EnlaceDto } from "./EnlaceDto";

export class EnlaceGetDeletedDto extends EnlaceDto{
    constructor(
        readonly deletedAt: Date,
        readonly deletedBy: number,
        readonly createdBy: number,
        id: string,
        nombre: string,
        apellidoP: string,
        apellidoM: string,
        correo: string,
        telefono: string,
        estatus: string,
        dependencia: string,
        cargo: string,
        direccion: string,
        adscripcion: string,
    ){
        super(
            id,
            nombre,
            apellidoP,
            apellidoM,
            correo,
            telefono,
            estatus,
            dependencia,
            cargo,
            direccion,
            adscripcion
        )
    }
}