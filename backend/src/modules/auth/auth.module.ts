import * as passport from 'passport';
import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from '../../services/auth/auth.service';
import { JwtStrategy } from '../../services/auth/jwt.strategy';

@Module({
  components: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes({ path: '/auth', method: RequestMethod.ALL });
  }
}