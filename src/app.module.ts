import { Module } from '@nestjs/common';
import { join } from 'path';

// 配置
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService, TypeOrmConfigService } from './share/services';

// 业务 modules
import { ShareModule } from './share/share.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    // 环境变量 配置文件
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),

    // 静态资源配置
    // TODO 此处配置还有问题
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './static'),
      serveRoot: 'static/',
      // exclude: ['/api*'],
    }),

    // 数据库 Mysql 配置
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),

    // 数据库 Mongoose 配置
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),

    // 共享模块
    ShareModule,

    // 业务模块
    ApiModule,
  ],
  providers: [],
})
export class AppModule {}
