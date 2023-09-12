import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// user_id
export class CommonUserDto {
  @IsNotEmpty()
  user_id: number;
}

// user_id & organization_id
export class CommonOrganizationDto extends CommonUserDto {
  @IsNotEmpty()
  organization_id: number;
}

// user_id & team_id
export class CommonTeamDto extends CommonUserDto {
  @IsNotEmpty()
  team_id: number;
}

// user_id & organization_id & team_id
export class CommonOrganizationTeamDto extends CommonUserDto {
  @IsNotEmpty()
  organization_id: number;

  @IsNotEmpty()
  team_id: number;
}
