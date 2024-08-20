import { Servicio } from "./Servicio";

export interface ServicioRepository {
    addServicio(servicio: Servicio): Promise<Servicio|null>;
    getServicios(): Promise<Servicio[] | null>;
    getServicioById(id: string): Promise<Servicio | null>;
    getServiciosByEstatus(estatus: number): Promise<Servicio[] | null>;
    updateServicio(servicioId: string, updateData: any): Promise<Servicio | null>;
    deleteServicio(id: string): Promise<boolean>;
}