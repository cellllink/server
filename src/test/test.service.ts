import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from 'packages/dao/service';
import { timer } from 'rxjs';

@Injectable()
export class TestService {
  constructor(private coreDaoServcie: CoreDaoServcie) {
    // timer(1000).subscribe(async () => {
    //   await this.test();
    // });
  }

  async test() {
    const user = await this.coreDaoServcie.findUserById(1);
    console.log(user);
  }
}
