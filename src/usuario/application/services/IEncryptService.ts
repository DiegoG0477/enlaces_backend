export interface IEncryptService {
    encrypt(data:string): Promise<string>;

    compare(data:string, encryptedData:string): Promise<boolean>;
}