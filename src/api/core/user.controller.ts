import { Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { OrganizationPo, TeamPo, UserPo } from 'packages/database/po/core';
import { BaseException } from 'src/share/httpException';

@ApiTags('CoreUser')
@Controller('/api/core/user')
export class UserController {
  constructor(private coreDaoServcie: CoreDaoServcie) {}

  // 用户信息
  @Post('info/:userId')
  async info(@Param('userId') id: number): Promise<UserPo> {
    const user = await this.coreDaoServcie.findUserById(id);

    if (!user) throw new BaseException('该用户不存在');

    return user;
  }

  // 用户信息编辑
  // @Post('info/edit')

  // 通过新组织的邀请
  @Post('organization/invite/pass')
  // @ApiBody({ type: TeamCreateDto })
  // async memberInvitePass(@Body() dto: TeamCreateDto): Promise<string> {
  //   // TODO
  //   return '编辑成功';
  // }

  // 拒绝新组织的邀请
  @Post('organization/invite/refuse')
  // @ApiBody({ type: TeamCreateDto })
  // async memberInviteRefuse(@Body() dto: TeamCreateDto): Promise<string> {
  //   // TODO
  //   return '编辑成功';
  // }

  // 用户的组织列表
  @Post('organizations/:userId')
  async organizations(@Param('userId') id: number): Promise<OrganizationPo[]> {
    return await this.coreDaoServcie.findUserOrganizations(id);
  }

  // 用户的团队列表
  @Post('teams/:userId')
  async teams(@Param('userId') id: number): Promise<TeamPo[]> {
    return await this.coreDaoServcie.findUserTeams(id);
  }
}
