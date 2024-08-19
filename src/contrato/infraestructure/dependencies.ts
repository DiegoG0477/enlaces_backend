import { AddContratoUseCase } from "../application/AddContratoUseCase";
import { GetContratoByPersonaUseCase } from "../application/GetContratoByPersonaUseCase";
import { GetContratosUseCase } from "../application/GetContratosUseCase";

import { ContratoRepository } from "../domain/ContratoRepository";

import { AddContratoController } from "./controllers/AddContratoController";
import { GetContratoByPersonaController } from "./controllers/GetContratoByPersonaController";
import { GetContratosController } from "./controllers/GetContratosController";

import { MysqlContratoRepository} from "./MysqlContratoRepository";

const mysqlContratoRepository: ContratoRepository = new MysqlContratoRepository();

const addContratoUseCase = new AddContratoUseCase(mysqlContratoRepository);
const getContratoByPersonaIdUseCase = new GetContratoByPersonaUseCase(mysqlContratoRepository);
const getContratosUseCase = new GetContratosUseCase(mysqlContratoRepository);

export const addContratoController = new AddContratoController(addContratoUseCase);
export const getContratoByPersonaIdController = new GetContratoByPersonaController(getContratoByPersonaIdUseCase);
export const getContratosController = new GetContratosController(getContratosUseCase);