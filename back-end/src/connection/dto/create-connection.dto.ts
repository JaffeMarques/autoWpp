import { IsNotEmpty } from 'class-validator';

export class CreateConnectionDto {
  @IsNotEmpty()
  name: string;

  userId?: number;
}
