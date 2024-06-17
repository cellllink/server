import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto&vo/auth.dto';
import { CoUserDaoService } from '@database/dao';
import { encryptPasswordBySalt, makeSalt } from 'src/share/util/cryptogram.util';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { CoUserPo } from '@database/structure';
import { PVoid } from 'src/share/type/common.type';
import { LoginVo } from './dto&vo/auth.vo';
import { LoginService } from './service/login.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('OAuth-Login')
@Controller('/oauth/login')
export class LoginController {
  constructor(
    private coUserDaoService: CoUserDaoService,
    private jwtService: JwtService,
    private loginService: LoginService,
  ) {}

  @ApiBody({
    description: '用户登录',
    type: LoginDto,
  })
  @Post('/')
  async login(@Body() { account, password }: LoginDto): Promise<LoginVo> {
    const user = await this.coUserDaoService.findUserByAccount(account);

    baseExceptionCheck(!user, '该账号不存在');
    baseExceptionCheck(user.password !== encryptPasswordBySalt(password, user.salt), '密码错误');

    return {
      token: this.jwtService.sign({ user_id: user.id }),
    };
  }

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
    newUser.name = this.loginService.getDefaultName();
    await this.coUserDaoService.save(newUser);
  }
}
