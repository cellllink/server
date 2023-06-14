import { ApiProperty } from '@nestjs/swagger';

export class OrganizationPo {
  id: number;
  owner_id: number;
  name: string;
  logo: string;
  create_time: string;
}
