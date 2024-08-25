import { Servicio } from "../Servicio";

export class ServicioCreateDto extends Servicio {
    constructor(
        readonly createdAt: Date,
        folio: string,
        nombreSolicitante: string,
        nombreReceptor: string,
        fechaInicio: string,
        fechaTermino: string,
        horaInicio: string,
        horaTermino: string,
        descripcionFalla: string,
        descripccionActividad: string,
        nivel: string,
        fotos: number,
        observaciones: string,
        tipoEnvio: string,
        estatus: number,
        tipoServicioId: number,
        contratoId: number,
        tipoActividadId: number,
        estadoServicioId: number,
        direccionId: number,
        cargoId: number,
        createdBy: number,
        id?: string,
    ) {
        super(
            folio,
            nombreSolicitante,
            nombreReceptor,
            fechaInicio,
            fechaTermino,
            horaInicio,
            horaTermino,
            descripcionFalla,
            descripccionActividad,
            nivel,
            fotos,
            observaciones,
            tipoEnvio,
            estatus,
            tipoServicioId,
            contratoId,
            tipoActividadId,
            estadoServicioId,
            direccionId,
            cargoId,
            createdBy,
            id
        );
    }
}