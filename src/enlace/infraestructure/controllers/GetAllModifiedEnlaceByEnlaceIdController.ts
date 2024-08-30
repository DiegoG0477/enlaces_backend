import { GetAllModifiedEnlaceByEnlaceId } from "../../application/GetAllModifiedEnlaceByEnlaceIdUseCase";
import { Request, Response } from "express";

export class GetAllModifiedEnlaceByEnlaceIdController {
    constructor(private getAllModifiedEnlaceByEnlaceId: GetAllModifiedEnlaceByEnlaceId) {}

    async run(req: Request, res: Response){
        try {
            const enlaceId = req.params.enlaceId;
            const allModifiedEnlace = await this.getAllModifiedEnlaceByEnlaceId.run(enlaceId);

            if(!allModifiedEnlace){
                res.status(404).json({
                    msg: 'No se encontraron respaldos de enlaces'
                });
                return;
            }

            res.status(200).json({
                msg: 'respaldos de enlaces encontrados',
                enlaces: allModifiedEnlace
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'respaldos de enlaces no encontrados',
                error: error.message
            });
        }
    }
}