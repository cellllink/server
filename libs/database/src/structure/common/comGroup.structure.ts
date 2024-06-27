import { Column, Entity } from 'typeorm';
import { BaseEntityColumn, BaseEntityPo } from '../baseEntityColumn';

/*
CREATE TABLE `com_group` (
  -- 公共字段
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',

  -- 独有字段
  `name` varchar(20) NOT NULL COMMENT '名称',
  `desc` varchar(200) NOT NULL DEFAULT '' COMMENT '描述',
  `owner_uuid` varchar(32) NOT NULL COMMENT '32位的uuid',

  -- 主键 & 索引
  PRIMARY KEY (`id`)
) DEFAULT CHARSET UTF8 COMMENT '公共 - 分组表';
*/

@Entity('com_group', { schema: 'cellink' })
export class ComGroup extends BaseEntityColumn {
  @Column('varchar', { name: 'name', comment: '名称', length: 20 })
  name: string;

  @Column('varchar', { name: 'desc', comment: '描述', length: 200 })
  desc: string;

  @Column('varchar', { name: 'owner_uuid', comment: '32位的uuid', length: 32 })
  owner_uuid: string;
}

export class ComGroupPo extends BaseEntityPo {
  name: string;
  desc: string;
  owner_uuid: string;
}
export type PComGroupPo = Promise<ComGroupPo>;
export type PComGroupPos = Promise<ComGroupPo[]>;
