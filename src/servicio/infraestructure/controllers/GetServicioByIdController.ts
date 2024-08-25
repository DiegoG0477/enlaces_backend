import { GetServicioByIdUseCase } from "../../application/use_cases/GetServicioByIdUseCase";
import { Request, Response } from "express";

export class GetServicioByIdController {
    constructor(private useCase: GetServicioByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const servicioId = req.params.servicioId;

            const servicio = await this.useCase.run(servicioId);

            if (!servicio) {
                res.status(404).json({
                    message: 'No se encontró servicio'
                });
                return;
            }

            res.status(200).json({
                message: 'Servicio encontrado',
                servicio
            });
        } catch (error: any) {
            res.status(400).json({
                message: 'Error al obtener servicio',
                error: error.message
            });
        }
    }
}