import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("org_product", { schema: "cellink" })
export class OrgProduct {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "自增id",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "organization_id",
    comment: "所属组织id",
    unsigned: true,
  })
  organization_id: number;

  @Column("int", {
    name: "group_id",
    nullable: true,
    comment: "分组id",
    unsigned: true,
  })
  group_id: number | null;

  @Column("varchar", { name: "name", comment: "名称", length: 20 })
  name: string;

  @Column("varchar", { name: "logo", comment: "logo", length: 200 })
  logo: string;

  @Column("varchar", { name: "desc", comment: "描述", length: 200 })
  desc: string;

  @Column("datetime", {
    name: "create_time",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  create_time: Date;

  @Column("tinyint", {
    name: "data_status",
    comment: "数据状态 0:正常 99:删除",
    default: () => "'0'",
  })
  data_status: number;
}
