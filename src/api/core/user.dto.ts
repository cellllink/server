import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

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
