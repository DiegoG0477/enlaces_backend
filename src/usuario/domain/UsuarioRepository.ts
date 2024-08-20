import { Usuario } from "./Usuario";

export interface UsuarioRepository {
    addUsuario(Usuario: Usuario): Promise<Usuario|null>;
    getUsuarioByUsername(username: string): Promise<Usuario | null>;
}