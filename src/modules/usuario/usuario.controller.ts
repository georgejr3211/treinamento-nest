import { Controller, Get, Next, Res, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { NextFunction, Response } from 'express';

import { UsuarioService } from './usuario.service';
import { Usuario } from 'src/entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) { }

  @Get()
  async loadAll(@Res() res: Response, @Next() next: NextFunction) {
    try {
      const result = await this.usuarioService.loadAll();

      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  @Get(':id')
  async loadOne(@Param('id') id: string, @Res() res: Response, @Next() next: NextFunction) {
    try {
      const result = await this.usuarioService.loadOne(id);

      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  @Post()
  async save(@Body() body: Usuario, @Res() res: Response, @Next() next: NextFunction) {
    try {
      const result = await this.usuarioService.save(body);

      return res.send(result);
    } catch (error) {
      next(error);
    }

  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Usuario, @Res() res: Response, @Next() next: NextFunction) {
    try {
      const result = await this.usuarioService.update(id, body);

      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  @Delete(':id')
  async destroy(@Param('id') id: string, @Res() res: Response, @Next() next: NextFunction) {
    try {
      const result = await this.usuarioService.destroy(id);

      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

}
