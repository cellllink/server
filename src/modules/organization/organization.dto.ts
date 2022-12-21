import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OrganizationCreateDto {
  @ApiProperty({
    description: '组织所有者id',
  })
  @IsNotEmpty()
  owner_id: number;
}

export class OrganizationInfoDto {
  @ApiProperty({
    description: '组织id',
  })
  @IsNotEmpty()
  organization_id: number;
}

export class OrganizationInfoEditDto {
  @ApiProperty({
    description: '组织id',
  })
  id: number;

  @ApiProperty({
    description: '组织名称',
  })
  name?: string;

  @ApiProperty({
    description: '组织名称',
  })
  logo?: string;
}

export class OrganizationAddOrRemoveMemberDto {
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
