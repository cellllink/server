import { ApiProperty } from '@nestjs/swagger';

export class UserPo {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '账号' })
  account: string;

  @ApiProperty({ description: '密码' })
  password: string;

  @ApiProperty({ description: '密码盐' })
  password_salt: string;

  @ApiProperty({ description: '名称' })
  name: string | null;

  @ApiProperty({ description: '头像' })
  avatar: string | null;

  @ApiProperty({ description: '注册时间' })
  register_time: Date;

  @ApiProperty({ description: '信息更新时间' })
  update_time: Date;
}
