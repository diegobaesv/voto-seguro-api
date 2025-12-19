import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EleccionVigente } from "./eleccion-vigente";

@Entity('partidos_politicos')
export class PartidoPolitico {
    @PrimaryGeneratedColumn({name: 'id_partido_politico'})
    idPartidoPolitico: number;

    @ManyToOne(() => EleccionVigente)
    @JoinColumn({name: 'id_eleccion_vigente'})
    eleccionVigente: EleccionVigente;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'url_imagen'})
    urlImagen: string;

    @Column({name: 'estado_etapa'})
    estadoEtapa: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion'})
    fechaCreacion: Date;
}
