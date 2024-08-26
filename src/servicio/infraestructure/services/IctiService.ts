import { IIctiService } from "../../application/services/IIctiService";
import { MysqlServicioRepository } from "../MysqlServicioRepository";

export class IctiService implements IIctiService {
    async assignFolio(tipoServicioId: number): Promise<string> {
        const servicioRepository = new MysqlServicioRepository();

        const folioData = await servicioRepository.getLastFolioByTipoServicio(tipoServicioId);

        // esto es en caso de que no haya ningun servicio con el tipo de servicio
        // es decir, es el primer servicio de ese tipo
        // en realidad esto es extremadaneamente raro, pero por si las dudas
        // o para entornos de prueba con una BD vacia
        if (!folioData) {
            const folioCodigo = await servicioRepository.getCodigoFolioByTipoServicioId(tipoServicioId);

            if (!folioCodigo) {
                throw new Error("No se encontro el código de folio");
            }

            return `${folioCodigo}1`;
        }

        const lastFolioTxt = folioData.folio;
        
        // se usa una expresion regular de digitos y no una expresion regular de posicion
        // o un split, por si el formato del folio cambia en el futuro, ya sea con codigos
        // de folio mas largos o agregando simbolos
        const numArray = lastFolioTxt.match(/\d/g);
        
        if (!numArray) {
            throw new Error("No se encontro el número del folio");
        }

        const serviceNumber: number = parseInt(numArray.join(""));

        const currentYear = new Date().getFullYear();
        const lastYear = folioData.createdAt.getFullYear();

        if (currentYear > lastYear) {
            return `${folioData.codigo}1`;
        }

        return `${folioData.codigo}${serviceNumber + 1}`;
    }
}