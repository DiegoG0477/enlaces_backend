import { AddContratoUseCase } from "../application/AddContratoUseCase";
import { GetContratoByEnlaceUseCase } from "../application/GetContratoByEnlaceUseCase";
import { GetContratosUseCase } from "../application/GetContratosUseCase";

import { ContratoRepository } from "../domain/ContratoRepository";

import { AddContratoController } from "./controllers/AddContratoController";
import { GetContratoByEnlaceController } from "./controllers/GetContratoByEnlaceController";
import { GetContratosController } from "./controllers/GetContratosController";

import { MysqlContratoRepository} from "./MysqlContratoRepository";

const mysqlContratoRepository: ContratoRepository = new MysqlContratoRepository();

const addContratoUseCase = new AddContratoUseCase(mysqlContratoRepository);
const getContratoByEnlaceUseCase = new GetContratoByEnlaceUseCase(mysqlContratoRepository);
const getContratosUseCase = new GetContratosUseCase(mysqlContratoRepository);

export const addContratoController = new AddContratoController(addContratoUseCase);
export const getContratoByEnlaceController = new GetContratoByEnlaceController(getContratoByEnlaceUseCase);
export const getContratosController = new GetContratosController(getContratosUseCase);