import { Injectable } from '@nestjs/common';
import { OrganizationPo, TeamPo, UserPo } from 'packages/database/po/core';
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

  public async findOrganizationUsers(organizationId: number): Promise<UserPo[]> {
    const userIds = (
      await this.repository.organizationUser.find({
        where: { organization_id: organizationId },
      })
    ).map(i => i.user_id);

    return this.findUsersByIds(userIds);
  }

  public async findTeamById(id: number): Promise<TeamPo> {
    return await this.repository.team.findOne({
      where: { id },
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
