import { ContratoCreateDto } from "../../domain/DTOS/ContratoCreateDto";
import { AddContratoUseCase } from "../../application/AddContratoUseCase";
import { Request, Response } from "express";

export class AddContratoController {
    constructor(private addContratoUseCase: AddContratoUseCase) {}

    async run(req: Request, res: Response){
        try {
            const request = req.body;

            const createDate = new Date();

            // const userId = (req as any).user.id;
            const userId = 7;

            const contrato = new ContratoCreateDto(
                createDate,
                request.persona_id as string,
                request.estatus as number,
                request.descripcion as string,
                request.fechaContrato as Date,
                userId,
                request.id_versionContrato as number,
                request.ubicacion as number,
                request.id_tipoContrato as number
            );

            console.log(contrato);

            const contratoAdded = await this.addContratoUseCase.run(contrato);

            if (!contratoAdded) {
                res.status(404).json({
                    msg: 'Error al agregar contrato, verifique los datos'
                });
                return;
            }

            res.status(201).json({
                msg: 'Contrato agregado correctamente',
                contrato: contratoAdded
            })
        } catch (error: any) {
            res.status(400).json({
                msg: 'Error al agregar contrato',
                error: error.message
            });
        }
    }
}