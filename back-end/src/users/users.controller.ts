import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Request() req, @Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.update(+id, user, req.user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req) {
    return this.userService.findAll(req.user);
  }
}
