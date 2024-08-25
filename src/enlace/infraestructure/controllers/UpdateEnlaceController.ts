import { UpdateEnlaceUseCase } from "../../application/UpdateEnlaceUseCase";
import { Request, Response } from "express";

export class UpdateEnlaceController {
    constructor(private updateEnlaceUseCase: UpdateEnlaceUseCase) {}

    async run(req: Request, res: Response){
        try {
            const enlaceId: string = req.params.enlaceId;

            const updateDate = new Date();
            const userId = (req as any).user.id;
            
            const updateData: any = {
                updatedAt: updateDate,
                updatedBy: userId,
                nombre: req.body.nombre,
                apellidoP: req.body.apellidoPaterno,
                apellidoM: req.body.apellidoMaterno,
                correo: req.body.correo,
                telefono: req.body.telefono,
                estatus: req.body.estatus,
                adscripcionId: req.body.adscripcion,
                cargoId: req.body.cargo,
                createdBy: req.body.createdBy,
                tipoPersonaId: req.body.tipoPersona_id,
                direccionId: req.body.direccion
            };
            
            const enlace = await this.updateEnlaceUseCase.run(enlaceId, updateData);

            if(!enlace || enlace === null){
                res.status(404).json({
                    msg: 'Enlace no actualizado o no encontrado'
                });
                return;
            }

            res.status(200).json({
                msg: 'Enlace actualizado',
                enlace: enlace
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Enlace no actualizado',
                error: error.message
            });
        }
    }
}