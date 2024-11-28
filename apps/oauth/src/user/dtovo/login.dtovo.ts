import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginByPasswordDto {
  @ApiProperty({
    description: '账号',
  })
  @IsNotEmpty({ message: '请输入账号' })
  account: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty({ message: '请输入密码' })
  password: string;
}

export class LoginByPasswordVo {
  // user: CoUserPo;
  token: string;
}
