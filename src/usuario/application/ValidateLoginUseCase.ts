import { UsuarioRepository } from "../domain/UsuarioRepository";
import { UsuarioDto } from "../domain/UsuarioDto";
import { IEncryptService } from "./services/IEncryptService";

export class ValidateLoginUseCase {
    constructor(
        private usuarioRepository: UsuarioRepository,
        private encryptService: IEncryptService
    ) {}

    async run(username: string, password: string): Promise<UsuarioDto | null> {
        const usuario = await this.usuarioRepository.getUsuarioByUsername(username);
        if (!usuario) {
            return null;
        }

        const hashedPassword = usuario.getPassword();

        const isPasswordValid = await this.encryptService.compare(password, hashedPassword);

        if (!isPasswordValid) {
            return null;
        }

        return usuario.toDto();
    }
}