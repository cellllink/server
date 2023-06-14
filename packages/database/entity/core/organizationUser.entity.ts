import { Column, Entity } from "typeorm";

@Entity("organization_user", { schema: "cellink" })
export class OrganizationUser {
  @Column("int", {
    primary: true,
    name: "organization_id",
    comment: "组织id",
    unsigned: true,
  })
  organization_id: number;

  @Column("int", {
    primary: true,
    name: "user_id",
    comment: "用户id",
    unsigned: true,
  })
  user_id: number;

  @Column("datetime", {
    name: "join_time",
    nullable: true,
    comment: "加入时间",
  })
  join_time: Date | null;

  @Column("tinyint", {
    name: "status",
    comment: "成员状态 0:待审核 1:已拒绝 2:在职 3:离职 99:已删除",
    unsigned: true,
  })
  status: number;
}
