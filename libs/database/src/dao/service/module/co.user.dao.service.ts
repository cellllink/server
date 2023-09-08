import { Injectable } from '@nestjs/common';
import {
  CoOrganizationUserStatusEnum,
  CoTeamUserStatusEnum,
  CoUser,
  PCoOrganizationPos,
  PCoTeamPos,
  PCoUserPo,
  PCoUserPos,
} from '@database/database';
import { CoreRepositoryService } from '@database/database/service';
import { createSelectOptions } from '@database/share/util/findOption.util';
import { In } from 'typeorm';

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

@Injectable()
export class CoUserDaoService implements CoUserDaoServiceImpl {
  private userSelectOptions = createSelectOptions<CoUser>([
    'id',
    'account',
    'name',
    'avatar',
    'phone',
    'sex',
    'register_time',
    'update_time',
  ]);

  constructor(private repository: CoreRepositoryService) {}

  async findUserByAccount(account: string): PCoUserPo {
    return await this.repository.user.findOne({
      where: { account },
    });
  }

  async findUserById(id: number): PCoUserPo {
    return await this.repository.user.findOne({
      select: this.userSelectOptions,
      where: { id },
    });
  }

  async findUsersByIds(ids: number[]): PCoUserPos {
    return await this.repository.user.find({
      select: this.userSelectOptions,
      where: { id: In(ids) },
    });
  }

  // 查询用户的组织列表<默认用户在职的>
  async findUserOrganizations(
    userId: number,
    status?: CoOrganizationUserStatusEnum,
  ): PCoOrganizationPos {
    return [];
  }

  // 查询用户的团队列表<默认用户加入的>
  async findUserTeams(userId: number, status?: CoTeamUserStatusEnum): PCoTeamPos {
    return [];
  }
}
