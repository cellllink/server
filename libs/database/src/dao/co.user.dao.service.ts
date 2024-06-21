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
} from '@database/structure/core';
import { CoreRepository } from './repository';
import { FindOptionsSelectByString, In } from 'typeorm';

@Injectable()
export class CoUserDaoService {
  private userSelectBaseOptions: FindOptionsSelectByString<CoUser> = ['id', 'name', 'avatar', 'phone', 'sex'];

  constructor(public coreRepository: CoreRepository) {}

  // 删除用户
  async delete(userId: number) {
    await this.coreRepository.user.save({
      id: userId,
      logic_delete: 1,
    });
  }

  // 通过账户查询用户
  async findUserByAccount(account: string): PCoUserPo {
    return await this.coreRepository.user.findOne({
      where: { account, logic_delete: 0 },
    });
  }

  // 通过 id 查询用户
  async findUserById(id: number): PCoUserPo {
    return await this.coreRepository.user.findOne({
      select: this.userSelectBaseOptions,
      where: { id, logic_delete: 0 },
    });
  }

  // 通过 id 查询用户列表
  async findUsersByIds(ids: number[]): PCoUserPos {
    return await this.coreRepository.user.find({
      select: this.userSelectBaseOptions,
      where: { id: In(ids), logic_delete: 0 },
    });
  }

  // 查询用户的组织列表<默认用户在职的>
  async findUserOrganizations(userId: number, status = CoOrganizationUserStatusEnum.onJob): PCoOrganizationPos {
    const organizationUsers = await this.coreRepository.organizationUser.find({
      where: { user_id: userId, status },
    });
    return await this.coreRepository.organization.find({
      where: { id: In(organizationUsers.map(i => i.organization_id)) },
    });
  }

  // 查询用户的团队列表<默认用户加入的>
  async findUserTeams(userId: number, status = CoTeamUserStatusEnum.in): PCoTeamPos {
    const teamUsers = await this.coreRepository.teamUser.find({
      where: { user_id: userId, status },
    });
    return await this.coreRepository.team.find({
      where: { id: In(teamUsers.map(i => i.team_id)) },
    });
  }
}
