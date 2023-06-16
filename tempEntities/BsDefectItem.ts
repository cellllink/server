import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("project_id", ["project_id"], {})
@Index("owner_id", ["owner_id"], {})
@Index("deal_user_id", ["deal_user_id"], {})
@Entity("bs_defect_item", { schema: "cellink" })
export class BsDefectItem {
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

  @Column("varchar", { name: "title", comment: "标题", length: 200 })
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
    comment: "优先级 0: 低 1: 中 2: 高 3: 紧急",
    unsigned: true,
  })
  priority: number | null;

  @Column("int", {
    name: "severity",
    nullable: true,
    comment: "严重程度 0: 建议 1: 一般 2: 严重",
    unsigned: true,
  })
  severity: number | null;

  @Column("int", {
    name: "status",
    comment:
      "状态 0: 待处理 1: 处理中 2: 待验证 3: 已拒绝 4: 重新打开 5: 已关闭",
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
