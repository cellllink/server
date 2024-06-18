import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiCoTeam')
@Controller('/api/co/team')
export class CoTeamController {
  constructor() {}

  @ApiBody({
    description: '团队信息',
  })
  @Post('info')
  async info() {}

  @ApiBody({
    description: '团队信息编辑',
  })
  @Post('info/edit')
  async infoEdit() {}

  @ApiBody({
    description: '团队成员列表',
  })
  @Post('members')
  async members() {}

  @ApiBody({
    description: '团队成员添加',
  })
  @Post('member/add')
  async memberAdd() {}

  @ApiBody({
    description: '团队成员移除',
  })
  @Post('member/remove')
  async memberRemove() {}
}
