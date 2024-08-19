import { GetContratoByEnlaceUseCase } from "../../application/GetContratoByEnlaceUseCase";
import { Request, Response } from "express";

export class GetContratoByEnlaceController {
    constructor(private getContratoByEnlaceUseCase: GetContratoByEnlaceUseCase) {}

    async run(req: Request, res: Response){
        const enlaceId: string = req.params.enlaceId;

        try {
            const contrato = await this.getContratoByEnlaceUseCase.run(enlaceId);

            if(!contrato){
                res.status(404).json({
                    msg: 'Contrato no encontrado'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contrato encontrado',
                contrato: contrato
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contrato no encontrado',
                error: error.message
            });
        }
    }
}