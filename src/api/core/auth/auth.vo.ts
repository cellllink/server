import { ApiProperty } from '@nestjs/swagger';
import { UserPo } from 'packages/database/po/core';

export class LoginVo {
  @ApiProperty({
    description: '用户信息',
  })
  user: UserPo;

  @ApiProperty({
    description: 'Token',
  })
  token: string;
}
