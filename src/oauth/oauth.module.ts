import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login.controller';
import { LoginService } from './service/login.service';
import { JwtStrategyService } from 'src/share/services/common/jwt.strategy.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'cellinkPrivateKey',
      // secret: JWTConstant.secret,
      signOptions: { expiresIn: '24h' }, // 过期时间 24 小时
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategyService],
})
export class OAuthModule {}
