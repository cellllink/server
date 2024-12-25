import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { UserDao } from '@db/dao/core/user.dao';
import { UserParams } from '@share/decorator/user.params.decorator';
import { ReqUser } from '@share/jwt/jwt.strategy';

@ApiTags('User')
@Controller('/user')
export class AuthController {
  constructor(private userDao: UserDao) {}

  @Post('/info')
  @ApiBody({ description: '查询用户信息' })
  async info(@UserParams() reqUser: ReqUser) {
    return await this.userDao.findUserById(reqUser.user_id);
  }
}
