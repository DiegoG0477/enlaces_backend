import { AddContratoUseCase } from "../application/AddContratoUseCase";
import { GetContratosByEnlaceUseCase } from "../application/GetContratosByEnlaceUseCase";
import { GetContratosUseCase } from "../application/GetContratosUseCase";
import { GetAllContratoDetalladoUseCase } from "../application/GetAllContratoDetalladoUseCase";
import { GetAllContratoDetalladoByEnlaceUseCase } from "../application/GetAllContratoDetalladoByEnlaceUseCase";
import { GetContratoDetalladoByIdUseCase } from "../application/GetContratoDetalladoByIdUseCase";

import { GetAllTipoInstalacionUseCase } from "../application/GetAllTipoInstalacionUseCase";

import { GetAllTipoContratoUseCase } from "../application/GetAllTipoContratoUseCase";

import { GetAllVersionContratoUseCase } from "../application/GetAllVersionContratoUseCase";
import { GetVersionesByTipoContratoIdUseCase } from "../application/GetVersionesByTipoContratoIdUseCase";


import { ContratoRepository } from "../domain/repositories/ContratoRepository";


import { AddContratoController } from "./controllers/AddContratoController";
import { GetContratosByEnlaceController } from "./controllers/GetContratosByEnlaceController";
import { GetContratosController } from "./controllers/GetContratosController";
import { GetAllEnlaceDetalladoController } from "./controllers/GetAllContratoDetalladoController";
import { GetAllContratoDetalladoByEnlaceController } from "./controllers/GetAllContratoDetalladoByEnlaceController";
import { GetContratoDetalladoByIdController } from "./controllers/GetContratoDetalladoByIdController";

import { GetAllTipoInstalacionController } from "./controllers/GetAllTipoInstalacionController";

import { GetAllTipoContratoController } from "./controllers/GetAllTipoContratoController";

import { GetAllVersionContratoController } from "./controllers/GetAllVersionContratoController";
import { GetVersionesByTipoContratoIdController } from "./controllers/GetVersionesByTipoContratoIdController";

import { MysqlContratoRepository} from "./adapters/MysqlContratoRepository";

const mysqlContratoRepository: ContratoRepository = new MysqlContratoRepository();

const addContratoUseCase = new AddContratoUseCase(mysqlContratoRepository);
const getContratoByEnlaceUseCase = new GetContratosByEnlaceUseCase(mysqlContratoRepository);
const getContratosUseCase = new GetContratosUseCase(mysqlContratoRepository);
const getAllContratoDetalladoUseCase = new GetAllContratoDetalladoUseCase(mysqlContratoRepository);
const getAllContratoDetalladoByEnlaceUseCase = new GetAllContratoDetalladoByEnlaceUseCase(mysqlContratoRepository);
const getContratoDetalladoByIdUseCase = new GetContratoDetalladoByIdUseCase(mysqlContratoRepository);

export const addContratoController = new AddContratoController(addContratoUseCase);
export const getContratoByEnlaceController = new GetContratosByEnlaceController(getContratoByEnlaceUseCase);
export const getContratosController = new GetContratosController(getContratosUseCase);
export const getAllContratoDetalladoController = new GetAllEnlaceDetalladoController(getAllContratoDetalladoUseCase);
export const getAllContratoDetalladoByEnlaceController = new GetAllContratoDetalladoByEnlaceController(getAllContratoDetalladoByEnlaceUseCase);
export const getContratoDetalladoByIdController = new GetContratoDetalladoByIdController(getContratoDetalladoByIdUseCase);

const getAllTipoInstalacionUseCase = new GetAllTipoInstalacionUseCase(mysqlContratoRepository);

export const getAllTipoInstalacionController = new GetAllTipoInstalacionController(getAllTipoInstalacionUseCase);

const getAllTipoContratoUseCase = new GetAllTipoContratoUseCase(mysqlContratoRepository);

export const getAllTipoContratoController = new GetAllTipoContratoController(getAllTipoContratoUseCase);

const getAllVersionContratoUseCase = new GetAllVersionContratoUseCase(mysqlContratoRepository);
const getVersionesByTipoContratoIdUseCase = new GetVersionesByTipoContratoIdUseCase(mysqlContratoRepository);

export const getAllVersionContratoController = new GetAllVersionContratoController(getAllVersionContratoUseCase);
export const getVersionesByTipoContratoIdController = new GetVersionesByTipoContratoIdController(getVersionesByTipoContratoIdUseCase);