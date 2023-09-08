import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao/service';
import { Select } from 'speedsql';

@Injectable()
export class TestService {
  constructor(private coreDaoServcie: CoreDaoServcie) {
    this.test().then(console.log);
  }

  @Select('select user * fron `user`')
  async test() {}
}
