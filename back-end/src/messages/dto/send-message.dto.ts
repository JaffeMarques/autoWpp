import { IsNotEmpty } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  connectionId?: number;

  userId?: number;
}
