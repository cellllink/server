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
} from '@db/structure/core';
import { CoreRepository } from './repository';
import { FindOptionsSelect, In } from 'typeorm';
import { LogicDelete } from '@share/enmu/logicDelete.enum';

@Injectable()
export class CoUserDaoService {
  // 查询给客户端的时候，只展示一部分字段
  private userSelectBaseOptions: FindOptionsSelect<CoUser> = {
    id: true,
    name: true,
    avatar: true,
    phone: true,
    sex: true,
  };

  constructor(public coreRepository: CoreRepository) {}

  // 通过账户查询用户
  async findUserByAccount(account: string): PCoUserPo {
    return await this.coreRepository.user.findOne({
      where: { account, logic_delete: LogicDelete.normal },
    });
  }

  // 通过 id 查询用户
  async findUserById(id: number): PCoUserPo {
    return await this.coreRepository.user.findOne({
      select: this.userSelectBaseOptions,
      where: { id, logic_delete: LogicDelete.normal },
    });
  }

  // 通过 id 查询用户列表
  async findUsersByIds(ids: number[]): PCoUserPos {
    return await this.coreRepository.user.find({
      select: this.userSelectBaseOptions,
      where: { id: In(ids), logic_delete: 0 },
    });
  }

  // 删除用户
  async delete(userId: number) {
    await this.coreRepository.user.save({
      id: userId,
      logic_delete: LogicDelete.deleted,
    });
  }

  // // 查询用户的组织列表<默认用户在职的>
  // async findUserOrganizations(userId: number, status = CoOrganizationUserStatusEnum.onJob): PCoOrganizationPos {
  //   const organizationUsers = await this.coreRepository.organizationUser.find({
  //     where: { user_id: userId, status },
  //   });
  //   return await this.coreRepository.organization.find({
  //     where: { id: In(organizationUsers.map(i => i.organization_id)) },
  //   });
  // }

  // // 查询用户的团队列表<默认用户加入的>
  // async findUserTeams(userId: number, status = CoTeamUserStatusEnum.in): PCoTeamPos {
  //   const teamUsers = await this.coreRepository.teamUser.find({
  //     where: { user_id: userId, status },
  //   });
  //   return await this.coreRepository.team.find({
  //     where: { id: In(teamUsers.map(i => i.team_id)) },
  //   });
  // }
}
