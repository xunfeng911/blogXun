import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { BlogsModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './middlewares/logger/log.middleware';
import { BlogsController } from './modules/blog/blog.controller';

@Module({
  modules: [BlogsModule, AuthModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(LoggerMiddleware)
          .with('ApplicationModule')
          .forRoutes(BlogsController);
  }
}