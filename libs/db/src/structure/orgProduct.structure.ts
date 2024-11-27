import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('org_product', { schema: 'cellink' })
export class OrgProduct {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', {
    name: 'organization_id',
    comment: '所属组织id',
    unsigned: true,
  })
  organization_id: number;

  @Column('int', {
    name: 'group_id',
    nullable: true,
    comment: '分组id',
    unsigned: true,
  })
  group_id: number | null;

  @Column('varchar', { name: 'name', comment: '名称', length: 20 })
  name: string;

  @Column('varchar', { name: 'logo', comment: 'logo', length: 200 })
  logo: string;

  @Column('varchar', { name: 'desc', comment: '描述', length: 200 })
  desc: string;

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

export interface OrgProductPo {
  id: number;
  organization_id: number;
  group_id: number | null;
  name: string;
  logo: string;
  desc: string;
  create_time: Date;
}

export type POrgProductPo = Promise<OrgProductPo>;

export type POrgProductPos = Promise<OrgProductPo[]>;
