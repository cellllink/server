import { Column, Entity } from "typeorm";

@Entity("team_user", { schema: "cellink" })
export class TeamUser {
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
}
