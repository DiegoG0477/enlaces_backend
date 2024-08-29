import { GetAllServicioUseCase } from "../../application/use_cases/GetAllServicioUseCase";
import { Request, Response } from "express";

export class GetAllServicioController {
    constructor(private useCase: GetAllServicioUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { estatus } = req.query;

            let estatusNumber: number = 0;

            if (estatus) {
                estatusNumber = parseInt(estatus as string);
            }

            const servicios = await this.useCase.run(estatusNumber);

            if (!servicios) {
                res.status(404).json({
                    message: 'No se encontraron servicios'
                });
                return;
            }

            res.status(200).json({
                message: 'Servicios encontrados',
                servicios
            });
        } catch (error: any) {
            res.status(400).json({
                message: 'Error al obtener servicios',
                error: error.message
            });
        }
    }
}