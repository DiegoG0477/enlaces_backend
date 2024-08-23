import express from 'express';
import {
    addContratoController,
    getContratoByEnlaceController,
    getContratosController,
    getAllContratoDetalladoController,
    getContratoDetalladoByIdController,
    getAllContratoDetalladoByEnlaceController,
    deleteContratoController,
    updateContratoController,
    //from TIpoInstalacion
    getAllTipoInstalacionController,
    //from TipoContrato
    getAllTipoContratoController,
    //from VersionContrato
    getAllVersionContratoController,
    getVersionesByTipoContratoIdController
} from './dependencies';

const contratoRouter = express.Router();

contratoRouter.delete('/:contratoId', (req, res) => deleteContratoController.run(req, res));
contratoRouter.patch('/:contratoId', (req, res) => updateContratoController.run(req, res));
contratoRouter.post('/', (req, res) => addContratoController.run(req, res));
contratoRouter.get('/', (req, res) => getContratosController.run(req, res));
contratoRouter.get('/detallados', (req, res) => getAllContratoDetalladoController.run(req, res));
contratoRouter.get('/detallados/:contratoId', (req, res) => getContratoDetalladoByIdController.run(req, res));
contratoRouter.get('/detallados/enlaces/:enlaceId', (req, res) => getAllContratoDetalladoByEnlaceController.run(req, res));
contratoRouter.get('/enlaces/:enlaceId', (req, res) => getContratoByEnlaceController.run(req, res));

contratoRouter.get('/tipos-instalacion', (req, res) => getAllTipoInstalacionController.run(req, res));

contratoRouter.get('/tipos-contrato', (req, res) => getAllTipoContratoController.run(req, res));

contratoRouter.get('/versiones', (req, res) => getAllVersionContratoController.run(req, res));
contratoRouter.get('/versiones/:tipoContratoId', (req, res) => getVersionesByTipoContratoIdController.run(req, res));

export { contratoRouter };