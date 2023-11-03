import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRole } from '../enums/userRole.enum';

export class UpdateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  role?: UserRole;
}
