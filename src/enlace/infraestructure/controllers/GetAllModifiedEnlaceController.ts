import { GetAllModifiedEnlaceUseCase } from "../../application/GetAllModifiedEnlaceUseCase";
import { Request, Response } from "express";

export class GetAllModifiedEnlaceController {
    constructor(private getAllModifiedEnlaceUseCase: GetAllModifiedEnlaceUseCase) {}

    async run(req: Request, res: Response){
        try {
            const enlaces = await this.getAllModifiedEnlaceUseCase.run();

            if(!enlaces){
                res.status(404).json({
                    msg: 'No se encontraron enlaces'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlaces encontrados',
                enlaces: enlaces
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlaces no encontrados',
                error: error.message
            });
        }
    }
}