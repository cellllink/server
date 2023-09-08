import { Injectable } from '@nestjs/common';
import { CoreDaoServcie } from '@database/dao/service';

@Injectable()
export class TeamService {
  constructor(private coreDaoServcie: CoreDaoServcie) {}
}
