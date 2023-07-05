import { Injectable } from '@nestjs/common';
import { CoTeamUserStatusEnum } from 'packages/database';
import { CoTeamDaoServiceImpl } from './co.team.dao.service.impl';

@Injectable()
export class CoTeamDaoService implements CoTeamDaoServiceImpl {
  findTeamById(teamId: number): PCoTeamPo {}

  findTeamUser(teamId: number, userId: number, status: CoTeamUserStatusEnum): PCoUserPo {}

  findTeamUsers(teamId: number, status: CoTeamUserStatusEnum): PCoUserPos {}
}
