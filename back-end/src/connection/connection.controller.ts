import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req) {
    return this.connectionService.create(req.body, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.connectionService.findOne(+id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findByUser(@Request() req) {
    return this.connectionService.findByUser(req);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateConnectionDto: UpdateConnectionDto,
  ) {
    return this.connectionService.update(+id, updateConnectionDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.connectionService.remove(+id);
  }
}
