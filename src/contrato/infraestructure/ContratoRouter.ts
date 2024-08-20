import express from 'express';
import {
    addContratoController,
    getContratoByEnlaceController,
    getContratosController,
    //from TIpoInstalacion
    getAllTipoInstalacionController,
    //from TipoContrato
    getAllTipoContratoController,
    //from VersionContrato
    getAllVersionContratoController,
    getVersionesByTipoContratoIdController
} from './dependencies';

const contratoRouter = express.Router();

contratoRouter.post('/', (req, res) => addContratoController.run(req, res));
contratoRouter.get('/', (req, res) => getContratosController.run(req, res));
contratoRouter.get('/enlaces/:enlaceId', (req, res) => getContratoByEnlaceController.run(req, res));

contratoRouter.get('/tipos-instalacion', (req, res) => getAllTipoInstalacionController.run(req, res));

contratoRouter.get('/tipos-contrato', (req, res) => getAllTipoContratoController.run(req, res));

contratoRouter.get('/versiones', (req, res) => getAllVersionContratoController.run(req, res));
contratoRouter.get('/versiones/:tipoContratoId', (req, res) => getVersionesByTipoContratoIdController.run(req, res));

export { contratoRouter };