import express from 'express';
import { 
    getDepartamentosByDireccionIdController,
    getDepartamentosController
} from './dependencies';

const departamentoRouter = express.Router();

departamentoRouter.get('/', (req, res) => getDepartamentosController.run(req, res));
departamentoRouter.get('/:direccionId', (req, res) => getDepartamentosByDireccionIdController.run(req, res));

export { departamentoRouter };