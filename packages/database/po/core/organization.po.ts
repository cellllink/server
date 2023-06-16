import { ApiProperty } from '@nestjs/swagger';

export enum OrganizationUserStatus {
  invite = 0, // 邀请中
  refuse = 1, // 已拒绝
  onJob = 2, // 在职
  dimission = 3, // 离职
  delete = 99, // 已删除
}

export class OrganizationPo {
  id: number;
  owner_id: number;
  name: string;
  logo: string;
  create_time: string;
}

export class OrganizationUserPo {
  organization_id: number;
  user_id: number;
  join_time: Date | null;
  status: OrganizationUserStatus;
}
