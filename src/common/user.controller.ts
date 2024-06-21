import { Controller, Headers, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoUserDaoService } from '@database/dao';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { PCoUserPo } from '@database/structure/core';

@ApiTags('Common-User')
@Controller('/common/user')
export class UserController {
  constructor(private coUserDaoService: CoUserDaoService) {}

  @ApiBody({
    description: '用户信息',
  })
  @Post('/info')
  async login(@Headers('Authorization') Authorization: string): PCoUserPo {
    console.log(Authorization);

    const user = await this.coUserDaoService.findUserById(2);

    baseExceptionCheck(!user, '该账号不存在');

    return user;
  }
}
