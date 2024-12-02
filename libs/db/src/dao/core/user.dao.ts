import { Injectable } from '@nestjs/common';
import { FindOptionsSelect, In } from 'typeorm';

import { CoreRepository } from '@db/repository';
import { UserEntity, PUserPo, PUserPos } from '@db/structure/core/user.structure';
import { LogicDeleteEnum } from '@share/enmu/logicDelete.enum';

@Injectable()
export class UserDao {
  // 查询给客户端的时候，只展示一部分字段
  private userSelectBaseOptions: FindOptionsSelect<UserEntity> = {
    id: true,
    name: true,
    avatar: true,
    phone: true,
    sex: true,
  };

  constructor(public coreRepository: CoreRepository) {}

  // 通过账户查询用户
  findUserByAccount(account: string): PUserPo {
    return this.coreRepository.user.findOne({
      where: { account, logic_delete: LogicDeleteEnum.normal },
    });
  }

  // 通过 id 查询用户
  findUserById(id: number): PUserPo {
    return this.coreRepository.user.findOne({
      select: this.userSelectBaseOptions,
      where: { id, logic_delete: LogicDeleteEnum.normal },
    });
  }

  // 通过 id 查询用户列表
  findUsersByIds(ids: number[]): PUserPos {
    return this.coreRepository.user.find({
      select: this.userSelectBaseOptions,
      where: { id: In(ids), logic_delete: LogicDeleteEnum.normal },
    });
  }

  // 删除用户
  delete(userId: number) {
    return this.coreRepository.user.save({
      id: userId,
      logic_delete: LogicDeleteEnum.deleted,
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
