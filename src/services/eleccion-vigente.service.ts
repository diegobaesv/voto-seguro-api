import AppDataSource from "../config/datasource"
import { EleccionVigente } from "../entities/eleccion-vigente"

const repository = AppDataSource.getRepository(EleccionVigente);

export const listarEleccionesVigentes = async () => {
    return repository.find({
        where: {
            estadoAuditoria: '1'
        }
    });
}