import { Injectable } from '@nestjs/common';
import { User } from 'packages/database/entity/core';
import {
  OrganizationPo,
  OrganizationUserPo,
  OrganizationUserStatus,
  TeamPo,
  TeamUserPo,
  UserPo,
} from 'packages/database/po/core';
import { CoreRepositoryService } from 'packages/database/service';
import { getPosValueOfTargetKey } from 'packages/share/util/filter.util';
import { FindOptionsSelectByString, In } from 'typeorm';

@Injectable()
export class CoreDaoServcie {
  private userSelects: FindOptionsSelectByString<User> = [
    'id',
    'account',
    'name',
    'avatar',
    'phone',
    'sex',
    'register_time',
    'update_time',
  ];

  constructor(public repository: CoreRepositoryService) {
    this.main();
  }

  private async main() {}

  /**
   * 通过用户 id 获取用户信息
   * @param id
   * @returns
   */
  public async findUserById(id: number): Promise<UserPo> {
    return await this.repository.user.findOne({
      select: this.userSelects,
      where: { id },
    });
  }

  /**
   * 通过用户 id 列表获取用户信息列表
   * @param ids
   * @returns
   */
  public async findUsersByIds(ids: number[]): Promise<UserPo[]> {
    return await this.repository.user.find({
      where: {
        id: In(ids),
      },
      order: {
        id: 'ASC',
      },
    });
  }

  /**
   * 通过用户账号获取用户信息
   * @param account
   * @returns
   */
  public async findUserByAccount(account: string): Promise<UserPo> {
    return this.repository.user.findOne({
      where: { account },
    });
  }

  /**
   * 通过用户 id 获取用户在职的 组织列表
   * @param userId
   * @returns
   */
  public async findUserOrganizations(userId: number): Promise<OrganizationPo[]> {
    const organizationUsers = await this.repository.organizationUser.find({
      where: { user_id: userId, status: 2 },
    });

    return await this.repository.organization.find({
      where: {
        id: In(getPosValueOfTargetKey(organizationUsers, 'organization_id')),
      },
    });
  }

  /**
   * 通过用户 id 获取用户的 团队列表
   * @param userId
   * @param organizationId
   * @returns
   */
  public async findUserTeams(userId: number, organizationId: number): Promise<TeamPo[]> {
    const teamUsers = await this.repository.teamUser.find({
      where: { user_id: userId },
    });

    return await this.repository.team.find({
      where: {
        id: In(getPosValueOfTargetKey(teamUsers, 'team_id')),
        organization_id: organizationId,
      },
    });
  }

  /**
   * 通过组织 id 获取组织信息
   * @param id
   * @returns
   */
  public async findOrganizationById(id: number): Promise<OrganizationPo> {
    return await this.repository.organization.findOne({
      where: { id },
    });
  }

  /**
   * 获取组织的成员 <默认查询在职的>
   * @param organizationId
   * @param userId
   * @param status
   * @returns
   */
  public async findOrganizationUser(
    organizationId: number,
    userId: number,
    status: number[] = [OrganizationUserStatus.onJob],
  ): Promise<OrganizationUserPo> {
    return await this.repository.organizationUser.findOne({
      where: {
        organization_id: organizationId,
        user_id: userId,
        status: In(status),
      },
    });
  }

  /**
   * 获取组织的成员列表 <默认查询在职的成员>
   * @param organizationId
   * @param status
   * @returns
   */
  public async findOrganizationUsers(
    organizationId: number,
    status: number[] = [OrganizationUserStatus.onJob],
  ): Promise<UserPo[]> {
    const organizationUsers = await this.repository.organizationUser.find({
      where: {
        organization_id: organizationId,
        status: In(status),
      },
    });

    return this.findUsersByIds(getPosValueOfTargetKey(organizationUsers, 'user_id'));
  }

  /**
   * 通过团队 id 获取团队信息
   * @param id
   * @returns
   */
  public async findTeamById(id: number): Promise<TeamPo> {
    return await this.repository.team.findOne({
      where: { id },
    });
  }

  /**
   * 获取团队的指定成员
   * @param teamId
   * @param userId
   * @returns
   */
  public async findTeamUser(teamId: number, userId: number): Promise<TeamUserPo> {
    return await this.repository.teamUser.findOne({
      where: {
        team_id: teamId,
        user_id: userId,
      },
    });
  }

  /**
   * 获取团队的成员列表
   * @param teamId
   * @returns
   */
  public async findTeamUsers(teamId: number): Promise<UserPo[]> {
    const teamUsers = await this.repository.teamUser.find({
      where: { team_id: teamId },
    });

    return this.findUsersByIds(getPosValueOfTargetKey(teamUsers, 'user_id'));
  }
}
