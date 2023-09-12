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
import { LogicDeleteStatusEnum } from '@database/share/enum/common.enum';

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
  private userSelectBaseOptions: FindOptionsSelectByString<CoUser> = [
    'id',
    'name',
    'avatar',
    'sex',
  ];

  constructor(private core: CoreRepositoryService) {}

  async save(user: Partial<CoUserPo>) {
    return await this.core.user.save(user);
  }

  async delete(userId: number) {
    await this.core.user.save({
      id: userId,
      logic_delete: LogicDeleteStatusEnum.deleted,
    });
  }

  async findUserByAccount(account: string): PCoUserPo {
    return await this.core.user.findOne({
      where: { account },
    });
  }

  async findUserById(id: number): PCoUserPo {
    return await this.core.user.findOne({
      select: this.userSelectBaseOptions,
      where: { id },
    });
  }

  async findUsersByIds(ids: number[]): PCoUserPos {
    return await this.core.user.find({
      select: this.userSelectBaseOptions,
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
