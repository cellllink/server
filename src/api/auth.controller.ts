import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto&vo/auth.dto';
import { CoUserDaoService } from '@database/dao';
import { encryptPasswordBySalt, makeSalt } from 'src/share/util/cryptogram.util';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { CoUserPo, PCoUserPo } from '@database/structure';
import { PVoid } from 'src/share/type/common.type';
import { LoginVo } from './dto&vo/auth.vo';

@ApiTags('ApiAuth')
@Controller('/api/auth')
export class AuthController {
  constructor(private coUserDaoService: CoUserDaoService) {}

  @ApiBody({
    description: '用户注册',
    type: RegisterDto,
  })
  @Post('register')
  async register(@Body() { account, password }: RegisterDto): PVoid {
    const user = await this.coUserDaoService.findUserByAccount(account);
    baseExceptionCheck(!!user, '该账号已存在');

    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPasswordBySalt(password, salt); // 加密密码

    const newUser = new CoUserPo();
    newUser.account = account;
    newUser.password = hashPassword;
    newUser.salt = salt;
    newUser.name = '小细胞';
    await this.coUserDaoService.save(newUser);
  }

  @ApiBody({
    description: '用户登录',
    type: LoginDto,
  })
  @Post('login')
  async login(@Body() { account, password }: LoginDto): Promise<LoginVo> {
    const user = await this.coUserDaoService.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    return {
      user: await this.coUserDaoService.findUserById(user.id),
      token: '',
    };
  }
}
