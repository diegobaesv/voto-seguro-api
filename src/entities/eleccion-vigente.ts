import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('elecciones_vigentes')
export class EleccionVigente {
    @PrimaryGeneratedColumn({ name: 'id_eleccion_vigente' })
    idEleccionVigente: number;

    @Column({ name: 'descripcion'})
    descripcion: string;

    @Column({name: 'url_imagen'})
    urlImagen: string;

    @Column({name: 'fecha_inicio'})
    fechaInicio: Date;

    @Column({name: 'fecha_fin'})
    fechaFin: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;

}