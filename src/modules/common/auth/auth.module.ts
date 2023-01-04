import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JWTConstant } from 'src/share/constants/auth.constant';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWTConstant.secret,
      signOptions: { expiresIn: '1h' }, // 过期时间 1 小时
    }),
  ],
  controllers: [AuthController],
  providers: [JwtService, AuthService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
