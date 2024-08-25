import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Signale } from "signale";
import dotenv from "dotenv";

import { cargoRouter } from "./cargo/infraestructure/CargoRouter";
import { contratoRouter } from "./contrato/infraestructure/ContratoRouter";
import { departamentoRouter } from "./departamento/infraestructure/DepartamentoRouter";
import { dependenciaRouter } from "./dependencia/infraestructure/DependenciaRouter";
import { direccionRouter } from "./direccion/infraestructure/DireccionRouter";
import { enlaceRouter } from "./enlace/infraestructure/EnlaceRouter";
import { usuarioRouter } from "./usuario/infraestructure/UsuarioRouter";

dotenv.config();

// agregar el getServicios, getAllServicioDetallado, getDeletedServicios, getModifiedServicios
// (y las versiones detalladas del de deleted y modified) tanto en servicios, contratos, usuarios y enlaces

// agregar el getDeletedContratos
// agregar el getDeletedEnlaces
// agregar el getDeletedUsuarios
// agregar el modifiedContratos
// agregar el modifiedEnlaces
// agregar el modifiedUsuarios

//en las tablas de servicios, contratos, usuarios y servicios agregar los siguientes campos:
// [deletedAt, modifiedAt, createdAt, createdBy, modifiedBy, deletedBy]

//en la tabla de enlaces, esos campos ya fueron agregados, solo falta agregarlos para que se tomen en cuenta
// en las consultas de get los deleted y get los updated

const PORT = process.env.PORT ?? 3000;

const CLIENT_HOST = process.env.CLIENT_HOST ?? "http://localhost:3001";

const app = express();

const signale = new Signale();

const allowedOrigins = [
    'http://localhost:3000', 
    'http://localhost:5173', 
    'http://localhost:5176',
    'http://localhost:3003',
    CLIENT_HOST
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true); 
        } else {
            return callback(new Error('CORS not allowed'), false); 
        }
    },
    credentials: true, 
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie', 'Cookie', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods'],
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/cargos", cargoRouter);
app.use("/contratos", contratoRouter);
app.use("/departamentos", departamentoRouter);
app.use("/dependencias", dependenciaRouter);
app.use("/direcciones", direccionRouter);
app.use("/enlaces", enlaceRouter);
app.use("/usuarios", usuarioRouter);

app.listen(PORT, async () => {
    signale.success(`Server online on http://localhost:${PORT}/`);
});