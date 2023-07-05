import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions() {
    return <TypeOrmModuleOptions>{
      type: 'mysql',
      ...this.configService.get('db.mysql'),
      timezone: '+08:00',
      // entities: [`${__dirname}/**/*.entity.{ts,js}`],
      autoLoadEntities: true,
      synchronize: false,
    };
  }
}

// TypeOrmModule.forRootAsync({
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: async (configService: ConfigService) => ({
//     type: 'mysql', // 数据库类型
//     url: configService.get('DATABASE_URL'), // 数据库连接地址
//     timezone: '+08:00', //服务器上配置的时区
//     synchronize: configService.get('SYNC'), //根据实体自动创建数据库表， 生产环境建议关闭

//     autoLoadEntities: true, //自动加载实体文件 <<<<<<< 看这里！
//     // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 也有这样写的
//     // entities: [xxx, xxxx....], // 反正不是这样一个个写的
//   }),
// }),
