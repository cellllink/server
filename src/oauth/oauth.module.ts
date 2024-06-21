import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { DatabaseModule } from '@database/database.module';

import { RegisterController } from './register.controller';
import { LoginController } from './login.controller';

import { LoginService } from './service/login.service';
import { JwtStrategyService } from 'src/share/services/common/jwt.strategy.service';
import { RegisterService } from './service/register.service';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: 'cellinkPrivateKey',
      // secret: JWTConstant.secret,
      signOptions: { expiresIn: '24h' }, // 过期时间 24 小时
    }),
  ],
  controllers: [RegisterController, LoginController],
  providers: [LoginService, RegisterService, JwtStrategyService],
})
export class OAuthModule {}
