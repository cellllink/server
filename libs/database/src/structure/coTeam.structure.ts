import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * CoTeam
 */
@Entity('co_team', { schema: 'cellink' })
export class CoTeam {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'owner_id', comment: '所有者id', unsigned: true })
  owner_id: number;

  @Column('int', {
    name: 'organization_id',
    comment: '所属组织id',
    unsigned: true,
  })
  organization_id: number;

  @Column('varchar', { name: 'name', comment: '名称', length: 200 })
  name: string;

  @Column('varchar', { name: 'logo', comment: 'logo', length: 200 })
  logo: string;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_time: Date;

  @Column('tinyint', {
    name: 'logic_delete',
    nullable: true,
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number | null;
}

export interface CoTeamPo {
  id: number;
  owner_id: number;
  organization_id: number;
  name: string;
  logo: string;
  create_time: Date;
}

export type PCoTeamPo = Promise<CoTeamPo>;

export type PCoTeamPos = Promise<CoTeamPo[]>;

/**
 * CoTeamUser
 */
@Index('team_id', ['team_id'], {})
@Index('user_id', ['user_id'], {})
@Entity('co_team_user', { schema: 'cellink' })
export class CoTeamUser {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'team_id', comment: '团队id', unsigned: true })
  team_id: number;

  @Column('int', { name: 'user_id', comment: '用户id', unsigned: true })
  user_id: number;

  @Column('tinyint', {
    name: 'status',
    comment: '成员状态',
    unsigned: true,
    default: () => "'2'",
  })
  status: number;

  @Column('tinyint', {
    name: 'logic_delete',
    nullable: true,
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number | null;
}

export interface CoTeamUserPo {
  id: number;
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
