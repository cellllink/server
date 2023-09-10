import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * CoOrganization
 */
@Entity('co_organization', { schema: 'cellink' })
export class CoOrganization {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'owner_id', comment: '所有者id', unsigned: true })
  owner_id: number;

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
}

export interface CoOrganizationPo {
  id: number;
  owner_id: number;
  name: string;
  logo: string;
  create_time: Date;
}

export type PCoOrganizationPo = Promise<CoOrganizationPo>;

export type PCoOrganizationPos = Promise<CoOrganizationPo[]>;

/**
 * CoOrganizationUser
 */
@Entity('co_organization_user', { schema: 'cellink' })
export class CoOrganizationUser {
  @Column('int', {
    primary: true,
    name: 'organization_id',
    comment: '组织id',
    unsigned: true,
  })
  organization_id: number;

  @Column('int', {
    primary: true,
    name: 'user_id',
    comment: '用户id',
    unsigned: true,
  })
  user_id: number;

  @Column('datetime', {
    name: 'join_time',
    nullable: true,
    comment: '加入时间',
  })
  join_time: Date | null;

  @Column('tinyint', {
    name: 'status',
    comment: '成员状态',
    unsigned: true,
    default: () => "'2'",
  })
  status: number;
}

export interface CoOrganizationUserPo {
  organization_id: number;
  user_id: number;
  join_time: Date | null;
  status: number;
}

export type PCoOrganizationUserPo = Promise<CoOrganizationUserPo>;

export type PCoOrganizationUserPos = Promise<CoOrganizationUserPo[]>;

export enum CoOrganizationUserStatusEnum {
  invite = 0, // 邀请中
  refuse = 1, // 已拒绝
  onJob = 2, // 在职
  dimission = 3, // 离职
}
