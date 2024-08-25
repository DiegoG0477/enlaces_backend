export interface IIctiService {
    assignFolio(tipoServicioId: number): Promise<string>;
}