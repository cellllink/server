import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto/auto.dto';
import { CoUserDaoService } from '@database/dao';
import { encryptPasswordBySalt, makeSalt } from 'src/share/util/cryptogram.util';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { CoUserPo } from '@database/structure';
import { PVoid } from 'src/share/type/common.type';

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
  async login(@Body() { account, password }: LoginDto) {
    return;
  }
}
