import { GetContratoDetalladoByIdUseCase } from "../../application/GetContratoDetalladoByIdUseCase";
import { Request, Response } from "express";

export class GetContratoDetalladoByIdController {
    constructor(private getContratoDetalladoByIdUseCase: GetContratoDetalladoByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratoId: string = req.params.contratoId;
            const contratoDetallado = await this.getContratoDetalladoByIdUseCase.run(contratoId);

            if(!contratoDetallado){
                res.status(404).json({
                    msg: 'No se encontró contrato'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contrato encontrado',
                contrato: contratoDetallado
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contrato no encontrado',
                error: error.message
            });
        }
    }
}