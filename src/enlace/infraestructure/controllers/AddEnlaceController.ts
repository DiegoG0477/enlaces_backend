import { EnlaceCreateDto } from "../../domain/DTOs/EnlaceCreateDto";
import { AddEnlaceUseCase } from "../../application/AddEnlaceUseCase";
import { Request, Response } from "express";

export class AddEnlaceController {
    constructor(private useCase: AddEnlaceUseCase) {}

    async run(req: Request, res: Response) {
        const request: any = req.body;
        // const userId = (req as any).user.id;
        const userId = '7';

        const createDate = new Date();
        
        const enlace = new EnlaceCreateDto(
            createDate,
            request.nombre as string,
            request.apellidoP as string,
            request.apellidoM as string,
            request.correo as string,
            request.telefono as string,
            request.estatus as number,
            request.adscripcion_id as number ?? null,
            request.cargo_id as number,
            parseInt(userId),
            request.tipoPersona_id as number,
            request.direccion_id as number,
            request.dependencia_id as number,
        );

        try {
            const enlaceAdded = await this.useCase.run(enlace);

            if (!enlaceAdded) {
                res.status(400).json({
                    msg: 'Error al agregar enlace, verifique los datos'
                });
                return;
            }

            if(enlaceAdded.getId() === '-1'){
                res.status(435).json({
                    msg: 'Enlace ya existente en la dependencia especificada',
                    enlace: enlaceAdded
                });
                return;
            }
            
            res.status(201).json({
                msg: 'Enlace agregado correctamente',
                enlace: enlaceAdded
            });
        } catch (error: any) {
            res.status(500).json({
                msg: 'Error al agregar enlace',
                error: error.message
            });
        }
    }
}