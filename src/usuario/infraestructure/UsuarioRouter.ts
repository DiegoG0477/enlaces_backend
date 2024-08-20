import express from 'express';
import {
    loginController,
    registerController
} from './dependencies';

const usuarioRouter = express.Router();

usuarioRouter.post('/auth/register', (req, res) => registerController.run(req, res));
usuarioRouter.post('/auth/login', (req, res) => loginController.run(req, res));