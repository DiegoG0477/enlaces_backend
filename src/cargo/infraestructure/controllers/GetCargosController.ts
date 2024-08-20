import { GetCargosUseCase } from "../../application/GetCargosUseCase";
import { Request, Response } from "express";

export class GetCargosController {
    constructor(private getCargosUseCase: GetCargosUseCase) {}

    async run(req: Request, res: Response){
        try {
            const cargos = await this.getCargosUseCase.run();

            if(!cargos){
                res.status(404).json({
                    msg: 'No se encontraron cargos'
                });
                return;
            }

            res.status(200).json({
                msg: 'Cargos encontrados',
                cargos: cargos
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Cargos no encontrados',
                error: error.message
            });
        }
    }
}