import { Module } from '@nestjs/common';
import { TarefaController } from './tarefa.controller';
import { TarefaService } from './tarefa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { Tarefa } from 'src/entities/tarefas.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tarefa,
    ]),
  ],
  controllers: [TarefaController],
  providers: [TarefaService],
})
export class TarefaModule { }
