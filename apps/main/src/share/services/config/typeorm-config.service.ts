import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      ...this.configService.get('db.mysql'),
      timezone: '+08:00',
      // entities: [`${__dirname}/**/*.entity.{ts,js}`],
      autoLoadEntities: true,
      synchronize: false,
    } as TypeOrmModuleOptions;
  }
}
