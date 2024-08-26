import { GetModifiedEnlaceByIdUseCase } from "../../application/GetModifiedEnlaceByIdUseCase";
import { Request, Response } from "express";

export class GetModifiedEnlaceByIdController {
    constructor(private getModifiedEnlaceByIdUseCase: GetModifiedEnlaceByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const modifiedId: string = req.params.modifiedId;
            const enlace = await this.getModifiedEnlaceByIdUseCase.run(modifiedId);

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