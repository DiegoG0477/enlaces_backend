import { GetEnlaceCompletoByIdUseCase } from "../../application/GetEnlaceCompletoByIdUseCase";
import { Request, Response } from "express";

export class GetEnlaceCompletoByIdController {
    constructor(private getEnlaceCompletoByIdUseCase: GetEnlaceCompletoByIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const enlaceId: string = req.params.enlaceId;
            const enlaceCompleto = await this.getEnlaceCompletoByIdUseCase.run(enlaceId);

            if(!enlaceCompleto){
                res.status(404).json({
                    msg: 'No se encontró enlace'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlace encontrado',
                enlace: enlaceCompleto
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlace no encontrado',
                error: error.message
            });
        }
    }
}