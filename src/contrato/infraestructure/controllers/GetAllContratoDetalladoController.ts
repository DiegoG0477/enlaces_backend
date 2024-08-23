import { GetAllContratoDetalladoUseCase } from "../../application/GetAllContratoDetalladoUseCase";
import { Request, Response } from "express";

export class GetAllEnlaceDetalladoController {
    constructor(private getAllContratoDetalladoUseCase: GetAllContratoDetalladoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const allContratoDetallado = await this.getAllContratoDetalladoUseCase.run();

            if(!allContratoDetallado){
                res.status(404).json({
                    msg: 'No se encontraron enlaces'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlaces encontrados',
                contratos: allContratoDetallado
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlaces no encontrados',
                error: error.message
            });
        }
    }
}