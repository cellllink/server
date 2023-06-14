import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: '账号',
  })
  @IsNotEmpty({ message: '请输入账号' })
  account: string;
}
