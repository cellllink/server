import { Body, Controller, Post, Headers } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoUserDaoService } from '@db/dao';
import { encryptPasswordBySalt } from '@share/util/cryptogram.util';
import { baseExceptionCheck } from '@share/util/exception.util';
import { ByAccountVo } from './dtovo/login.vo';
import { JwtService } from '@nestjs/jwt';
import { ByAccountDto } from './dtovo/login.dto';

@ApiTags('OAuth-Login')
@Controller('/oauth/login')
export class LoginController {
  constructor(
    private coUserDaoService: CoUserDaoService,
    private jwtService: JwtService,
  ) {}

  @ApiBody({
    description: '账号密码登录',
    type: ByAccountDto,
  })
  @Post('/byAccount')
  async login(@Body() { account, password }: ByAccountDto): Promise<ByAccountVo> {
    const user = await this.coUserDaoService.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    return {
      token: this.jwtService.sign({ user_id: user.id }),
    };
  }
}
