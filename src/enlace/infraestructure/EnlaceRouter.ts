import express from 'express';
import {
    addEnlaceController,
    getEnlaceByIdController,
    getEnlacesByEstatusController,
    getEnlacesController,
    getAllEnlaceDetalladoController,
    updateEnlaceController,
    deleteEnlaceController
} from './dependencies';

const enlaceRouter = express.Router();

enlaceRouter.get('/', (req, res) => getEnlacesController.run(req, res));
enlaceRouter.get('/detallados', (req, res) => getAllEnlaceDetalladoController.run(req, res));
enlaceRouter.get('/estatus/:estatusId', (req, res) => getEnlacesByEstatusController.run(req, res));
enlaceRouter.get('/:enlaceId', (req, res) => getEnlaceByIdController.run(req, res));
enlaceRouter.post('/', (req, res) => addEnlaceController.run(req, res));
enlaceRouter.patch('/:enlaceId', (req, res) => updateEnlaceController.run(req, res));
enlaceRouter.delete('/:enlaceId', (req, res) => deleteEnlaceController.run(req, res));

export { enlaceRouter };