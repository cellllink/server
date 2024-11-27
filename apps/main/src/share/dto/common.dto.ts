import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// user_id
export class CommonUserDto {
  @ApiProperty({
    description: '所有者id',
  })
  @IsNotEmpty()
  user_id: number;
}

// user_id & organization_id
export class CommonOrganizationDto extends CommonUserDto {
  @ApiProperty({
    description: '组织id',
  })
  @IsNotEmpty()
  organization_id: number;
}

// user_id & organization_id & team_id
export class CommonTeamDto extends CommonOrganizationDto {
  @ApiProperty({
    description: '团队id',
  })
  @IsNotEmpty()
  team_id: number;
}
