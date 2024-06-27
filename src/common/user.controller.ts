import { Controller, Headers, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoUserDaoService } from '@database/dao';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { PCoUserPo } from '@database/structure/core';
import { JwtAuthGuard } from 'src/share/guard/jwt.guard';

@ApiTags('Common-User')
@Controller('/common/user')
export class UserController {
  constructor(private coUserDaoService: CoUserDaoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBody({
    description: '用户信息',
  })
  @Post('/info')
  async login(@Req() req: any): PCoUserPo {
    const user = await this.coUserDaoService.findUserById(7);

    baseExceptionCheck(!user, '该账号不存在');

    return user;
  }
}
