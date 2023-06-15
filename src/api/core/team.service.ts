import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from 'packages/dao/service';

@Injectable()
export class TeamService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
