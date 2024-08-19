import express from 'express';
import {
    addContratoController,
    getContratoByPersonaIdController,
    getContratosController
} from './dependencies';

const contratoRouter = express.Router();

//prefijo tipo -> /contrato (en realidad deberia ser "/contratos")
contratoRouter.post('/createContrato', (req, res) => addContratoController.run(req, res));
contratoRouter.get('/', (req, res) => getContratosController.run(req, res));
//deberia ser "/:personaId"
contratoRouter.get('/byId/:personaId', (req, res) => getContratoByPersonaIdController.run(req, res));