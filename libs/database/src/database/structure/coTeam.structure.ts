import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('co_team', { schema: 'cellink' })
export class CoTeam {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'owner_id', comment: '所有者id', unsigned: true })
  owner_id: number;

  @Column('int', {
    name: 'organization_id',
    comment: '所属组织id',
    unsigned: true,
  })
  organization_id: number;

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

  @Column('tinyint', {
    name: 'data_status',
    comment: '数据状态 0:正常 99:删除',
    default: () => "'0'",
  })
  data_status: number;
}

export interface CoTeamPo {
  id: number;
  owner_id: number;
  organization_id: number;
  name: string;
  logo: string;
  create_time: Date;
  data_status: number;
}

export type PCoTeamPo = Promise<CoTeamPo>;

export type PCoTeamPos = Promise<CoTeamPo[]>;
