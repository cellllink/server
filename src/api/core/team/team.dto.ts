import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TeamCreateDto {
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

  @ApiProperty({
    description: '组织id',
  })
  @IsNotEmpty()
  organization_id: number;
}

export class TeamMemberAddDto {
  @ApiProperty({
    description: '团队id',
  })
  @IsNotEmpty()
  team_id: number;

  @ApiProperty({
    description: '所有者id',
  })
  @IsNotEmpty()
  user_id: number;
}

export class TeamMemberRemoveDto {
  @ApiProperty({
    description: '团队id',
  })
  @IsNotEmpty()
  team_id: number;

  @ApiProperty({
    description: '所有者id',
  })
  @IsNotEmpty()
  user_id: number;
}
