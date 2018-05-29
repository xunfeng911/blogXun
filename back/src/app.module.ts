import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BlogsModule } from './modules/blog/blog.module';
import { LoggerMiddleware } from './middlewares/logger/log.middleware';
import { BlogsController } from './modules/blog/blog.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { FormatInterceptor } from './interceptor/format.interceptor';

@Module({
    imports: [BlogsModule],
    providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: FormatInterceptor,
        },
      ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
      consumer.apply(LoggerMiddleware)
          .with('AppModule')
          .forRoutes(BlogsController);
  }
}
