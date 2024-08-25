import { UpdateContratoUseCase } from "../../application/UpdateContratoUseCase";
import { Request, Response } from "express";

export class UpdateContratoController {
    constructor(private updateContratoUseCase: UpdateContratoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const contratoId: string = req.params.contratoId;

            const userId = (req as any).user.id;
            const updateDate = new Date();
    
            const updateData: any = {
                updatedBy: userId,
                updatedAt: updateDate,
                estatus: req.body.estatus,
                descripcion: req.body.descripcion,
                fechaContrato: req.body.fechaContrato,
                userId: req.body.userId,
                versionContratoId: req.body.id_versionContrato,
                ubicacionId: req.body.ubicacion,
                tipoContratoId: req.body.id_tipoContrato,
            };

            const contrato = await this.updateContratoUseCase.run(contratoId, updateData);

            if(!contrato || contrato === null){
                res.status(404).json({
                    msg: 'Contrato no actualizado o no encontrado'
                });
                return;
            }

            res.status(200).json({
                msg: 'Contrato actualizado',
                contrato: contrato
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contrato no actualizado',
                error: error.message
            });
        }
    }
}