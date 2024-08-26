import { GetDeletedContratoByIdUseCase } from "../../application/GetDeletedContratoByIdUseCase";
import { Request, Response } from "express";

export class GetDeletedContratoByIdController {
    constructor(private getDeletedContratoByIdUseCase: GetDeletedContratoByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratoId = req.params.contratoId;
            const deletedContrato = await this.getDeletedContratoByIdUseCase.run(contratoId);

            if(!deletedContrato){
                res.status(404).json({
                    msg: 'No se encontraron contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contrato encontrado',
                contrato: deletedContrato
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contrato no encontrado',
                error: error.message
            });
        }
    }
}