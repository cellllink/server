import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { configuration } from './config';

// 配置
import { MongooseConfigService, TypeOrmConfigService } from './share/services';
// import { RedisModule } from '@nestjs-modules/ioredis';
// import { RedisConfigService } from './share/services/config/redis-config.service';

// import { ShareModule } from './share/share.module';

// // 业务 modules
import { OAuthModule } from './oauth/oauth.module';
import { CommonModule } from './common/common.module';
// import { SpaceModule } from './space/space.module';

// import { ApiModule } from './api/api.module';
// import { TestModule } from './test/test.module';

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

    // RedisModule.forRootAsync({
    //   useClass: RedisConfigService,
    // }),

    // 业务模块
    OAuthModule,
    CommonModule,
  ],
  providers: [],
})
export class AppModule {}
