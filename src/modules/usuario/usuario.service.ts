import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) { }

  async loadAll() {
    try {
      const result = await this.usuarioRepository.createQueryBuilder('usuario')
        .innerJoinAndSelect('usuario.tarefas', 'tarefas')
        .getManyAndCount();

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async loadOne(id: string) {
    try {
      const result = await this.usuarioRepository.createQueryBuilder('usuario')
        .where('usuario.id = :idUsuario', { idUsuario: id })
        .getOne();

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async save(data: Usuario) {
    try {
      const result = await this.usuarioRepository.save(data);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, body: Usuario) {
    try {
      await this.usuarioRepository.update(id, body);

      const result = await this.loadOne(id);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async destroy(id: string) {
    try {
      await this.usuarioRepository.delete(id);

      return { deleted: true };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
