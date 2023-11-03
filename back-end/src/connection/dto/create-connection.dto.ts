import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateConnectionDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  userId: number;
}
