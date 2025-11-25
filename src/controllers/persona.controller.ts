import { Request, Response } from "express";
import * as personaService from "../services/persona.service";

export const verificarPersona = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const persona = await personaService.verificarPersona(data);
        res.json(persona);
    } catch (error) {
        console.error('verificarPersona:error',error);
        res.status(500).json({ error: error.message });
    }
}
