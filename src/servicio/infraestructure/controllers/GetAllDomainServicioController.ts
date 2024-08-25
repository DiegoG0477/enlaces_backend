import { GetAllDomainServicioUseCase } from "../../application/use_cases/GetAllDomainServicioUseCase";
import { Request, Response } from "express";

export class GetAllDomainServicioController {
    constructor(private useCase: GetAllDomainServicioUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const servicios = await this.useCase.run();

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