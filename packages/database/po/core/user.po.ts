import { ApiProperty } from '@nestjs/swagger';

export class UserPo {
  id: number;
  account: string;
  password: string;
  salt: string;
  name: string;
  avatar: string;
  phone: string;
  sex: number;
  register_time: string;
  update_time: string;
}
