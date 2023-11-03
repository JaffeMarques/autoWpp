import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { CONNECTION_DEFAULT } from 'src/config/constants';

@Injectable()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    @Inject(CONNECTION_DEFAULT)
    private dataSource: DataSource,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    event.entity.password = await this.hash(event.entity.password);
  }

  async hash(value: string) {
    console.log('entrou', value);
    return await bcrypt.hash(value, +process.env.PASS_SALT_ROUNDS);
  }
}
