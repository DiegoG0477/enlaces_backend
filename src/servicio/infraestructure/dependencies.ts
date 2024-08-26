import { AddServicioUseCase } from "../application/use_cases/AddServicioUseCase";
import { GetAllDomainServicioUseCase } from "../application/use_cases/GetAllDomainServicioUseCase";
import { GetAllServicioUseCase } from "../application/use_cases/GetAllServicioUseCase";
import { GetDomainServicioByIdUseCase } from "../application/use_cases/GetDomainServicioByIdUseCase";
import { GetServicioByIdUseCase } from "../application/use_cases/GetServicioByIdUseCase";
import { UpdateServicioUseCase } from "../application/use_cases/UpdateServicioUseCase";

import { GetAllTipoActividadUseCase } from "../application/use_cases/GetAllTipoActividadUseCase";
import { GetAllTipoServicioUseCase } from "../application/use_cases/GetAllTIpoServicioUseCase";
import { GetAllEstadoServicioUseCase } from "../application/use_cases/GetAllEstadoServicioUseCase";

import { AddServicioController } from "./controllers/AddServicioController";
import { GetAllDomainServicioController } from "./controllers/GetAllDomainServicioController";
import { GetAllServicioController } from "./controllers/GetAllServicioController";
import { GetDomainServicioByIdController } from "./controllers/GetDomainServicioByIdController";
import { GetServicioByIdController } from "./controllers/GetServicioByIdController";
import { UpdateServicioController } from "./controllers/UpdateServicioController";

import { GetAllTipoActividadController } from "./controllers/GetAllTipoActividadController";
import { GetAllTipoServicioController } from "./controllers/GetAllTipoServicioController";
import { GetAllEstadoServicioController } from "./controllers/GetAllEstadoServicioController";

import { MysqlServicioRepository } from "./MysqlServicioRepository";

import { IctiService } from "./services/IctiService";

const mysqlServicioRepository = new MysqlServicioRepository();

const ictiService = new IctiService();

const addServicioUseCase = new AddServicioUseCase(mysqlServicioRepository, ictiService);
const getAllDomainServicioUseCase = new GetAllDomainServicioUseCase(mysqlServicioRepository);
const getAllServicioUseCase = new GetAllServicioUseCase(mysqlServicioRepository);
const getDomainServicioByIdUseCase = new GetDomainServicioByIdUseCase(mysqlServicioRepository);
const getServicioByIdUseCase = new GetServicioByIdUseCase(mysqlServicioRepository);
const updateServicioUseCase = new UpdateServicioUseCase(mysqlServicioRepository);

const getAllTipoActividadUseCase = new GetAllTipoActividadUseCase(mysqlServicioRepository);
const getAllTipoServicioUseCase = new GetAllTipoServicioUseCase(mysqlServicioRepository);
const getAllEstadoServicioUseCase = new GetAllEstadoServicioUseCase(mysqlServicioRepository);

export const addServicioController = new AddServicioController(addServicioUseCase);
export const getAllDomainServicioController = new GetAllDomainServicioController(getAllDomainServicioUseCase);
export const getAllServicioController = new GetAllServicioController(getAllServicioUseCase);
export const getDomainServicioByIdController = new GetDomainServicioByIdController(getDomainServicioByIdUseCase);
export const getServicioByIdController = new GetServicioByIdController(getServicioByIdUseCase);
export const updateServicioController = new UpdateServicioController(updateServicioUseCase);

export const getAllTipoActividadController = new GetAllTipoActividadController(getAllTipoActividadUseCase);
export const getAllTipoServicioController = new GetAllTipoServicioController(getAllTipoServicioUseCase);
export const getAllEstadoServicioController = new GetAllEstadoServicioController(getAllEstadoServicioUseCase);