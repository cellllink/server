import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserLoginDto {
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

export class UserRegisterDto {
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

export class UserInfoDto {
  @ApiProperty({
    description: '用户id',
  })
  @IsNotEmpty()
  user_id: number;
}

export class UserInfoEditDto {
  @ApiProperty({
    description: '用户id',
  })
  id: number;

  @ApiProperty({
    description: '用户名称',
  })
  name?: string;

  @ApiProperty({
    description: '用户头像',
  })
  avatar?: string;
}
