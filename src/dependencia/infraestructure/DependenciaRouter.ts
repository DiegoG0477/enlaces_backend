import express from 'express';
import { getDependenciasController } from './dependencies';

const dependenciaRouter = express.Router();

dependenciaRouter.get('/', (req, res) => getDependenciasController.run(req, res));

export { dependenciaRouter };