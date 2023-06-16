import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("product_id", ["product_id"], {})
@Entity("bs_defect_project", { schema: "cellink" })
export class BsDefectProject {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "自增id",
    unsigned: true,
  })
  id: number;

  @Column("int", { name: "product_id", comment: "所属产品id", unsigned: true })
  product_id: number;

  @Column("int", { name: "owner_id", comment: "所有者id", unsigned: true })
  owner_id: number;

  @Column("varchar", { name: "name", comment: "标题", length: 20 })
  name: string;

  @Column("datetime", {
    name: "create_time",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  create_time: Date;
}
