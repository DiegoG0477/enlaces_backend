import { GetAllTipoActividadUseCase } from "../../application/use_cases/GetAllTipoActividadUseCase";
import { Request, Response } from "express";

export class GetAllTipoActividadController {
    constructor(private useCase: GetAllTipoActividadUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const tiposActividad = await this.useCase.run();

            if (!tiposActividad) {
                res.status(404).json({
                    message: 'No se encontraron tipos de actividad'
                });
                return;
            }

            res.status(200).json({
                msg: 'Tipos de actividad encontrados',
                tipos: tiposActividad
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'Error al obtener tipos de actividad',
                error: error.message
            });
        }
    }
}