import { RestoreModifiedContratoUseCase } from "../../application/RestoreModifiedContratoUseCase";
import { Request, Response } from "express";

export class RestoreModifiedContratoController {
    constructor(private restoreModifiedContratoUseCase: RestoreModifiedContratoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const modifiedId = req.body.modifiedId;
            const restoredContrato = await this.restoreModifiedContratoUseCase.run(modifiedId);

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