import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
