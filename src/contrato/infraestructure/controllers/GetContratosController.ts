import { GetContratosUseCase } from "../../application/GetContratosUseCase";
import { Request, Response } from "express";

export class GetContratosController {
    constructor(private getContratosUseCase: GetContratosUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratos = await this.getContratosUseCase.run();
            res.status(200).json({
                msg: 'Contratos encontrados',
                contratos: contratos
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contratos no encontrados',
                error: error.message
            });
        }
    }
}