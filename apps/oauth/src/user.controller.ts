import { Body, Controller, Post, Headers } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBody } from '@nestjs/swagger';

import { CoUserDaoService } from '@database/dao';
import { encryptPasswordBySalt } from '@share/util/cryptogram.util';
import { baseExceptionCheck } from '@share/util/exception.util';
import { LoginDto, LoginVo } from './dtovo/login.dtovo';

@Controller('/oauth/user')
export class LoginController {
  constructor(
    private coUserDaoService: CoUserDaoService,
    private jwtService: JwtService,
  ) {}

  @Post('/login')
  @ApiBody({ description: '账号密码登录', type: LoginDto })
  async login(@Body() { account, password }: LoginDto): Promise<LoginVo> {
    const user = await this.coUserDaoService.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    return {
      token: this.jwtService.sign({ user_id: user.id }),
    };
  }
}
