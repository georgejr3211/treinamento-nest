import { IsString, IsInt, IsEmail, IsDefined } from 'class-validator';

export class CreateCatDto {
  @IsString({
    message: 'O campo name deve ser do tipo string',
  })
  name: string;
}
