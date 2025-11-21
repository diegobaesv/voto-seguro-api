import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn({name: 'id_persona'})
    idPersona: number;

    @Column({name: 'numero_documento'})
    numeroDocumento: string;

    @Column({ name: 'fecha_emision'})
    fechaEmision: Date;

    @Column({name: 'digito_verificador'})
    digitoVerificador: number;

    @Column({name: 'nombre'})
    nombres: string;

    @Column({name: 'apellido_paterno'})
    apellidoPaterno: string;

    @Column({name: 'apellido_paterno'})
    apellidoMaterno: string;

    @Column({name: 'mesa_votacion'})
    mesaVotacion: string;

    @Column({name: 'flag_miembro_mesa'})
    flagMiembroMesa: boolean;

    @Column({name: 'fecha_nacimiento'})
    fechaNacimiento: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion'})
    fechaCreacion: Date;
}
