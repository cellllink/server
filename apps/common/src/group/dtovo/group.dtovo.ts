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

export class RemoveDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
