import { Middleware } from '@nestjs/common';
import { NestMiddleware } from '@nestjs/common/interfaces/middlewares';
import * as multer from 'multer';

@Middleware()
export class MulterMiddleware implements NestMiddleware {
  resolve(): (req, res, next) => void {
    const upload = multer({ dest: './uploads/' });
    return upload.any();
  }
}