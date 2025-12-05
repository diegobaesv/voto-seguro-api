import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as eleccionVigenteService from '../services/eleccion-vigente.service';

export const listarEleccionesVigentes = async (req: Request, res: Response) => {
    try {
       const eleccionesVigentes = await eleccionVigenteService.listarEleccionesVigentes();
        res.json(BaseResponse.success(eleccionesVigentes));
    } catch (error) {
        console.error('listarEleccionesVigentes:error', error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}