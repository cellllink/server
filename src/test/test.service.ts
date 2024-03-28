import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { InjectRedis } from '@nestjs-modules/ioredis';

@Injectable()
export class TestService {
  constructor(@InjectRedis() private readonly redis: Redis) {
    this.test();
  }

  async test() {
    await this.redis.set('cellink_test', 2);
  }
}
