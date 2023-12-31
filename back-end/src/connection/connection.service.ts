import { Inject, Injectable, Logger } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { Connection } from './entities/connection.entity';
import { Repository } from 'typeorm';
import { CONNECTION_REPOSITORY } from 'src/config/constants';
import { SessionInterface } from './entities/session.interface';
import { UsersService } from 'src/users/users.service';
import { ConnectionStatus } from './enums/connection-status.enum';
import * as qrcode from 'qrcode-terminal';

@Injectable()
export class ConnectionService {
  private readonly logger = new Logger(ConnectionService.name);
  private whatsappInstance: SessionInterface;
  private status: ConnectionStatus = ConnectionStatus.UNINITIALIZED;

  constructor(
    @Inject(CONNECTION_REPOSITORY)
    private connectionRepository: Repository<Connection>,
    private readonly userService: UsersService,
  ) {}

  async create(createConnectionDto: CreateConnectionDto, user: any) {
    if (user) {
      const userInstance = await this.userService.findOne(user.username);

      createConnectionDto.userId = userInstance.id;
      const con = await this.connectionRepository.create(createConnectionDto);
      await this.connectionRepository.save(con);

      if (con) {
        this.initConnection(con);
        return true;
      }
    }
    return false;
  }

  findOne(id: number): Promise<Connection> {
    return this.connectionRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByUser(user: any): Promise<Connection[]> {
    const userInstance = await this.userService.findOne(user.username);
    return this.connectionRepository.find({
      where: {
        userId: userInstance.id,
      },
    });
  }

  update(id: number, updateConnectionDto: UpdateConnectionDto) {
    return this.connectionRepository.update(
      { id: updateConnectionDto.id },
      updateConnectionDto,
    );
  }

  remove(id: number) {
    return this.connectionRepository.delete(id);
  }

  async initConnection(connection: Connection) {
    let sessionCfg;

    if (connection && connection.session) {
      sessionCfg = JSON.parse(connection.session);
    }

    const whatsapp: SessionInterface = new Client({
      session: sessionCfg,
      authStrategy: new LocalAuth({
        clientId: 'bd_' + connection.id,
        dataPath: process.env.CACHE_PATH,
      }),
      puppeteer: {
        executablePath: process.env.CHROME_BIN || undefined,
        args: process.env.CHROME_ARGS.split(' '),
      },
    });

    whatsapp.initialize();

    whatsapp.on('qr', async (qr) => {
      this.logger.log('Session generated: ' + connection.name);
      qrcode.generate(qr, { small: true });
      if (connection && qr) {
        this.status = ConnectionStatus.QRCODE_GENERATED;
        connection.qrCode = qr;
        connection.status = ConnectionStatus.QRCODE_GENERATED;
        await this.update(connection.id, connection);
      }
    });

    whatsapp.on('ready', async () => {
      this.logger.log(`Session: ${connection.name} READY`);
    });

    whatsapp.on('authenticated', async () => {
      this.status = ConnectionStatus.CONNECTED;
      connection.status = ConnectionStatus.CONNECTED;
      await this.update(connection.id, connection);
      this.logger.log(`Session: ${connection.name} AUTHENTICATED`);
    });

    whatsapp.on('auth_failure', async (msg) => {
      connection.status = ConnectionStatus.ERROR;
      await this.update(connection.id, connection);
      this.logger.error(`Session: ${connection.name} FAILURE! Reason: ${msg}`);
    });

    this.whatsappInstance = whatsapp;
  }

  async getInstance(connection: Connection): Promise<SessionInterface> {
    if (connection.status == ConnectionStatus.CONNECTED) {
      if (this.status != ConnectionStatus.CONNECTED) {
        await this.initConnection(connection);
      }

      return new Promise(async (resolve) => {
        let i = 0;
        while (this.status != ConnectionStatus.CONNECTED || i > 10) {
          await this.sleep(3000);
          i++;
        }
        resolve(this.whatsappInstance);
      });
    }
  }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
}
