import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class InfoEditDto {
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  sex: number;
}
