import { ApiProperty } from '@nestjs/swagger';

export class TeamPo {
  id: number;
  owner_id: number;
  organization_id: number;
  name: string;
  logo: string;
  create_time: string;
}
