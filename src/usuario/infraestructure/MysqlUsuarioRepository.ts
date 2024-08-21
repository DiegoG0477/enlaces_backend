import { UsuarioRepository } from "../domain/UsuarioRepository";
import { Usuario } from "../domain/Usuario";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({ scope: 'MysqlUsuarioRepository' });

export class MysqlUsuarioRepository implements UsuarioRepository {
    async addUsuario(usuario: Usuario): Promise<Usuario | null> {
        try{
            const queryStr = 'CALL addUsuario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

            const values = [
                usuario.nombre,
                usuario.apellidoP,
                usuario.apellidoM,
                usuario.correo,
                usuario.telefono,
                usuario.cargoAdministrativo,
                usuario.departamento,
                usuario.username,
                usuario.superuser,
                usuario.getPassword()
            ];
    
            const [result]: any = await query(queryStr, values);
    
            if (result.affectedRows === 0) {
                return null;
            }
    
            const newUsuario: Usuario = new Usuario(
                result[0].nombre,
                result[0].apellidoP,
                result[0].apellidoM,
                result[0].correo,
                result[0].telefono,
                result[0].cargoAdministrativo,
                result[0].departamento,
                result[0].username,
                result[0].superuser,
                result[0].password,
                result[0].idUsuario
            );
    
            return newUsuario;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }

    async getUsuarioByUsername(username: string): Promise<Usuario | null> {
        try {
            const queryStr = 'CALL getUsuarioByUsername(?)';
            const [result]: any = await query(queryStr, [username]);

            if (result.length === 0) {
                return null;
            }

            const usuario: Usuario = new Usuario(
                result[0].nombre,
                result[0].apellidoP,
                result[0].apellidoM,
                result[0].correo,
                result[0].telefono,
                result[0].cargoAdministrativo,
                result[0].departamento,
                result[0].username,
                result[0].superuser,
                result[0].password,
                result[0].idUsuario
            );

            return usuario;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }
}