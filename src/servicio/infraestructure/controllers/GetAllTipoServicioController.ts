import { GetAllTipoServicioUseCase } from "../../application/use_cases/GetAllTIpoServicioUseCase";
import { Request, Response } from "express";

export class GetAllTipoServicioController {
    constructor(private useCase: GetAllTipoServicioUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const tiposServicio = await this.useCase.run();

            if (!tiposServicio) {
                res.status(404).json({
                    message: 'No se encontraron tipos de servicio'
                });
                return;
            }

            res.status(200).json({
                msg: 'Tipos de servicio encontrados',
                tipos: tiposServicio
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'Error al obtener tipos de servicio',
                error: error.message
            });
        }
    }
}