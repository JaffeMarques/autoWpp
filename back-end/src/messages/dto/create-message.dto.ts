import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  connectionId?: number;

  @IsNotEmpty()
  userId: number;
}
