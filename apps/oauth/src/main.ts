import { NestFactory } from '@nestjs/core';
import { setupSwaager } from '@share/config/swagger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtModule } from '@share/jwt/Jwt.module';
import { DBModule } from '@db/db.module';
import { configModuleOptions } from '@share/config/env';
import { TypeOrmConfigService } from '@share/config/typeorm-config.service';

import { UserModule } from './user/user.module';
import { HttpInterceptor } from '@share/interceptor/http.interceptor';

@Module({
  imports: [
    // 环境变量 配置文件
    ConfigModule.forRoot(configModuleOptions),

    // 数据库 Mysql 配置
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),

    DBModule,
    JwtModule,

    UserModule,
  ],
})
export class OauthModule {}

(async () => {
  const App = await NestFactory.create(OauthModule);

  setupSwaager(App, {
    description: '授权登录服务',
  });

  // 允许跨域
  App.enableCors();
  // 全局拦截器
  App.useGlobalInterceptors(new HttpInterceptor());
  // 全局 DTO 校验器
  App.useGlobalPipes(new ValidationPipe());

  const Port = App.get(ConfigService).get('serveProd.oauth');
  await App.listen(Port);
  console.info('服务已启动在端口：' + Port);
})();
