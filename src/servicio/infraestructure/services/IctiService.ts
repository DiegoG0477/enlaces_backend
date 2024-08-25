import { IIctiService } from "../../application/services/IIctiService";

export class IctiService implements IIctiService {
    async assignFolio(tipoServicioId: number): Promise<string> {
        // los folios se reinician cada año, así que,
        // por ejemplo, si el tipo de servicio es SD, y el ultimo servicio SD
        // tiene una fecha de creacion anterior al 1 de enero del año actual, el folio
        // se reinicia a 1

        return "Folio";
    }
}