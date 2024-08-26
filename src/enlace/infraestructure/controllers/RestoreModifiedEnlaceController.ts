import { RestoreModifiedEnlaceUseCase } from "../../application/RestoreModifiedEnlaceUseCase";
import { Request, Response } from "express";

export class RestoreModifiedEnlaceController {
    constructor(private restoreModifiedEnlaceUseCase: RestoreModifiedEnlaceUseCase) {}

    async run(req: Request, res: Response){
        try {
            const modifiedId = req.body.modifiedId;
            const enlaceRestored = await this.restoreModifiedEnlaceUseCase.run(modifiedId);

            if(!enlaceRestored){
                res.status(404).json({
                    msg: 'No se encontraron enlaces'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlace restaurado con éxito',
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlaces no encontrados',
                error: error.message
            });
        }
    }
}