import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('com_group', { schema: 'cellink' })
export class ComGroup {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('varchar', { name: 'name', comment: '名称', length: 20 })
  name: string;

  @Column('varchar', { name: 'desc', comment: '描述', length: 200 })
  desc: string;

  @Column('varchar', { name: 'type', comment: '分组类型', length: 32 })
  type: string;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_time: Date;

  @Column('tinyint', {
    name: 'logic_delete',
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number;
}

export interface ComGroupPo {
  id: number;
  name: string;
  desc: string;
  type: string;
  create_time: Date;
}

export type PComGroupPo = Promise<ComGroupPo>;

export type PComGroupPos = Promise<ComGroupPo[]>;
