import { DeleteContratoUseCase } from "../../application/DeleteContratoUseCase";
import { Request, Response } from "express";

export class DeleteContratoController {
    constructor(private useCase: DeleteContratoUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const contratoId: string = req.params.contratoId;

            const deleteDate = new Date();
            const userId = (req as any).user.id;

            const deleted = await this.useCase.run(contratoId, userId, deleteDate);

            if (!deleted) {
                res.status(404).json({
                    message: 'Contrato no encontrado'
                });
                return;
            }
            
            res.status(200).json({
                message: 'Contrato eliminado correctamente'
            });
        } catch (error: any) {
            res.status(400).json({
                message: 'Error al eliminar contrato',
                error: error.message
            });
        }
    }
}