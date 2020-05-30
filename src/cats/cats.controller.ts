import { Controller, Get, Req, Res, HttpStatus, Post, Put, Delete, Param, Query, Body, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { LowerCasePipe } from 'src/pipes/lower-case.pipe';
import { Public } from 'src/decorators/public.decorator';

@Controller('cats')
export class CatsController {

  constructor(private catService: CatsService) { }

  @Get()
  loadAll(@Query() query: any) {
    return this.catService.loadAll(query);
  }

  @Get(':id')
  loadOne(@Param('id') id: number) {
    return this.catService.loadOne(id);
  }

  @Post()
  @Public()
  @UsePipes(new LowerCasePipe())
  create(@Body() body: CreateCatDto) {
    return this.catService.save(body);
  }

  @Put(':id')
  update(@Param() id: number, @Body() body: any) {
    return this.catService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id') id: number) {
    return this.catService.destroy(id);
  }

}
