import express from 'express';
import {
    addServicioController,
    getAllDomainServicioController,
    getAllServicioController,
    getDomainServicioByIdController,
    getServicioByIdController,
    updateServicioController,
    //tipos
    getAllTipoActividadController,
    getAllTipoServicioController,
    getAllEstadoServicioController
} from './dependencies';

const servicioRouter = express.Router();

servicioRouter.post('/', (req, res) => addServicioController.run(req, res));
servicioRouter.get('/', (req, res) => getAllDomainServicioController.run(req, res));
servicioRouter.get('/detallados', (req, res) => getAllServicioController.run(req, res));
servicioRouter.get('/:servicioId', (req, res) => getDomainServicioByIdController.run(req, res));
servicioRouter.get('/detallados/:servicioId', (req, res) => getServicioByIdController.run(req, res));
servicioRouter.patch('/:servicioId', (req, res) => updateServicioController.run(req, res));

servicioRouter.get('/tipos/actividad', (req, res) => getAllTipoActividadController.run(req, res));
servicioRouter.get('/tipos/servicio', (req, res) => getAllTipoServicioController.run(req, res));
servicioRouter.get('/tipos/estados-servicio', (req, res) => getAllEstadoServicioController.run(req, res));

export { servicioRouter };