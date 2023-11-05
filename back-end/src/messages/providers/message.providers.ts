import { DataSource } from 'typeorm';
import { CONNECTION_DEFAULT, MESSAGE_REPOSITORY } from 'src/config/constants';
import { Message } from '../entities/message.entity';

export const messageProviders = [
  {
    provide: MESSAGE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Message),
    inject: [CONNECTION_DEFAULT],
  },
];
