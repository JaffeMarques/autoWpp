import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { ConnectionController } from './connection.controller';
import { connectionProviders } from './providers/connection.provider';
import { DatabaseModule } from 'src/providers/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConnectionController],
  providers: [...connectionProviders, ConnectionService],
  exports: [ConnectionService],
})
export class ConnectionModule {}
