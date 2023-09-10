import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao';

@Injectable()
export class TeamService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
