import { Column, PrimaryGeneratedColumn } from 'typeorm';

import { LogicDeleteEnum } from '@share/enmu/logicDelete.enum';
import { datetimeTransformer } from '@share/util/column.transformer';

export class BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id', unsigned: true })
  id: number;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    transformer: datetimeTransformer,
  })
  create_time: Date;

  @Column('datetime', { name: 'update_time', comment: '更新时间', transformer: datetimeTransformer })
  update_time: Date;

  @Column('tinyint', { name: 'logic_delete', comment: '是否逻辑删除 0:正常 1:删除' })
  logic_delete: 0 | 1;
}

export class SoreOrderEntity extends BaseEntity {
  @Column('double', { name: 'sore_order', comment: '排序优先级' })
  sore_order?: number;
}

export class BaseEntityPo {
  id: number;
  create_time: Date;
  update_time: Date;
  logic_delete: LogicDeleteEnum;
}

export class SoreOrderEntityPo extends BaseEntityPo {
  sore_order?: number;
}
