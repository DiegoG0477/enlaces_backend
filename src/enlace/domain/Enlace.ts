export class Enlace{
    constructor(
        readonly nombre: string,
        readonly apellidoP: string,
        readonly apellidoM: string,
        readonly correo: string,
        readonly telefono: string,
        readonly estatus: number,
        // hace referencia a la tabla de departamentos (departamentoId)
        readonly adscripcionId: number,
        readonly cargoId: number,
        readonly userId: number,
        readonly tipoPersonaId: number,
        readonly direccionId: number,
        private id?: string,
    ){}

    getId(): string{
        return this.id ?? '';
    }

    setId(id: string){
        this.id = id;
    }
}