import { AddUsuarioUseCase } from "../application/AddUsuarioUseCase";
import { ValidateLoginUseCase } from "../application/ValidateLoginUseCase";

import { LoginController } from "./controllers/LoginController";
import { RegisterController } from "./controllers/RegisterController";

import { MysqlUsuarioRepository } from "./MysqlUsuarioRepository";

import { EncryptService } from "./services/EncryptService";
import { TokenService } from "../../shared/infraestructure/services/TokenService";

const mysqlUsuarioRepository = new MysqlUsuarioRepository();

const encryptService = new EncryptService();
const tokenService = new TokenService();

const addUsuarioUseCase = new AddUsuarioUseCase(mysqlUsuarioRepository, encryptService);
const validateLoginUseCase = new ValidateLoginUseCase(mysqlUsuarioRepository, encryptService);

const registerController = new RegisterController(addUsuarioUseCase);
const loginController = new LoginController(validateLoginUseCase, tokenService);

export { registerController, loginController };