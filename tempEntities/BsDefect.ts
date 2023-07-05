import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bs_defect", { schema: "cellink" })
export class BsDefect {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "自增id",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "project_id",
    comment: "所属缺陷集合项目id",
    unsigned: true,
  })
  project_id: number;

  @Column("int", { name: "owner_id", comment: "所有者id", unsigned: true })
  owner_id: number;

  @Column("int", { name: "deal_user_id", comment: "处理人", unsigned: true })
  deal_user_id: number;

  @Column("varchar", { name: "title", comment: "标题", length: 100 })
  title: string;

  @Column("int", {
    name: "detail_id",
    nullable: true,
    comment: "详情id",
    unsigned: true,
  })
  detail_id: number | null;

  @Column("int", {
    name: "priority",
    nullable: true,
    comment: "优先级",
    unsigned: true,
  })
  priority: number | null;

  @Column("int", {
    name: "severity",
    nullable: true,
    comment: "严重程度",
    unsigned: true,
  })
  severity: number | null;

  @Column("int", {
    name: "group_id",
    nullable: true,
    comment: "分组id",
    unsigned: true,
  })
  group_id: number | null;

  @Column("int", {
    name: "tag_id",
    nullable: true,
    comment: "标签id",
    unsigned: true,
  })
  tag_id: number | null;

  @Column("int", {
    name: "status",
    comment: "状态",
    unsigned: true,
    default: () => "'0'",
  })
  status: number;

  @Column("datetime", { name: "deadline", nullable: true, comment: "截至时间" })
  deadline: Date | null;

  @Column("datetime", {
    name: "create_time",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  create_time: Date;

  @Column("datetime", {
    name: "update_time",
    comment: "更新时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  update_time: Date;
}
