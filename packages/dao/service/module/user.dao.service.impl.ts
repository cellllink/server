import { PUserPo, PUserPos } from 'packages/database';

export interface UserDaoServiceImpl {
  findUserByAccount: (account: string) => PUserPo;

  findUserById: (id: number) => PUserPo;

  findUsersByIds: (ids: number[]) => PUserPos;
}
