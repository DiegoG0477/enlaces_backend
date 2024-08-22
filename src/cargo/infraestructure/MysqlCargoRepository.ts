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

            if(result[0].length === 0){
                return null;
            }
            
            const cargos: Cargo[] = result[0].map((cargo: any) => new Cargo(
                cargo.idCargo,
                cargo.nombreCargo
            ));

            return cargos;
        } catch (error: any) {
            signale.error(error);
            throw error;
        }
    }

    async getCargoById(cargoId: string): Promise<Cargo | null> {
        try{
            const queryStr: string = 'CALL getCargoById(?)';
            const [result]: any = await query(queryStr, []);

            if(result[0].lenght === 0){
                return null;
            }

            const cargoSql = result[0][0];

            const cargo: Cargo = new Cargo(
                cargoSql.idCargo,
                cargoSql.nombreCargo
            )

            return cargo;

        } catch(error: any){
            signale.error(error);
            throw error;
        }

    }
}