import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('account', ['account'], {})
@Entity('user', { schema: 'cellink' })
export class User {
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
    comment: '性别 0:未知 1:男性 2:女性',
    unsigned: true,
    default: () => "'0'",
  })
  sex: UserSexEnum;

  @Column('datetime', {
    name: 'register_time',
    comment: '注册时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  register_time: string;

  @Column('datetime', { name: 'update_time', comment: '更新时间' })
  update_time: string;
}

export class UserPo {
  id: number;
  account: string;
  password: string;
  salt: string;
  name: string;
  avatar: string;
  phone: string;
  sex: number;
  register_time: string;
  update_time: string;
}

export type PUserPo = Promise<UserPo>;

export type PUserPos = Promise<UserPo[]>;

export enum UserSexEnum {
  UNKNOW = 0, // 未知
  MAN = 1, // 男
  WOMAN = 2, // 女
}