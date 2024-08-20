import { AddUsuarioUseCase } from "../../application/AddUsuarioUseCase";
import { Usuario } from "../../domain/Usuario";
import { Request, Response } from "express";

export class RegisterController {
    constructor(private addUsuarioUseCase: AddUsuarioUseCase) {}

    async run(req: Request, res: Response){
        try {
            const usuario: Usuario = req.body;

            const usuarioAdded = await this.addUsuarioUseCase.run(usuario);

            if (!usuarioAdded) {
                res.status(404).json({
                    msg: 'Error al agregar usuario, verifique los datos'
                });
                return;
            }

            res.status(201).json({
                msg: 'Usuario agregado correctamente',
                usuario: usuarioAdded
            })
        } catch (error: any) {
            res.status(400).json({
                msg: 'Error al agregar usuario',
                error: error.message
            });
        }
    }
}