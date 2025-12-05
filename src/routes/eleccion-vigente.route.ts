import { Router } from "express";
import { listarEleccionesVigentes } from "../controllers/eleccion-vigente.controller";

const router: Router = Router();

router.get('/', listarEleccionesVigentes);

export default router;