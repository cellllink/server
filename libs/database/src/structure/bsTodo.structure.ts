import { datetimeTransformer } from 'src/share/util/column.transformer';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * BsTodoGroup
 */
@Index('scene_uuid', ['scene_uuid'], {})
@Entity('bs_todo_group', { schema: 'cellink' })
export class BsTodoGroup {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('varchar', {
    name: 'scene_uuid',
    nullable: true,
    comment: '关联唯一场景标识scene_uuid,其他场景提供',
    length: 36,
  })
  scene_uuid: string | null;

  @Column('int', {
    name: 'catalogue_id',
    nullable: true,
    comment: '目录id,有这个id就是目录,没有就是todo列表',
    unsigned: true,
  })
  catalogue_id: number | null;

  @Column('varchar', {
    name: 'icon',
    nullable: true,
    comment: 'icon',
    length: 20,
  })
  icon: string | null;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '标题',
    length: 50,
  })
  title: string | null;

  @Column('int', {
    name: 'count',
    comment: '子项数量',
    unsigned: true,
    default: () => "'0'",
  })
  count: number;

  @Column('int', {
    name: 'order_prev_id',
    nullable: true,
    comment: '排序上一个的id,没有这个id就是第一个',
    unsigned: true,
  })
  order_prev_id: number | null;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
    transformer: datetimeTransformer,
  })
  create_time: string;

  @Column('tinyint', {
    name: 'logic_delete',
    nullable: true,
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number | null;
}

export interface BsTodoGroupPo {
  id: number;
  scene_uuid: string;
  catalogue_id?: number;
  icon?: string;
  title: string;
  count: number;
  order_prev_id?: number;
  create_time: string;
}

export type PBsTodoGroupPo = Promise<BsTodoGroupPo>;

export type PBsTodoGroupPos = Promise<BsTodoGroupPo[]>;

/**
 * BsTodoItem
 */
@Index('group_id', ['group_id'], {})
@Index('scene_uuid', ['scene_uuid'], {})
@Entity('bs_todo_item', { schema: 'cellink' })
export class BsTodoItem {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('varchar', {
    name: 'scene_uuid',
    nullable: true,
    comment: '关联唯一场景标识scene_uuid,其他场景提供',
    length: 36,
  })
  scene_uuid: string | null;

  @Column('int', { name: 'group_id', comment: '分组id', unsigned: true })
  group_id: number;

  @Column('varchar', {
    name: 'icon',
    nullable: true,
    comment: 'icon',
    length: 20,
  })
  icon: string | null;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '标题',
    length: 50,
  })
  title: string | null;

  @Column('int', {
    name: 'remark_id',
    nullable: true,
    comment: '富文本备注id',
    unsigned: true,
  })
  remark_id: number | null;

  @Column('int', {
    name: 'is_finish',
    comment: '是否完成',
    unsigned: true,
    default: () => "'0'",
  })
  is_finish: number;

  @Column('int', {
    name: 'is_important',
    comment: '是否重要',
    unsigned: true,
    default: () => "'0'",
  })
  is_important: number;

  @Column('date', {
    name: 'add_today_date',
    nullable: true,
    comment: '加入今天的日期',
  })
  add_today_date: string | null;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
    transformer: datetimeTransformer,
  })
  create_time: Date;

  @Column('tinyint', {
    name: 'logic_delete',
    nullable: true,
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number | null;
}

export interface BsTodoItemPo {
  id: number;
  scene_uuid: string;
  group_id: number;
  icon?: string;
  title: string;
  remark_id?: number;
  is_finish: number;
  is_important: number;
  add_today_date?: string;
  create_time: string;
}

export type PBsTodoItemPo = Promise<BsTodoItemPo>;

export type PBsTodoItemPos = Promise<BsTodoItemPo[]>;

/**
 * BsTodoStep
 */
@Index('item_id', ['item_id'], {})
@Index('scene_uuid', ['scene_uuid'], {})
@Entity('bs_todo_step', { schema: 'cellink' })
export class BsTodoStep {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('varchar', {
    name: 'scene_uuid',
    nullable: true,
    comment: '关联唯一场景标识scene_uuid,其他场景提供',
    length: 36,
  })
  scene_uuid: string | null;

  @Column('int', { name: 'item_id', comment: '分组id', unsigned: true })
  item_id: number;

  @Column('int', {
    name: 'is_finish',
    comment: '是否完成',
    unsigned: true,
    default: () => "'0'",
  })
  is_finish: number;

  @Column('datetime', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
    transformer: datetimeTransformer,
  })
  create_time: Date;

  @Column('tinyint', {
    name: 'logic_delete',
    nullable: true,
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number | null;
}

export interface BsTodoStepPo {
  id: number;
  scene_uuid: string;
  item_id: number;
  is_finish: number;
  create_time: string;
}

export type PBsTodoStepPo = Promise<BsTodoStepPo>;

export type PBsTodoStepPos = Promise<BsTodoStepPo[]>;

export enum BsTodoIsFinishEnum {
  unFinish = 0, // 未完成
  finished = 1, // 已完成
}

export enum BsTodoIsImportantEnum {
  unImportant = 0, // 不重要
  important = 1, // 重要
}
