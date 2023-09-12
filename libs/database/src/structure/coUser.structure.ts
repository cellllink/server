import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('account', ['account'], {})
@Entity('co_user', { schema: 'cellink' })
export class CoUser {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;

  @Column('varchar', { name: 'account', comment: '账号', length: 200 })
  account: string;

  @Column('varchar', { name: 'password', comment: '密码', length: 32 })
  password: string;

  @Column('varchar', { name: 'salt', comment: '密码盐', length: 4 })
  salt: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '名称',
    length: 200,
  })
  name: string | null;

  @Column('varchar', {
    name: 'avatar',
    nullable: true,
    comment: '头像',
    length: 200,
  })
  avatar: string | null;

  @Column('varchar', {
    name: 'phone',
    nullable: true,
    comment: '手机号',
    length: 11,
  })
  phone: string | null;

  @Column('tinyint', {
    name: 'sex',
    nullable: true,
    comment: '性别',
    unsigned: true,
    default: () => "'0'",
  })
  sex: number | null;

  @Column('datetime', {
    name: 'register_time',
    comment: '注册时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  register_time: Date;

  @Column('datetime', {
    name: 'update_time',
    comment: '更新时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  update_time: Date;

  @Column('tinyint', {
    name: 'logic_delete',
    comment: '是否逻辑删除 0:正常 1:删除',
    default: () => "'0'",
  })
  logic_delete: number;
}

export class CoUserPo {
  id: number;
  account: string;
  password: string;
  salt: string;
  name: string;
  avatar: string;
  phone: string;
  sex: number;
  register_time: Date;
  update_time: Date;
}

export type PCoUserPo = Promise<CoUserPo>;

export type PCoUserPos = Promise<CoUserPo[]>;

export enum CoUserSexEnum {
  unknow = 0, // 未知
  man = 1, // 男
  woman = 2, // 女
}
