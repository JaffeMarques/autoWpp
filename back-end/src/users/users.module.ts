import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/providers/database/database.module';
import { userProviders } from './providers/user.providers';
import { UsersController } from './users.controller';
import { UserSubscriber } from './entities/user.subscriber';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService, UserSubscriber],
  exports: [UsersService],
})
export class UsersModule {}
