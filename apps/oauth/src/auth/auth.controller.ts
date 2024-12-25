import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { UserDao } from '@db/dao/core/user.dao';
import { CoreRepository } from '@db/repository';
import { encryptPasswordBySalt, makeSalt } from '@share/util/cryptogram.util';
import { baseExceptionCheck } from '@share/util/exception.util';
import { Public } from '@share/decorator/public';

import { LoginByPasswordDto, LoginByPasswordVo } from './dtovo/login.dtovo';
import { RegisterByPasswordDto } from './dtovo/register.dtovo';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(
    private userDao: UserDao,
    private coreRepository: CoreRepository,
    private jwtService: JwtService,
  ) {}

  @Post('/login/by/password')
  @Public()
  @ApiBody({ description: '通过账号密码登录', type: LoginByPasswordDto })
  async loginByPassword(@Body() { account, password }: LoginByPasswordDto): Promise<LoginByPasswordVo> {
    const user = await this.userDao.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    const vo = new LoginByPasswordVo();
    vo.token = this.jwtService.sign({ user_id: user.id });

    return vo;
  }

  @Post('/login/status/check')
  @ApiBody({ description: '检查登录状态' })
  async loginStatusCheck() {}

  @Post('/register/by/password')
  @Public()
  @ApiBody({ description: '通过账号密码注册', type: RegisterByPasswordDto })
  async registerByPassword(@Body() { account, password }: RegisterByPasswordDto) {
    const user = await this.userDao.findUserByAccount(account);
    baseExceptionCheck(!!user, '该账号已存在');

    const salt = makeSalt(); // 制作密码盐
    password = encryptPasswordBySalt(password, salt); // 加密密码;

    await this.coreRepository.user.save({ account, password, salt });
  }
}
