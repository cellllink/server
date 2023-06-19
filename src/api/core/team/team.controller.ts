import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { TeamPo, UserPo } from 'packages/database/po/core';
import { JwtAuthGuard } from 'src/share/guide';
import { BaseException } from 'src/share/httpException';
import { TeamCreateDto, TeamMemberAddDto, TeamMemberRemoveDto } from './team.dto';

@ApiTags('CoreTeam')
@UseGuards(JwtAuthGuard)
@Controller('/api/core/team')
export class TeamController {
  constructor(private coreDaoServcie: CoreDaoServcie) {}

  /**
   * 创建团队
   * @param dto
   * @returns
   */
  @Post('create')
  @ApiBody({ type: TeamCreateDto })
  async register(@Body() dto: TeamCreateDto): Promise<string> {
    const { name, user_id, organization_id } = dto;

    const team = await this.coreDaoServcie.repository.team.save({
      name,
      owner_id: user_id,
      organization_id,
    });
    await this.coreDaoServcie.repository.teamUser.save({
      team_id: team.id,
      user_id,
    });

    return '创建成功';
  }

  /**
   * 团队信息
   * @param id
   * @returns
   */
  @Post('info/:teamId')
  async info(@Param('teamId') id: number): Promise<TeamPo> {
    const team = await this.coreDaoServcie.findTeamById(id);

    if (!team) throw new BaseException('该团队不存在');

    return team;
  }

  /**
   * 团队信息编辑
   * @param dto
   * @returns
   */
  @Post('info/edit')
  async infoEdit(@Body() dto: Partial<UserPo>): Promise<string> {
    const team = await this.coreDaoServcie.findTeamById(dto.id);

    if (!team) throw new BaseException('该团队不存在');

    await this.coreDaoServcie.repository.team.save({
      ...team,
      ...dto,
    });

    return '编辑成功';
  }

  /**
   * 添加成员
   * @param dto
   * @returns
   */
  @Post('member/add')
  @ApiBody({ type: TeamMemberAddDto })
  async memberAdd(@Body() dto: TeamMemberAddDto): Promise<string> {
    const { team_id, user_id } = dto;

    const teamUser = this.coreDaoServcie.findTeamUser(team_id, user_id);

    if (teamUser) throw new BaseException('该成员已在团队中');

    await this.coreDaoServcie.repository.teamUser.save({ team_id, user_id });

    return '添加成功';
  }

  /**
   * 移出成员
   * @param dto
   * @returns
   */
  @Post('member/remove')
  @ApiBody({ type: TeamMemberRemoveDto })
  async memberRemove(@Body() dto: TeamMemberRemoveDto): Promise<string> {
    const { user_id, team_id } = dto;

    const teamUser = await this.coreDaoServcie.findTeamUser(team_id, user_id);

    if (!teamUser) throw new BaseException('该成员已不在团队中');

    await this.coreDaoServcie.repository.teamUser.remove(teamUser);

    return '移出成功';
  }

  /**
   * 成员列表
   * @param id
   * @returns
   */
  @Post('members/:teamId')
  async members(@Param('teamId') id: number): Promise<UserPo[]> {
    return await this.coreDaoServcie.findTeamUsers(id);
  }
}
