import { Injectable } from '@nestjs/common';
import {
  OrganizationPo,
  OrganizationUserPo,
  OrganizationUserStatus,
  TeamPo,
  TeamUserPo,
  UserPo,
} from 'packages/database/po/core';
import { CoreRepositoryService } from 'packages/database/service';

@Injectable()
export class CoreDaoServcie {
  constructor(public repository: CoreRepositoryService) {
    this.main();
  }

  private async main() {}

  public async findUserById(id: number): Promise<UserPo> {
    return await this.repository.user.findOne({
      where: { id },
    });
  }

  public async findUsersByIds(ids: number[]): Promise<UserPo[]> {
    return await this.repository.user.find({
      where: ids.map(id => ({ id })),
    });
  }

  public async findUserByAccount(account: string): Promise<UserPo> {
    return this.repository.user.findOne({
      where: { account },
    });
  }

  public async findUserOrganizations(userId: number): Promise<OrganizationPo[]> {
    const organizationIds = (
      await this.repository.organizationUser.find({
        where: { user_id: userId, status: 2 },
      })
    ).map(i => ({ id: i.organization_id }));

    return await this.repository.organization.find({
      where: organizationIds,
    });
  }

  public async findUserTeams(userId: number): Promise<TeamPo[]> {
    const teamIds = (
      await this.repository.teamUser.find({
        where: { user_id: userId },
      })
    ).map(i => ({ id: i.team_id }));

    return await this.repository.team.find({
      where: teamIds,
    });
  }

  public async findOrganizationById(id: number): Promise<OrganizationPo> {
    return await this.repository.organization.findOne({
      where: { id },
    });
  }

  /**
   * 默认查询在职的
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
    const where = status.map(i => ({
      organization_id: organizationId,
      user_id: userId,
      status: i,
    }));

    return await this.repository.organizationUser.findOne({ where });
  }

  /**
   * 默认查询在职的成员
   * @param organizationId
   * @param status
   * @returns
   */
  public async findOrganizationUsers(
    organizationId: number,
    status: number[] = [OrganizationUserStatus.onJob],
  ): Promise<UserPo[]> {
    const where = status.map(i => ({
      organization_id: organizationId,
      status: i,
    }));
    const organizationUsers = await this.repository.organizationUser.find({ where });

    return this.findUsersByIds(organizationUsers.map(i => i.user_id));
  }

  public async findTeamById(id: number): Promise<TeamPo> {
    return await this.repository.team.findOne({
      where: { id },
    });
  }

  public async findTeamUser(teamId: number, userId: number): Promise<TeamUserPo> {
    return await this.repository.teamUser.findOne({
      where: {
        team_id: teamId,
        user_id: userId,
      },
    });
  }

  public async findTeamUsers(teamId: number): Promise<UserPo[]> {
    const userIds = (
      await this.repository.teamUser.find({
        where: { team_id: teamId },
      })
    ).map(i => i.user_id);

    return this.findUsersByIds(userIds);
  }
}
