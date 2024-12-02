import { Column, Entity, Index } from 'typeorm';
import { BaseEntity, BaseEntityPo } from '../baseEntityColumn';

/* 数据表
CREATE TABLE `co_user` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
    -- 
    `account` varchar(200) NOT NULL COMMENT '账号',
    `password` varchar(32) NOT NULL COMMENT '密码',
    `salt` varchar(4) NOT NULL COMMENT '密码盐',
    -- 
    `name` varchar(200) DEFAULT '' COMMENT '名称',
    `avatar` varchar(200) DEFAULT '' COMMENT '头像',
    `phone` varchar(11) DEFAULT '' COMMENT '手机号',
    `sex` tinyint(1) unsigned DEFAULT 0 COMMENT '性别 0：未知 1：男 2女',
    --
    PRIMARY KEY (`id`),
    KEY `account` (`account`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 用户表';
*/

@Index('account', ['account'], {})
@Entity('co_user', { schema: 'cellink' })
export class UserEntity extends BaseEntity {
  @Column('varchar', { name: 'account', comment: '账号', length: 200 })
  account: string;
  @Column('varchar', { name: 'password', comment: '密码', length: 32 })
  password: string;
  @Column('varchar', { name: 'salt', comment: '密码盐', length: 4 })
  salt: string;

  @Column('varchar', { name: 'name', nullable: true, comment: '名称', length: 200 })
  name: string;
  @Column('varchar', { name: 'avatar', nullable: true, comment: '头像', length: 200 })
  avatar: string;
  @Column('varchar', { name: 'phone', nullable: true, comment: '手机号', length: 11 })
  phone: string;
  @Column('tinyint', { name: 'sex', nullable: true, comment: '性别', unsigned: true })
  sex: number;
}

export class UserPo extends BaseEntityPo {
  account: string;
  password: string;
  salt: string;

  name: string;
  avatar: string;
  phone: string;
  sex: number;
}

export type PUserPo = Promise<UserPo>;
export type PUserPos = Promise<UserPo[]>;

export enum SexEnum {
  unknow = 0, // 未知
  man = 1, // 男
  woman = 2, // 女
}
