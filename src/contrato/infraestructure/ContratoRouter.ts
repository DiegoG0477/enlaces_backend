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

//prefijo tipo -> /contrato (en realidad deberia ser "/contratos")
contratoRouter.post('/createContrato', (req, res) => addContratoController.run(req, res));
contratoRouter.get('/', (req, res) => getContratosController.run(req, res));
//deberia ser "/:personaId"
contratoRouter.get('/byId/:personaId', (req, res) => getContratoByEnlaceController.run(req, res));

contratoRouter.get('/tipos-instalacion', (req, res) => getAllTipoInstalacionController.run(req, res));

contratoRouter.get('/tipos-contrato', (req, res) => getAllTipoContratoController.run(req, res));

contratoRouter.get('/versiones', (req, res) => getAllVersionContratoController.run(req, res));
contratoRouter.get('/versiones/:tipoContratoId', (req, res) => getVersionesByTipoContratoIdController.run(req, res));

export { contratoRouter };