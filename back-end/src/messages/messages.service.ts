import { ConnectionStatus } from 'src/connection/enums/connection-status.enum';
import { ConnectionService } from 'src/connection/connection.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { MESSAGE_REPOSITORY } from 'src/config/constants';
import { UsersService } from 'src/users/users.service';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { MessageStatus } from './enums/message-status.enum';

@Injectable()
export class MessagesService {
  private readonly logger = new Logger(ConnectionService.name);

  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private messageRepository: Repository<Message>,
    private readonly connectionService: ConnectionService,
    private readonly userService: UsersService,
  ) {}

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const message = this.messageRepository.create(messageDto);
    this.messageRepository.save(message);
    return message;
  }

  update(message) {
    return this.messageRepository.update({ id: message.id }, message);
  }

  async sendMessage(user: any, message: CreateMessageDto) {
    this.logger.log(`Sending message on connection ${message.connectionId}`);
    const userInstance = await this.userService.findOne(user.username);
    message.userId = userInstance.id;
    const messageInstance = await this.create(message);

    const connection = await this.connectionService.findOne(
      message.connectionId,
    );

    if (connection.status == ConnectionStatus.CONNECTED) {
      const whatsappPromise = this.connectionService.getInstance(connection);

      whatsappPromise.then(async (whatsappInstance) => {
        try {
          await whatsappInstance
            .sendMessage(message.phone + '@c.us', message.message)
            .then(() => {
              messageInstance.status = MessageStatus.SENT;
              this.update(messageInstance);
              this.logger.log(`Message sent to ${messageInstance.phone}`);
            });
        } catch (error) {
          this.logger.error(error.message);
        }
      });
    }
  }
}
