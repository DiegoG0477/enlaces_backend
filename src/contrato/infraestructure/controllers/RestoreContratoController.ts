import { RestoreContratoUseCase } from "../../application/RestoreContratoUseCase";
import { Request, Response } from "express";

export class RestoreContratoController {
    constructor(private restoreContratoUseCase: RestoreContratoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratoId = req.body.contratoId;
            const restoredContrato = await this.restoreContratoUseCase.run(contratoId);

            if(!restoredContrato){
                res.status(404).json({
                    msg: 'No se encontraron contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contrato restaurado correctamente',
                contrato: restoredContrato
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contrato no restaurado',
                error: error.message
            });
        }
    }
}