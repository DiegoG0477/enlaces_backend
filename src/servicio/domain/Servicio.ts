export class Servicio{
    constructor(
        readonly servicioId: string,
        readonly fechaInicio: Date,
        readonly fechaFin: Date,
        readonly fechaEnvio: Date,
        readonly descripcionFalla: string,
        readonly tipoActividad: number,
        readonly descripcionActividad: string,
        readonly estadoServicio: number,
        readonly fotos: number,
        readonly observaciones: string,
        readonly estatus: number,
        readonly catalogoServicioId: number,
        readonly contratoId: string,
        readonly usuarioId: string,
        readonly id?: string
    ){}
}