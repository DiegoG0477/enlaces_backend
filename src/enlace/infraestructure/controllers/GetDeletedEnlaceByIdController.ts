import { GetDeletedEnlaceByIdUseCase } from "../../application/GetDeletedEnlaceByIdUseCase";
import { Request, Response } from "express";

export class GetDeletedEnlaceByIdController {
    constructor(private getDeletedEnlaceByIdUseCase: GetDeletedEnlaceByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const enlaceId = req.params.enlaceId;
            const enlace = await this.getDeletedEnlaceByIdUseCase.run(enlaceId);

            if(!enlace){
                res.status(404).json({
                    msg: 'No se encontró el enlace'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlace encontrado',
                enlace: enlace
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlace no encontrado',
                error: error.message
            });
        }
    }
}