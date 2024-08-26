import express from 'express';
import {
    addEnlaceController,
    getEnlaceByIdController,
    getEnlacesByEstatusController,
    getEnlacesController,
    getEnlaceCompletoByIdController,
    getAllEnlaceDetalladoController,
    updateEnlaceController,
    deleteEnlaceController,
    getAllDeletedEnlaceController,
    getAllModifiedEnlaceController,
    getDomainDeletedEnlaceByIdController,
    getDomainModifiedEnlaceByIdController,
    getDeletedEnlaceByIdController,
    getModifiedEnlaceByIdController,
    restoreEnlaceController,
    restoreModifiedEnlaceController
} from './dependencies';

const enlaceRouter = express.Router();

enlaceRouter.get('/', (req, res) => getEnlacesController.run(req, res));
enlaceRouter.get('/detallados', (req, res) => getAllEnlaceDetalladoController.run(req, res));
enlaceRouter.get('/detallados/completo/:enlaceId', (req, res) => getEnlaceCompletoByIdController.run(req, res));
enlaceRouter.get('/estatus/:estatusId', (req, res) => getEnlacesByEstatusController.run(req, res));
enlaceRouter.get('/:enlaceId', (req, res) => getEnlaceByIdController.run(req, res));
enlaceRouter.post('/', (req, res) => addEnlaceController.run(req, res));
enlaceRouter.patch('/:enlaceId', (req, res) => updateEnlaceController.run(req, res));
enlaceRouter.delete('/:enlaceId', (req, res) => deleteEnlaceController.run(req, res));
enlaceRouter.get('/deleted/detallados', (req, res) => getAllDeletedEnlaceController.run(req, res));
enlaceRouter.get('/deleted/:enlaceId', (req, res) => getDomainDeletedEnlaceByIdController.run(req, res));
enlaceRouter.get('/deleted/detallados/:enlaceId', (req, res) => getDeletedEnlaceByIdController.run(req, res));
enlaceRouter.get('/modified/detalados', (req, res) => getAllModifiedEnlaceController.run(req, res));
enlaceRouter.get('/modified/:enlaceId', (req, res) => getDomainModifiedEnlaceByIdController.run(req, res));
enlaceRouter.get('/modified/detallados/:enlaceId', (req, res) => getModifiedEnlaceByIdController.run(req, res));
enlaceRouter.patch('/restore/:enlaceId', (req, res) => restoreEnlaceController.run(req, res));
enlaceRouter.patch('/restore-modified/:enlaceId', (req, res) => restoreModifiedEnlaceController.run(req, res));

export { enlaceRouter };