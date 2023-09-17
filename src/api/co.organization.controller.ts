import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('ApiCoOrganization')
@Controller('/api/co/organization')
export class CoOrganizationController {
  constructor() {}

  @ApiBody({
    description: '组织信息',
  })
  @Post('info')
  async info() {}

  @ApiBody({
    description: '组织信息编辑',
  })
  @Post('info/edit')
  async infoEdit() {}

  @ApiBody({
    description: '组织成员列表',
  })
  @Post('member/list')
  async memberList() {}

  @ApiBody({
    description: '组织成员邀请',
  })
  @Post('member/invite/send')
  async memberSend() {}

  @ApiBody({
    description: '取消组织成员邀请',
  })
  @Post('member/invite/cancel')
  async invitedMembers() {}

  @ApiBody({
    description: '组织成员邀请待同意列表',
  })
  @Post('member/invite/wait/list')
  async invitedMemberWaitList() {}

  @ApiBody({
    description: '组织成员邀请已拒绝列表',
  })
  @Post('member/invite/refuse/list')
  async invitedMemberRefuseList() {}
}
