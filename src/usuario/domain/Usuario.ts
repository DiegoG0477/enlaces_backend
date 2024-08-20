import { UsuarioDto } from "./UsuarioDto";
export class Usuario {
    constructor(
        readonly nombre: string,
        readonly apellidoP: string,
        readonly apellidoM: string,
        readonly correo: string,
        readonly telefono: string,
        readonly cargoAdministrativo: number,
        readonly departamento: number,
        readonly username: string,
        readonly superuser: number,
        private password: string,
        readonly id?: number
    ) {}

    setPassword(password: string): void {
        this.password = password;
    }

    getPassword(): string {
        return this.password;
    }

    toDto(): UsuarioDto {
        return new UsuarioDto(
            this.id ?? 0,
            this.correo,
            this.username
        );
    }
}