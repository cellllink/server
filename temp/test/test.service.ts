import { Injectable } from '@nestjs/common';
// import { Redis } from 'ioredis';
// import { InjectRedis } from '@nestjs-modules/ioredis';
// import { CommonRepositoryService } from '@database/dao';

@Injectable()
export class TestService {
  // constructor(
  //   @InjectRedis() private readonly redis: Redis,
  //   private commonRepositoryService: CommonRepositoryService,
  // ) {
  //   this.test();
  // }

  async test() {
    // await this.redis.set('cellink_test', 2);
    // const ha = new this.commonRepositoryService.test({ aaaaa: 'xxx', bbbbb: 'xxxx' });
    // await ha.save();
    // await this.commonRepositoryService.test.create({
    //   id: 3,
    //   aaaaa: 'xxx',
    //   bbbbb: 'xxxx',
    //   ccccc: 'xxxx',
    // });
    // const ass = await this.commonRepositoryService.test.find({
    //   id: 3,
    // });
    // console.log(ass[0]);
  }
}

// 增
// insert
// {} [{}, {}]

// 删
// delete
// where: []

// 改
// update
// updateMany

// 查
// findOne
// find
