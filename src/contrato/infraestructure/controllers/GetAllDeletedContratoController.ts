import { GetAllDeletedContratoUseCase } from "../../application/GetAllDeletedContratoUseCase";
import { Request, Response } from "express";

export class GetAllDeletedContratoController {
    constructor(private getAllDeletedContratoUseCase: GetAllDeletedContratoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const allDeletedContrato = await this.getAllDeletedContratoUseCase.run();

            if(!allDeletedContrato){
                res.status(404).json({
                    msg: 'No se encontraron contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contratos encontrados',
                contratos: allDeletedContrato
            });
        } catch (error: any) {
            res.status(500).json({
                msg: 'Contratos no encontrados',
                error: error.message
            });
        }
    }
}