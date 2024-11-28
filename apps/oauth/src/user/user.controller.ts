import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { CoUserDaoService } from '@db/dao';
import { encryptPasswordBySalt, makeSalt } from '@share/util/cryptogram.util';
import { baseExceptionCheck } from '@share/util/exception.util';
import { LoginByPasswordDto, LoginByPasswordVo } from './dtovo/login.dtovo';
import { PVoid } from '@share/type/common.type';

import { RegisterByPasswordDto } from './dtovo/register.dtovo';

@ApiTags('Oauth-User')
@Controller('/user')
export class UserController {
  constructor(
    private coUserDaoService: CoUserDaoService,
    private jwtService: JwtService,
  ) {}

  @Post('/login/by/password')
  @ApiBody({ description: '账号密码登录', type: LoginByPasswordDto })
  async loginByPassword(@Body() { account, password }: LoginByPasswordDto): Promise<LoginByPasswordVo> {
    const user = await this.coUserDaoService.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    return {
      token: this.jwtService.sign({ user_id: user.id }),
    };
  }

  @Post('/register/by/password')
  @ApiBody({ description: '账号密码注册', type: RegisterByPasswordDto })
  async registerByPassword(@Body() { account, password }: RegisterByPasswordDto): PVoid {
    const user = await this.coUserDaoService.findUserByAccount(account);
    baseExceptionCheck(!!user, '该账号已存在');

    const salt = makeSalt(); // 制作密码盐
    password = encryptPasswordBySalt(password, salt); // 加密密码;

    await this.coUserDaoService.coreRepository.user.save({ account, password, salt });
  }
}
