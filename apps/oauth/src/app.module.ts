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
export class AppModule {}
