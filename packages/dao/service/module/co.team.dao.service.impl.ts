import { CoTeamUserStatusEnum, PCoTeamPo, PCoUserPo, PCoUserPos } from 'packages/database';

export interface CoTeamDaoServiceImpl {
  // 通过 id 查询团队
  findTeamById(teamId: number): PCoTeamPo;

  // 查询团队的指定成员<默认: 已加入>
  findTeamUser(teamId: number, userId: number, status: CoTeamUserStatusEnum): PCoUserPo;

  // 查询团队的成员列表<默认: 已加入>
  findTeamUsers(teamId: number, status: CoTeamUserStatusEnum): PCoUserPos;
}
