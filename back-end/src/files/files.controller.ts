import {
  Controller,
  HttpException,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import MulterConfig from 'src/config/multer-config';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file', MulterConfig))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    try {
      this.filesService.create(file, req);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  @Post('process')
  @UseGuards(AuthGuard)
  proccesFile(@Request() req) {
    try {
      this.filesService.processFile(req);
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
