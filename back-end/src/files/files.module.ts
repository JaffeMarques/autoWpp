import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { fileProviders } from './providers/file.providers';
import { DatabaseModule } from 'src/providers/database/database.module';
import { ConnectionModule } from 'src/connection/connection.module';
import { UsersModule } from 'src/users/users.module';
import { MessagesModule } from 'src/messages/messages.module';

@Module({
  imports: [DatabaseModule, ConnectionModule, UsersModule, MessagesModule],
  controllers: [FilesController],
  providers: [...fileProviders, FilesService],
})
export class FilesModule {}
