import { Injectable } from '@nestjs/common';
import {
  CoOrganizationUserStatusEnum,
  CoTeamUserStatusEnum,
  CoUser,
  CoUserPo,
  PCoOrganizationPos,
  PCoTeamPos,
  PCoUserPo,
  PCoUserPos,
} from '@database/structure';
import { CoreRepositoryService } from './repository.service';
import { FindOptionsSelectByString, In } from 'typeorm';

export interface CoUserDaoServiceImpl {
  // 创建编辑用户信息
  save(user: Partial<CoUserPo>): PCoUserPo;

  // 删除用户
  delete(userId: number): void;

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

@Injectable()
export class CoUserDaoService implements CoUserDaoServiceImpl {
  private userSelectBaseOptions: FindOptionsSelectByString<CoUser> = ['id', 'name', 'avatar', 'sex'];

  constructor(private core: CoreRepositoryService) {}

  async save(user: Partial<CoUserPo>) {
    return await this.core.user.save(user);
  }

  async delete(userId: number) {
    await this.core.user.save({
      id: userId,
      logic_delete: 1,
    });
  }

  async findUserByAccount(account: string): PCoUserPo {
    return await this.core.user.findOne({
      where: { account, logic_delete: 0 },
    });
  }

  async findUserById(id: number): PCoUserPo {
    return await this.core.user.findOne({
      select: this.userSelectBaseOptions,
      where: { id, logic_delete: 0 },
    });
  }

  async findUsersByIds(ids: number[]): PCoUserPos {
    return await this.core.user.find({
      select: this.userSelectBaseOptions,
      where: { id: In(ids), logic_delete: 0 },
    });
  }

  async findUserOrganizations(userId: number, status = CoOrganizationUserStatusEnum.onJob): PCoOrganizationPos {
    const organizationUsers = await this.core.organizationUser.find({
      where: { user_id: userId, status },
    });
    return await this.core.organization.find({
      where: { id: In(organizationUsers.map(i => i.organization_id)) },
    });
  }

  async findUserTeams(userId: number, status = CoTeamUserStatusEnum.in): PCoTeamPos {
    const teamUsers = await this.core.teamUser.find({
      where: { user_id: userId, status },
    });
    return await this.core.team.find({
      where: { id: In(teamUsers.map(i => i.team_id)) },
    });
  }
}
