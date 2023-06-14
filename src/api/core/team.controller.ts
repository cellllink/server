import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { TeamPo, UserPo } from 'packages/database/po/core';
import { BaseException } from 'src/share/httpException';
import { TeamCreateDto } from './team.dto';

@ApiTags('CoreTeam')
@Controller('/api/core/team')
export class TeamController {
  constructor(private coreDaoServcie: CoreDaoServcie) {}

  // 创建
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

  // 团队信息
  @Post('info/:teamId')
  async info(@Param('teamId') id: number): Promise<TeamPo> {
    const team = await this.coreDaoServcie.findTeamById(id);

    if (!team) throw new BaseException('该团队不存在');

    return team;
  }

  // 团队信息编辑
  // @Post('info/edit')

  // 添加成员
  @Post('member/add')
  @ApiBody({ type: TeamCreateDto })
  async memberAdd(@Body() dto: TeamCreateDto): Promise<string> {
    // TODO
    return '编辑成功';
  }

  // 添加成员
  @Post('member/remove')
  @ApiBody({ type: TeamCreateDto })
  async memberRemove(@Body() dto: TeamCreateDto): Promise<string> {
    // TODO
    return '编辑成功';
  }

  // 成员列表
  @Post('members/:teamId')
  async members(@Param('teamId') id: number): Promise<UserPo[]> {
    return await this.coreDaoServcie.findTeamUsers(id);
  }
}
