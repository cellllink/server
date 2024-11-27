import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoOrganizationDaoService, CoUserDaoService, CoreRepository } from '@database/dao';
import { encryptPasswordBySalt, makeSalt } from 'src/share/util/cryptogram.util';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { PVoid } from 'src/share/type/common.type';
import { ByAccountDto } from './dtovo/register.dto';
import { timer } from 'rxjs';

@ApiTags('OAuth-Register')
@Controller('/oauth/register')
export class RegisterController {
  constructor(
    private coreRepository: CoreRepository,
    private coUserDaoService: CoUserDaoService,
    private coOrganizationDaoService: CoOrganizationDaoService,
  ) {}

  @ApiBody({
    description: '账号密码注册',
    type: ByAccountDto,
  })
  @Post('byAccount')
  async register(@Body() { account, password }: ByAccountDto): PVoid {
    const user = await this.coUserDaoService.findUserByAccount(account);
    baseExceptionCheck(!!user, '该账号已存在');

    const salt = makeSalt(); // 制作密码盐

    const newUser = await this.coreRepository.user.save({
      account,
      password: encryptPasswordBySalt(password, salt), // 加密密码;
      salt,
      name: '名称',
    });

    await this.coOrganizationDaoService.create(newUser.id);
  }
}
