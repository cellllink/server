import {
  CoOrganizationUserStatusEnum,
  CoTeamUserStatusEnum,
  PCoOrganizationPos,
  PCoTeamPos,
  PCoUserPo,
  PCoUserPos,
} from 'packages/database';

export interface CoUserDaoServiceImpl {
  // 通过账户查询用户
  findUserByAccount(account: string): PCoUserPo;

  // 通过 id 查询用户
  findUserById(userId: number): PCoUserPo;

  // 通过 id 查询用户列表
  findUsersByIds(userIds: number[]): PCoUserPos;

  // 查询用户的组织列表<默认用户在职的>
  findUserOrganizations(userId: number, status?: CoOrganizationUserStatusEnum): PCoOrganizationPos;

  // 查询用户的团队列表<默认用户加入的>
  findUserTeams(userId: number, status?: CoTeamUserStatusEnum): PCoTeamPos;
}
