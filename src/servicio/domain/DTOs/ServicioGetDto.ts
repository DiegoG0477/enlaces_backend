export class ServicioGetDto{
    constructor(
        readonly id: number,
        readonly folio: string,
        readonly nombreSolicitante: string,
        readonly nombreReceptor: string,
        readonly fechaInicio: string,
        readonly fechaTermino: string,
        readonly horaInicio: string,
        readonly horaTermino: string,
        readonly descripcionFalla: string,
        readonly descripccionActividad: string,
        readonly nivel: string,
        // fotos es el boolean de si el servicio incluye fotos o no
        readonly fotos: number,
        readonly observaciones: string,
        readonly tipoEnvio: string,
        readonly estatus: number,
        readonly tipoServicio: string,
        readonly codigoServicio: string,
        readonly contratoId: number,
        readonly tipoActividad: string,
        readonly estadoServicio: string,
        readonly direccion: string,
        readonly dependencia: string,
        readonly cargo: string,
        readonly createdBy: number,
    ){}
}