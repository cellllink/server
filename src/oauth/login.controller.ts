import { Body, Controller, Post, Headers } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoUserDaoService } from '@database/dao';
import { encryptPasswordBySalt } from 'src/share/util/cryptogram.util';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { LoginVo } from './dtovo/login.vo';
import { JwtService } from '@nestjs/jwt';
import { AccountDto } from './dtovo/login.dto';

@ApiTags('OAuth-Login')
@Controller('/oauth/login')
export class LoginController {
  constructor(
    private coUserDaoService: CoUserDaoService,
    private jwtService: JwtService,
  ) {}

  @ApiBody({
    description: '账号密码登录',
    type: AccountDto,
  })
  @Post('/account')
  async login(@Body() { account, password }: AccountDto): Promise<LoginVo> {
    const user = await this.coUserDaoService.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    return {
      token: this.jwtService.sign({ user_id: user.id }),
    };
  }
}
