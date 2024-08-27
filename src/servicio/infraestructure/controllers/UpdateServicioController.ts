import { UpdateServicioUseCase } from "../../application/use_cases/UpdateServicioUseCase";
import { Request, Response } from "express";

export class UpdateServicioController {
    constructor(private useCase: UpdateServicioUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const request: any = req.body;
            const servicioId = req.params.servicioId;
            // const userId = (req as any).user.id;
            const userId = '7'
            const updateDate = new Date();

            const updateData: any = {
                nombreSolicitante: request.nombreSolicitante,
                nombreReceptor: request.nombreReceptor,
                fechaInicio: request.fechaInicio,
                fechaTermino: request.fechaTermino,
                horaInicio: request.horaInicio,
                horaTermino: request.horaTermino,
                descripcionFalla: request.descripcionFalla,
                descripccionActividad: request.descripccionActividad,
                nivel: request.nivel,
                fotos: request.fotos,
                observaciones: request.observaciones,
                tipoEnvio: request.tipoEnvio,
                estatus: request.estatus,
                tipoServicioId: request.tipoServicioId,
                tipoActividadId: request.tipoActividadId,
                estadoServicioId: request.estadoServicioId,
                direccionId: request.direccionId,
                cargoId: request.cargoId,
                updatedBy: userId,
                updatedAt: updateDate
            };

            const servicioUpdated = await this.useCase.run(servicioId, updateData);

            if (!servicioUpdated) {
                res.status(404).json({
                    message: 'Error al actualizar servicio, verifique los datos'
                });
                return;
            }
            
            res.status(200).json({
                message: 'Servicio actualizado correctamente',
                servicio: servicioUpdated
            });
        } catch (error: any) {
            res.status(400).json({
                message: 'Error al actualizar servicio',
                error: error.message
            });
        }
    }
}