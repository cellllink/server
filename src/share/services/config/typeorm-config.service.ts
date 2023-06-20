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
      // entities: [`${__dirname}/**/*.entity.{ts,js}`],
      autoLoadEntities: true,
      synchronize: false,
      // timezone: '+08:00',
    };
  }
}
