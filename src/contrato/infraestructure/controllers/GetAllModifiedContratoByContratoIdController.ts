import { GetAllModifiedContratoByContratoIdUseCase } from "../../application/GetAllModifiedContratoByContratoIdUseCase";
import { Request, Response } from "express";

export class GetAllModifiedContratoByContratoIdController {
    constructor(private getAllModifiedContratoByContratoIdUseCase: GetAllModifiedContratoByContratoIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratoId = req.params.contratoId;
            const allModifiedContrato = await this.getAllModifiedContratoByContratoIdUseCase.run(contratoId);

            if(!allModifiedContrato){
                res.status(404).json({
                    msg: 'No se encontraron respaldos de contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'respaldos de contratos encontrados',
                contratos: allModifiedContrato
            });
        } catch (error: any) {
            res.status(500).json({
                msg: 'respaldos de contratos no encontrados',
                error: error.message
            });
        }
    }
}