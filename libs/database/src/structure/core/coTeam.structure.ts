import { Column, Entity } from 'typeorm';
import { BaseEntityPo } from '../baseEntityColumn';

/*
CREATE TABLE `co_team` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
  -- 
  `owner_user_id` int(11) unsigned NOT NULL COMMENT '所有者id',
  `owner_organization_id` int(11) unsigned NOT NULL COMMENT '所属组织id',
  -- 
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '名称',
  `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
  --
  PRIMARY KEY (`id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 团队表';
*/

@Entity('co_team', { schema: 'cellink' })
export class CoTeam {
  @Column('int', { name: 'owner_id', comment: '所有者id', unsigned: true })
  owner_id: number;

  @Column('int', { name: 'organization_id', comment: '所属组织id', unsigned: true })
  organization_id: number;

  @Column('varchar', { name: 'name', comment: '名称', length: 200 })
  name: string;

  @Column('varchar', { name: 'logo', comment: 'logo', length: 200 })
  logo: string;
}

export class CoTeamPo extends BaseEntityPo {
  owner_id: number;
  organization_id: number;
  name: string;
  logo: string;
}
export type PCoTeamPo = Promise<CoTeamPo>;
export type PCoTeamPos = Promise<CoTeamPo[]>;

/*
CREATE TABLE `co_team_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
  --
  `team_id` int(11) unsigned NOT NULL COMMENT '团队id',
  `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
  `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态',
  --
  PRIMARY KEY (`id`),
  KEY `team_id` (`team_id`),
  KEY `user_id` (`user_id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 团队用户的关联表';
*/

@Entity('co_team_user', { schema: 'cellink' })
export class CoTeamUser {
  @Column('int', { name: 'team_id', comment: '团队id', unsigned: true })
  team_id: number;

  @Column('int', { name: 'user_id', comment: '用户id', unsigned: true })
  user_id: number;

  @Column('tinyint', { name: 'status', comment: '成员状态', unsigned: true })
  status: number;
}

export class CoTeamUserPo extends BaseEntityPo {
  id: number;
  team_id: number;
  user_id: number;
  status: CoTeamUserStatusEnum;
}

export type PCoTeamUserPo = Promise<CoTeamUserPo>;
export type PCoTeamUserPos = Promise<CoTeamUserPo[]>;
export enum CoTeamUserStatusEnum {
  invite = 0, // 邀请中
  refuse = 1, // 已拒绝
  in = 2, // 已加入
  out = 3, // 已退出
}
