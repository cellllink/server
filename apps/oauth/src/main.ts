import { NestFactory } from '@nestjs/core';
import { setupSwaager } from '@share/config/swagger';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from '@share/config/env';

@Module({
  imports: [
    // 环境变量 配置文件
    ConfigModule.forRoot(configModuleOptions),
  ],
  providers: [],
})
export class OauthModule {}

(async () => {
  const app = await NestFactory.create(OauthModule);

  setupSwaager(app, {
    description: '授权登录服务',
  });

  await app.listen(process.env.serve_port_oauth || 3000);
})();
