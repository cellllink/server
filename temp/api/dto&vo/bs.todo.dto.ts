import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export enum GroupAddTypeEnum {
  group = 'group',
  list = 'list',
}

export class GroupAddDto {
  @ApiProperty({ description: '添加类型', enum: GroupAddTypeEnum })
  @IsNotEmpty()
  type: GroupAddTypeEnum;

  @ApiProperty({ description: '场景标识' })
  @IsNotEmpty()
  scene_uuid: string;

  @ApiPropertyOptional({ description: '目录id' })
  catalogue_id?: number;

  @ApiProperty({ description: '标题' })
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ description: '排序上一个的id' })
  order_prev_id?: number;
}

export class GroupDeleteDto {
  @ApiProperty({ description: 'id' })
  @IsNotEmpty()
  id: number;
}

export class GroupListDto {
  @ApiProperty({ description: '场景标识' })
  @IsNotEmpty()
  scene_uuid: string;
}

export class GroupMoveDto {
  @IsNotEmpty()
  target_id: number;

  @IsNotEmpty()
  move_id: number;
}
