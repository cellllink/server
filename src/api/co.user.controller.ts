import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoUserPo, CoOrganizationPo, CoTeamPo, CoOrganizationUserStatusEnum, PCoUserPo } from '@database/structure/core';
import { CommonOrganizationDto, CommonUserDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';
import { CoUserDaoService } from '@database/dao';

@ApiTags('ApiCoUser')
@Controller('/api/co/user')
export class CoUserController {
  constructor(private coUserDaoService: CoUserDaoService) {}

  @ApiBody({
    description: '用户信息',
    type: CommonUserDto,
  })
  @Post('info')
  async info(@Body() { user_id }: CommonUserDto): PCoUserPo {
    return this.coUserDaoService.findUserById(user_id);
  }

  @ApiBody({
    description: '用户信息编辑',
  })
  @Post('info/edit')
  async infoEdit() {}

  @ApiBody({
    description: '用户组织列表',
  })
  @Post('organization/list')
  async organizationList() {}

  @ApiBody({
    description: '用户同意组织的邀请',
  })
  @Post('organization/invite/agree')
  async organizationInviteAgree() {}

  @ApiBody({
    description: '用户拒绝组织的邀请',
  })
  @Post('organization/invite/refuse')
  async organizationInviteRefuse() {}

  @ApiBody({
    description: '用户团队列表',
  })
  @Post('team/list')
  async teamList() {}
}
