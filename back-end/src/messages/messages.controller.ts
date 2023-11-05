import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('send')
  @UseGuards(AuthGuard)
  async sendMessage(@Request() req, @Body() message: CreateMessageDto) {
    return await this.messagesService.sendMessage(req.user, message);
  }
}
