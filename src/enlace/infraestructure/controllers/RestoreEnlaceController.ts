import { RestoreEnlaceUseCase } from "../../application/RestoreEnlaceUseCase";
import { Request, Response } from "express";

export class RestoreEnlaceController {
    constructor(private restoreEnlaceUseCase: RestoreEnlaceUseCase) {}

    async run(req: Request, res: Response){
        try {
            const enlaceId = req.body.enlaceId;
            const enlaceRestored = await this.restoreEnlaceUseCase.run(enlaceId);

            if(!enlaceRestored){
                res.status(404).json({
                    msg: 'No se encontró el enlace'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlace restaurado con éxito',
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlace no restaurado',
                error: error.message
            });
        }
    }
}