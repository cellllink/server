import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AccountDto {
  @ApiProperty({
    description: '账号',
  })
  @IsNotEmpty()
  account: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty()
  password: string;
}
