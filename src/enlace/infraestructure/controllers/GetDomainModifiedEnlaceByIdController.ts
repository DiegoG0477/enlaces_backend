import { GetDomainModifiedEnlaceByIdUseCase } from "../../application/GetDomainModifiedEnlaceByIdUseCase";
import { Request, Response } from "express";

export class GetDomainModifiedEnlaceByIdController {
    constructor(private getDomainModifiedEnlaceByIdUseCase: GetDomainModifiedEnlaceByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const modifiedId: string = req.params.modifiedId;
            const enlace = await this.getDomainModifiedEnlaceByIdUseCase.run(modifiedId);

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