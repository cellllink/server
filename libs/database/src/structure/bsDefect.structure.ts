import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * BsDefect
 */
@Entity('bs_defect', { schema: 'cellink' })
export class BsDefect {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', {
    name: 'project_id',
    comment: '所属缺陷集合项目id',
    unsigned: true,
  })
  project_id: number;

  @Column('int', { name: 'owner_id', comment: '所有者id', unsigned: true })
  owner_id: number;

  @Column('int', { name: 'deal_user_id', comment: '处理人', unsigned: true })
  deal_user_id: number;

  @Column('varchar', { name: 'title', comment: '标题', length: 100 })
  title: string;

  @Column('int', {
    name: 'detail_id',
    nullable: true,
    comment: '详情id',
    unsigned: true,
  })
  detail_id: number | null;

  @Column('int', {
    name: 'priority',
    nullable: true,
    comment: '优先级',
    unsigned: true,
  })
  priority: number | null;

  @Column('int', {
    name: 'severity',
    nullable: true,
    comment: '严重程度',
    unsigned: true,
  })
  severity: number | null;

  @Column('int', {
    name: 'group_id',
    nullable: true,
    comment: '分组id',
    unsigned: true,
  })
  group_id: number | null;

  @Column('int', {
    name: 'tag_id',
    nullable: true,
    comment: '标签id',
    unsigned: true,
  })
  tag_id: number | null;

  @Column('int', {
    name: 'status',
    comment: '状态',
    unsigned: true,
    default: () => "'0'",
  })
  status: number;

  @Column('datetime', { name: 'deadline', nullable: true, comment: '截至时间' })
  deadline: Date | null;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_time: Date;

  @Column('datetime', {
    name: 'update_time',
    comment: '更新时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  update_time: Date;
}

export interface BsDefectPo {
  id: number;
  project_id: number;
  owner_id: number;
  deal_user_id: number;
  title: string;
  detail_id: number | null;
  priority: number | null;
  severity: number | null;
  group_id: number | null;
  tag_id: number | null;
  status: number;
  deadline: Date | null;
  create_time: Date;
  update_time: Date;
}

export type PBsDefectPo = Promise<BsDefectPo>;

export type PBsDefectPos = Promise<BsDefectPo[]>;

export enum BsDefectPriorityEnum {
  low = 0, // 低
  middle = 1, // 中
  high = 2, // 高
  urgent = 3, // 紧急
}

export enum BsDefectSeverityEnum {
  suggest = 0, // 建议
  general = 1, // 一般
  severity = 2, // 严重
}

export enum BsDefectStatusEnum {
  pending = 0, // 待处理
  processed = 1, // 处理中
  waitVerification = 2, // 待验证
  refused = 3, // 已拒绝
  reopen = 4, // 重新打开
  aclosed = 5, // 已关闭
}

/**
 * BsDefectProject
 */
@Index('product_id', ['product_id'], {})
@Entity('bs_defect_project', { schema: 'cellink' })
export class BsDefectProject {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('int', { name: 'product_id', comment: '所属产品id', unsigned: true })
  product_id: number;

  @Column('int', { name: 'owner_id', comment: '所有者id', unsigned: true })
  owner_id: number;

  @Column('varchar', { name: 'name', comment: '标题', length: 20 })
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

export interface BsDefectProjectPo {
  id: number;
  product_id: number;
  owner_id: number;
  name: string;
  logo: string;
  create_time: Date;
}

export type PBsDefectProjectPo = Promise<BsDefectProjectPo>;

export type PBsDefectProjectPos = Promise<BsDefectProjectPo[]>;
