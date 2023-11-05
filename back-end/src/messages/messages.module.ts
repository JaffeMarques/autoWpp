import { DatabaseModule } from 'src/providers/database/database.module';
import { ConnectionModule } from 'src/connection/connection.module';
import { messageProviders } from './providers/message.providers';
import { MessagesController } from './messages.controller';
import { UsersModule } from 'src/users/users.module';
import { MessagesService } from './messages.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, ConnectionModule, UsersModule],
  controllers: [MessagesController],
  providers: [...messageProviders, MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}
