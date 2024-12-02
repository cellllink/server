import { Column, Entity, Index } from 'typeorm';
import { BaseEntityColumn, BaseEntityPo } from '../baseEntityColumn';

/*
CREATE TABLE `co_organization` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
  -- 
  `owner_user_id` int(11) unsigned NOT NULL COMMENT '所有者id',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '名称',
  `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
  --
  PRIMARY KEY (`id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 组织表';
*/

@Entity('co_organization', { schema: 'cellink' })
export class CoOrganization extends BaseEntityColumn {
  @Column('int', { name: 'owner_user_id', comment: '所有者id', unsigned: true })
  owner_user_id: number;

  @Column('varchar', { name: 'name', comment: '名称', length: 200 })
  name: string;

  @Column('varchar', { name: 'logo', comment: 'logo', length: 200 })
  logo: string;
}

export class CoOrganizationPo extends BaseEntityPo {
  owner_user_id: number;
  name: string;
  logo: string;
}
export type PCoOrganizationPo = Promise<CoOrganizationPo>;
export type PCoOrganizationPos = Promise<CoOrganizationPo[]>;

/*
CREATE TABLE `co_organization_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
  -- 
  `organization_id` int(11) unsigned NOT NULL COMMENT '组织id',
  `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
  --
  `join_time` datetime COMMENT '加入时间',
  `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态',
  -- 
  PRIMARY KEY (`id`),
  KEY `organization_id` (`organization_id`),
  KEY `user_id` (`user_id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 组织用户关联表';
*/

@Entity('co_organization_user', { schema: 'cellink' })
export class CoOrganizationUser extends BaseEntityColumn {
  @Column('int', { name: 'organization_id', comment: '组织id', unsigned: true })
  organization_id: number;

  @Column('int', { name: 'user_id', comment: '用户id', unsigned: true })
  user_id: number;

  @Column('datetime', { name: 'join_time', nullable: true, comment: '加入时间' })
  join_time: Date | null;

  @Column('tinyint', { name: 'status', comment: '成员状态', unsigned: true })
  status: number;
}

export class CoOrganizationUserPo extends BaseEntityPo {
  organization_id: number;
  user_id: number;
  join_time: Date | null;
  status: CoOrganizationUserStatusEnum;
}
export type PCoOrganizationUserPo = Promise<CoOrganizationUserPo>;
export type PCoOrganizationUserPos = Promise<CoOrganizationUserPo[]>;

export enum CoOrganizationUserStatusEnum {
  invite = 0, // 邀请中
  refuse = 1, // 已拒绝
  onJob = 2, // 在职
  dimission = 3, // 离职
}

/*
CREATE TABLE `co_organization_team` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
  --
  `organization_id` int(11) unsigned NOT NULL COMMENT '组织id',
  `team_id` int(11) unsigned NOT NULL COMMENT '团队id',
  --
  PRIMARY KEY (`id`),
  KEY `organization_id` (`organization_id`),
  KEY `team_id` (`team_id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 组织团队关联表';
*/

@Index('organization_id', ['organization_id'], {})
@Index('team_id', ['team_id'], {})
@Entity('co_organization_team', { schema: 'cellink' })
export class CoOrganizationTeam extends BaseEntityColumn {
  @Column('int', { name: 'organization_id', comment: '组织id', unsigned: true })
  organization_id: number;

  @Column('int', { name: 'team_id', comment: '团队id', unsigned: true })
  team_id: number;
}

export class CoOrganizationTeamPo extends BaseEntityPo {
  organization_id: number;
  team_id: number;
}
export type PCoOrganizationTeamPo = Promise<CoOrganizationTeamPo>;
export type PCoOrganizationTeamPos = Promise<CoOrganizationTeamPo[]>;
