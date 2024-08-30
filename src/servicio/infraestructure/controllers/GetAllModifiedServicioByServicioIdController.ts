import { GetAllModifiedServicioByServicioIdUseCase } from "../../application/use_cases/GetAllModifiedServicioByServicioIdUseCase";
import { Request, Response } from "express";

export class GetAllModifiedServicioByServicioIdController {
    constructor(private getAllModifiedServicioByServicioIdUseCase: GetAllModifiedServicioByServicioIdUseCase) {}

    async run(req: Request, res: Response){
        try {
            const servicioId: string = req.params.servicioId;
            
            const servicio = await this.getAllModifiedServicioByServicioIdUseCase.run(servicioId);

            if(!servicio || servicio === null){
                res.status(404).json({
                    msg: 'Servicios no encontrados'
                });
                return;
            }

            res.status(200).json({
                msg: 'Servicio encontrado',
                servicios: servicio
            });
        } catch (error: any) {
            res.status(400).json({
                msg: 'Servicios no encontrados',
                error: error.message
            });
        }
    }
}