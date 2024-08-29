import { GetModifiedContratoByIdUseCase } from "../../application/GetModifiedContratoByIdUseCase";
import { Request, Response } from "express";

export class GetModifiedContratoByIdController {
    constructor(private getModifiedContratoByIdUseCase: GetModifiedContratoByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const modifiedId = req.params.modifiedId;
            const modifiedContrato = await this.getModifiedContratoByIdUseCase.run(modifiedId);

            if(!modifiedContrato){
                res.status(404).json({
                    msg: 'No se encontraron contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contrato encontrado',
                contrato: modifiedContrato
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'Contrato no encontrado',
                error: error.message
            });
        }
    }
}