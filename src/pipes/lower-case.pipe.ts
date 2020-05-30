import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LowerCasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.name = value.name.toLowerCase();
    return value;
  }
}
