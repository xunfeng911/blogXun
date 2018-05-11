import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { BlogsController } from './blog.controller';
import { MulterMiddleware } from '../../middlewares/multer/multer.middleware';
import { MarkedService } from '../../services/marked/marked.service';

@Module({
  imports: [],
  controllers: [ BlogsController ],
  components: [MarkedService],
})

export class BlogsModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply([
      MulterMiddleware,
    ]).forRoutes({
      method: RequestMethod.POST,
      path: '/blog/new',
    });
  }
}
