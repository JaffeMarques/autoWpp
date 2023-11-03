import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { CONNECTION_DEFAULT, USER_REPOSITORY } from 'src/config/constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [CONNECTION_DEFAULT],
  },
];
