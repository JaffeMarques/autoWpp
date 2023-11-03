import { Inject, Injectable } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { Connection } from './entities/connection.entity';
import { Repository } from 'typeorm';
import { CONNECTION_REPOSITORY } from 'src/config/constants';

@Injectable()
export class ConnectionService {
  constructor(
    @Inject(CONNECTION_REPOSITORY)
    private connectionRepository: Repository<Connection>,
  ) {}

  create(createConnectionDto: CreateConnectionDto) {
    return this.connectionRepository.insert(createConnectionDto);
  }

  findOne(id: number) {
    return this.connectionRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateConnectionDto: UpdateConnectionDto) {
    return this.connectionRepository.update(id, updateConnectionDto);
  }

  remove(id: number) {
    return this.connectionRepository.delete(id);
  }
}
