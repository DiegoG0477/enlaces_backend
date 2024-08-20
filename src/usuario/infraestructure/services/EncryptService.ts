import bcrypt from "bcrypt";
import { IEncryptService } from "../../application/services/IEncryptService";
import 'dotenv/config';
import { Signale } from "signale";

const signale = new Signale({scope: "EncryptService"});

export class EncryptService implements IEncryptService {
    async encrypt(data: string): Promise<string> {
        try{
            const BCRYPT_SALT = process.env.BCRYPT_SALT;

            if (!BCRYPT_SALT) {
                throw new Error('BCRYPT_SALT not found');
            }
    
            const pass = bcrypt.hashSync(data, 10);
            return pass;
        } catch (error: any) {
            signale.error('Error at encrypt:', error);
            return error;
        }
    }

    async compare(data: string, hashedData: string): Promise<boolean> {
        try{
            const result = bcrypt.compareSync(data, hashedData);
            return result;
        } catch (error: any) {
            signale.error('Error at compare:', error);
            return error;
        }
    }
}