import * as fs from 'fs';
import { parse } from 'csv-parse';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { Inject, Injectable } from '@nestjs/common';
import { FILE_REPOSITORY } from 'src/config/constants';
import { UsersService } from 'src/users/users.service';
import { MessagesService } from 'src/messages/messages.service';
import { finished } from 'stream/promises';

@Injectable()
export class FilesService {
  constructor(
    @Inject(FILE_REPOSITORY)
    private fileRepository: Repository<File>,
    private readonly userService: UsersService,
    private readonly messageService: MessagesService,
  ) {}

  async create(file: Express.Multer.File, req: any) {
    try {
      const userInstance = await this.userService.findOne(req.user.username);
      const data = {
        name: file.filename,
        originalName: file.originalname,
        userId: userInstance.id,
        connectionId: req.body.connectionId,
      };
      return this.fileRepository.insert(data);
    } catch (error) {
      throw new Error('Invalid Data');
    }
  }

  async processFile(req: any) {
    try {
      const userInstance = await this.userService.findOne(req.user.username);
      const id = req.body.fileId;
      if (userInstance && id) {
        const file = await this.fileRepository.findOne({
          where: {
            id: id,
            userId: userInstance.id,
          },
        });

        const data = await this.readFile(file);
        this.messageService.processMany(req.user, data, file.connectionId);
      } else {
        throw new Error('Invalid Data');
      }
    } catch (error) {
      throw new Error('Invalid Data');
    }
  }

  async readFile(file: File) {
    const data = [];
    const filePath = `${process.env.UPLOAD_PATH}/${file.name}`;
    const parser = fs.createReadStream(filePath).pipe(
      parse({
        from_line: 2,
        delimiter: ';',
      }),
    );

    parser.on('readable', function () {
      let record;
      while ((record = parser.read())) {
        data.push({
          phone: record[0],
          message: record[1],
          connectionId: file.connectionId,
        });
      }
    });
    await finished(parser);
    return data;
  }
}
