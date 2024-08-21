import { Cargo } from "../domain/Cargo";
import { CargoRepository } from "../domain/CargoRepository";
import { query } from "../../database/MysqlAdapter";
import { Signale } from "signale";

const signale = new Signale({scope: 'MysqlCargoRepository'});

export class MysqlCargoRepository implements CargoRepository{
    async getCargos(): Promise<Cargo[] | null> {
        try {
            const queryStr: string = 'CALL getCargos()';
            const [result]: any = await query(queryStr, []);

            if(result.length === 0){
                return null;
            }

            const cargos: Cargo[] = result.map((cargo: any) => new Cargo(
                cargo.idCargo,
                cargo.nombreCargo
            ));

            return cargos;
        } catch (error: any) {
            signale.error(error);
            return error;
        }
    }
}