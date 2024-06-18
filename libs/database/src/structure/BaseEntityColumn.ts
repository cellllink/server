import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntityColumn {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id', unsigned: true })
  id: number;

  @Column('datetime', { name: 'create_time', comment: '创建时间' })
  create_time: Date;

  @Column('datetime', { name: 'update_time', comment: '更新时间' })
  update_time: Date;

  @Column('tinyint', { name: 'logic_delete', comment: '是否逻辑删除 0:正常 1:删除' })
  logic_delete: 0 | 1;
}

export class BaseEntityPo {
  id: number;
  create_time: Date;
  update_time: Date;
  logic_delete: 0 | 1;
}
