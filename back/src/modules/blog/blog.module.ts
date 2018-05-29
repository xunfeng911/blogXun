import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { BlogsController } from './blog.controller';
import { MulterMiddleware } from '../../middlewares/multer/multer.middleware';
import { MarkedService } from '../../services/marked/marked.service';

@Module({
  imports: [],
  controllers: [ BlogsController ],
  providers: [MarkedService],
})

export class BlogsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply([
      MulterMiddleware,
    ]).forRoutes('/blog/new');
  }
}
