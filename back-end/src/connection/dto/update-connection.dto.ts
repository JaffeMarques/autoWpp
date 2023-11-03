import { PartialType } from '@nestjs/mapped-types';
import { CreateConnectionDto } from './create-connection.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateConnectionDto extends PartialType(CreateConnectionDto) {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;
}
