import { Module } from '@nestjs/common';

// 配置
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService, TypeOrmConfigService } from './share/services';
import { RedisModule } from '@nestjs-modules/ioredis';
import { RedisConfigService } from './share/services/config/redis-config.service';

import { ShareModule } from './share/share.module';
import { DatabaseModule } from '@database/database.module';

// 业务 modules
import { OAuthModule } from './oauth/oauth.module';
import { ApiModule } from './api/api.module';

import { TestModule } from './test/test.module';
import { configuration } from './config/configuration';

@Module({
  imports: [
    // 环境变量 配置文件
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),

    // 数据库 Mysql 配置
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),

    // 数据库 Mongoose 配置
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),

    // 数据库 Redis 配置
    RedisModule.forRootAsync({
      useClass: RedisConfigService,
    }),

    // 共享模块
    ShareModule,
    DatabaseModule,

    // 业务模块
    OAuthModule,
    ApiModule,
    TestModule,
  ],
  providers: [],
})
export class AppModule {}
