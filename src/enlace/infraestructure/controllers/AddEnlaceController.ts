import { Enlace } from "../../domain/entities/Enlace";
import { AddEnlaceUseCase } from "../../application/AddEnlaceUseCase";
import { Request, Response } from "express";

export class AddEnlaceController {
    constructor(private useCase: AddEnlaceUseCase) {}

    async run(req: Request, res: Response) {
        const request: any = req.body;

        const enlace = new Enlace(
            request.nombre as string,
            request.apellidoP as string,
            request.apellidoM as string,
            request.correo as string,
            request.telefono as string,
            request.estatus as number,
            request.adscripcion_id as number,
            request.cargo_id as number,
            request.auth_user_id as number,
            request.tipoPersona_id as number,
            request.direccion_id as number
        );

        try {
            const enlaceAdded = await this.useCase.run(enlace);

            if (!enlaceAdded) {
                res.status(404).json({
                    message: 'Error al agregar enlace, verifique los datos'
                });
                return;
            }
            
            res.status(201).json({
                message: 'Enlace agregado correctamente',
                enlace: enlaceAdded
            });
        } catch (error: any) {
            res.status(400).json({
                message: 'Error al agregar enlace',
                error: error.message
            });
        }
    }
}