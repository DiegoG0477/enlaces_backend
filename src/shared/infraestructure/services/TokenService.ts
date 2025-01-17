import jwt from 'jsonwebtoken';
import { ITokenService } from "../../application/services/ITokenService";
import { UsuarioDto } from "../../../usuario/domain/UsuarioDto";
import { Signale } from 'signale';
import 'dotenv/config';

const signale = new Signale({ scope: 'TokenService' });

export class TokenService implements ITokenService {
    private SECRET_JWT: string;

    constructor() {
        this.SECRET_JWT = process.env.SECRET_JWT ?? '';
        if (!this.SECRET_JWT || this.SECRET_JWT === '') {
            signale.error('SECRET_JWT not found');
            throw new Error('SECRET_JWT not found');
        }
    }

    async generateToken(data: UsuarioDto): Promise<string> {
        try {
            const token: string = jwt.sign({ id:data.id, correo: data.correo, username: data.username }, this.SECRET_JWT, { expiresIn: '12h' });

            if (!token) {
                signale.error('Token not generated by jwt.sign');
            }

            return token;
        } catch (error: any) {
            signale.error('Error at generate token:', error);
            throw error;
        }
    }

    async verifyToken(token: string): Promise<UsuarioDto | null> {
        try {
            const decoded = jwt.verify(token, this.SECRET_JWT) as UsuarioDto;

            return decoded;
        } catch (error: any) {
            signale.error('Error at verify token:', error);
            throw error;
        }
    }
}
