import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as partidoPoliticoService from '../services/partido-politico.service';

export const listarPartidosPoliticosPorEleccionVigente = async (req: Request, res: Response) => {
    try {
        console.log('listarPartidosPoliticosPorEleccionVigente');
        const { idEleccionVigente } = req.params;
        const partidosPoliticos = await partidoPoliticoService.listarPartidosPoliticosPorEleccionVigente(Number(idEleccionVigente));
        res.json(BaseResponse.success(partidosPoliticos));
    } catch (error) {
        console.error('listarPartidosPoliticosPorEleccionVigente:error', error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}