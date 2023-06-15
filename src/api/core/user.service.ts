import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from 'packages/dao/service';

@Injectable()
export class UserService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
