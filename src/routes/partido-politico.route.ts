import { Router } from "express";
import { listarPartidosPoliticosPorEleccionVigente } from "../controllers/partido-politico.controller";

const router: Router = Router();

router.get('/eleccion-vigente/:idEleccionVigente', listarPartidosPoliticosPorEleccionVigente);

export default router;