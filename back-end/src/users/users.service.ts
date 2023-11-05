import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/config/constants';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { validate } from 'class-validator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from './enums/user-role.enum';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      throw new Error('Invalid Data');
    } else {
      await this.userRepository.insert(createUserDto);
      return createUserDto.username;
    }
  }

  async update(id: number, user: UpdateUserDto, loggedUser: any) {
    const errors = await validate(user);
    if (errors.length > 0) {
      throw new Error('Invalid Data');
    } else {
      if (await this.isAdmin(loggedUser.username)) {
        await this.userRepository.update({ id: id }, user);
        return true;
      }
    }
  }

  async findOne(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async findAll(user): Promise<User[]> {
    if (await this.isAdmin(user.username)) {
      return this.userRepository.find();
    } else {
      throw new UnauthorizedException();
    }
  }

  async isAdmin(userName: string) {
    const userInstance = await this.findOne(userName);
    if (userInstance && userInstance.role == UserRole.ADMIN) {
      return true;
    }
    return false;
  }
}
