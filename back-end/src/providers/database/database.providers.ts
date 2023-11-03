import { CONNECTION_DEFAULT } from 'src/config/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: CONNECTION_DEFAULT,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: process.env.APP_ENVIROMENT == 'development',
      });

      return dataSource.initialize();
    },
  },
];
