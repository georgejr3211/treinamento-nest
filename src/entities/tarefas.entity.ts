import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, OneToOne, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { IsEmail, IsDefined, IsOptional } from 'class-validator';
import { Usuario } from './usuario.entity';

@Entity({ name: 'tarefas' })
export class Tarefa {

  @IsOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id_tarefa' })
  id: number;

  @IsDefined()
  @Column({ name: 'nome', nullable: false })
  name: string;

  @Column({ name: 'status', default: 1, nullable: false, type: 'smallint' })
  status: number;

  @CreateDateColumn({ name: 'dt_cadast' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'dt_altera' })
  updatedAt: Date;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;


}