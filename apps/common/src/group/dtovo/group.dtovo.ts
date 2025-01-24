import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  owner_uuid: string;
}

export class ListDto extends BaseDto {}

export class AddDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  desc: string;
}

export class CopyDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class MoveDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  start: number;

  @ApiProperty()
  @IsNotEmpty()
  end: number;
}

export class RemoveDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
