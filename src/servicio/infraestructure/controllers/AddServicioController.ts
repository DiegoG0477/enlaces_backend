import { ServicioCreateDto } from "../../domain/DTOs/ServicioCreateDto";
import { AddServicioUseCase } from "../../application/use_cases/AddServicioUseCase";
import { Request, Response } from "express";

export class AddServicioController {
    constructor(private useCase: AddServicioUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const request: any = req.body;

            const createDate = new Date();
            // const userId = (req as any).user.id;
            const userId = 7;
    
            const servicio = new ServicioCreateDto(
                createDate,
                request.folio as string ?? '',
                request.nombreSolicitante as string,
                request.nombreReceptor as string,
                request.fechaInicio as string,
                request.fechaTermino as string,
                request.horaInicio as string,
                request.horaTermino as string,
                request.descripcionFalla as string,
                request.descripccionActividad as string,
                request.nivel as string,
                request.fotos as number,
                request.observaciones as string,
                request.tipoEnvio as string,
                // request.estatus as number,
                // por defecto el estatus activo es 1, de momento
                // solo se estan agregando recursos activos
                1,
                request.tipoServicioId as number,
                request.contratoId as number,
                request.tipoActividadId as number,
                request.estadoServicioId as number,
                request.direccionId as number,
                request.cargoId as number,
                userId
            );

            const servicioAdded = await this.useCase.run(servicio);

            if (!servicioAdded) {
                res.status(404).json({
                    message: 'Error al agregar servicio, verifique los datos'
                });
                return;
            }
            
            res.status(201).json({
                message: 'Servicio agregado correctamente',
                servicio: servicioAdded
            });
        } catch (error: any) {
            res.status(400).json({
                message: 'Error al agregar servicio',
                error: error.message
            });
        }
    }
}