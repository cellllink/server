import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTConstant } from 'src/share/constant/auth.constant';

import { LoginController } from './login.controller';

import { LoginService } from './service/login.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWTConstant.secret,
      signOptions: { expiresIn: '24h' }, // 过期时间 24 小时
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class OAuthModule {}
