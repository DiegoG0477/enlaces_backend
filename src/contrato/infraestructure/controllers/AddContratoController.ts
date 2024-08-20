import { Contrato } from "../../domain/entities/Contrato";
import { AddContratoUseCase } from "../../application/AddContratoUseCase";
import { Request, Response } from "express";

export class AddContratoController {
    constructor(private addContratoUseCase: AddContratoUseCase) {}

    async run(req: Request, res: Response){
        const request = req.body;

        const contrato = new Contrato(
            request.persona_id as string,
            request.estatus as number,
            request.descripcion as string,
            request.fechaContrato as Date,
            request.id_user as number,
            request.id_versionContrato as number,
            request.ubicacion as number,
            request.id_tipoContrato as number
        );

        try {
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