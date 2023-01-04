import { ApiProperty } from '@nestjs/swagger';
import { UserPo } from '@cellink/transfer/services/user/user.po';

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
