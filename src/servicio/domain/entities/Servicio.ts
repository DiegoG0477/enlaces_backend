export class Servicio{
    constructor(
        private folio: string,
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
        readonly tipoServicioId: number,
        readonly contratoId: number,
        readonly tipoActividadId: number,
        readonly estadoServicioId: number,
        readonly direccionId: number,
        readonly cargoId: number,
        readonly createdBy: number,
        private id?: string,
    ){}

    getId(): string | undefined {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getFolio(): string {
        return this.folio;
    }

    setFolio(folio: string): void {
        this.folio = folio;
    }
}