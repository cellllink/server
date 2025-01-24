import { Column, Entity, Index } from 'typeorm';

import { SoreOrderEntity, SoreOrderEntityPo } from '../baseEntityColumn';

/*
CREATE TABLE `com_group` (
  -- 公共字段
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `sore_order` double (9, 8) UNSIGNED COMMENT '排序优先级',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',

  -- 独有字段
  `name` varchar(20) NOT NULL COMMENT '名称',
  `desc` varchar(200) NOT NULL DEFAULT '' COMMENT '描述',
  `owner_uuid` varchar(32) NOT NULL COMMENT '所属者 - 32位的uuid',

  -- 主键 & 索引
  PRIMARY KEY (`id`),
  KEY `owner_uuid` (`owner_uuid`)
) DEFAULT CHARSET UTF8 COMMENT '公共 - 分组表';
*/

@Index('owner_uuid', ['owner_uuid'], {})
@Entity('com_group', { schema: 'cellink' })
export class GroupEntity extends SoreOrderEntity {
  @Column('varchar', { name: 'name', comment: '名称', length: 20 })
  name: string;

  @Column('varchar', { name: 'desc', comment: '描述', length: 200 })
  desc: string;

  @Column('varchar', { name: 'owner_uuid', comment: '32位的uuid', length: 32 })
  owner_uuid: string;
}

export class GroupPo extends SoreOrderEntityPo {
  name: string;
  desc: string;
  owner_uuid: string;
}
