import { GetCargosUseCase } from "../application/GetCargosUseCase";

import { GetCargosController } from "./controllers/GetCargosController";

import { MysqlCargoRepository } from "./MysqlCargoRepository";

const mysqlCargoRepository = new MysqlCargoRepository();

const getCargosUseCase = new GetCargosUseCase(mysqlCargoRepository);

export const getCargosController = new GetCargosController(getCargosUseCase);