import { GetAllEstadoServicioUseCase } from "../../application/use_cases/GetAllEstadoServicioUseCase";
import { Request, Response } from "express";

export class GetAllEstadoServicioController {
    constructor(private useCase: GetAllEstadoServicioUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const estadosServicio = await this.useCase.run();

            if (!estadosServicio) {
                res.status(404).json({
                    message: 'No se encontraron estados de servicio'
                });
                return;
            }

            res.status(200).json({
                msg: 'Estados de servicio encontrados',
                estados: estadosServicio
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'Error al obtener estados de servicio',
                error: error.message
            });
        }
    }
}