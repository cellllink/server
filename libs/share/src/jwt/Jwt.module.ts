import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule as NestJsJwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './jwt.strategy';
import { JwtGuard } from './jwt.guard';

@Global()
@Module({
  imports: [
    PassportModule,
    NestJsJwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('jwt.secret'),
          signOptions: { expiresIn: '12h' }, // 12h
        };
      },
    }),
  ],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
  exports: [JwtStrategy],
})
export class JwtModule {}
