import { GetAllModifiedContratoUseCase } from "../../application/GetAllModifiedContratoUseCase";
import { Request, Response } from "express";

export class GetAllModifiedContratoController {
    constructor(private getAllModifiedContratoUseCase: GetAllModifiedContratoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const allModifiedContrato = await this.getAllModifiedContratoUseCase.run();

            if(!allModifiedContrato){
                res.status(404).json({
                    msg: 'No se encontraron contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contratos encontrados',
                contratos: allModifiedContrato
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contratos no encontrados',
                error: error.message
            });
        }
    }
}