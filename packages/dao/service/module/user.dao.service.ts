import { Injectable } from '@nestjs/common';
import { PUserPo, PUserPos } from 'packages/database';
import { User } from 'packages/database/entity/core';
import { CoreRepositoryService } from 'packages/database/service';
import { createSelectOptions } from 'packages/share/util/findOption.util';
import { In } from 'typeorm';
import { UserDaoServiceImpl } from './user.dao.service.impl';

@Injectable()
export class UserDaoService implements UserDaoServiceImpl {
  private userSelectOptions = createSelectOptions<User>([
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

  async findUserByAccount(account: string): PUserPo {
    return await this.repository.user.findOne({
      where: { account },
    });
  }

  async findUserById(id: number): PUserPo {
    return await this.repository.user.findOne({
      select: this.userSelectOptions,
      where: { id },
    });
  }

  async findUsersByIds(ids: number[]): PUserPos {
    return await this.repository.user.find({
      select: this.userSelectOptions,
      where: { id: In(ids) },
    });
  }

  async findOrganizations() {}

  async findTeams() {}
}
