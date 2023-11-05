import { DataSource } from 'typeorm';
import { CONNECTION_DEFAULT, FILE_REPOSITORY } from 'src/config/constants';
import { File } from '../entities/file.entity';

export const fileProviders = [
  {
    provide: FILE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(File),
    inject: [CONNECTION_DEFAULT],
  },
];
