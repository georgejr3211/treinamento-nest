import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CatsService {
  data = [];
  loadAll(query: any) {
    return this.data;
  }

  loadOne(id: number) {
    const result = this.data.find(cat => cat.id === Number(id));

    if (!result) {
      throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  save(data: any) {
    this.data.push(data);

    return data;
  }

  update(id: number, data: any) {
    this.data = this.data.map(cat => {
      if (cat.id === Number(id)) {
        cat = data;
      }

      return data;
    });

    return data;
  }

  destroy(id: number) {
    this.data = this.data.filter(cat => cat.id !== Number(id));

    return 'Deletado com sucesso';
  }

}
