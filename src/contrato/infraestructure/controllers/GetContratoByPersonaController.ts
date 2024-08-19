import { GetContratoByPersonaUseCase } from "../../application/GetContratoByPersonaUseCase";
import { Request, Response } from "express";

export class GetContratoByPersonaController {
    constructor(private getContratoByPersonaIdUseCase: GetContratoByPersonaUseCase) {}

    async run(req: Request, res: Response){
        const personaId: string = req.params.personaId;

        try {
            const contrato = await this.getContratoByPersonaIdUseCase.run(personaId);
            res.status(200).json({
                msg: 'Contrato encontrado',
                contrato: contrato
            });
        } catch (error: any) {
            res.status(404).json({
                msg: 'Contrato no encontrado',
                error: error.message
            });
        }
    }
}