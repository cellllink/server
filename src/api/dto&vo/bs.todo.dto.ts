import { IsNotEmpty } from 'class-validator';

export class GroupAddDto {
  @IsNotEmpty()
  type: 'group' | 'list';

  @IsNotEmpty()
  scene_uuid: string;

  catalogue_id?: number;

  @IsNotEmpty()
  title: string;

  order_prev_id?: number;
}

export class GroupEditDto {
  @IsNotEmpty()
  id: number;

  icon?: string;

  @IsNotEmpty()
  title: string;
}

export class GroupDeleteDto {
  @IsNotEmpty()
  id: number;
}

export class GroupListDto {
  @IsNotEmpty()
  scene_uuid: string;
}

export class GroupMoveDto {
  @IsNotEmpty()
  target_id: number;

  @IsNotEmpty()
  move_id: number;
}
