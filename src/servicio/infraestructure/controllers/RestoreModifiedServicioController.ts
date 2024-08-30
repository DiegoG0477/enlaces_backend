import { RestoreModifiedServicioUseCase } from "../../application/use_cases/RestoreModifiedServicioUseCase";
import { Request, Response } from "express";

export class RestoreModifiedServicioController {
    constructor(private restoreModifiedServicioUseCase: RestoreModifiedServicioUseCase) {}

    async run(req: Request, res: Response){
        try {
            const modifiedId: string = req.body.modifiedId;
            
            const servicio = await this.restoreModifiedServicioUseCase.run(modifiedId);

            if(!servicio || servicio === null){
                res.status(404).json({
                    msg: 'Servicio no restaurado o no encontrado'
                });
                return;
            }

            res.status(200).json({
                msg: 'Servicio restaurado correctamente',
                servicio: servicio
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'Servicio no restaurado',
                error: error.message
            });
        }
    }
}