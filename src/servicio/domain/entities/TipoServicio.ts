import { IctiTipos } from "../../../shared/domain/interfaces/IctiTipos";

export class TipoServicio implements IctiTipos {
    constructor(
        readonly id: number,
        readonly nombre: string,
        readonly estatus: string,
        readonly codigo: string
    ) {}
}