import { Column, Entity } from "typeorm";

@Entity("co_team_user", { schema: "cellink" })
export class CoTeamUser {
  @Column("int", {
    primary: true,
    name: "team_id",
    comment: "团队id",
    unsigned: true,
  })
  team_id: number;

  @Column("int", {
    primary: true,
    name: "user_id",
    comment: "用户id",
    unsigned: true,
  })
  user_id: number;

  @Column("tinyint", {
    name: "status",
    comment: "成员状态",
    unsigned: true,
    default: () => "'2'",
  })
  status: number;
}
