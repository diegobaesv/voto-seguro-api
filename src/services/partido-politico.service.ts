import AppDataSource from "../config/datasource";
import { PartidoPolitico } from "../entities/partido-politico";

const repository = AppDataSource.getRepository(PartidoPolitico);

export const listarPartidosPoliticosPorEleccionVigente = async (idEleccionVigente: number) => {
    return repository.find({
        where: {
            estadoAuditoria: '1',
            eleccionVigente: {
                idEleccionVigente
            }
        }
    });
}