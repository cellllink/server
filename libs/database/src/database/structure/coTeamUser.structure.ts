import { Column, Entity } from 'typeorm';

@Entity('co_team_user', { schema: 'cellink' })
export class CoTeamUser {
  @Column('int', {
    primary: true,
    name: 'team_id',
    comment: '团队id',
    unsigned: true,
  })
  team_id: number;

  @Column('int', {
    primary: true,
    name: 'user_id',
    comment: '用户id',
    unsigned: true,
  })
  user_id: number;

  @Column('tinyint', {
    name: 'status',
    comment: '成员状态',
    unsigned: true,
    default: () => "'2'",
  })
  status: number;
}

export interface CoTeamUserPo {
  team_id: number;
  user_id: number;
  status: number;
}

export type PCoTeamUserPo = Promise<CoTeamUserPo>;

export type PCoTeamUserPos = Promise<CoTeamUserPo[]>;

export enum CoTeamUserStatusEnum {
  invite = 0, // 邀请中
  refuse = 1, // 已拒绝
  in = 2, // 已加入
  out = 3, // 已退出
}
