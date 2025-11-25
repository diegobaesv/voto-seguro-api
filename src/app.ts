import 'dotenv/config'
import express, { Application, json } from "express";
import personaRouter from './routes/persona.route';

const app: Application = express();

app.use(json());
app.use('/api/v1/personas', personaRouter);

export default app;
