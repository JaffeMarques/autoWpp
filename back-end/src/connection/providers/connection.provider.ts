import { DataSource } from 'typeorm';
import {
  CONNECTION_DEFAULT,
  CONNECTION_REPOSITORY,
} from 'src/config/constants';
import { Connection } from '../entities/connection.entity';

export const connectionProviders = [
  {
    provide: CONNECTION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Connection),
    inject: [CONNECTION_DEFAULT],
  },
];
