import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/config/constants';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { validate } from 'class-validator';
import { CreateUserDto } from './dto/user.dto';

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

  async findOne(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }
}
