import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from 'packages/dao/service';

@Injectable()
export class AuthService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
