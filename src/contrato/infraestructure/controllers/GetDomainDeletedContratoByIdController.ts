import { GetDomainDeletedContratoByIdUseCase } from "../../application/GetDomainDeletedContratoByIdUseCase";
import { Request, Response } from "express";

export class GetDomainDeletedContratoByIdController {
    constructor(private getDomainDeletedContratoByIdUseCase: GetDomainDeletedContratoByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratoId = req.params.contratoId;
            const deletedContrato = await this.getDomainDeletedContratoByIdUseCase.run(contratoId);

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
            res.status(400).json({
                msg: 'Contrato no encontrado',
                error: error.message
            });
        }
    }
}