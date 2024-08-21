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

            const newUsuario = usuario;

            newUsuario.setId(result.insertId);
    
            return newUsuario;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getUsuarioByUsername(username: string): Promise<Usuario | null> {
        try {
            const queryStr = 'CALL getUsuarioByUsername(?)';
            const [result]: any = await query(queryStr, [username]);

            if (result[0].length === 0) {
                return null;
            }

            const usuarioSql = result[0][0];

            const usuario: Usuario = new Usuario(
                usuarioSql.nombre,
                usuarioSql.apellidoP,
                usuarioSql.apellidoM,
                usuarioSql.correo,
                usuarioSql.telefono,
                usuarioSql.cargoAdministrativo,
                usuarioSql.departamento,
                usuarioSql.username,
                usuarioSql.superuser,
                usuarioSql.password,
                usuarioSql.idUsuario
            );

            return usuario;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }
}