export class UsuarioDto {
    constructor(
        readonly id: number,
        readonly correo: string,
        readonly username: string,
    ) {}
}