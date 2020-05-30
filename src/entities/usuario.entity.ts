import { Tarefa } from './tarefas.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, OneToMany } from 'typeorm';
import { IsEmail, IsDefined, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'usuarios' })
export class Usuario {

  @IsOptional()
  @PrimaryGeneratedColumn('uuid', { name: 'id_usuario' })
  id: number;

  @IsDefined()
  @ApiProperty()
  @Column({ name: 'nome', nullable: false })
  name: string;

  @IsEmail()
  @IsDefined()
  @ApiProperty()
  @Column({ name: 'email', type: 'varchar', length: 60, nullable: false, unique: true })
  email: string;

  @IsDefined()
  @ApiProperty()
  @Column({ name: 'senha', type: 'varchar', length: 150, nullable: false, select: false })
  password: string;

  @Column({ name: 'status', default: 1, nullable: false, type: 'smallint' })
  status: number;

  @CreateDateColumn({ name: 'dt_cadast' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'dt_altera' })
  updatedAt: Date;

  @ApiProperty()
  @IsOptional()
  @OneToMany(() => Tarefa, tarefa => tarefa.usuario, { cascade: true })
  tarefas: Tarefa[];

}