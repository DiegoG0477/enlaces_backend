import { TokenService } from '../shared/infraestructure/services/TokenService';
import { Request, Response, NextFunction } from 'express';
import { Signale } from 'signale';
import 'dotenv/config';

const signale = new Signale({ scope: 'AuthMiddleware' });
const tokenService = new TokenService();

export function verifyToken(req: Request, res: Response, next: NextFunction): void {
    const SECRET_JWT = process.env.SECRET_JWT;

    if (!SECRET_JWT) {
        res.status(500).json({ msg: 'Internal server error' });
        signale.error('SECRET_JWT not found');
        return;
    }

    const token = req.headers.authorization;
    
    if (!token) {
        res.status(401).json({ msg: 'Token not provided' });
        return;
    }

    try {
        const decoded = tokenService.verifyToken(token);

        if (decoded === null || decoded === undefined) {
            res.status(403).json({ msg: 'Invalid token' });
            return;
        }

        (req as any).user = decoded;
        console.log((req as any).user.email);
        next();
    } catch (error) {
        console.error('Error at verify token:', error);
        res.status(403).json({ msg: 'Invalid token' });
    }
}