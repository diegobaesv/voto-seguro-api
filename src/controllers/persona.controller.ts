import { Request, Response } from "express";
import * as personaService from "../services/persona.service";
import { BaseResponse } from "../shared/base-response";

export const verificarPersona = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        console.log('verificarPersona', data);
        const persona = await personaService.verificarPersona(data);
        if(!persona){
            res.status(404).json(BaseResponse.error('No se encontraron datos'));
            return;
        }
        res.json(BaseResponse.success(persona));
    } catch (error) {
        console.error('verificarPersona:error',error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
