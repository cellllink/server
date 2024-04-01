import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisModuleOptionsFactory, RedisSingleOptions } from '@nestjs-modules/ioredis';

@Injectable()
export class RedisConfigService implements RedisModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createRedisModuleOptions(): RedisSingleOptions {
    return {
      type: 'single',
      url: this.configService.get('db.redis.url'),
    };
  }
}
