import { GetDependenciasUseCase } from "../../application/GetDependenciasUseCase";
import { Request, Response } from "express";

export class GetDependenciasController {
    constructor(private getDependenciasUseCase: GetDependenciasUseCase) {}

    async run(req: Request, res: Response){
        try {
            const dependencias = await this.getDependenciasUseCase.run();

            if(!dependencias){
                res.status(404).json({
                    msg: 'No se encontraron dependencias'
                });
                return;
            }

            res.status(200).json({
                msg: 'Dependencias encontradas',
                dependencias: dependencias
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Dependencias no encontradas',
                error: error.message
            });
        }
    }
}