import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OrganizationCreateDto {
  @ApiProperty({
    description: '名称',
  })
  @IsNotEmpty({ message: '请输入组织名称' })
  name: string;

  @ApiProperty({
    description: '所有者id',
  })
  @IsNotEmpty()
  user_id: number;
}

export class OrganizationInviteDto {
  @ApiProperty({
    description: '组织id',
  })
  @IsNotEmpty()
  organization_id: number;

  @ApiProperty({
    description: '用户id',
  })
  @IsNotEmpty()
  user_id: number;
}

export class OrganizationDimissionDto {
  @ApiProperty({
    description: '组织id',
  })
  @IsNotEmpty()
  organization_id: number;

  @ApiProperty({
    description: '用户id',
  })
  @IsNotEmpty()
  user_id: number;
}