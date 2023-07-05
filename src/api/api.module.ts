import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DaoModule } from 'packages/dao/dao.module';
import { BusinessControllers, BusinessServices } from './business';
import { CoreControllers, CoreServices } from './core';
import { JWTConstant } from 'src/share/constant/auth.constant';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWTConstant.secret,
      signOptions: { expiresIn: '24h' }, // 过期时间 24 小时
    }),
    DaoModule,
  ],
  controllers: [...CoreControllers, ...BusinessControllers],
  providers: [...CoreServices, ...BusinessServices],
})
export class ApiModule {}
