import 'dotenv/config'
import express, { Application, json } from "express";
import personaRouter from './routes/persona.route';
import eleccionVigenteRouter from './routes/eleccion-vigente.route';

const app: Application = express();

app.use(json());
app.use('/api/v1/personas', personaRouter);
app.use('/api/v1/elecciones-vigentes', eleccionVigenteRouter);

export default app;
