import { GetAllContratoDetalladoUseCase } from "../../application/GetAllContratoDetalladoUseCase";
import { Request, Response } from "express";

export class GetAllEnlaceDetalladoController {
    constructor(private getAllContratoDetalladoUseCase: GetAllContratoDetalladoUseCase) {}

    async run(req: Request, res: Response){
        try {
            //query param de estatus en el get
            const { estatus } = req.query;

            let estatusNumber: number = 0;

            if(estatus){
                estatusNumber = parseInt(estatus as string);
            }
            
            const allContratoDetallado = await this.getAllContratoDetalladoUseCase.run(estatusNumber);

            if(!allContratoDetallado){
                res.status(404).json({
                    msg: 'No se encontraron contratos'
                });
                return;
            }

            res.status(200).json({
                msg: 'contratos encontrados',
                contratos: allContratoDetallado
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'contratos no encontrados',
                error: error.message
            });
        }
    }
}