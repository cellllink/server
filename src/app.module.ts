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
import { AllModule } from './modules/all.module';
import { CommonServiceModule } from './share/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: 'static/',
      // exclude: ['/api*']
    }),

    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),

    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),

    CommonServiceModule,
    AllModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
