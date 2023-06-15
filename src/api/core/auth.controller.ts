import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { BaseException } from 'src/share/httpException';
import { encryptPasswordBySalt, makeSalt } from 'src/share/utils';
import { AuthRegisterDto, AuthLoginDto } from './auth.dto';
import { LoginVo } from './auth.vo';

@ApiTags('CoreAuth')
@Controller('/api/core/auth')
export class AuthController {
  constructor(private coreDaoServcie: CoreDaoServcie) {}

  // 注册
  @Post('register')
  @ApiBody({ type: AuthRegisterDto })
  async register(@Body() dto: AuthRegisterDto): Promise<string> {
    const { account, password } = dto;

    if (await this.coreDaoServcie.findUserByAccount(account))
      throw new BaseException('该账号已存在');

    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPasswordBySalt(password, salt); // 加密密码

    await this.coreDaoServcie.repository.user.save({
      account,
      password: hashPassword,
      salt,
    });
    return '注册成功';
  }

  // 登录
  @Post('login')
  @ApiBody({ type: AuthLoginDto })
  async login(@Body() dto: AuthLoginDto): Promise<LoginVo> {
    const { account, password } = dto;

    const user = await this.coreDaoServcie.findUserByAccount(account);
    if (!user) throw new BaseException('未找到该账户');

    const hashPassword = encryptPasswordBySalt(password, user.salt); // 加密密码
    if (user.password !== hashPassword) throw new BaseException('密码错误');

    return {
      user,
      token: '',
    };
  }
}
