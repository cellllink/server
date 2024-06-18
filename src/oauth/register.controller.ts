import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoUserDaoService } from '@database/dao';
import { encryptPasswordBySalt, makeSalt } from 'src/share/util/cryptogram.util';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { CoUserPo } from '@database/structure/core';
import { PVoid } from 'src/share/type/common.type';
import { LoginService } from './service/login.service';
import { AccountDto } from './dtovo/register.dto';

@ApiTags('OAuth-Register')
@Controller('/oauth/register')
export class RegisterController {
  constructor(
    private coUserDaoService: CoUserDaoService,
    private loginService: LoginService,
  ) {}

  @ApiBody({
    description: '账号密码注册',
    type: AccountDto,
  })
  @Post('account')
  async register(@Body() { account, password }: AccountDto): PVoid {
    const user = await this.coUserDaoService.findUserByAccount(account);
    baseExceptionCheck(!!user, '该账号已存在');

    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPasswordBySalt(password, salt); // 加密密码

    const newUser = new CoUserPo();
    newUser.account = account;
    newUser.password = hashPassword;
    newUser.salt = salt;
    newUser.name = this.loginService.getDefaultName();
    await this.coUserDaoService.save(newUser);
  }
}
